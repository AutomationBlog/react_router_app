import { Link } from "react-router-dom";

export default function Menu() {
  return (
    <ul className="nav justify-content-center">
      <li className="nav-item">
        <Link className="nav-link" aria-current="page" href="#" to={"/"}>
          ALL
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="#" to={"/Full-Stack-Development"}>
          FULL STACK DEVELOPMENT
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="#" to={"/Data-Science"}>
          DATA SCIENCE
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="#" to={"/Cyber-Security"}>
          CYBER SECURITY
        </Link>
      </li>
      <li className="nav-item">
        <Link className="nav-link" href="#" to={"/Career"}>
          CAREER{" "}
        </Link>
      </li>
    </ul>
  );
}
