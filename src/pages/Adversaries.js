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
            <Link to="/adversaries/Sphinx">Sphinx (Young)</Link>
          </li>
          <li>
            <Link to="/adversaries/Brainlet">Brainlet</Link>
          </li>
          <li>
            <Link to="/adversaries/VatThing">Vat Thing</Link>
          </li>
        </ul>
      </nav>
    
        <Outlet />
    </>
  );
};

export default Adversaries;