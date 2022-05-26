import React from "react";

export const Input = ({ placeholder, handleChange }) => {
  return (
    <>
      <input className="search" placeholder={placeholder}></input>
      <button
        className="findButton"
        type="submit"
        value="find"
        onClick={handleChange}
      >
        Find
      </button>
    </>
  );
};

export default Input;
