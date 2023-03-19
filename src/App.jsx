import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Index from "./components/Index";
import Character from "./components/Character";

const App = () => {
  return (
    <>
    <BrowserRouter>
    <Navbar brand="Rick and morty app"/>
      <Routes>
        <Route path="/" element={<Index/>}/>
        <Route path="/character/:id" element={<Character/>}/>
      </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
