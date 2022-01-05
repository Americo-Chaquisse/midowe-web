import Category from '../types/category';
import _BaseService from './_base-service';

class CategoryService extends _BaseService {
  async getAll(): Promise<Category[]> {
    const response = await fetch(`${this.serverUrl()}/categories`);
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json() as Promise<Category[]>;
  }

  async getById(categoryId: string | string[] | undefined): Promise<Category> {
    const response = await fetch(
      `${this.serverUrl()}/categories/${categoryId}`
    );
    if (!response.ok) {
      throw new Error(response.statusText);
    }
    return response.json() as Promise<Category>;
  }
}

export default CategoryService;
