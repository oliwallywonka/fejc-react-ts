import { useQuery } from "@tanstack/react-query";
import { Category } from "../components/interfaces/ResponseCategories";
import { DefaultGetResponse } from "./default-get-response";

const apiBaseUrl = 'https://api.artic.edu';

export const getCategoriesById = async (ids: string): Promise<Category[]> => {
  return fetch(
    `${apiBaseUrl}/api/v1/category-terms?ids=${ids}`
  )
    .then(async (response) => (await response.json()) as DefaultGetResponse<Category[]>)
    .then(({data}) => {
      const categories: Category[] = [];
      for (let category of data) {
        categories.push({
          id: category.id,
          timestamp: category.timestamp,
          title: category.title
        });
      }
      return categories;
    });
}

export const useCategoryByIds = (ids: string) => {
  return useQuery(['categories'], () => getCategoriesById(ids), {
    staleTime: Infinity,
    enabled: !!ids
  });
}