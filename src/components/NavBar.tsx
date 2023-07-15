import {
  AppBar,
  Box,
  Container,
  IconButton,
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
import Logo from "./Logo";

function NavBar() {
  return (
    <Box>
      <AppBar
        sx={{
          color: "red",
        }}
      >
        <Toolbar>
          <Container
            sx={{
              display: "flex",
              flexDirection: "row",
            }}
          >
            <IconButton>
              <Logo/>
            </IconButton>
            <Typography
              sx={{
                flexGrow: 1,
                color: 'white',
              }}
              variant="h3"
            >
              My WebSite
            </Typography>
            <Stack
              sx={{
                display: "flex",
                flexDirection: "row",
                alignContent: "center",
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
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default NavBar;
