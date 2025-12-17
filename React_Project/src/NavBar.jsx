import { Link } from "react-router-dom";

export default function NavBar(props) {
  return (
    <>
      <nav
        className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}
      >
        <div className="container-fluid">

          {/* ✅ Brand Link */}
          <Link className="navbar-brand" to="/">
            {props.Title}
          </Link>

          {/* ✅ Correct target */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">

              <li className="nav-item">
                <Link className="nav-link" to="/about">
                  {props.About}
                </Link>
              </li>

              <li className="nav-item">
                <Link className="nav-link" to="/visit">
                  {props.visit}
                </Link>
              </li>

            </ul>

            {/* Dark / Light Switch */}
            <div className="form-check form-switch">
              <input
                className="form-check-input"
                type="checkbox"
                role="switch"
                id="flexSwitchCheckDefault"
                onClick={props.toggelMode}
              />
              <label
                className={`form-check-label text-${
                  props.mode === "light" ? "dark" : "light"
                }`}
                htmlFor="flexSwitchCheckDefault"
              >
                Change Mode
              </label>
            </div>

          </div>
        </div>
      </nav>
    </>
  );
}
