import { useEffect } from "react";
import Addnote from "./Addnote";
import Notesitem from "./Notesitem";
import { useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import Alert from "../components/Alert";
const Home = () => {
  const Navigate = useNavigate();
  useEffect(() => {
    !localStorage.getItem("token") ? Navigate("/signup") : null;
    document.title = "Home - KeepNote";
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <Navbar />
      <Alert message="Welcome To i_Notebook" />
      <Addnote />
      <Notesitem />
    </>
  );
};

export default Home;
