import React from "react";
import PortfolioCard from "../components/PortfolioCard";
import { Container, Typography } from "@mui/material";
import { useTheme } from "@mui/material/styles";

function Portfolio() {
  const theme = useTheme();

  return (
    <Container maxWidth="xl">
      <Container sx={{ mb: 5 }}>
        <Typography
          variant="h1"
          align="center"
          sx={{
            borderBottom: `2px solid ${theme.palette.primary.main}`,
            paddingBottom: "0.5rem",
          }}
        >
          Projects
        </Typography>
        <PortfolioCard />
      </Container>
    </Container>
  );
}

export default Portfolio;
