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

function ProjectTwo() {
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
                Python Django Blog and Login System
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
                  The application is a Python Django-based web platform and blog
                  that allows users to interact in a social-media-like
                  environment. Users can log in securely, post content, and
                  interact with each other's posts. It utilizes django-allauth
                  for secure user logins with hashing and salting.
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
                    Secure User Authentication:
                  </Typography>
                  <Typography align="left" variant="body1" sx={{ mb: 2 }}>
                    Uses django-allauth to securely manage user sessions and
                    authentication with hashing and salting.
                  </Typography>
                  <Typography align="left" variant="subtitle1">
                    Dynamic Interactions:
                  </Typography>
                  <Typography align="left" variant="body1" sx={{ mb: 2 }}>
                    Utilizes jQuery and AJAX for client-side scripting, allowing
                    real-time actions like posting, following, and toggling
                    modals without requiring a full page reload.
                  </Typography>
                  <Typography align="left" variant="subtitle1">
                    User Posts:
                  </Typography>
                  <Typography align="left" variant="body1" sx={{ mb: 2 }}>
                    Allows authenticated users to create and manage their own
                    posts, utilizing AJAX for real-time updates.
                  </Typography>
                  <Typography align="left" variant="subtitle1">
                    Feed View:
                  </Typography>
                  <Typography align="left" variant="body1" sx={{ mb: 2 }}>
                    Displays all posts in a single feed called All Posts, as
                    well as customizing the user's home page to show only the
                    posts of those they are following.
                  </Typography>
                  <Typography align="left" variant="subtitle1">
                    User Profile:
                  </Typography>
                  <Typography align="left" variant="body1" sx={{ mb: 2 }}>
                    Users have their own profile page that displays their posts
                    as well as showing the number of followers and total number
                    of posts. Users can follow and unfollow other users from
                    their profile page.
                  </Typography>
                  <Typography align="left" variant="subtitle1">
                    Modular Templates:
                  </Typography>
                  <Typography align="left" variant="body1">
                    Uses Django's templating system to modularize the HTML code,
                    making it easier to manage and update.
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
                  Python:
                </Typography>
                <Typography align="left" variant="body1" sx={{ mb: 2 }}>
                  The backend is entirely written in Python, leveraging the
                  Django web framework.
                </Typography>
                <Typography align="left" variant="subtitle1">
                  Django:
                </Typography>
                <Typography align="left" variant="body1" sx={{ mb: 2 }}>
                  Used for server-side logic, including views and models, and
                  also for templating HTML.
                </Typography>
                <Typography align="left" variant="subtitle1">
                  jQuery and AJAX:
                </Typography>
                <Typography align="left" variant="body1" sx={{ mb: 2 }}>
                  Implemented for client-side scripting to create dynamic
                  real-time updates. Includes CSRF token handling for AJAX
                  requests to enhance security.
                </Typography>
                <Typography align="left" variant="subtitle1">
                  Tailwind CSS:
                </Typography>
                <Typography align="left" variant="body1" sx={{ mb: 2 }}>
                  Integrated for consistent styling.
                </Typography>
                <Typography align="left" variant="subtitle1">
                  django-allauth:
                </Typography>
                <Typography align="left" variant="body1">
                  Integrated for secure user authentication, session management,
                  and other account-related functionalities.
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
                  height: { xs: 300, md: 600 }, // Define different heights for xs and md screen sizes
                  backgroundSize: "contain", // Adjust the image's display mode
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
                  The main challenges involved getting up to speed with Django's
                  unique model-view-template architecture and learning how to
                  effectively use django-allauth for user authentication. The
                  inclusion of jQuery and AJAX also added complexity, but
                  greatly improved the site's usability and interactivity.
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

export default ProjectTwo;
