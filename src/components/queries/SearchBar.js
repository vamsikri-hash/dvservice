import React from "react";
import "./Bar.css";

const SearchBar = () => {
  return (
    <div>
      <nav className='at-middle'>
        <div className='nav-wrapper'>
          <form>
            <div className='input-field'>
              <input id='search' type='search' required />
              <label className='label-icon' for='search'>
                <i className='material-icons'>search</i>
              </label>
              <i className='material-icons'>close</i>
            </div>
          </form>
        </div>
      </nav>
    </div>
  );
};

export default SearchBar;
