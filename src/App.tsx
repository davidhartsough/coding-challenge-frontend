import React, { useState } from "react";
import { createBookmark, getAllBookmarks } from "./db";
import "./App.css";
import Form from "./Form";
import List from "./List";

export default function App() {
  const [bookmarks, setBookmarks] = useState([]);
  const saveBookmarkFromURL = async (url: string) => {
    // TODO: implement using createBookmark
  };
  return (
    <main>
      <section>
        <header>
          <h1>URL Bookmarker</h1>
        </header>
        <Form saveBookmarkFromURL={saveBookmarkFromURL} />
        <List bookmarks={bookmarks} />
      </section>
    </main>
  );
}
