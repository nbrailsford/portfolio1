import "./Header.css";

const name = document.querySelectorAll(".activeHover");

name.forEach((letter) => {
  letter.addEventListener("mouseenter", () => {
    removeActiveClasses();
    letter.classList.add("active");
  });
});

function removeActiveClasses() {
  name.forEach((panel) => {
    panel.classList.remove("active");
  });
}

function Header() {
  return (
    <div className="header">
      <span className="active">N</span>
      <span className="activeHover">A</span>
      <span className="activeHover">T</span>
      <span className="activeHover">H</span>
      <span className="activeHover">A</span>
      <span className="activeHover">N</span>
      <p>from the header</p>
    </div>
  );
}

export default Header;
