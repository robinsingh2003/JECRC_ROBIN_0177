import { useContext, useState } from "react";
import { LanguageContext } from "../context/LanguageContext";
import {
  Container,
  Typography,
  TextField,
  Button,
  Card,
  CardContent
} from "@mui/material";

const Dashboard = ({ user, onLogout }) => {
  const { text } = useContext(LanguageContext);
  const [name, setName] = useState("");
  const [message, setMessage] = useState("");

  return (
    <Container sx={{ mt: 5 }}>
      <Typography variant="h5">
        {text.welcome}, {user}
      </Typography>

      <Button sx={{ float: "right" }} onClick={onLogout}>
        {text.logout}
      </Button>

      <Card sx={{ mt: 4, p: 2 }}>
        <CardContent>
          <Typography variant="h6">{text.formTitle}</Typography>

          <TextField
            fullWidth
            label={text.name}
            margin="normal"
            onChange={(e) => setName(e.target.value)}
          />

          <TextField
            fullWidth
            label={text.message}
            margin="normal"
            onChange={(e) => setMessage(e.target.value)}
          />

          <Button variant="contained">
            {text.send}
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default Dashboard;