export interface DefaultGetResponse<T> {
  pagination: {
    total: number;
    limit: number;
    offset: number;
    total_pages: number;
    current_page: number;
  },
  data: T;
  config: {
    iiif_url: string;
    website_url: string;
  }
}
