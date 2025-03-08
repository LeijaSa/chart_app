import AddButton from "./AddButton";
import Logo from "./Logo";
import SearchBar from "./Searchbar";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <Logo />
      <SearchBar />
      <AddButton />
    </div>
  );
};

export default Sidebar;
