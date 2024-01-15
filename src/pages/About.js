import React from "react";
import { useTheme } from "@mui/material/styles";
import { Grid } from "@mui/material/";
import { Typography } from "@mui/material/";
import { Container } from "@mui/material";
import { Box } from "@mui/material";
import catComputer from "../images/cat_computer.jpg";
import gradPicture from "../images/grad_picture.jpg";

function About() {
  const theme = useTheme();

  return (
    <Container>
      <Typography
        align="center"
        variant="h1"
        sx={{
          borderBottom: `2px solid ${theme.palette.primary.main}`,
          paddingBottom: "0.5rem",
          marginBottom: "1vh",
        }}
      >
        About me
      </Typography>
      <Grid
        container
        spacing={{ xs: 2, md: 3 }}
        columns={{ xs: 4, sm: 8, md: 12 }}
      >
        <Grid item xs={12}>
          <Typography
            color="secondary.main"
            variant="h3"
            sx={{ mb: "0.5vh" }}
            gutterBottom
          >
            Hello, I'm Sadie-Jane Buytendorp!
          </Typography>
          <Typography
            color="primary.main"
            variant="subtitle1"
            sx={{ mb: "0.5vh" }}
          >
            (Developer | PC Builder | Cat Enthusiast | Gamer)
          </Typography>
        </Grid>
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        ></Grid>
        <Grid item xs={4}>
          <Box
            component="img"
            src={gradPicture}
            alt="GradPicture"
            width="90%"
            sx={{ borderRadius: "10px" }}
          />
        </Grid>
        <Grid item xs={8}>
          <Typography align="left" variant="body1" sx={{ mt: "1vh" }}>
            I have a Bachelor of Science in Computer Science from Georgia State
            University and graduated cum laude. Looking to begin my career as a
            web or mobile app developer, I have multiple projects under my belt,
            including multiple full-stack web applications and mobile apps. I am
            very familiar with React and Node.js, and I have experience with
            HTML, CSS, JavaScript, C#, and Python. I am also familiar with SQL
            and NoSQL databases, including MySQL and MongoDB, as well as
            Firebase as a realtime database for mobile applications.
          </Typography>
          <Typography align="left" variant="body1" sx={{ mt: "2vh" }}>
            My mobile app experience includes Android Studio, Xcode, and
            cross-platform development with technologies such as Flutter.
          </Typography>
          <Typography align="left" variant="body1" sx={{ mt: "2vh" }}>
            Using multiple different REST APIs, I have created several different
            web applications, including a Pokemon finder, a Star Wars quiz game,
            and a Movie Search App.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Typography align="center" variant="body1" sx={{ mb: "2vh" }}>
            Although not shown in my portfolio, I have made web applications
            using AWS along with WordPress, Bootstrap, phpMyAdmin, and MySQL.
          </Typography>
          <Typography align="center" variant="body1" sx={{ mb: "2vh" }}>
            I have an ample amount of experience with GitHub for version control
            for web apps, mobile apps, and video games. Additionally, my joy of
            gaming has led me to learn Unity and C# to create my own games for
            fun.
          </Typography>
        </Grid>
        <Grid item xs={8}>
          <Typography
            color="secondary.main"
            variant="h3"
            sx={{ mt: "6vh" }}
            gutterBottom
          >
            My Personal Life
          </Typography>
          <Typography align="center" variant="body1" sx={{ mt: "5vh" }}>
            In my free time, I enjoy playing video games, building computers,
            and spending time with my cats. I also enjoy playing board and card
            games. I am a huge fan of the Final Fantasy series, and I have been
            playing Final Fantasy XIV for years. I enjoy XIV for its team-based
            gameplay as well as the amazing story. With a preference for RPG's,
            I also enjoy playing games such as Baldur's Gate 3, Elden Ring, and
            Pokemon. In the past, I've also had fun playing team-based games
            such as Overwatch and still play the occasional battle royale game
            such as Apex Legends and Fortnite. Casual only, of course.
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Box
            component="img"
            src={catComputer}
            alt="Cat on a computer"
            width="75%"
            sx={{ borderRadius: "10px" }}
          />
        </Grid>
      </Grid>
    </Container>
  );
}

export default About;
