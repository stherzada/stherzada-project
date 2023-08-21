import Search from "../Search/Search";
import "./Nav.css";

export default function Nav(): JSX.Element {
  return (
    <>
      <nav className="container">
        <div>
          <div className="header-titles">
            {" "}
            <h2>Codelândia</h2>
            <a href="#" className="text-reference">
              Blog
            </a>
          </div>
          <Search />
        </div>
      </nav>
    </>
  );
}
