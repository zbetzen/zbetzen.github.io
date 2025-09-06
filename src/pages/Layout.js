import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/equipment">Equipment</Link>
          </li>
          <li>
            <Link to="/classes">Classes</Link>
          </li>
          <li>
            <Link to="/Magic">Magic</Link>
          </li>
          <li>
            <Link to="/adversaries">Adversaries</Link>
          </li>
        </ul>
      </nav>
    
        <Outlet />
    </>
  )
};

export default Layout;