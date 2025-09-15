//TODO::
export class HttpError extends Error {
  status: number | undefined;
  constructor(status: number, message: string) {
    super(message);
    this.status = status;
  }
}

async function handleResponse<T>(response: Response): Promise<T> {
  if (!response.ok) {
    const message = await response.text();
    throw new HttpError(response.status, message || "Unknown error");
  }

  return (await response.json) as T;
}

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

  // //More type safety when using unknown
  // //forces down stream typing
  // const data = (await response.json()) as unknown;
  return handleResponse(response);
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

  //Playing with promises, please ignore the mess...
  // .then((res: Response) => {
  //   if (!res.ok) {
  //     throw new Error("Network response failure");
  //   }

  //   return res.json();
  // })
  // .then((data: unknown) => {
  //   // TODO:: set a proper type for the data return here. It should be relative to the return from Laravel
  //   return data as { token: string };
  // });

  // if (!response.ok) {
  //   const message = await response.text();
  //   throw new Error(`Failed to post: ${message}`);
  // }
  // const data = await response.json();
  if (!response.ok) {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }

  // return data as T;
  // return (await response.json()) as T; //parse data + type the JSON.
  return handleResponse(response);
}

//todo :: put, delete
