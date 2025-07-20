//TODO::
export async function get<T>(url: string): Promise<T> {
  const response = await fetch(url, {
    credentials: "include", //include cookies if needed
    headers: {
      "content-Type": "application/json",
    },
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`Failed to fetch data ${message}`);
  }

  //More type safety when using unknown
  //forces down stream typing
  const data = response.json() as unknown;
  return data as T;
}

export async function post<T, B = unknown>(url: string, body: B): Promise<T> {
  const response = await fetch(url, {
    method: "POST",
    credentials: "include",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    const message = await response.text();
    throw new Error(`Failed to post: ${message}`);
  }

  const data = await response.json();
  return data as T;
}
