import { Container } from "@mui/material";
import * as React from "react";
import { Grid, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardMedia from "@mui/material/CardMedia";
import homePage from "../images/home_screenshot.png";
import searchPage from "../images/search_screenshot.png";
import detailsPage from "../images/results_screenshot.png";
import BreadcrumbsComponent from "../components/Breadcrumbs";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import { useTheme } from "@mui/material/styles";

function ProjectOne() {
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
                Movie Search Web App
              </Typography>
            </Container>
          </Grid>
          <Grid item xs={12}>
            <Container id="description" sx={{ p: 0 }}></Container>
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
                src={homePage}
                alt="HomePage"
                style={{ width: "100%", height: "auto", display: "block" }}
              />
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Container>
              <Box p={8}>
                <Typography align="center" variant="h3" sx={{ mb: 3 }}>
                  Description
                </Typography>

                <Typography align="left" variant="body1">
                  The Movie Search Tool is a web application that allows users
                  to search for information about movies, view movie details,
                  and explore a wide variety of films. The application
                  integrates with The Movie Database (TMDb) API to fetch movie
                  data, and it provides users with an intuitive and
                  user-friendly interface for browsing and discovering movies.
                </Typography>
              </Box>
            </Container>
          </Grid>
          <Grid item xs={12}>
            <Container id="key_features"></Container>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: 500, mt: 15 }}>
              <CardMedia
                sx={{ height: 400 }}
                image={searchPage}
                title="SearchPage"
              />
            </Card>
          </Grid>

          <Grid item xs={8}>
            <Container>
              <Container>
                <Box p={8}>
                  <Typography align="center" variant="h3" sx={{ mb: 3 }}>
                    Key Features
                  </Typography>
                  <Typography align="left" variant="subtitle1">
                    Search Functionality:
                  </Typography>
                  <Typography align="left" variant="body1" sx={{ mb: 2 }}>
                    Users can search for movies using keywords, and the
                    application fetches relevant movie information from the TMDb
                    API in real-time.
                  </Typography>
                  <Typography align="left" variant="subtitle1">
                    Detailed Movie Views:
                  </Typography>
                  <Typography align="left" variant="body1" sx={{ mb: 2 }}>
                    Each movie listing provides a detailed view with information
                    such as the title, overview, release date, and a poster
                    image.
                  </Typography>
                  <Typography align="left" variant="subtitle1">
                    Responsive Design:
                  </Typography>
                  <Typography align="left" variant="body1" sx={{ mb: 2 }}>
                    The application is designed with responsiveness in mind,
                    ensuring a seamless experience across various devices and
                    screen sizes.
                  </Typography>
                  <Typography align="left" variant="subtitle1">
                    Dynamic Routing:
                  </Typography>
                  <Typography align="left" variant="body1" sx={{ mb: 2 }}>
                    Utilizing the React Router library, the application features
                    dynamic routing for different views, including the home
                    page, search results, and individual movie details.
                  </Typography>
                  <Typography align="left" variant="subtitle1">
                    Custom Styling:
                  </Typography>
                  <Typography align="left" variant="body1">
                    Leveraged the power of the RESTful Movie Database (TMDB) API
                    to dynamically fetch and display up-to-date movie data,
                    adhering to REST principles.
                  </Typography>
                </Box>
              </Container>
            </Container>
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
                  React:
                </Typography>
                <Typography align="left" variant="body1" sx={{ mb: 2 }}>
                  Front-end library used to build the user interface and manage
                  components.
                </Typography>
                <Typography align="left" variant="subtitle1">
                  React Router:
                </Typography>
                <Typography align="left" variant="body1" sx={{ mb: 2 }}>
                  Used for creating dynamic routing and navigation within the
                  application.
                </Typography>
                <Typography align="left" variant="subtitle1">
                  Material-UI:
                </Typography>
                <Typography align="left" variant="body1" sx={{ mb: 2 }}>
                  Provided a set of pre-styled components and a responsive grid
                  system for consistent design.
                </Typography>
                <Typography align="left" variant="subtitle1">
                  TMDb API:
                </Typography>
                <Typography align="left" variant="body1">
                  Integrated to fetch movie data including titles, posters,
                  overviews, and release dates.
                </Typography>
              </Box>
            </Container>
          </Grid>
          <Grid item xs={4}>
            <Card sx={{ maxWidth: 500, mt: 10 }}>
              <CardMedia
                sx={{ height: 400 }}
                image={detailsPage}
                title="DetailsPage"
              />
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Container>
              <Box p={8}>
                <Typography align="left" variant="h3" sx={{ mb: 3 }}>
                  Challenges and Learnings:
                </Typography>
                <Typography align="left" variant="body1">
                  Building the Movie Search Tool presented opportunities to
                  refine my skills in React, API integration, and responsive
                  design. Implementing dynamic routing for different views
                  allowed me to understand how to create a seamless user
                  experience and manage complex application states.
                </Typography>
              </Box>
            </Container>
          </Grid>

          <Grid item xs={12}>
            <Container sx={{ mb: 5 }}>
              <Button
                href="https://github.com/sadiejaneb/moviesearchapp"
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

export default ProjectOne;
