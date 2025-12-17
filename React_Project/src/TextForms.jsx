import { useState } from "react";

export default function Forms(props) {
  let [Text, setText] = useState("");
  const HandleOnClick = () => {
    setText(Text.toLocaleUpperCase());
  };
  const HandleLoClick = () => {
    setText(Text.toLocaleLowerCase());
  };
  const HandleOnChange = (e) => {
    setText(e.target.value);
  };
  const HandleCltext = () => {
    setText("");
  };
  return (
    <>
      <h3 className="heading">{props.Headings}</h3>
      <div className="form-floating">
        <textarea
          className="form-control"
          placeholder="Leave a comment here"
          id="floatingTextarea"
          value={Text}
          onChange={HandleOnChange}
          rows={8}
        ></textarea>
        <div className="btns d-flex justify-content-evenly">
          <button className="btn btn-primary mt-2 " onClick={HandleOnClick}>
            Set To UpperCAse
          </button>
          <button className="btn btn-primary mt-2 " onClick={HandleLoClick}>
            Set To LowerCase
          </button>
        
        </div>
        <div className="container my-3">
          <h3>Your Text Summery</h3>
          <p>
            {" "}
            {Text.split(" ").length} Word {Text.length} Is Cherecter
          </p>
          <h2>Preview</h2>
          <p>{Text}</p>
        </div>
      </div>
    </>
    
  );
}
