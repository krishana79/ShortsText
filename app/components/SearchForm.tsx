import React from "react";

const SearchForm = () => {
  return (
    <>
      {/* Search Field */}
      <form className="srh_inp-wrp" name="search">
        <span className="srh_inp-icn">
          <svg className="vj_icn vj_search">
            <use xlinkHref="#vj_search" />
          </svg>
        </span>
        <input
          className="srh_inp"
          type="text"
          name="q"
          id="search_q"
          defaultValue=""
          autoComplete="off"
          required
        />
        <label htmlFor="search_q">Search here</label>
      </form>
    </>
  );
};

export default SearchForm;
