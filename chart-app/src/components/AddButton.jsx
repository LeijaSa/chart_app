import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

const AddButton = () => (
  <Button
    variant="contained"
    color="primary"
    startIcon={<AddIcon />}
    sx={{ margin: "5px" }}
  >
    ADD CHART
  </Button>
);

export default AddButton;
