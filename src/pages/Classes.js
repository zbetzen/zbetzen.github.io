import { Outlet, Link } from "react-router-dom";

const Classes = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/classes/Artisan">Artisan</Link>
          </li>
          <li>
            <Link to="/classes/Carter">Carter</Link>
          </li>
          <li>
            <Link to="/classes/Courtesan">Courtesan</Link>
          </li>
          <li>
            <Link to="/classes/Hermit">Hermit</Link>
          </li>
          <li>
            <Link to="/classes/Hunter">Hunter</Link>
          </li>
          <li>
            <Link to="/classes/Knight">Knight</Link>
          </li>
          <li>
            <Link to="/classes/Laborer">Laborer</Link>
          </li>
          <li>
            <Link to="/classes/LevyTroop">Levy Troop</Link>
          </li>
          <li>
            <Link to="/classes/Merchant">Merchant</Link>
          </li>
          <li>
            <Link to="/classes/Noble">Noble</Link>
          </li>
          <li>
            <Link to="/classes/Performer">Performer</Link>
          </li>
          <li>
            <Link to="/classes/Priest">Priest</Link>
          </li>
          <li>
            <Link to="/classes/Scholar">Scholar</Link>
          </li>
          <li>
            <Link to="/classes/Vizier">Vizier</Link>
          </li>
          <li>
            <Link to="/classes/Wanderer">Wanderer</Link>
          </li>
        </ul>
      </nav>
    
        <Outlet />
    </>
  );
};

export default Classes;