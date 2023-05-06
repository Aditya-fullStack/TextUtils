import React , {useState}from 'react'

export default function TextForm(props) {
  const handleUpClick =()=>{
    console.log("Uppercase was clicked :"+ text);
    let newtext = text.toUpperCase();
    setText(newtext)
    props.showAlert("Coverted to Uppercase!","Success");
  }


  const handleLoClick =()=>{
    console.log("Uppercase was clicked :"+ text);
    let newtext = text.toLowerCase();
    setText(newtext)
    props.showAlert("Coverted to Lowercase!","Success");

  }


  const handleAlterClick =()=>{
    console.log("Alternate was clicked :"+ text);
    let newtext = function(s)
    {
      var char =s.toLowerCase().split("");
      for(var i=0;i<char.length;i+=2)
      {
        char[i]=char[i].toUpperCase();
      }
      return char.join("")
    }
    setText(newtext)
    props.showAlert("Coverted to Alternate!","Success");

  }


  const handleCopyClick =()=>{
    console.log("Copy was clicked :"+ text);
    let newtext = document.getElementById("myBox");
    newtext.select();
    navigator.clipboard.writeText(newtext.value);
    props.showAlert("Copy the text!","Success");
  }


  const handleSenClick =()=>{
    console.log("Sentance case was clicked :"+ text);
    let newtext = '';
    setText(newtext)
    props.showAlert("Coverted to sentancecase!","Success");

  }

  const handleCapitClick =()=>{
    console.log("Capitalized case was clicked :"+ text);
    let newtext = '';
    setText(newtext)
    props.showAlert("Coverted to Capitalizedcase!","Success");

  }


  const handleTitleClick =()=>{
    console.log("Titlecase was clicked :"+ text);
    let newtext = function(string) {
      var sentence = string.toLowerCase().split(" ");
      for(var i = 0; i< sentence.length; i++){
         sentence[i] = sentence[i][0].toUpperCase() + sentence[i].slice(1);
      }
   document.write(sentence.join(" "));
   return sentence.join("");
   }
    setText(newtext)
    props.showAlert("Coverted to Titlecase!","Success");

  }


  const handleInverseClick =()=>{
    console.log("Inverse was clicked :"+ text);
    let newtext = '';
    setText(newtext)
    props.showAlert("Coverted to Invertcase!","Success");

  }


  const handleDownClick =()=>{
    console.log("Uppercase was clicked :"+ text);
    let newtext = '';
    setText(newtext)
  }
  const handleClearClick =()=>{
    console.log("Download was clicked :"+ text);
    let newtext = '';
    setText(newtext)
    props.showAlert("Downloayd!","Success");

  }
  const handleExtraSpaces =()=>{
    console.log("ExtraSpaces was clicked :"+ text);
    let newtext = text.split(/[ ]+/);
    setText(newtext.join(" "))
    props.showAlert("Extra Spaces has removed!","Success");

  }

  const handleOnChange =(event)=>{
    console.log("On change");
    setText(event.target.value);
  }
  const [text, setText] = useState('');
  // text ="New text"; // Wrong way to change the state 
  // setText =("New text"); // Correct way to change the state 

  return (
    <>
    <div className='container' style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea className="form-control" value={text} onChange={handleOnChange} style={{backgroundColor:props.mode==='dark'?'#13466e':'white', color:props.mode==='dark'?'white':'black'}} id="myBox" rows="8"></textarea>
         </div>
         <button disabled={text.length===0} className="btn btn-primary mx-1 my-1"  onClick={handleUpClick}>UPPER CASE</button>
         <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleLoClick}>lowercase</button>
         <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCapitClick}>Capitalized case</button>
         <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleSenClick}>Sentence case</button>
         <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleAlterClick}>aLtErNaTiNg cAsE</button>
         <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleTitleClick}>Title case</button>
         <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleInverseClick}>InVeRsE CaSe</button>
         <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleCopyClick}>Copy to Clipboard</button>
         <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleDownClick}>Download Text</button>
         <button disabled={text.length===0} className="btn btn-primary mx-1 my-1" onClick={handleClearClick}>Clear</button>
         <button disabled={text.length===0} className="btn btn-primary mx-1 my-2" onClick={handleExtraSpaces}>Remove Extra Space</button>
    </div>
    <div className="container my-3 "style={{color:props.mode==='dark'?'white':'#042743'}}>
      <h2>Your text summary</h2>
      <p>{text.split(" ").filter((element)=>{return element.length!==0}).length} words and {text.length} charecters</p>
      <p>{0.008* text.split(" ").length} Minutes to read</p>
      <h3>Preview</h3>
      <p>{text.length>0?text:"Enter the something in the textbox above to preview it here"}</p>
    </div>
    </>
  )
}
