import React from "react";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = ({ setSearchTerm }) => {
  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value); // Update the search term in the parent component
  };

  return (
    <TextField
      variant="outlined"
      placeholder="Search..."
      onChange={handleSearchChange} // Handle input change
      slotProps={{
        input: {
          startAdornment: <SearchIcon />,
        },
      }}
      sx={{
        maxWidth: 400,
        margin: "10px",
        "& .MuiOutlinedInput-root": {
          backgroundColor: "#f0f0f0",
          height: "40px",
        },
        "& .MuiOutlinedInput-input": {
          color: "black",
        },
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "transparent",
        },
      }}
    />
  );
};

export default SearchBar;
