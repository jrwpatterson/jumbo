import React from "react";
import "./search-box.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export const SearchBox = (props: { onChange: (newText: string) => void }) => {
  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(event.target.value);
  };

  return (
    <div className="outer-search-container">
      <div className="search-container">
        <input
          className="search-box"
          type="text"
          placeholder="Search"
          onChange={onChange}
        />
        <FontAwesomeIcon className="search-icon" icon={faSearch} />
      </div>
    </div>
  );
};
