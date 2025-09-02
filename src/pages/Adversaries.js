import { Outlet, Link } from "react-router-dom";

const Adversaries = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/adversaries/Bandit">Bandit</Link>
          </li>
        </ul>
      </nav>
    
        <Outlet />
    </>
  );
};

export default Adversaries;