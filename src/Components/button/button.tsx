import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

export default function WebworkerButton() {
  return (
    <Stack spacing={1} direction="column">
      <Button className="sum__button" variant="contained">Calculate sum</Button>
      <Button className="bg__button" variant="contained">Change background</Button>
    </Stack>
  );
}