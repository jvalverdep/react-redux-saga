import { Link } from "react-router-dom";
import "./Layout.css";

const Layout: React.FC = (props) => {
  return (
    <>
      <nav className="nav-app">
        <Link to="/">Inicio</Link>
        <Link to="/random-player">Random player</Link>
        <Link to="/counter">Counter</Link>
      </nav>
      <div className="main-content">{props.children}</div>
    </>
  );
};

export default Layout;
