import { Outlet, Link } from "react-router-dom";

const Adversaries = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/adversaries/Bandit">Bandit</Link>
          </li>
          <li>
            <Link to="/adversaries/Sphinx">Sphinx</Link>
          </li>
          <li>
            <Link to="/adversaries/Brainlet">Brainlet</Link>
          </li>
        </ul>
      </nav>
    
        <Outlet />
    </>
  );
};

export default Adversaries;