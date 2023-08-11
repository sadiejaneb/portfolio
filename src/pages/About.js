import React from "react";
import { useTheme } from "@mui/material/styles";
import { Grid } from "@mui/material/";
import { Typography } from "@mui/material/";
import { Container } from "@mui/material";
import { Box } from "@mui/material";
import catComputer from "../images/cat_computer.jpg";

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
        <Grid item xs={8}>
          <Typography align="left" variant="body1" sx={{ mb: "2vh" }}>
            I'm a versatile professional with a passion for technology and a
            knack for turning complex challenges into innovative solutions. With
            8 years of experience in retail training and management, I've honed
            my skills in communication, problem-solving, and leadership.
          </Typography>
          <Typography align="left" variant="body1">
            My journey has led me to a new chapter where I'm embracing my love
            for technology. As an upcoming graduate with a Bachelor's degree in
            Computer Science from Georgia State University, I'm equipped with a
            solid foundation in front-end and back-end technologies. I'm
            proficient in HTML, CSS, JavaScript, React JS, and Material UI on
            the front-end, and I confidently work with Python, Django, and MySQL
            on the back-end. This blend of technical expertise, coupled with
            strong interpersonal skills, equips me to approach challenges with a
            comprehensive perspective.
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
        <Grid item xs={12}>
          <Typography align="left" variant="body1" sx={{ mb: "2vh" }}>
            Outside the world of code and databases, you'll find me in my
            element, assembling computers and exploring the world of gaming. I'm
            fascinated by the intricate components that come together to create
            seamless systems, and I'm equally passionate about immersing myself
            in virtual worlds. This unique combination of interests not only
            fuels my technical creativity but also underscores my dedication to
            meticulous craftsmanship.
          </Typography>
          <Typography align="left" variant="body1" sx={{ mb: "2vh" }}>
            I'm excited to bring my energy, curiosity, and commitment to any team or project.
            Whether it's crafting elegant code or crafting the ultimate gaming
            rig, I'm always eager to learn, innovate, and contribute.
          </Typography>
        </Grid>
      </Grid>
    </Container>
  );
}

export default About;
