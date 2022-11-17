/**
 * CB function for useSWR
 * @param  {...any} args
 * @returns fetched data
 */
export default async function fetcher(...args) {
  return await fetch(...args).then((res) => res.json())
}
