import "./App.css";
import About from "./components/About";
import Home from "./components/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NoteState from "./Context/Notes/noteState";
import AlertState from "./Context/Alert/alertState";
import Login from "./components/Login";
import Signup from "./components/Signup";
import NotFound from "./components/Notfound";
const App = () => {
  return (
    <>
      <AlertState>
        <NoteState>
          <Router>
            <Routes>
              <Route exact path="/about" element={<About />} />
              <Route exact path="/" element={<Home />} />
              <Route exact path="/login" element={<Login />} />
              <Route exact path="/signup" element={<Signup />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </Router>
        </NoteState>
      </AlertState>
    </>
  );
};

export default App;
