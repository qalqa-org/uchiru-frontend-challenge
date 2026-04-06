class ApiClient {
  private static instance: ApiClient;
  private readonly baseUrl: string;

  private constructor(baseUrl: string) {
    this.baseUrl = baseUrl;
  }

  static getInstance(): ApiClient {
    if (!ApiClient.instance) {
      ApiClient.instance = new ApiClient(process.env.CAT_API_URL ?? '');
    }

    return ApiClient.instance;
  }

  private async request<T>(path: string, options?: RequestInit): Promise<T> {
    const res = await fetch(`${this.baseUrl}${path}`, options);
    if (!res.ok)
      throw new Error(`${options?.method ?? 'GET'} ${path} → ${res.status}`);
    return res.json() as Promise<T>;
  }

  get<T>(path: string, options?: Omit<RequestInit, 'method'>): Promise<T> {
    return this.request<T>(path, { ...options, method: 'GET' });
  }
}

export const apiClient = ApiClient.getInstance();
