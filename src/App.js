import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Magic from "./pages/Magic";
import Equipment from "./pages/Equipment";
import Classes from "./pages/Classes";
import Adversaries from "./pages/Adversaries";
import NoPage from "./pages/NoPage";
import ClassesHome from "./pages/classes/ClassesHome";
import Relics from "./pages/equipment/Relics";
import EquipmentHome from "./pages/equipment/EquipmentHome";
import Common from "./pages/equipment/Common";
import Unique from "./pages/equipment/Unique";
import Adventurer from "./pages/classes/Adventurer";
import Fighter from "./pages/classes/Fighter";
import Rogue from "./pages/classes/Rogue";
import Explorer from "./pages/classes/Explorer";
import Scholar from "./pages/classes/Scholar";
import Ranger from "./pages/classes/Ranger";
import Cleric from "./pages/classes/Cleric";
import Bandit from "./pages/adversaries/Bandit";
import Sphinx from "./pages/adversaries/Sphinx";
import Brainlet from "./pages/adversaries/Brainlet";
import VatThing from "./pages/adversaries/VatThing";

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
            <Route path="Adventurer" element={<Adventurer />} />
            <Route path="Fighter" element={<Fighter />} />
            <Route path="Rogue" element={<Rogue />} />
            <Route path="Explorer" element={<Explorer />} />
            <Route path="Scholar" element={<Scholar />} />
            <Route path="Ranger" element={<Ranger />} />
            <Route path="Cleric" element={<Cleric />} />
          </Route>
          <Route path="adversaries" element={<Adversaries />}>
            <Route path="Bandit" element={<Bandit />} />
            <Route path="Sphinx" element={<Sphinx />} />
            <Route path="Brainlet" element={<Brainlet />} />
            <Route path="VatThing" element={<VatThing />} />
          </Route>
          <Route path="Magic" element={<Magic />} />
          <Route path="*" element={<NoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;