import logo from './logo.svg';
import './App.css';
import Navbar from './componets/Navbar';
import TextForm from './componets/TextForm';
// import About from'./componets/About';
import React , {useState} from 'react';
import Alert from './componets/Alert';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Routes,
//   Route,
//   Link
// } from "react-router-dom";

function App() {
  const[mode,setMode]=useState('light');// whether dark mpde enable or not

  const [alert , setAlert]=useState (null);

  const showAlert =(message , type)=>
  {
    setAlert({
      msg: message,
      type:type
    })
    setTimeout(() => {
      setAlert(null);
    }, 2000);
  }
  const togglemode =()=>
  {
    if(mode==='light')
    {
      setMode('dark');
      document.body.style.backgroundColor='#042743';
      showAlert("Dark mode has been enabled","success");
      // document.title="TextUtils-dark mode"
      setInterval(() => {
        document.title=" Install TextUtils"
      }, 1500);
      setInterval(() => {
        document.title="Thank You!"
      }, 2000);
    }
    else
    {
      setMode('light');
      document.body.style.backgroundColor='white';
      showAlert("Light mode has been enabled","success");
      // document.title="TextUtils-light mode" // title change
    }
  }
  return (
    <>
    {/* <Router> */}
<Navbar title="Textutils" aboutText="About" mode={mode}  togglemode={togglemode} />
   {/* <Navbar/> */}
   <Alert alert={alert}/>
   <div className='container my-3'>
   {/* <Routes>
          <Route path="/about" element ={<About mode={mode} />}>
          </Route> */}
          {/* <Route path="/" element ={<TextForm showAlert ={showAlert} heading="Enter the text to analyze below" mode={mode}/>}> */}
          <TextForm showAlert ={showAlert} heading="Enter the text to analyze below" mode={mode}/>
          {/* </Route>
        </Routes> */}
   {/* <About className='container my-3' /> */}

   </div>
   {/* </Router> */}
    </>

  );
}


export default App;
