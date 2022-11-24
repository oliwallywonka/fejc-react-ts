export interface ResponseCategories {
  data: Category[];
}

export interface Category {
  id:        string;
  title:     string;
  timestamp: Date;
}
