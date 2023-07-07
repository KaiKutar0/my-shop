import { Stack, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CallIcon from "@mui/icons-material/Call";

function NavBar() {
  return (
    <>
      <Stack direction="row" spacing={2}>
        <RouterLink to="/">
          <Typography>Home</Typography>
          <HomeIcon />
        </RouterLink>
        <RouterLink to="/about">
          <Typography>About</Typography>
          <InfoIcon />
        </RouterLink>
        <RouterLink to="/contacts">
          <Typography>Contacts</Typography>
          <CallIcon />
        </RouterLink>
      </Stack>
    </>
  );
}

export default NavBar;
