import { Container } from "@mui/material";
import * as React from "react";
import self from "../images/self.png";
import pythonIcon from "../images/python.png";
import unixIcon from "../images/unixIcon.png";
import { Box } from "@mui/material";
import { Typography } from "@mui/material";
import {
  Code as CodeIcon,
  GitHub as GitHubIcon,
  Language as JavaScriptIcon,
} from "@mui/icons-material";
import ApiIcon from "@mui/icons-material/Api";
import { useTheme } from "@mui/material/styles";

function Home() {
  const theme = useTheme();

  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "70vh",
        marginTop: "5vh",
      }}
    >
      <Typography variant="h2" align="center" sx={{ marginBottom: "1rem" }}>
        Sadie-Jane Buytendorp
      </Typography>
      <Typography
        variant="h5" // Use an appropriate heading variant
        align="center"
        color="textSecondary"
        sx={{ marginBottom: "2rem" }}
      >
        Full-Stack Web Developer
      </Typography>
      <Box
        component="img"
        src={self}
        alt="Profile"
        width="300px"
        height="auto"
        sx={{ borderRadius: "50%", marginBottom: "1rem" }}
      />
      <Box sx={{ m: 5, display: "flex", alignItems: "center" }}>
        <CodeIcon
          sx={{
            fontSize: 40,
            color: theme.palette.primary.main,
            marginRight: "1rem",
          }}
        />
        <ApiIcon
          sx={{
            fontSize: 40,
            color: theme.palette.primary.main,
            marginRight: "1rem",
          }}
        />
        <GitHubIcon
          sx={{
            fontSize: 40,
            color: theme.palette.primary.main,
            marginRight: "1rem",
          }}
        />
        <JavaScriptIcon
          sx={{
            fontSize: 40,
            color: theme.palette.primary.main,
            marginRight: "1rem",
          }}
        />
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <img
            src={pythonIcon}
            alt="Python"
            width="40px"
            height="40px"
            style={{ marginRight: "1rem" }}
            sx={{ color: theme.palette.primary.main, marginRight: "1rem" }}
          />
          <img
            src={unixIcon}
            alt="unix"
            width="37px"
            height="37px"
            style={{ marginRight: "1rem" }}
          />
        </Box>
      </Box>
    </Container>
  );
}

export default Home;
