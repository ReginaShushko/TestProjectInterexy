import * as React from "react";

//============ MAterial UI ==========//
import Box from "@mui/material/Box";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

export default function Dropdown() {
  const [link, setLink] = React.useState("");

  const handleChange = (event: SelectChangeEvent) => {
    setLink(event.target.value as string);
  };

  return (
    <Box sx={{ minWidth: 120, padding: 1 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">DROPDOWN</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={link}
          label="Link"
          onChange={handleChange}
        >
          <MenuItem value={10}>Link 1</MenuItem>
          <MenuItem value={20}>Link 2</MenuItem>
          <MenuItem value={30}>Link 3</MenuItem>
        </Select>
      </FormControl>
    </Box>
  );
}