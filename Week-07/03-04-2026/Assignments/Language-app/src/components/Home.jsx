import { useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { Container, Typography, Card, CardContent } from "@mui/material";

const Home = () => {
  const { text } = useContext(LanguageContext);

  return (
    <Container sx={{ mt: 5 }}>
      <Card sx={{ borderRadius: 3, boxShadow: 4 }}>
        <CardContent>
          <Typography variant="h4" gutterBottom>
            {text.greeting}
          </Typography>

          <Typography variant="h6">
            {text.welcome}
          </Typography>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Home;