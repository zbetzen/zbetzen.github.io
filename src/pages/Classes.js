import { Outlet, Link } from "react-router-dom";

const Classes = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/classes/Adventurer">Adventurer</Link>
          </li>
          <li>
            <Link to="/classes/Fighter">Fighter</Link>
          </li>
          <li>
            <Link to="/classes/Rogue">Rogue</Link>
          </li>
          <li>
            <Link to="/classes/Explorer">Explorer</Link>
          </li>
          <li>
            <Link to="/classes/Scholar">Scholar</Link>
          </li>
          <li>
            <Link to="/classes/Ranger">Ranger</Link>
          </li>
          <li>
            <Link to="/classes/Cleric">Cleric</Link>
          </li>
        </ul>
      </nav>
    
        <Outlet />
    </>
  );
};

export default Classes;