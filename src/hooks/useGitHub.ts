import { useState, useEffect } from 'react';
import { GitHubRepo } from '../types';
import { getCache, setCache } from '../utils/githubCache';

const CACHE_KEY = 'github_repos_cache';

export function useGitHubRepos() {
  const [repos, setRepos] = useState<GitHubRepo[]>(() => {
    // Initial state from cache if valid
    const cached = getCache<GitHubRepo[]>(CACHE_KEY);
    return cached || [];
  });
  const [loading, setLoading] = useState(() => {
    // Only show loading if no valid cache exists
    return !getCache<GitHubRepo[]>(CACHE_KEY);
  });
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchRepos = async () => {
      // Check if cache is still valid to avoid redundant fetch
      const cached = getCache<GitHubRepo[]>(CACHE_KEY);
      if (cached && cached.length > 0) {
        setRepos(cached);
        setLoading(false);
        return;
      }

      setLoading(true);
      try {
        const response = await fetch(
          `https://api.github.com/search/repositories?q=user:Uriri-007+topic:homepage-feature`
        );
        if (!response.ok) throw new Error('Failed to fetch repositories');
        const data = await response.json();
        
        // Search API returns an object with an 'items' array
        const items = data.items || [];
        
        // Sort by stars and take top 6
        const sortedRepos = items
          .sort((a: any, b: any) => b.stargazers_count - a.stargazers_count)
          .slice(0, 6);
          
        setRepos(sortedRepos);
        setCache(CACHE_KEY, sortedRepos);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setLoading(false);
      }
    };

    fetchRepos();
  }, []);

  return { repos, loading, error };
}
