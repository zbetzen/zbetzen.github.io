import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Equipment from "./pages/Equipment";
import Classes from "./pages/Classes";
import NoPage from "./pages/NoPage";
import Poacher from "./pages/classes/Poacher";
import Knight from "./pages/classes/Knight";
import Vizier from "./pages/classes/Vizier";
import ClassesHome from "./pages/classes/ClassesHome";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="equipment" element={<Equipment />} />
          <Route path="classes" element={<Classes />}>
            <Route index element={<ClassesHome />} />
            <Route path="knight" element={<Knight />} />
            <Route path="poacher" element={<Poacher />} />
            <Route path="vizier" element={<Vizier />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;