import React from "react";
import "./nav.css";
import img from "./gitlogo.png";

function Nav() {
  return (
    <nav>
      <div class="dropdown">
        <button onclick="myFunction()" class="dropbtn">
          CONTACT
        </button>
        <div id="myDropdown" class="dropdown-content">
          <a
            href="mailto:Nbrailsford@msn.com?Subject=Hello%20again"
            target="_top"
          >
            Email
          </a>
          <a href="tel:7203188906">
            Phone: <br />
            720-318-8906
          </a>
        </div>
      </div>

      <a href="https://github.com/nbrailsford" target="_blank" rel="noreferrer">
        <img alt="git hub" src={img} width="30" height="30" />
      </a>
      <a href="https://www.linkedin.com/feed/" target="_blank" rel="noreferrer">
        linkedin
      </a>
    </nav>
  );
}

function myFunction() {
  document.getElementById("myDropdown").classList.toggle("show");
}

// Close the dropdown menu if the user clicks outside of it
window.onclick = function (event) {
  if (!event.target.matches(".dropbtn")) {
    var dropdowns = document.getElementsByClassName("dropdown-content");
    var i;
    for (i = 0; i < dropdowns.length; i++) {
      var openDropdown = dropdowns[i];
      if (openDropdown.classList.contains("show")) {
        openDropdown.classList.remove("show");
      }
    }
  }
};

export default Nav;
