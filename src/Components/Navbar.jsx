import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <header>
        <div className="container">
          <img src="" alt="" className="logo" />
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};
export default Navbar;
