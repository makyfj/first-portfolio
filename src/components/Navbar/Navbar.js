import { Link } from "react-router-dom";
import "./Navbar.css";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Franklin Jara</h1>
      <div className="links">
        <a href="https://github.com/makyfj">
          <FaGithub />
        </a>
        <a href="https://github.com/makyfj">
          <FaLinkedin />
        </a>
        <Link to="/">Home</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/education">Education</Link>
      </div>
    </nav>
  );
};

export default Navbar;
