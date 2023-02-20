import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";
import { useState } from "react";
import { Alert } from "@mui/material";

export default function WebworkerButton() {
  const [result, setResult] = useState("");
  const [isLoadong, setIsLoading] = useState(false);

  const calcSum = () => {
    setResult("");
    setIsLoading(true);

    const worker = new Worker(
      new URL("../../Components/button/worker.ts", import.meta.url)
    );
    worker.postMessage(null);

    worker.onmessage = function (e) {
      setIsLoading(false);
      setResult(e.data);
    };
  };

  const changeBgColor = () => {
      if (document.body.style.background !== "green")
        document.body.style.background = "green";
      else document.body.style.background = "blue";
  }

  return (
    <Stack spacing={1} direction="column">
      <Button onClick={calcSum} className="sum__button" variant="contained">
        Calculate sum
      </Button>
      <Alert severity="success" color="info">
        {result}
      </Alert>
      <Button
        onClick={changeBgColor}
        className="bg__button"
        variant="contained"
      >
        Change background
      </Button>
    </Stack>
  );
}
