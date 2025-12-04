import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from "./pages/Layout";
import Home from "./pages/Home";
import Magic from "./pages/Magic";
import Setting from "./pages/Setting";
import Equipment from "./pages/Equipment";
import Classes from "./pages/Classes";
import Encounters from "./pages/Encounters";
import NoPage from "./pages/NoPage";
import ClassesHome from "./pages/classes/ClassesHome";
import Relics from "./pages/equipment/Relics";
import SettingHome from "./pages/setting/SettingHome";
import Land from "./pages/setting/Land";
import Gods from "./pages/setting/Gods";
import Races from "./pages/setting/Races";
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
import Bandit from "./pages/encounters/Bandit";
import Janissary from "./pages/encounters/Janissary";
import Sphinx from "./pages/encounters/Sphinx";
import Brainlet from "./pages/encounters/Brainlet";
import VatThing from "./pages/encounters/VatThing";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="setting" element={<Setting />}>
            <Route index element={<SettingHome />} />
            <Route path="Land" index element={<Land />} />
            <Route path="Gods" index element={<Gods />} />
            <Route path="Races" index element={<Races />} />
          </Route>
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
          <Route path="encounters" element={<Encounters />}>
            <Route path="Bandit" element={<Bandit />} />
            <Route path="Janissary" element={<Janissary />} />
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