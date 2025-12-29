import type { PageLoad } from "./$types";

export const load: PageLoad = async ({ fetch }) => {
  const res = await fetch(
    "https://www.cheapshark.com/api/1.0/deals?pageSize=10"
  );

  if (!res.ok) {
    throw new Error("Failed to load deals");
  }

  return {
    deals: await res.json(),
  };
};
