import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Box, Drawer } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import Logo from "./Logo";
import SearchBar from "./Searchbar";
import MenuIcon from "@mui/icons-material/Menu";
import ChartList from "./ChartList";
import AddButton from "./AddButton";

const Topbar = () => {
  const [showSearchBar, setShowSearchBar] = useState(false);
  const [open, setOpen] = useState(false);

  const toggleContent = () => {
    setOpen(!open);
  };

  const handleSearchClick = () => {
    setShowSearchBar(!showSearchBar);
  };

  return (
    <>
      <AppBar
        position="static"
        sx={{
          backgroundColor: "white",
          boxShadow: "none",
          borderBottom: "1px solid #ddd",
        }}
      >
        <Toolbar sx={{ display: "flex", justifyContent: "space-between" }}>
          {!showSearchBar ? <Logo /> : <SearchBar />}

          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <IconButton
              aria-label="search"
              sx={{ color: "black" }}
              onClick={handleSearchClick}
            >
              <SearchIcon />
            </IconButton>
            <IconButton
              sx={{ color: "black", mr: 2 }}
              aria-label="toggle drawer"
              onClick={toggleContent}
            >
              <MenuIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
      <Drawer
        anchor="right"
        open={open}
        onClose={toggleContent}
        sx={{
          width: 300,
          padding: "10px",
          display: "flex",
          flexDirection: "column",
          height: "100vh",
          boxSizing: "border-box",
        }}
      >
        <ChartList />
        <AddButton />
      </Drawer>
    </>
  );
};

export default Topbar;
