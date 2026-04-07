import { apiClient } from '@/shared/api';
import type { Cat } from '../model/types';

export const catApi = {
  getCats: (limit = 10, page = 0) =>
    apiClient.get<Cat[]>(`/images/search?limit=${limit}&page=${page}`),
};
