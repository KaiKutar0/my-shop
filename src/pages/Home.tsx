import { Card, Container, Typography } from "@mui/material";
import { cardStyle } from "../components/styles";

function Home() {
  return (
    <>
      <Container sx={cardStyle}>
        <Card>
          <Typography>Home</Typography>
        </Card>

        <Card>
          <Typography>Hello World!</Typography>
        </Card>
      </Container>
    </>
  );
}

export default Home;
