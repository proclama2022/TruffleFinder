import { QueryClient, QueryFunction } from "@tanstack/react-query";

async function throwIfResNotOk(res: Response) {
  if (!res.ok) {
<<<<<<< HEAD
    const text = (await res.text()) || res.statusText;
    throw new Error(`${res.status}: ${text}`);
=======
    let text = '';
    try {
      text = await res.text();
      // Prova a parsare come JSON se possibile
      try {
        const jsonError = JSON.parse(text);
        if (jsonError.message) {
          throw new Error(`${res.status}: ${jsonError.message}`);
        }
      } catch {
        // Se non è JSON valido, usa il testo così com'è
      }
    } catch (parseError) {
      text = res.statusText;
    }
    throw new Error(`${res.status}: ${text || 'Errore sconosciuto'}`);
>>>>>>> 53c7d0dc6cb5df58fd4d9436887fe7ab0a7d34f5
  }
}

export async function apiRequest(
  method: string,
  url: string,
  data?: unknown | undefined,
): Promise<Response> {
  const res = await fetch(url, {
    method,
    headers: data ? { "Content-Type": "application/json" } : {},
    body: data ? JSON.stringify(data) : undefined,
    credentials: "include",
  });

  await throwIfResNotOk(res);
  return res;
}

type UnauthorizedBehavior = "returnNull" | "throw";
export const getQueryFn: <T>(options: {
  on401: UnauthorizedBehavior;
}) => QueryFunction<T> =
  ({ on401: unauthorizedBehavior }) =>
  async ({ queryKey }) => {
    const res = await fetch(queryKey[0] as string, {
      credentials: "include",
    });

    if (unauthorizedBehavior === "returnNull" && res.status === 401) {
      return null;
    }

    await throwIfResNotOk(res);
    return await res.json();
  };

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      queryFn: getQueryFn({ on401: "throw" }),
      refetchInterval: false,
      refetchOnWindowFocus: false,
      staleTime: Infinity,
      retry: false,
    },
    mutations: {
      retry: false,
    },
  },
});
