import React from "react";
import { TextField, InputAdornment } from "@mui/material";
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
        maxWidth: 400, // Adjust the width of the search bar
        margin: "0 auto", // Center the search bar
        marginBottom: "10px", // Add a 5px margin at the bottom
        "& .MuiOutlinedInput-root": {
          backgroundColor: "#f0f0f0", // Grey background
          height: "40px", // Set a custom height for the search bar
        },
        "& .MuiOutlinedInput-input": {
          color: "black", // Ensure the text color is black
        },
        "& .MuiOutlinedInput-notchedOutline": {
          borderColor: "transparent", // Remove the default border
        },
      }}
    />
  );
};

export default SearchBar;
