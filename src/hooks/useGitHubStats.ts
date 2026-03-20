import { useState, useEffect } from 'react';
import { getCache, setCache } from '../utils/githubCache';

export interface GitHubStats {
  totalRepos: number;
  totalStars: number;
  topLanguages: { name: string; count: number }[];
}

const getCacheKey = (username: string) => `github_stats_cache_${username}`;

export function useGitHubStats(username: string) {
  const [stats, setStats] = useState<GitHubStats | null>(() => {
    // Initial state from cache if valid
    return getCache<GitHubStats>(getCacheKey(username));
  });
  const [loading, setLoading] = useState(() => {
    // Only show loading if no valid cache exists
    return !getCache<GitHubStats>(getCacheKey(username));
  });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchStats = async () => {
      // Check if cache is still valid to avoid redundant fetch
      const cached = getCache<GitHubStats>(getCacheKey(username));
      if (cached) {
        setStats(cached);
        setLoading(false);
        return;
      }

      setLoading(true);
      try {
        // Fetch user profile for total repos count
        const userResponse = await fetch(`https://api.github.com/users/${username}`);
        if (!userResponse.ok) throw new Error('Failed to fetch user profile');
        const userData = await userResponse.json();

        // Fetch all public repos to calculate stars and languages
        // Note: This only fetches the first 100 repos. For more, pagination is needed.
        const reposResponse = await fetch(`https://api.github.com/users/${username}/repos?per_page=100`);
        if (!reposResponse.ok) throw new Error('Failed to fetch repositories');
        const reposData = await reposResponse.json();

        let totalStars = 0;
        const languageCounts: { [key: string]: number } = {};

        reposData.forEach((repo: any) => {
          totalStars += repo.stargazers_count;
          if (repo.language) {
            languageCounts[repo.language] = (languageCounts[repo.language] || 0) + 1;
          }
        });

        const topLanguages = Object.entries(languageCounts)
          .map(([name, count]) => ({ name, count }))
          .sort((a, b) => b.count - a.count)
          .slice(0, 5);

        const newStats = {
          totalRepos: userData.public_repos,
          totalStars,
          topLanguages,
        };

        setStats(newStats);
        setCache(getCacheKey(username), newStats);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchStats();
  }, [username]);

  return { stats, loading, error };
}
