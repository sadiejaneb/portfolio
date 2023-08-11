import React from "react";
import { Container } from "@mui/material";
import Box from "@mui/material/Box";
import BasicAccordion from "../components/ResumeAccord";
import { Grid } from "@mui/material/";
import { Typography } from "@mui/material/";
import ResumeDownload from "../components/ResumeDownload";

const Resume = () => (
  <Container maxwidth="xl">
    <Grid
      container
      spacing={{ xs: 2, md: 3 }}
      columns={{ xs: 4, sm: 8, md: 12 }}
    >
      <Container sx={{ mt: 5 }}>
        <Typography variant="h1" align="center">
          Resume
        </Typography>
      </Container>
      <Box>
        <ResumeDownload />
        <BasicAccordion />
      </Box>
    </Grid>
  </Container>
);

export default Resume;
