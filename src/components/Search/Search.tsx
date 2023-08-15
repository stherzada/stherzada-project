import { Search as IconSearch } from "./IconSearch";
import "./Search.css";

export default function Search(): JSX.Element {
  return (
    <>
      <IconSearch />
      <div className="search-container">
        <img src="#" />
        <input type="search" placeholder="Pesquisar no blog..."></input>
      </div>
    </>
  );
}
