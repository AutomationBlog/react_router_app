export default function Menu() {
  return (
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
      <div className="container-fluid col-xl-8 mt-5">
        <a className="navbar-brand" href="#">
          COURSES
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" aria-current="page" href="#">
                ALL
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                FULL STACK DEVELOPMENT
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                DATA SCIENCE
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                CYPER SECURITY
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">
                CAREER
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
