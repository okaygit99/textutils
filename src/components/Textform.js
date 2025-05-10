import React, { useState } from "react";
// import PropTypes from "prop-types";

export default function Textform(props) {
  const [text, setText] = useState("");

  const handleClick = () => {
    console.log("Button clicked");
    let newText = text.toUpperCase();
    setText(newText);
    props.showAlert("Upper case has been enabled", "success")
  };

  const handleLowerClick = () => {
    console.log("Button clicked");
    let newText = text.toLowerCase();
    setText(newText);
    props.showAlert("Lower case has been enabled", "success")
  };

  const handleRandomClick = () => {
    console.log("Button clicked");
    let newText = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo tenetur modi doloribus quaerat officia enim in perspiciatis nam perferendis nobis eos minima esse nesciunt deserunt, dolores ullam molestiae magni iure optio voluptatibus eaque velit!"
    setText(text +newText);
  };

  const handleChange = (event) => {
    console.log("handle Change");
    setText(event.target.value);
  };

  return (
    <>
    <div className="container" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>{props.heading} </h1>
      <div className="my-3" >
        <textarea
          className="form-control"
          id="myBox"
          rows="8"
          value={text}
          onChange={handleChange}
          style={{backgroundColor: props.mode==='dark'?'grey':'light', color: props.mode==='dark'?'white':'black'}}
        ></textarea>
      </div>
      <button className="btn btn-primary mx-2" onClick={handleClick}>
        Convert to Uppercase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleLowerClick}>
        Convert to Lowercase
      </button>
      <button className="btn btn-primary mx-2" onClick={handleRandomClick}>
        Add random chararcters
      </button>
    </div>
    <div className="container my-4" style={{color: props.mode==='dark'?'white':'black'}}>
      <h1>My text summary</h1>
      <p>{text.split(" ").length-1}{" Words"},{"  "}{text.length}{" Characters"}</p>
      <p>{0.008*text.split(" ").length}Minutes read</p>
      <h2>Preview</h2>
      <p>{text.length>0?text:"Enter your text in the textbox to preview it here"}</p>
    </div>
    </>
  );
}
