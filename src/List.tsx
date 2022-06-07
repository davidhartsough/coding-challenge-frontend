import React from "react";
import { Bookmark } from "./types";
import "./List.css";

export default function List({ bookmarks }: { bookmarks: Bookmark[] }) {
  return (
    <div className="bookmarks">
      {/* TODO: delete this and implement actual Bookmark List */}
      <a
        href="https://www.wikipedia.org/"
        target="_blank"
        rel="noreferrer"
        className="bookmark"
      >
        <h3 className="title">Example Bookmark</h3>
        <h4 className="site">Website</h4>
        <p className="author">Author</p>
        <p className="description">
          Description. Delete this code and replace this with the correct
          implementation.
        </p>
        <p className="keywords">
          <span className="keyword">keywords</span>
        </p>
        <p className="date">Saved: [local date and time]</p>
      </a>
    </div>
  );
}
