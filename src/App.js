import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Navbar from "./Components/Navbar";
import Home from "./Components/Home";
import About from "./Components/About";
import NoteState from "./context/notes/NoteState";
// import Alert from "./Components/Alert";

function App() {
  return (
    <>
      <NoteState>
        <BrowserRouter>
          <Navbar />
          {/* <Alert message="Deleted the note"/> */}
          <div className="container">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route exact path="/about" element={<About />} />
            </Routes>
          </div>
        </BrowserRouter>
      </NoteState>
    </>
  );
}

export default App;
