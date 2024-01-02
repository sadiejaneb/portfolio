import { Container } from "@mui/material";
import * as React from "react";
import { Grid, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import all_posts from "../images/all_posts.png";
import new_post from "../images/new_post.png";
import unauth_nav from "../images/unauth_nav.png";
import login_page from "../images/login_page.png";
import profile_followed from "../images/profile_followed.png";
import user_not_followed from "../images/user_not_followed.png";
import register_page from "../images/register_page.png";
import BreadcrumbsComponent from "../components/Breadcrumbs";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

function ProjectFive() {
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
                Whisker's Quest
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
                  A dynamic melee combat game in Unity, leveraging C# for
                  intricate scripting and animation. This project highlights an
                  advanced combat system, detailed character animations, and
                  immersive audio integration, providing a rich player
                  experience. Special attention was given to creating responsive
                  NPC behaviors and customizable player interactions.
                </Typography>
              </Box>
            </Container>
          </Grid>
          <Grid item xs={12}>
            <Box align="center">
              <Card sx={{ maxWidth: "auto" }}>
                <CardMedia
                  sx={{
                    height: { xs: 300, md: 600 },
                    backgroundSize: "contain",
                  }}
                  image={all_posts}
                  title="AllPosts"
                />
              </Card>
            </Box>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: "auto" }}>
              <CardMedia
                sx={{ height: 500 }}
                image={login_page}
                title="LoginPage"
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
                    Robust Melee Combat Mechanics:
                  </Typography>
                  <Typography align="left" variant="body1" sx={{ mb: 2 }}>
                    Implemented a detailed combat system enabling punching and
                    blocking actions, with blocking reducing damage taken,
                    enhancing the strategic depth of gameplay.
                  </Typography>
                  <Typography align="left" variant="subtitle1">
                    Sophisticated Animation System:
                  </Typography>
                  <Typography align="left" variant="body1" sx={{ mb: 2 }}>
                    Developed animators with event triggers for player and three
                    types of NPCs, ensuring fluid and responsive combat
                    animations.
                  </Typography>
                  <Typography align="left" variant="subtitle1">
                    Interactive NPC Behaviors:
                  </Typography>
                  <Typography align="left" variant="body1" sx={{ mb: 2 }}>
                    DScripted NPCs to exhibit varied attack patterns and death
                    animations, creating a diverse and challenging combat
                    environment.
                  </Typography>
                  <Typography align="left" variant="subtitle1">
                    Damage and Health Management:
                  </Typography>
                  <Typography align="left" variant="body1" sx={{ mb: 2 }}>
                    Scripted a comprehensive health and damage system for both
                    the player and NPCs, contributing to the game's realism and
                    challenge.
                  </Typography>
                  <Typography align="left" variant="subtitle1">
                    PowerUp System:
                  </Typography>
                  <Typography align="left" variant="body1" sx={{ mb: 2 }}>
                    Scripted a temporary power up system that gives the player
                    temporary increased damage for 10 seconds after picking up a
                    power up object.
                  </Typography>
                </Box>
              </Container>
            </Container>
          </Grid>
          <Grid item xs={12}>
            <Card sx={{ maxWidth: "auto" }}>
              <CardMedia
                sx={{ height: 600 }}
                image={user_not_followed}
                title="Profile Page"
              />
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Container id="technology" sx={{ p: 2 }}></Container>
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
                  Unity Animation System
                </Typography>
                <Typography align="left" variant="body1" sx={{ mb: 2 }}>
                  Unity's Animation System allowed for the creation of dynamic
                  and visually engaging character and object animations. Used to
                  bring characters to life, including player actions, enemy
                  behaviors, and other interactive elements.
                </Typography>
                <Typography align="left" variant="subtitle1">
                  Version Control:
                </Typography>
                <Typography align="left" variant="body1" sx={{ mb: 2 }}>
                  GitHub was used for version control and collaboartion with
                  team members.
                </Typography>
              </Box>
            </Container>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: "auto", mt: 10 }}>
              <CardMedia
                sx={{ height: 500 }}
                image={profile_followed}
                title="ProfilePage"
              />
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card sx={{ maxWidth: "100%", mt: 2 }}>
              <CardMedia
                sx={{
                  height: { xs: 300, md: 600 },
                  backgroundSize: "contain",
                }}
                image={new_post}
                title="NewPost"
              />
            </Card>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: "auto", mt: 0 }}>
              <CardMedia
                sx={{ height: 500 }}
                image={register_page}
                title="RegisterPage"
              />
            </Card>
          </Grid>
          <Grid item xs={8}>
            <Container>
              <Box p={8}>
                <Typography align="left" variant="h3" sx={{ mb: 3 }}>
                  Challenges and Learnings:
                </Typography>
                <Typography align="left" variant="body1">
                  This project was a great opportunity to learn about the Unity Animation System.  I learned about scripting animations with event triggers, and how to use them to create responsive and dynamic animations.  For example, I used speed to control the animation of walking or running, an event trigger to control the player's punch animation, and a boolean to control the player's blocking animation. 
                </Typography>
              </Box>
              <Card sx={{ ml: 25, maxWidth: 220, mt: 0 }}>
                <CardMedia
                  sx={{ height: 300 }}
                  image={unauth_nav}
                  title="RegisterPage"
                />
              </Card>
            </Container>
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

export default ProjectFive;
