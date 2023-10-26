import React from "react";
import styles from "./Search.module.css";
import { ReactComponent as SearchIcon } from "../../assets/search-icon.svg";
import { useState } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";

const Search = ({ placeholder, data }) => {
  const [val, setVal] = useState(null);
console.log(data);
  const onSubmit = (e) => {
    e.preventDefault();
  };

  const clickHandler = () => {};

  const changeHandler = (e) => {
    setVal(e.target.value);
  };

  return (
    <div className={styles.wrapper}>
      <Autocomplete
        className={styles.Search}
        freeSolo
        id="free-solo-2-demo"
        disableClearable
        options={data}
        getOptionLabel={(option) => option.title}
        renderInput={(params) => (
          <TextField
            {...params}
            label="Search input"
            InputProps={{
              ...params.InputProps,
              type: "search",
            }}
            onChange={changeHandler}
          />
        )}
        renderOption={(props, option) => (
          <li {...props} key={option.id}>
          <img
            src={option.image}
            alt={option.title}
            style={{ width: "30px", height: "30px", marginRight: "10px" }}
          />
          {option.title}
        </li>
        )}
      />
      <button className={styles.searchButton} type="submit" onClick={clickHandler}>
        <SearchIcon />
      </button>
    </div>
  );
};

export default Search;
