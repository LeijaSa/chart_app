import AddButton from "./AddButton";
import Logo from "./Logo";
import SearchBar from "./Searchbar";
import React, { useState } from "react";
import ChartList from "./ChartList";

const Sidebar = () => {
  const [searchTerm, setSearchTerm] = useState(""); // To manage the search term
  return (
    <div className="sidebar-container">
      <Logo />
      <SearchBar setSearchTerm={setSearchTerm} />
      <AddButton />
      <ChartList searchTerm={searchTerm} />
    </div>
  );
};

export default Sidebar;
