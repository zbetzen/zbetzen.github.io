import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Equipment from "./pages/Equipment";
import Classes from "./pages/Classes";
import NoPage from "./pages/NoPage";
import Hunter from "./pages/classes/Hunter";
import Knight from "./pages/classes/Knight";
import Vizier from "./pages/classes/Vizier";
import ClassesHome from "./pages/classes/ClassesHome";
import Relics from "./pages/equipment/Relics";
import EquipmentHome from "./pages/equipment/EquipmentHome";
import Common from "./pages/equipment/Common";
import Unique from "./pages/equipment/Unique";
import Priest from "./pages/classes/Priest";
import Artisan from "./pages/classes/Artisan";
import Carter from "./pages/classes/Carter";
import Courtesan from "./pages/classes/Courtesan";
import Hermit from "./pages/classes/Hermit";
import Laborer from "./pages/classes/Laborer";
import LevyTroop from "./pages/classes/LevyTroop";
import Merchant from "./pages/classes/Merchant";
import Noble from "./pages/classes/Noble";
import Performer from "./pages/classes/Performer";
import Wanderer from "./pages/classes/Wanderer";

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
            <Route path="Carter" element={<Carter />} />
            <Route path="Courtesan" element={<Courtesan />} />
            <Route path="Hermit" element={<Hermit />} />
            <Route path="Knight" element={<Knight />} />
            <Route path="Hunter" element={<Hunter />} />
            <Route path="Laborer" element={<Laborer />} />
            <Route path="LevyTroop" element={<LevyTroop />} />
            <Route path="Merchant" element={<Merchant />} />
            <Route path="Noble" element={<Noble />} />
            <Route path="Performer" element={<Performer />} />
            <Route path="Vizier" element={<Vizier />} />
            <Route path="Priest" element={<Priest />} />
            <Route path="Wanderer" element={<Wanderer />} />
          </Route>
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;