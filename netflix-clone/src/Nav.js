import React, { useEffect, useState } from "react"; //rfce shortcut
import "./Nav.css";
//2:37:00 on video
function Nav() {
  const [show, handleShow] = useState(false);

  useEffect(() => {
    //code runs once when screen loads
    window.addEventListener("scroll", () => {
      //it listens to scroll length
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });
    return () => {};
  }, []);

  return (
    <div className={`nav ${show && "nav__black"}`}>
      <h1
        className="nav__logo">jagged.</h1>
      <h1 className="home"><a href="Show.html">Home</a></h1>
      <h1 className="mystuff">My Stuff</h1>
      <h1 className="shows">TV Shows</h1>
      <h1 className="movies">Movies</h1>

      <img
        className="nav__avatar"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcROtByYSquEg2-IOSo9BgkpeoKanukREhcJZMxkCZ0yN4s7sW-ALN0Kv84cSC-ehAmrxvg&usqp=CAU"
        alt="Avatar"
      />
    </div>
  );
}

export default Nav;
