import axios from "axios";
import { Bookmark } from "./types";

const apiURL = "http://localhost:5000/";

export function getAllBookmarks(): Bookmark[] {
  // TODO: implement using localStorage
  return [];
}

export async function createBookmark(url: string): Promise<Bookmark> {
  // TODO: implement using axios and localStorage
  return {
    url: "",
    siteName: "",
    title: "",
    description: "",
    keywords: "",
    author: "",
    createdAt: 1,
  };
}
