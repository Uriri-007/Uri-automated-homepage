export interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  homepage: string;
  stargazers_count: number;
  forks_count: number;
  language: string;
  updated_at: string;
}

export interface UserProfile {
  name: string;
  bio: string;
  avatar_url: string;
  html_url: string;
}
