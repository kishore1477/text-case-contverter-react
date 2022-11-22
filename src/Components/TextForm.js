import React, { useState } from 'react';
import { GrammarlyEditorPlugin } from "@grammarly/editor-sdk-react";

export default function Textform(props) {
  const [Text, setText] = useState('');

  //  setText("This is set text");
  const handleUpClick = () => {
    if(Text.length>0){

      // console.log("handleUpClick was clicked " + Text);
      const newText = Text.toUpperCase();
      setText(newText);
      props.showAlert("Converted to UpperCase", "success");
    }else{
      props.showAlert("Please Enter some text for Analyzing", "danger");

    }
  }
  const handleLoClick = () => {
    if(Text.length>0){
      
      // console.log("handleLoClick was clicked " + Text);
      const newText = Text.toLowerCase();
      setText(newText);
    }else{
      props.showAlert("Please Enter some text for Analyzing", "danger");
      
    }
  }
  const handleClearClick = () => {
    if(Text.length>0){
      // console.log("handleLoClick was clicked " + Text);
      const newText = "";
      setText(newText);
      props.showAlert("Text Cleared", "success");
    }else{
      props.showAlert("Please Enter some text for Analyzing", "danger");
      
    }
  }
  const handleFirstCharClick = () => {
    if(Text.length>0){
      // console.log("handleLoClick was clicked " + Text);
      const newText = Text.charAt(0).toUpperCase() + Text.slice(1);
      setText(newText);
    }else{
      props.showAlert("Please Enter some text for Analyzing", "danger");
      
    }
    
  }
  const handleCopy = () => {
    if(Text.length>0){
      console.log("Copied");
      const Text = document.getElementById("Text");
      // Text.select();
      navigator.clipboard.writeText(Text.value);
      // document.getSelection().removeAllRanges();
    }else{
      props.showAlert("Please Enter some text for Analyzing", "danger");
      
    }
    
  }
  const handleFullStop = () => {
    if(Text.length>0){
      // let   FullStop = Text.split(".");
      // let newText =  FullStop.
      const arr = Text.split(".");
      console.log(arr);
      for (var i = 0; i < arr.length; i++) {
        arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
        // let newText = countLine.join()
      }
    console.log("This is loop arr " + arr);
    const str2 = arr.join(" ");
    console.log(str2);
    setText(str2);
    // setText(arr)
  }else{
    props.showAlert("Please Enter some text for Analyzing", "danger");
    
  }
}
const handleUpperLower = () => {
    if(Text.length>0){
      let newText = "";
      for (let i = 0; i < Text.length; i++) {
        console.log("This i wala : " + Text.charAt(i));
        if (Text.charAt(i).toLowerCase() === Text.charAt(i)) {


          newText += Text.charAt(i).toUpperCase();
        props.showAlert("Converted to UpperCase", "success");
      }
      else {
        newText += Text.charAt(i).toLowerCase();
        props.showAlert("Converted to  LowerCase", "success");
      }
    }
    setText(newText);
  }else{
    props.showAlert("Please Enter some text for Analyzing", "danger");

  }
}

const handleExtraSpaces = () => {
    if(Text.length>0){
      let extraSpace = Text.split(/[ ]+/);
      let newText = extraSpace.join(" ");
      setText(newText);
      props.showAlert(" Removed ExtraSpaces", "success");
    }else{
    props.showAlert("Please Enter some text for Analyzing", "danger");
    
  }
}
const handleEachUpChar = () => {
    if(Text.length>0){
    const arr = Text.split(" ");
    console.log(arr);
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);

    }
    console.log("This is loop arr " + arr);
    const str2 = arr.join(" ");
    console.log(str2);
    setText(str2);
    props.showAlert("Converted each character of each word to UpperCase", "success");
  }else{
    props.showAlert("Please Enter some text for Analyzing", "danger");

  }
  }

  const handleOnChange = (event) => {
    console.log(" handleOnChange ");
    setText(event.target.value);
  }
  return (

    <>
      <div className='container' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h1 className="mb-5" >{props.heading} </h1>
        <div className="mb-3">
        <GrammarlyEditorPlugin clientId="client_WotZ188L7y9fQBgKGV8vs1">
      
          <textarea className="form-control" id="Text" rows="9" style={{ backgroundColor: props.mode === 'dark' ? 'rgb(7 23 80)' : 'white', color: props.mode === 'dark' ? 'white' : 'black' }} value={Text} onChange={handleOnChange} />
          {/* <textarea  /> */}
    </GrammarlyEditorPlugin>

        </div>
        <button disabled = {Text.length === 0} className='btn btn-primary mx-2 my-1' onClick={handleUpClick}>Convert to UpperCase</button>
        <button disabled = {Text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleLoClick}>Convert to  LowerCase</button>
        <button disabled = {Text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleFirstCharClick}>Capatalized first character</button>
        <button  disabled = {Text.length === 0}className='btn btn-primary mx-1 my-1' onClick={handleEachUpChar}>Capatalized Each character</button>
        <button disabled = {Text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleCopy}>Copy Text</button>
        <button  disabled = {Text.length === 0}className='btn btn-primary mx-2 my-1' onClick={handleExtraSpaces}> Remove Extra Spaces</button>
        <button disabled = {Text.length === 0} className='btn btn-primary mx-2 my-1' onClick={handleUpperLower}> Upper/Lower</button>
        <button disabled = {Text.length === 0} className='btn btn-primary mx-2 my-1' onClick={handleFullStop}>UpperFullStop</button>
        <button disabled = {Text.length === 0} className='btn btn-primary mx-1 my-1' onClick={handleClearClick}>Clear Text</button>
      </div>
      <div className='container my-1' style={{ color: props.mode === 'dark' ? 'white' : 'black' }}>
        <h2>Your Text Summary</h2>

        {/* spilt is used for breaking a string into small words as per requirement  which requirement is based on regular exression or simply punctuatation which is used in split  function as-- split("$or # or % or & etc")  */}
        {/* {Text.split("#").length}words and {Text.length} characters */}
        {Text.split(/\s+/).filter((element)=>{return element.length !== 0}).length}words and {Text.length} characters
        <p> {0.008 * Text.split(" ").filter((element)=>{return element.length !== 0}).length}Minutes to read</p>
        <h1 >Preview  </h1>
        {Text.length > 0 ? Text : "Enter something in the textbox above to preview it here"}
      </div>
      {/* <div style={{ color: props.mode === 'dark' ? 'white' : 'dark' }}>


      </div> */}
    </>
  )


}
