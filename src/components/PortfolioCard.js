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
import login_zoom from "../images/login_zoom.png";
import project4_1 from "../images/project4_1.png";
import project5_2 from "../images/project5_2.png";
import project3 from "../images/project3.png";

function PortfolioCard() {
  return (
    <Container sx={{ mt: 5 }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6}>
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
        <Grid item xs={12} sm={6}>
          <Container>
            <Card sx={{ maxWidth: 500 }}>
              <CardMedia sx={{ height: 300 }} image={login_zoom} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Python Django Blog and Login System
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Python Django-based web application and blog that uses
                  django-allauth for secure user logins with hashing and
                  salting.
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
                <Button size="small" href="/project2" target="_blank">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Container>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Container>
            <Card sx={{ maxWidth: 500 }}>
              <CardMedia sx={{ height: 300 }} image={project3} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Color Match Game
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  An engaging color matching mobile game using Flutter and Dart,
                  incorporating AudioPlayer and Shared Preferences for state
                  management and user preferences.
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  href="https://github.com/sadiejaneb/color_match"
                  target="_blank"
                >
                  GitHub
                </Button>
                <Button size="small" href="/project3" target="_blank">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Container>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Container>
            <Card sx={{ maxWidth: 500 }}>
              <CardMedia sx={{ height: 300 }} image={project4_1} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Unity First Person Shooter
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  First person shooter game built in Unity using C#.
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  href="https://github.com/sadiejaneb/project3_icg"
                  target="_blank"
                >
                  GitHub
                </Button>
                <Button size="small" href="/project4" target="_blank">
                  Learn More
                </Button>
              </CardActions>
            </Card>
          </Container>
        </Grid>
        <Grid item xs={12} sm={6}>
          <Container>
            <Card sx={{ maxWidth: 500 }}>
              <CardMedia sx={{ height: 300 }} image={project5_2} />
              <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                  Whisker's Quest
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  A dynamic melee combat game in Unity, leveraging C# for
                  intricate scripting and animation. This project highlights an
                  advanced combat system, detailed character animations, and
                  immersive audio integration, providing a rich player
                  experience.
                </Typography>
              </CardContent>
              <CardActions>
                <Button
                  size="small"
                  href="https://github.com/sadiejaneb/whiskers-quest"
                  target="_blank"
                >
                  GitHub
                </Button>
                <Button size="small" href="/project5" target="_blank">
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

export default PortfolioCard;
