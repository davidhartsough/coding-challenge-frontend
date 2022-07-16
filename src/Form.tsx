import React, { useState } from "react";
import "./Form.css";

const urlPattern =
  /^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&//=]*)$/;
const isValidURL = (url: string): boolean => urlPattern.test(url);

type Props = {
  saveBookmarkFromURL: (url: string) => Promise<void>;
};
export default function Form({ saveBookmarkFromURL }: Props) {
  const [url, setUrl] = useState("");
  const [loading, setLoading] = useState(false);
  const [hasHasInputError, setHasInputError] = useState(false);
  const onChange = ({ target }: React.ChangeEvent<HTMLInputElement>) => {
    // TODO: implement
  };
  const onSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    // TODO: implement
  };
  return (
    <form onSubmit={onSubmit}>
      <input
        id="url"
        type="text"
        placeholder="https://www.example.org/"
        value={url}
        onChange={onChange}
        className={hasHasInputError ? "error" : ""}
        disabled={loading}
      />
      <button type="submit" disabled={hasHasInputError || loading}>
        Bookmark
      </button>
    </form>
  );
}
