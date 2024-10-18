import { Outlet, Link } from "react-router-dom";

const Equipment = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/equipment/Common">Common</Link>
          </li>
          <li>
            <Link to="/equipment/Unique">Unique</Link>
          </li>
          <li>
            <Link to="/equipment/Relics">Relics</Link>
          </li>
        </ul>
      </nav>
    
        <Outlet />
    </>
  );
};

export default Equipment;