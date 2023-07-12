import {
  AppBar,
  Box,
  Container,
  Menu,
  MenuItem,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import CallIcon from "@mui/icons-material/Call";

function NavBar() {
  return (
    <>
      <AppBar>
        <Container>
          <Stack
            direction="row"
            spacing={2}
            justifyItems="space-between"
            sx={{
              display: "flex",
            }}
          >
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
        </Container>
      </AppBar>
    </>
  );
}

export default NavBar;
