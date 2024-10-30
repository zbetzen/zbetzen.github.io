import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Equipment from "./pages/Equipment";
import Classes from "./pages/Classes";
import NoPage from "./pages/NoPage";
import Hunter from "./pages/classes/Hunter";
import Knight from "./pages/classes/Knight";
import ClassesHome from "./pages/classes/ClassesHome";
import Relics from "./pages/equipment/Relics";
import EquipmentHome from "./pages/equipment/EquipmentHome";
import Common from "./pages/equipment/Common";
import Unique from "./pages/equipment/Unique";
import Cultist from "./pages/classes/Cultist";
import Artisan from "./pages/classes/Artisan";
import Courtesan from "./pages/classes/Courtesan";
import Laborer from "./pages/classes/Laborer";
import Conscript from "./pages/classes/Conscript";
import Merchant from "./pages/classes/Merchant";
import Noble from "./pages/classes/Noble";
import Performer from "./pages/classes/Performer";
import Wanderer from "./pages/classes/Wanderer";
import Scholar from "./pages/classes/Scholar";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="equipment" element={<Equipment />}>
            <Route index element={<EquipmentHome />} />
            <Route path="Common" index element={<Common />} />
            <Route path="Unique" index element={<Unique />} />
            <Route path="Relics" index element={<Relics />} />
          </Route>
          <Route path="classes" element={<Classes />}>
            <Route index element={<ClassesHome />} />
            <Route path="Artisan" element={<Artisan />} />
            <Route path="Courtesan" element={<Courtesan />} />
            <Route path="Knight" element={<Knight />} />
            <Route path="Hunter" element={<Hunter />} />
            <Route path="Laborer" element={<Laborer />} />
            <Route path="Conscript" element={<Conscript />} />
            <Route path="Merchant" element={<Merchant />} />
            <Route path="Noble" element={<Noble />} />
            <Route path="Performer" element={<Performer />} />
            <Route path="Cultist" element={<Cultist />} />
            <Route path="Scholar" element={<Scholar />} />
            <Route path="Wanderer" element={<Wanderer />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;