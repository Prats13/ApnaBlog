import './App.css';
import Navbar from "./components/Navbar";
import Container1 from "./components/Container1";
import Container2 from "./components/Container2";
import Container3 from "./components/Container3";
import Container4 from "./components/Container4";
import Footer from "./components/Footer";
// import Blog from "./components/Blog";
import { useState } from "react";


function App() {
  const [mode, setMode] = useState("light"); //whether dark mode is enabled or not
 
  const togglemode = ()=>{
      if(mode === "light"){
        setMode("dark");
        document.body.style.backgroundColor='rgb(17 6 94)';
      }
      else{
        setMode("light");
        document.body.style.backgroundColor='white';
      }
  }
  return (
    <>
      <Navbar mode={mode} togglemode={togglemode}/>
      <Container1 mode={mode}/>
      <Container2 mode={mode}/>
      <Container3/>
      <Container4 mode={mode}/>
      {/* <Blog mode={mode}/> */}
      <Footer/>
    </>
  );
}

export default App;
