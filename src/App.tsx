import { Button, Card, Typography } from "@mui/material";
import React from "react";

interface BasicCardProps {
}

function App() {
  return (
    <>
      <Card >
        <Typography>Hello world!</Typography>
        <Button variant="contained">Click me!</Button>
      </Card>
    </>
  );
}

export default App;
