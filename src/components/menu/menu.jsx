import { Link } from "react-router-dom";
import "./menu.css";
import PropTypes from "prop-types";

export default function Menu({ active }) {
  return (
    <div className="container-lg-6 mt-5">
      <ul className="nav justify-content-center">
        <li className={active === "ALL" ? "active" : ""}>
          <Link className="nav-link" aria-current="page" href="#" to={"/"}>
            ALL
          </Link>
        </li>
        <li className={active === "FSD" ? "active" : ""}>
          <Link className="nav-link" href="#" to={"/Full-Stack-Development"}>
            FULL STACK DEVELOPMENT
          </Link>
        </li>
        <li className={active === "DS" ? "active" : ""}>
          <Link className="nav-link" href="#" to={"/Data-Science"}>
            DATA SCIENCE
          </Link>
        </li>
        <li className={active === "CS" ? "active" : ""}>
          <Link className="nav-link" href="#" to={"/Cyber-Security"}>
            CYBER SECURITY
          </Link>
        </li>
        <li className={active === "Career" ? "active" : ""}>
          <Link className="nav-link" href="#" to={"/Career"}>
            CAREER{" "}
          </Link>
        </li>
      </ul>
    </div>
  );
}

Menu.prototype = {
  active: PropTypes.string.isRequired,
};
