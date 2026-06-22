import { useState, useEffect } from 'react';

export interface InstagramPost {
  id: string;
  caption?: string;
  media_type: 'IMAGE' | 'VIDEO' | 'CAROUSEL_ALBUM';
  media_url: string;
  thumbnail_url?: string;
  permalink: string;
  timestamp: string;
}

interface UseInstagramFeedResult {
  posts: InstagramPost[];
  loading: boolean;
  error: string | null;
}

const CACHE_KEY = 'tfd_instagram_cache';
const CACHE_DURATION = 1000 * 60 * 30; // 30 minutes

function getCachedPosts(): InstagramPost[] | null {
  try {
    const cached = localStorage.getItem(CACHE_KEY);
    if (!cached) return null;
    const { posts, timestamp } = JSON.parse(cached);
    if (Date.now() - timestamp > CACHE_DURATION) {
      localStorage.removeItem(CACHE_KEY);
      return null;
    }
    return posts;
  } catch {
    return null;
  }
}

function setCachedPosts(posts: InstagramPost[]) {
  try {
    localStorage.setItem(
      CACHE_KEY,
      JSON.stringify({ posts, timestamp: Date.now() })
    );
  } catch {
    // localStorage full or unavailable
  }
}

export function useInstagramFeed(limit: number = 12): UseInstagramFeedResult {
  const [posts, setPosts] = useState<InstagramPost[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const token = import.meta.env.VITE_INSTAGRAM_TOKEN;

    if (!token) {
      setError('Instagram token not configured');
      setLoading(false);
      return;
    }

    const cached = getCachedPosts();
    if (cached) {
      setPosts(cached.slice(0, limit));
      setLoading(false);
      return;
    }

    const fetchPosts = async () => {
      try {
        const fields = 'id,caption,media_type,media_url,thumbnail_url,permalink,timestamp';
        const url = `https://graph.instagram.com/me/media?fields=${fields}&limit=${limit}&access_token=${token}`;

        const response = await fetch(url);

        if (!response.ok) {
          throw new Error('Failed to fetch Instagram posts');
        }

        const data = await response.json();
        const fetchedPosts: InstagramPost[] = data.data || [];
        setCachedPosts(fetchedPosts);
        setPosts(fetchedPosts.slice(0, limit));
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to load Instagram feed');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, [limit]);

  return { posts, loading, error };
}
