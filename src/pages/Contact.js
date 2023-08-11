import { useTheme } from "@mui/material/styles";
import { Container } from "@mui/material";
import { Typography } from "@mui/material";
import { Link } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Box } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";

function Contact() {
  const theme = useTheme();


  return (
    <Container maxWidth="xl">
      <Container>
        <Typography
          variant="h1"
          align="center"
          sx={{
            borderBottom: `2px solid ${theme.palette.primary.main}`,
            paddingBottom: "0.5rem"
          }}
        >
          Let's Connect
        </Typography>
      </Container>
      <Container
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          height: "50vh",
        }}
      >
        <Container maxWidth="sm" sx={{ textAlign: "center" }}>
          <Typography variant="body1" sx={{ marginTop: "1rem", mb: 5 }}>
            Feel free to reach out to me via email or connect with me on
            LinkedIn.
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginTop: "1rem", fontWeight: "bold" }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <EmailIcon sx={{ marginRight: "0.5rem" }} />
              <Link href="mailto:sadiejaneb@gmail.com">
                sadiejaneb@gmail.com
              </Link>
            </Box>
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginTop: "1rem", fontWeight: "bold" }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <LinkedInIcon sx={{ marginRight: "0.5rem" }} />
              <Link
                href="https://www.linkedin.com/in/sadiejaneb"
                target="_blank"
                rel="noopener noreferrer"
              >
                LinkedIn
              </Link>
            </Box>
          </Typography>
          <Typography
            variant="body1"
            sx={{ marginTop: "1rem", fontWeight: "bold" }}
          >
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <GitHubIcon sx={{ marginRight: "0.5rem" }} />
              <Link
                href="https://github.com/sadiejaneb"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </Link>
            </Box>
          </Typography>
        </Container>
      </Container>
    </Container>
  );
}

export default Contact;
