import { Outlet, Link } from "react-router-dom";

const Classes = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/setting/Land">Land</Link>
          </li>
          <li>
            <Link to="/setting/Gods">Gods</Link>
          </li>
          <li>
            <Link to="/setting/Races">Races</Link>
          </li>
        </ul>
      </nav>
    
        <Outlet />
    </>
  );
};

export default Classes;