import { NavLink } from "react-router-dom";

function Invalid() {
  return (
    <div className="card p-5 m-5 d-flex align-items-center align-self-center">
      <div className="card-body">
        <div className="card-text">
          Oops <span className="text-danger">404</span>, Page Not found!
        </div>
        <div className="card-link">
          <NavLink to="/">Go to Home Page</NavLink>
        </div>
      </div>
    </div>
  );
}

export default Invalid;
