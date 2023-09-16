import React, { useState, useRef } from "react";

export default function TextForm(props) {
  document.title = "TextUtils - Home";
  let styleObject = {
    fontSize: 12,
    color: "red",
  };
  const textAreaRef = useRef(null);

  const handleUpClick = () => {
    //console.log("Uppercase was clicked: " + text);
    let newText = text.toUpperCase();
    setText(newText);
  };
  const handleLoClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };
  const handleDelClick = () => {
    setText("");
    props.showAlert("Your given text is deleted", "danger");
  };
  const copyToClipboard = () => {
    if (textAreaRef.current) {
      setBtnContent("Copied");
      textAreaRef.current.select();
      document.execCommand("copy");
      props.showAlert("Text is copied to your clipboard", "info");
      setTimeout(() => {
        setBtnContent("Copy to Clipboard");
      }, 3000);
    }
  };
  const handleOnChange = (event) => {
    //console.log("On Change");
    setText(event.target.value);
  };

  const [text, setText] = useState("Enter your text ");
  const [btnContent, setBtnContent] = useState("Copy to Clipboard");
  return (
    <>
      <div
        className="container"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h1>{props.heading}</h1>
        <p style={styleObject}>
          Leave space after last word for correct summary.
        </p>
        <div className="form-group mb-3">
          <textarea
            className="form-control"
            value={text}
            onChange={handleOnChange}
            id="myBox"
            rows="8"
            ref={textAreaRef}
            style={{
              backgroundColor: props.mode === "dark" ? "#5e5e5e" : "white",
              color: props.mode === "dark" ? "white" : "black",
            }}
          ></textarea>
        </div>
        <button className="btn btn-primary mx-2 my-2" onClick={handleUpClick}>
          Convert To Uppercase
        </button>
        <button className="btn btn-primary mx-2 my-2" onClick={handleLoClick}>
          Convert To Lowercase
        </button>
        <button
          className="btn btn-outline-danger mx-2 my-2"
          onClick={handleDelClick}
        >
          Delete Text
        </button>
        <button
          className="btn btn-outline-success mx-2 my-2"
          onClick={copyToClipboard}
        >
          {btnContent}
        </button>
      </div>
      <div
        className="container my-3"
        style={{ color: props.mode === "dark" ? "white" : "black" }}
      >
        <h2>Your Text Summary</h2>
        <p>
          {text.split(" ").length - 1} words and {text.length} characters
        </p>
        <p>{0.008 * (text.split(" ").length - 1)} minutes to read</p>
        <h2>Preview</h2>
        <p>
          {text.length > 0
            ? text
            : "Enter something in the textbox above to preview it here"}
        </p>
      </div>
    </>
  );
}
