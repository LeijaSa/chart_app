import { useState } from "react";
import {
  Drawer,
  List,
  ListItem,
  ListItemText,
  IconButton,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { Link } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const sidebarContent = (
    <div className="sidebar">
      <p>pöö</p>
    </div>
  );

  return <div className="container"></div>;
};

export default Sidebar;
