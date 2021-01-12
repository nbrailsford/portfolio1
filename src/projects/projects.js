import React from "react";
import "./projects.css";
import img from "./clock.png";

class Projects extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    const boxes = document.querySelectorAll(".box");

    window.addEventListener("scroll", checkBoxes);

    checkBoxes();

    function checkBoxes() {
      const triggerBottom = (window.innerHeight / 5) * 4;
      boxes.forEach((box) => {
        const boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
          box.classList.add("show");
        } else {
          box.classList.remove("show");
        }
      });
    }
  }
  render() {
    return (
      <div className="projectsContainer">
        <div>
          <div class="box">
            <img class="box" src={img} alt="Clock"></img>
          </div>
          <p class="discription">
            This clock gives you the time in String format using React
          </p>
        </div>
        <div class="box">
          <h2>Content</h2>
        </div>
        <div class="box">
          <h2>Content</h2>
        </div>
        <div class="box">
          <h2>Content</h2>
        </div>
        <div class="box">
          <h2>Content</h2>
        </div>
        <div class="box">
          <h2>Content</h2>
        </div>
        <div class="box">
          <h2>Content</h2>
        </div>
        <div class="box">
          <h2>Content</h2>
        </div>
      </div>
    );
  }
}

export default Projects;
