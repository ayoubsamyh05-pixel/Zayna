import { client } from "./client";

type SanityFetchArgs = {
  query: string;
  params?: Record<string, unknown>;
};

export const sanityFetch = async <T>({ query, params = {} }: SanityFetchArgs) => {
  const data = await client.fetch<T>(query, params, { next: { revalidate: 0 } });
  return { data };
};

export const SanityLive = () => null;
