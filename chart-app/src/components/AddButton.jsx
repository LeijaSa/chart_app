import React, { useState } from "react";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import AddChart from "./AddChart";

const AddButton = ({ onAddChart }) => {
  const [open, setOpen] = useState(false);

  return (
    <>
      <Button
        variant="contained"
        color="primary"
        startIcon={<AddIcon />}
        sx={{ margin: "5px" }}
        onClick={() => setOpen(true)}
      >
        ADD CHART
      </Button>

      <AddChart
        open={open}
        onClose={() => setOpen(false)}
        onAddChart={onAddChart}
      />
    </>
  );
};

export default AddButton;
