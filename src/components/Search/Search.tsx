import { Search as IconSearch } from "./IconSearch";
import "./Search.css";

export default function Search(): JSX.Element {
  return (
    <>
      <div className="search-container">
        <div className="search-style">
          <IconSearch />
          <input
            type="search"
            placeholder="Pesquisar no blog..."
            className="input-style"
          ></input>
        </div>
      </div>
    </>
  );
}
