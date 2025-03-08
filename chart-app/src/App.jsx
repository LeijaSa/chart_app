import "./App.css";
import Sidebar from "./components/Sidebar";
import "./App.css";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const App = () => (
  <div className="container">
    <div className="content-box">
      <h3>No charts created yet!</h3>
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        sx={{ margin: "5px" }}
      >
        ADD CHART
      </Button>
    </div>
  </div>
);

export default App;
