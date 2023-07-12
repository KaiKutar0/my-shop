import { Card, Container, Typography } from "@mui/material";
import { cardStyle } from "../components/styles";

function Contacts() {
  return (
    <>
      <Container sx={cardStyle}>
        <Card>
          <Typography>Tel: 1124234235</Typography>
        </Card>

        <Card>
          <Typography>Hello World!</Typography>
        </Card>
      </Container>
    </>
  );
}

export default Contacts;
