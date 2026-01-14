import { Outlet, Link } from "react-router-dom";

const Encounters = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/encounters/Bandit">Bandit</Link>
          </li>
          <li>
            <Link to="/encounters/Janissary">Janissary</Link>
          </li>
          <li>
            <Link to="/encounters/Sphinx">Sphinx (Young)</Link>
          </li>
          <li>
            <Link to="/encounters/VatThing">Vat Thing</Link>
          </li>
        </ul>
      </nav>
    
        <Outlet />
    </>
  );
};

export default Encounters;