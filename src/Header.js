import "./Header.css";
import Name from "./Name";

function Header() {
  return (
    <header>
      <div>
        <Name></Name>
      </div>
      <p>front-end web developer</p>
    </header>
  );
}

const nameHover = document.querySelectorAll(".activeHover");

nameHover.forEach((letter) => {
  letter.addEventListener("mouseenter", () => {
    removeActiveClasses();
    letter.classList.add("active");
  });
});

function removeActiveClasses() {
  nameHover.forEach((e) => {
    e.classList.remove("active");
  });
}

export default Header;
