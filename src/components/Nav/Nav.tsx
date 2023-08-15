import Search from "../Search/Search";
import "./Nav.css";

export default function Nav(): JSX.Element {
  return (
    <>
      <nav className="nav-bar">
        <h2>Codelândia</h2>
        <div className="container">
          <a href="#" className="text-reference">
            Blog
          </a>
        </div>
      </nav>
      <Search />
    </>
  );
}
