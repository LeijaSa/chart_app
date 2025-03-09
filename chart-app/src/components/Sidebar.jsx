import AddButton from "./AddButton";
import Logo from "./Logo";
import SearchBar from "./Searchbar";
import React from "react";
import ChartList from "./ChartList";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <Logo />
      <SearchBar />
      <AddButton />
      <ChartList />
    </div>
  );
};

export default Sidebar;
