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

function ProjectThree() {
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
                Color Match Game
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
                  An engaging color matching mobile game using Flutter and Dart,
                  incorporating advanced functionalities for state management
                  and user preferences. The app features an intuitive gameplay
                  experience with customizable settings and immersive audio
                  integration, providing a user-friendly and interactive gaming
                  environment.
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
                    Level Progression and State Management:
                  </Typography>
                  <Typography align="left" variant="body1" sx={{ mb: 2 }}>
                    Implemented Shared Preferences to persistently store user
                    progress, including the current level and color match data,
                    ensuring a seamless gaming experience.
                  </Typography>
                  <Typography align="left" variant="subtitle1">
                    Customizable User Settings:
                  </Typography>
                  <Typography align="left" variant="body1" sx={{ mb: 2 }}>
                    Utilized Shared Preferences to save user's achievements and
                    music preferences, allowing for a personalized gameplay
                    experience.
                  </Typography>
                  <Typography align="left" variant="subtitle1">
                    Dynamic Audio Integration:
                  </Typography>
                  <Typography align="left" variant="body1" sx={{ mb: 2 }}>
                    Integrated the AudioPlayer plugin to add background music,
                    giving users control over audio playback, volume adjustment,
                    and song selection, enhancing the overall game atmosphere.
                  </Typography>
                  <Typography align="left" variant="subtitle1">
                    Logo and Buttons:
                  </Typography>
                  <Typography align="left" variant="body1" sx={{ mb: 2 }}>
                    Crafted a distinctive Color Match logo featured prominently
                    on the main page. Integrated music and pause icons
                    seamlessly into the UI for a cohesive visual experience.
                  </Typography>
                  <Typography align="left" variant="subtitle1">
                    Music and Pause Menus:
                  </Typography>
                  <Typography align="left" variant="body1" sx={{ mb: 2 }}>
                    Used dialogs for the music settings menu and the pause menu,
                    allowing for a more immersive experience.
                  </Typography>
                  <Typography align="left" variant="subtitle1">
                    Difficulty Toggle:
                  </Typography>
                  <Typography align="left" variant="body1" sx={{ mb: 2 }}>
                    Created two difficulties for the game, easy and hard, with
                    different thresholds for variable gameplay.
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
                  Flutter:
                </Typography>
                <Typography align="left" variant="body1" sx={{ mb: 2 }}>
                  The powerful framework that enables cross-platform mobile app
                  development with expressive and flexible UI.
                </Typography>
                <Typography align="left" variant="subtitle1">
                  Dart:
                </Typography>
                <Typography align="left" variant="body1" sx={{ mb: 2 }}>
                  The programming language for building Flutter applications.
                </Typography>
                <Typography align="left" variant="subtitle1">
                  Shared Preferences:
                </Typography>
                <Typography align="left" variant="body1" sx={{ mb: 2 }}>
                  Flutter plugin employed for persistent storage, ensuring that
                  user preferences and progress are saved between gaming
                  sessions.
                </Typography>
                <Typography align="left" variant="subtitle1">
                  AudioPlayer:
                </Typography>
                <Typography align="left" variant="body1" sx={{ mb: 2 }}>
                  Integrated to provide a dynamic audio experience, enhancing
                  the overall gaming atmosphere with background music.
                </Typography>
                <Typography align="left" variant="subtitle1">
                  Version Control:
                </Typography>
                <Typography align="left" variant="body1" sx={{ mb: 2 }}>
                  GitHub was used for version control and collaboration between team members.
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
                  While building this app I learned how to use AudioPlayer to
                  control audio playback, volume adjustment, and song selection.
                  I also learned how to used Shared Preferences for saving small
                  bits of data persistently instead of using a database. Shared
                  preferences are used to save the user's music settings such as
                  volume and song selection so that when the user restarts the
                  app the music settings are saved. Otherwise, the default song
                  plays at full blast every time the user opens the app. Also,
                  to pause the app music shared preferences had to be used so
                  that the music would resume with the same settings as well.
                  Shared preferences are also used to save the user's progress
                  in the game so that when the user restarts the app they can
                  pick up where they left off. This was a fun project to work on
                  and I learned a lot about Flutter and cross-platform
                  development.
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
                href="https://github.com/sadiejaneb/Django_Login"
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

export default ProjectThree;
