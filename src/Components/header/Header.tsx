import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Dropdown from "../dropdown/dropdown";

export default function HeaderBar() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="sticky">
        <Toolbar variant="regular">
          <Typography variant="h6" color="inherit" component="div">
            HEADER
          </Typography>
          <Dropdown></Dropdown>
          <Dropdown></Dropdown>
          <Dropdown></Dropdown>
        </Toolbar>
      </AppBar>
    </Box>
  );
}