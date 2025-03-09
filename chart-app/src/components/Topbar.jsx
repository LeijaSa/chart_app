import React, { useState } from "react";
import { AppBar, Toolbar, IconButton, Box, Drawer } from "@mui/material";
import Logo from "./Logo";
import SearchBar from "./Searchbar";
import MenuIcon from "@mui/icons-material/Menu";
import ChartList from "./ChartList";
import AddButton from "./AddButton";

const Topbar = () => {
  const [open, setOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const toggleContent = () => {
    setOpen(!open);
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
          <Logo />
          <IconButton
            sx={{ color: "black", mr: 2 }}
            aria-label="toggle drawer"
            onClick={toggleContent}
          >
            <MenuIcon />
          </IconButton>
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
        <SearchBar setSearchTerm={setSearchTerm} />
        <ChartList searchTerm={searchTerm} />
        <AddButton />
      </Drawer>
    </>
  );
};

export default Topbar;
