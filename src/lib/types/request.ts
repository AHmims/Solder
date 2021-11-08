export type RequestMethod = 'GET' | 'POST' | 'PUT' | 'PATCH' | 'DELETE';

export interface Endpoint {
  url: string;
  method: RequestMethod;
}

export interface Request {
  endpoint: Endpoint;
  data: Record<string, unknown>;
  headers?: Record<string, unknown>;
}
