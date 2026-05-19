import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useCookies } from "react-cookie";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function Navbar() {
  const navigate = useNavigate();
  const [cookies, removeCookie] = useCookies(["token"]);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const verifyCookie = async () => {
      if (!cookies.token) {
        return;
      }
      try {
        const { data } = await axios.post(
          "http://localhost:3002/",
          {},
          { withCredentials: true }
        );
        const { status, user } = data;
        if (status) {
          setUsername(user);
        } else {
          removeCookie("token");
        }
      } catch (e) {
        console.error(e);
      }
    };
    verifyCookie();
  }, [cookies, removeCookie]);

  const Logout = () => {
    removeCookie("token");
    setUsername("");
    toast.success("Logged out successfully", { position: "bottom-right" });
    navigate("/login");
  };

  return (
    <nav
      className="navbar navbar-expand-lg border-bottom"
      style={{ backgroundColor: "#FFF" }}
    >
      <div className="container p-2">
        <Link className="navbar-brand" to="/">
          <img
            src="media/images/logotrade.png"
            style={{ width: "25%" }}
            alt="Logo"
          />
        </Link>
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
          <form className="d-flex" role="search">
            <ul className="navbar-nav mb-lg-0 align-items-center">
              {username ? (
                <>
                  <li className="nav-item mx-2 text-primary fw-bold">
                    Welcome, {username}
                  </li>
                  <li className="nav-item">
                    <a className="btn btn-outline-primary btn-sm mx-2" href="http://localhost:3001">
                      Dashboard
                    </a>
                  </li>
                  <li className="nav-item">
                    <button className="btn btn-outline-danger btn-sm mx-2" onClick={Logout}>
                      Logout
                    </button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/signup">
                      Signup
                    </Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link active" to="/login">
                      Login
                    </Link>
                  </li>
                </>
              )}
              <li className="nav-item">
                <Link className="nav-link active" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/products">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/pricing">
                  Pricing
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link active" to="/support">
                  Support
                </Link>
              </li>
            </ul>
          </form>
        </div>
      </div>
      <ToastContainer />
    </nav>
  );
}

export default Navbar;

