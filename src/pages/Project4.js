import { Container } from "@mui/material";
import * as React from "react";
import { Grid, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import project4_1 from "../images/project4_1.png";
import project4_2 from "../images/project4_2.jpg";
import project4_3 from "../images/project4_3.png";
import BreadcrumbsComponent from "../components/Breadcrumbs";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

function ProjectFour() {
  const theme = useTheme();

  return (
    <div className="App">
      <Container
        sx={{ mt: 1 }}
        style={{
          position: "fixed",
          zIndex: 10,
        }}
      >
        <Paper
          sx={{
            backgroundColor: theme.palette.primary.main,
            width: "fit-content",
            p: 1,
          }}
        >
          <Typography variant="subtitle1">
            <BreadcrumbsComponent />
          </Typography>
        </Paper>
      </Container>
      <Container maxWidth="xl">
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          <Grid item xs={12}>
            <Container sx={{ p: 3 }}></Container>
          </Grid>
          <Grid item xs={12}>
            <Container>
              <Typography
                color="secondary.main"
                variant="h2"
                sx={{
                  borderBottom: `2px solid ${theme.palette.primary.main}`,
                  pb: "0.5rem",
                }}
              >
                Unity First Person Shooter
              </Typography>
            </Container>
          </Grid>
          <Grid item xs={12}>
            <Container id="description" sx={{ p: 0 }}></Container>
          </Grid>
          <Grid item xs={12}>
            <Container>
              <Box p={8}>
                <Typography align="center" variant="h3" sx={{ mb: 3 }}>
                  Description
                </Typography>

                <Typography align="left" variant="body1">
                  A first person shooter game in Unity with C#, focusing on
                  advanced scripting to create a dynamic environment. Focused on
                  scripting enemy and player behavior as well as item collection
                  and user interface.
                </Typography>
              </Box>
            </Container>
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card sx={{ maxWidth: 800 }}>
              <img
                src={project4_1}
                alt="Screenshot1"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: "auto", mt: 25 }}>
              <CardMedia
                sx={{ height: 500 }}
                image={project4_3}
                title="RPGShoot"
              />
            </Card>
          </Grid>
          <Grid item xs={8}>
            <Container>
              <Container id="key_features"></Container>
              <Container>
                <Box p={8}>
                  <Typography align="center" variant="h3" sx={{ mb: 3 }}>
                    Key Features
                  </Typography>
                  <Typography align="left" variant="subtitle1">
                    Weapon Interaction Mechanics:
                  </Typography>
                  <Typography align="left" variant="body1" sx={{ mb: 2 }}>
                    Implemented OnTrigger methods for seamless pickup of two
                    distinct types of firearms, as well as ammunition pickups,
                    enhancing the interactive gameplay experience.
                  </Typography>
                  <Typography align="left" variant="subtitle1">
                    Advanced Combat System:
                  </Typography>
                  <Typography align="left" variant="body1" sx={{ mb: 2 }}>
                    Scripted sophisticated enemy and player interactions,
                    including bullet impact detection using both hit scan
                    techniques for instant-hit weapons and Unity's physics
                    engine for projectile dynamics in rocket weapons.
                  </Typography>
                  <Typography align="left" variant="subtitle1">
                    Player Health and Ammo UI:
                  </Typography>
                  <Typography align="left" variant="body1" sx={{ mb: 2 }}>
                    Developed a user interface that dynamically displays player
                    health, ammunition levels for each weapon, ammo inventory,
                    and the number of enemies eliminated, contributing to an
                    engaging game experience.
                  </Typography>
                  <Typography align="left" variant="subtitle1">
                    Reload Mechanics:
                  </Typography>
                  <Typography align="left" variant="body1" sx={{ mb: 2 }}>
                    Programmed a realistic reload system that checks the
                    player's inventory for available bullets and replenishes
                    ammunition up to a defined limit, adding a strategic layer
                    to weapon management.
                  </Typography>
                  <Typography align="left" variant="subtitle1">
                    Responsive Enemy AI:
                  </Typography>
                  <Typography align="left" variant="body1">
                    Scripted enemy behaviors to react to player actions and
                    bullet impacts, creating a challenging and responsive combat
                    environment.
                  </Typography>
                </Box>
              </Container>
            </Container>
          </Grid>
          <Grid item xs={12}>
            <Container id="technology"></Container>
          </Grid>
          <Grid item xs={8}>
            <Container>
              <Box p={8}>
                <Typography align="left" variant="h3" sx={{ mb: 3 }}>
                  Technologies Used:
                </Typography>
                <Typography align="left" variant="subtitle1">
                  Unity:
                </Typography>
                <Typography align="left" variant="body1" sx={{ mb: 2 }}>
                  A powerful and versatile game development engine. Used to
                  develop this 3D first person shooter game.
                </Typography>
                <Typography align="left" variant="subtitle1">
                  C#:
                </Typography>
                <Typography align="left" variant="body1" sx={{ mb: 2 }}>
                  C# (C Sharp) served as the primary programming language for
                  scripting player, enemy, and object behaviors, leveraging
                  Unity's API for seamless integration.
                </Typography>
                <Typography align="left" variant="subtitle1">
                  Unity Physics Engine:
                </Typography>
                <Typography align="left" variant="body1" sx={{ mb: 2 }}>
                  A crucial component of the Unity game engine responsible for
                  simulating realistic physics interactions. Applied to simulate
                  bullet and rocket physics, enhancing the authenticity of
                  in-game projectile movements.
                </Typography>
                <Typography align="left" variant="subtitle1">
                  Version Control:
                </Typography>
                <Typography align="left" variant="body1" sx={{ mb: 2 }}>
                  GitHub was used for version control.
                </Typography>
              </Box>
            </Container>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: "auto", mt: 23 }}>
              <CardMedia sx={{ height: 300 }} image={project4_2} title="C#" />
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Container>
              <Box p={8}>
                <Typography align="center" variant="h3">
                  Challenges and Learnings:
                </Typography>
                <Typography align="left" variant="body1">
                  This project was a great opportunity to learn about the Unity
                  physics engine in order to create realistic projectile
                  movements and interactions.
                </Typography>
              </Box>
            </Container>
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Card sx={{ maxWidth: 800 }}>
              <img
                src={project4_3}
                alt="FullImage"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Container sx={{ mb: 5 }}>
              <Button
                href="https://github.com/sadiejaneb/project3_icg"
                target="_blank"
              >
                <GitHubIcon fontSize="large" />
              </Button>
            </Container>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}

export default ProjectFour;
