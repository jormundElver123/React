import React, { useState } from "react";


export default function TextForm(props) {

  const [text, setText] = useState("");

  const UppercaseClick = () => {
    // console.log("Uppercase button was clicked");
    let newText = text.toUpperCase();
    setText(newText);
    if(newText.length === 0)
    {
      props.showAlert("Text box is empty", "danger");
    }
    else{
      props.showAlert("Converted to Uppercase", "success");
    }
  };

  const LowercaseClick = () => {
    // console.log("Lowercase button was clicked");
    let newText = text.toLowerCase();
    setText(newText);
    if(newText.length === 0)
    {
      props.showAlert("Text box is empty", "danger");
    }
    else{
      props.showAlert("Converted to lowercase", "success");
    }
  };

  const ResetClick = () => {
    let newtext = "";
    setText(newtext);
    if(text.length === 0)
    {
      props.showAlert("Text box is empty", "danger");
    }
    else{
      props.showAlert("Cleared the text box", "success");
    }
  }
  
  const handleOnChange = (event) => {
    // console.log("handleOnChange button was clicked");
    setText(event.target.value);
  };

  const HandleCopy =()=>{
    let text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
    document.getSelection().removeAllRanges();
    if(text.length === 0)
    {
      props.showAlert("Text box is empty", "danger");
    }
    else{
      props.showAlert("Copied", "success");
    }
  }

  const HandleExtraSpaces = ()=>{
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "));
    if(text.length === 0)
    {
      props.showAlert("Text box is empty", "danger");
    }
    else{
      props.showAlert("Removed Extra Spaces", "success");
    }
  }
  


  return (
    <>
      <div className="container" style = {{color:props.mode === 'dark' ?'white':'black'}}>
        <h1> {props.heading} </h1>{" "}
        <div className="mb-3">
          <textarea className="form-control" value={text} style = {{backgroundColor:props.mode === 'dark' ?'gray':'white', color:props.mode === 'dark' ?'white':'black'}} id="myBox" onChange={handleOnChange} rows="8"></textarea>
        </div>
        <button className="btn btn-primary mx-1 my-1" onClick={UppercaseClick} > Uppercase</button>
        <button className="btn btn-secondary mx-1 my-1" onClick={LowercaseClick}> Lowercase</button>
        <button className="btn btn-danger mx-1 my-1" onClick={ResetClick}> Reset</button>
        <button className="btn btn-success mx-1 my-1" onClick={HandleCopy}> Copy Text</button>
        <button className="btn btn-primary mx-1 my-1" onClick={HandleExtraSpaces}> Remove Extra Spaces</button>
      </div>
      <div className="container my-2" style = {{color:props.mode === 'dark' ?'white':'black'}}>
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} characters.</p>
        <p>{0.008 * text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes Read</p>
        <h3>Preview</h3>
        <p>{text.length>0 ? text : 'Enter something in the textbox above'}</p>
      </div>
    </>
  );
}
