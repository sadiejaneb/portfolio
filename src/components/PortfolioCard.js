import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import { Container } from "@mui/material";
import homePage from "../images/home_screenshot.png";

export default function PortfolioCard() {
  return (
    <Container sx={{ mt: 5 }}>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={6}>
          <Container>
            <Card sx={{ maxWidth: 500 }}>
              <CardMedia sx={{ height: 300 }} image={homePage} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Movie Search Web App
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  This is a simple web application that allows users to search
                  for movies and view their details.
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  href="https://github.com/sadiejaneb/moviesearchapp"
                  target="_blank"
                >
                  GitHub
                </Button>
                <Button size="small" href="/project1" target="_blank">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Container>
        </Grid>
        <Grid item xs={6}>
          <Container>
            <Card sx={{ maxWidth: 500 }}>
              <CardMedia
                sx={{ height: 300 }}
                image="https://images.unsplash.com/photo-1614332287897-cdc485fa562d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80"
                title="Project2"
              />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Coming Soon
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Current project: Python Django login system with django-allauth and Tailwind CSS.
                  Check back soon for updates!
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  href="https://github.com/sadiejaneb/Django_Login"
                  target="_blank"
                >
                  GitHub
                </Button>
                <Button size="small" href="/" target="_blank">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Container>
        </Grid>
      </Grid>
    </Container>
  );
}
