import AddButton from "./AddButton";
import SearchBar from "./Searchbar";

const Sidebar = () => {
  return (
    <div className="sidebar-container">
      <h2>ChartApp</h2>
      <SearchBar />
      <AddButton />
    </div>
  );
};

export default Sidebar;
