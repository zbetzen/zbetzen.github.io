import { Outlet, Link } from "react-router-dom";

const Classes = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/classes/Poacher">Poacher</Link>
          </li>
          <li>
            <Link to="/classes/Knight">Knight</Link>
          </li>
          <li>
            <Link to="/classes/Vizier">Vizier</Link>
          </li>
        </ul>
      </nav>
    
        <Outlet />
    </>
  );
};

export default Classes;