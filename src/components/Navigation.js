import React from "react";

function Navigation(props) {
  const tabs = ["About", "Portfolio", "Contact", "Resume"];
  return (
<nav class="navbar navbar-expand-lg navbar-light bg-light">
  <div class="container-fluid">
    {/* <a class="navbar-brand" href="#"></a> */}
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    {/* <div className="tabs is-centered">
      <ul className="nav nav-tabs"> */}
       <div class="collapse navbar-collapse" id="navbarNav">
      <ul class="navbar-nav">
        {tabs.map((tab) => (
          <li
            className={
              props.currentPage === tab ? "nav-item is-active" : "nav-item"
            }
            key={tab}
          >
            <a
              href={"#" + tab.toLowerCase()}
              onClick={() => props.handlePageChange(tab)}
              className={
                props.currentPage === tab ? "nav-link active" : "nav-link"
              }
            >
              {tab}
            </a>
          </li>
        ))}
      </ul>
    </div>
    </div>
    </nav>
  );
}

export default Navigation;