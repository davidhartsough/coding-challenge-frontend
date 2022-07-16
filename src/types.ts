export type Bookmark = {
  url: string;
  siteName: string | null;
  title: string | null;
  description: string | null;
  keywords: string[] | null;
  author: string | null;
  createdAt: number;
};
