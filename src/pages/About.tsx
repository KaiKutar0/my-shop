import { Card, Container, Typography } from "@mui/material";
import { cardStyle } from "../components/styles";

function About() {
  return (
    <>
      <Container sx={cardStyle}>
        <Card>
          <Typography>About</Typography>
        </Card>

        <Card>
          <Typography>Hello World!</Typography>
        </Card>
      </Container>
    </>
  );
}

export default About;
