import React from "react";
import { TextField } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

const SearchBar = () => {
  return (
    <TextField
      variant="outlined"
      placeholder="Search..."
      slotProps={{
        input: {
          startAdornment: <SearchIcon />,
        },
      }}
      sx={{
        maxWidth: 400,
        margin: "0 auto",
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
