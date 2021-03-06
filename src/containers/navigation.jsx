import React from "react";

class Navigation extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="/">
          <img
            className="logo"
            src={require("../logo.png")}
            alt="Logo"
            width="60"
            height="60"
          />
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link" href="/">
                Browse Drinks <span className="sr-only">(current)</span>
              </a>
            </li>
            <li className="nav-item" />
          </ul>
          <button type="button" className="btn btn-secondary float-sm-right">
            Proceed to Order <span className="badge badge-light">0</span>
            <span className="sr-only">unread messages</span>
          </button>
        </div>
      </nav>
    );
  }
}

export default Navigation;
