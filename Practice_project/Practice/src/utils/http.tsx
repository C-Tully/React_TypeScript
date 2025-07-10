//TODO::
export async function get(url: string) {
  const response = await fetch(url);

  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }

  //More type safety when using unknown
  //forces down stream typing
  const data = response.json() as unknown;
}
