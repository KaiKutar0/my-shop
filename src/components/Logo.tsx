import { Box } from "@mui/material";
import React from "react";

function Logo() {
  return (
    <Box
    sx={{
        minWidth: '40px',
        minHeight: '40px',
    }}>
      <img src="src/assets/img/logo.png" alt="hui"/>
    </Box>
  );
}

export default Logo;
