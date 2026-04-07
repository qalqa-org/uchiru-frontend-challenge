'use server';

import { catApi } from './cat-api';

export async function loadMoreCatsAction(page: number) {
  return catApi.getCats(10, page);
}
