import "./Navbar.css";
import { useState } from "react";
import { MagnifyingGlassIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { useDispatch } from "react-redux";
import { setSearch } from "../../app/features/filters/filtersSlice";

const Navbar = () => {
  const [searchBarIsOpen, setSearchBarIsOpen] = useState(false);

  const dispatch = useDispatch();

  return (
    <nav>
      <div className="navbar">
        <h1 className="logo">TODO</h1>
        <div className="search">
          <input type="text" className="search-bar" placeholder="Search" onChange={(e) => dispatch(setSearch(e.target.value))} />
          <button className="search-btn" onClick={() => setSearchBarIsOpen(!searchBarIsOpen)}>
            {
              searchBarIsOpen ? <XMarkIcon className="h-6 w-6" /> : <MagnifyingGlassIcon className="h-6 w-6" />
            }
          </button>
        </div>
      </div>
      {
        searchBarIsOpen && <input type="text" className="search-bar-mobile" placeholder="Search" onChange={(e) => dispatch(setSearch(e.target.value))} />
      }
    </nav>
  );
};

export default Navbar;