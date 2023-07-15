import { Card, Container, Typography } from "@mui/material";

import styles from './Home.module.css'
import { Padding } from "@mui/icons-material";

function Home() {
  return (
    <>
      <Container sx={{
        display: 'flex',
        flexDirection: 'row',
        margin: '10px',
        padding: '100px',
        background: '#006080',
        borderRadius: '10px'
      }}>
        <Card className={styles.card}>
          <Typography>Home</Typography>
        </Card>

        <Card className={styles.card}>
          <Typography>Hello World!</Typography>
        </Card>
      </Container>
    </>
  );
}

export default Home;
