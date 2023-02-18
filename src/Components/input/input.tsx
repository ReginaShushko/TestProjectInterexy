import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

export default function Input() {
  return (
    <Box
      component="form"
      sx={{
        "& > :not(style)": { m: 1, width: "15ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="input" label="Item" variant="filled" />
    </Box>
  );
}