import Search from "../Search/Search";
import "./Nav.css";

export default function Nav(): JSX.Element {
  return (
    <>
      <nav className="container">
        <h2>Codelândia</h2>
        <div>
          <div>
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
