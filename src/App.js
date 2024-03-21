import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import NoteState from "./context/notes/NoteState";
import Login from "./Components/Login";
import Signup from "./Components/Signup";
import Alert from "./Components/Alert";
import { useState } from "react";

function App() {
   // eslint-disable-next-line
  const [alert, setAlert] = useState(null);

  const showAlert=(message,type)=>{

          
        setAlert({
              msg:message,
              type:type
                })
              setTimeout(() => {
                setAlert(null);
              }, 1500);
             
  }
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar  showAlert={showAlert}/>
          <Alert alert={alert}/>
          <div className="container">
            <Routes>
              <Route path="/" element={<Home showAlert={showAlert} />} />
              <Route exact path="/about" element={<About />} />
              <Route path="/login" element={<Login showAlert={showAlert} />} />
              <Route path="/signup" element={<Signup showAlert={showAlert} />} />
            </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
