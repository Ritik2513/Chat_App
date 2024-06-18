import React from "react";
import { FaSearch } from "react-icons/fa";

function Search() {
  return (
    <div className="px-6 py-4">
      <form action="">
        <div className="flex space-x-3">
          <label className="input input-bordered flex items-center gap-2 w-[80%]">
            <input type="text" className="grow" placeholder="Search" />
          </label>
          <button>
            <FaSearch />
          </button>
        </div>
      </form>
    </div>
  );
}

export default Search;
