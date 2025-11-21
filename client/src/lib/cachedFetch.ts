export async function cachedFetch<T>(
  url: string,
  cacheKey: string,
  cacheDuration: number = 3600000 // 1 hour default
): Promise<{ data: T; fromCache: boolean }> {
  // Check if cached data exists and is still valid
  const cachedData = localStorage.getItem(cacheKey);
  const cachedTimestamp = localStorage.getItem(`${cacheKey}_timestamp`);

  if (cachedData && cachedTimestamp) {
    const age = Date.now() - parseInt(cachedTimestamp);
    if (age < cacheDuration) {
      // Return fresh cache
      return { data: JSON.parse(cachedData), fromCache: true };
    }
  }

  // Try to fetch fresh data
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch");

    const data = await response.json();

    // Store in cache
    localStorage.setItem(cacheKey, JSON.stringify(data));
    localStorage.setItem(`${cacheKey}_timestamp`, Date.now().toString());

    return { data, fromCache: false };
  } catch (error) {
    // If fetch fails, return cached data (even if expired)
    if (cachedData) {
      console.warn("Using stale cache due to fetch failure");
      return { data: JSON.parse(cachedData), fromCache: true };
    }
    throw error; // No cache available, throw error
  }
}
