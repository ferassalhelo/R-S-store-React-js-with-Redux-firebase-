import React, { useCallback, useState } from "react";
import { useNavigate } from "react-router-dom/dist";

function Search() {
  let [value, setValue] = useState("");
  const navigate = useNavigate();

  const handleValue = (e) => {
    let val = e.currentTarget.value.trim();
    setValue(val);
  };

  const handleSearch = useCallback(() => {
    if (value) {
      navigate(`/search/${value}`);
      setValue("");
      return;
    }
    navigate(`/allProducts`);
  }, [navigate, value]);

  return (
    <div className="input-group">
      <input
        value={value}
        onChange={handleValue}
        type="search"
        className="form-control rounded rounded-0 rounded-start"
        placeholder="Search"
        aria-label="Search"
        aria-describedby="search-addon"
      />
      <button
        type="button"
        style={{ minWidth: "140px"}}
        className="btn bg-main text-white fw-bolder text-uppercase rounded-0 rounded-end "
        onClick={handleSearch}
      >
        {value !== "" ? (
          <span>
            <i className="fa-solid fa-magnifying-glass"></i> search
          </span>
        ) : (
          "all products"
        )}
      </button>
    </div>
  );
}

export default Search;
