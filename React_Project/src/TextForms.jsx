import { useState } from "react";

export default function Forms(props) {
  const [text, setText] = useState("");

  // Convert to Uppercase
  const handleUpperCase = () => {
    setText(text.toUpperCase());
  };

  // Convert to Lowercase
  const handleLowerCase = () => {
    setText(text.toLowerCase());
  };

  // Clear Text
  const handleClear = () => {
    setText("");
  };

  // Copy Text
  const handleCopy = () => {
    navigator.clipboard.writeText(text);
  };

  // Remove Extra Spaces
  const handleExtraSpaces = () => {
    setText(text.split(/\s+/).join(" ").trim());
  };

  // Capitalize Words
  const handleCapitalize = () => {
    const newText = text
      .toLowerCase()
      .split(" ")
      .map(word =>
        word.charAt(0).toUpperCase() + word.slice(1)
      )
      .join(" ");
    setText(newText);
  };

  // On Change
  const handleOnChange = (e) => {
    setText(e.target.value);
  };

  // Word Count
  const wordCount =
    text.trim() === "" ? 0 : text.trim().split(/\s+/).length;

  return (
    <>
      <h3 className="heading">{props.Headings}</h3>

      <textarea
        className="form-control"
        rows="8"
        value={text}
        onChange={handleOnChange}
        placeholder="Enter text here..."
      ></textarea>

      <div className="btns d-flex flex-wrap gap-2 mt-3">
        <button className="btn btn-primary" onClick={handleUpperCase} disabled={!text}>
          Uppercase
        </button>

        <button className="btn btn-primary" onClick={handleLowerCase} disabled={!text}>
          Lowercase
        </button>

        <button className="btn btn-primary" onClick={handleCapitalize} disabled={!text}>
          Capitalize
        </button>

        <button className="btn btn-primary" onClick={handleExtraSpaces} disabled={!text}>
          Remove Spaces
        </button>

        <button className="btn btn-success" onClick={handleCopy} disabled={!text}>
          Copy
        </button>

        <button className="btn btn-danger" onClick={handleClear} disabled={!text}>
          Clear
        </button>
      </div>

      <div className="container my-4">
        <h3>Your Text Summary</h3>
        <p>
          {wordCount} Words | {text.length} Characters
        </p>
        <p>
          {wordCount * 0.008} Minutes Read
        </p>

        <h4>Preview</h4>
        <p>{text || "Nothing to preview..."}</p>
      </div>
    </>
  );
}

