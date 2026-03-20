const CACHE_DURATION = 10 * 60 * 1000; // 10 minutes in milliseconds

interface CacheData<T> {
  data: T;
  timestamp: number;
}

export const getCache = <T>(key: string): T | null => {
  try {
    const cached = localStorage.getItem(key);
    if (!cached) return null;

    const { data, timestamp }: CacheData<T> = JSON.parse(cached);
    const now = Date.now();

    if (now - timestamp < CACHE_DURATION) {
      return data;
    }

    // Cache expired
    localStorage.removeItem(key);
    return null;
  } catch (error) {
    console.error('Error reading from cache:', error);
    return null;
  }
};

export const setCache = <T>(key: string, data: T): void => {
  try {
    const cacheData: CacheData<T> = {
      data,
      timestamp: Date.now(),
    };
    localStorage.setItem(key, JSON.stringify(cacheData));
  } catch (error) {
    console.error('Error writing to cache:', error);
  }
};

export const isCacheValid = (key: string): boolean => {
  try {
    const cached = localStorage.getItem(key);
    if (!cached) return false;

    const { timestamp }: CacheData<any> = JSON.parse(cached);
    const now = Date.now();

    return now - timestamp < CACHE_DURATION;
  } catch {
    return false;
  }
};
