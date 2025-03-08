import React, { useState } from "react";
import { AppBar, Toolbar, IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "./Logo";
import SearchBar from "./Searchbar";
import ShowChartIcon from "@mui/icons-material/ShowChart";

const Topbar = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);

  const handleSearchClick = () => {
    setShowSearchBar(!showSearchBar);
  };

  return (
    <div>
      {/* Topbar with white background and bottom border */}
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
          boxShadow: "none",
          borderBottom: "1px solid #ddd",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {!showSearchBar ? (
            <Logo />
          ) : (
            <>
              <IconButton edge="start" sx={{ color: "black" }}>
                <ShowChartIcon /> {/* Line chart icon */}
              </IconButton>{" "}
              <SearchBar />
            </>
          )}

          {/* Right side - Search Icon */}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="search"
            sx={{ color: "black" }}
            onClick={handleSearchClick}
          >
            <SearchIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Topbar;
