import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contacts" element={<Contacts/>}/>
      </Routes>
    </>
  );
}

export default App;
