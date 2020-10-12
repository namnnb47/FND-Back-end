export interface IArticle {
  id?: number;
  title?: string;
  text?: string;
  dateCreated?: string;
  articleStatus?: string;
  label?: string;
}

export const defaultValue: Readonly<IArticle> = {};
