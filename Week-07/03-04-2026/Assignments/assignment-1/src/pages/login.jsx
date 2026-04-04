import { useState, useContext } from "react";
import { LanguageContext } from "../context/LanguageContext";
import { Container, TextField, Button, Typography, Card, CardContent } from "@mui/material";

const Login = ({ onLogin }) => {
  const { text } = useContext(LanguageContext);
  const [user, setUser] = useState("");

  return (
    <Container maxWidth="sm" sx={{ mt: 10 }}>
      <Card sx={{ borderRadius: 4, boxShadow: 5 }}>
        <CardContent>
          <Typography variant="h4" align="center" gutterBottom>
            {text.login}
          </Typography>

          <TextField
            fullWidth
            label={text.username}
            margin="normal"
            onChange={(e) => setUser(e.target.value)}
          />

          <TextField
            fullWidth
            label={text.password}
            type="password"
            margin="normal"
          />

          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 2 }}
            onClick={() => onLogin(user)}
          >
            {text.submit}
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Login;