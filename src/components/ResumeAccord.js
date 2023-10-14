import * as React from "react";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { List, ListItem, ListItemIcon, ListItemText } from "@mui/material";
import { Language, Code, Storage, Build } from "@mui/icons-material";
import { Extension, Computer, Group, Schedule } from "@mui/icons-material";
import { Grid } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import GamepadIcon from "@mui/icons-material/Gamepad";

export default function BasicAccordion() {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography>Objective</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Motivated Computer Science graduate with a robust foundation in both
            front-end and back-end development, seeking a software development
            role to apply my technical expertise and passion for
            problem-solving. Adept at leveraging a diverse tech stack, from HTML
            and JavaScript to Python and Django, I aim to contribute to
            innovative projects and drive impactful solutions.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Skills Summary</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <List>
              <ListItem>
                <ListItemIcon>
                  <Language />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="body1">
                      Front-end experience in HTML, CSS, and Javascript as well
                      as experience in frameworks and libraries such as jQuery,
                      React JS, and Material UI.
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Code />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="body1">
                      Back-end experience with Python and Django with databases
                      such as MySQL and SQLite3.
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Storage />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="body1">
                      Experience in developing or consuming APIs, knowledge of
                      RESTful services.
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <GamepadIcon />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="body1">
                      Adept at Unity development with C#.
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <GitHubIcon fontSize="large" />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="body1">
                      Familiar with version control using Github and Git.
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Build />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="body1">
                      Knowledge in Data Structures & Algorithms.
                    </Typography>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemIcon>
                  <Build />
                </ListItemIcon>
                <ListItemText
                  primary={
                    <Typography variant="body1">
                      Experience in UNIX Shell Scripting and Linux systems.
                    </Typography>
                  }
                />
              </ListItem>
            </List>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography>Skills List</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <Grid container spacing={2}>
              <Grid item xs={6} sm={3}>
                <ListItem>
                  <ListItemIcon>
                    <Language />
                  </ListItemIcon>
                  <ListItemText primary="Languages and Scripting" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Code />
                  </ListItemIcon>
                  <ListItemText primary="Java" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Code />
                  </ListItemIcon>
                  <ListItemText primary="Python" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Code />
                  </ListItemIcon>
                  <ListItemText primary="C" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Code />
                  </ListItemIcon>
                  <ListItemText primary="C#" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Code />
                  </ListItemIcon>
                  <ListItemText primary="HTML" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Code />
                  </ListItemIcon>
                  <ListItemText primary="CSS" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Code />
                  </ListItemIcon>
                  <ListItemText primary="Javascript" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Code />
                  </ListItemIcon>
                  <ListItemText primary="UNIX Shell Scripting" />
                </ListItem>
              </Grid>
              <Grid item xs={6} sm={3}>
                <ListItem>
                  <ListItemIcon>
                    <Computer />
                  </ListItemIcon>
                  <ListItemText primary="Tools and Technologies" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Extension />
                  </ListItemIcon>
                  <ListItemText primary="Eclipse" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Extension />
                  </ListItemIcon>
                  <ListItemText primary="Visual Studio Code" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Extension />
                  </ListItemIcon>
                  <ListItemText primary="MS Visual Studio" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Extension />
                  </ListItemIcon>
                  <ListItemText primary="Unity" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Extension />
                  </ListItemIcon>
                  <ListItemText primary="Git" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Extension />
                  </ListItemIcon>
                  <ListItemText primary="Figma" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Extension />
                  </ListItemIcon>
                  <ListItemText primary="Android Studio" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Extension />
                  </ListItemIcon>
                  <ListItemText primary="Solar2D Native" />
                </ListItem>
              </Grid>
              <Grid item xs={6} sm={3}>
                <ListItem>
                  <ListItemIcon>
                    <Build />
                  </ListItemIcon>
                  <ListItemText primary="Libraries and Frameworks" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Extension />
                  </ListItemIcon>
                  <ListItemText primary="jQuery" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Extension />
                  </ListItemIcon>
                  <ListItemText primary="React JS" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Extension />
                  </ListItemIcon>
                  <ListItemText primary="Django" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Extension />
                  </ListItemIcon>
                  <ListItemText primary="Material UI" />
                </ListItem>
              </Grid>
              <Grid item xs={6} sm={3}>
                <ListItem>
                  <ListItemIcon>
                    <Group />
                  </ListItemIcon>
                  <ListItemText primary="Soft Skills" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Schedule />
                  </ListItemIcon>
                  <ListItemText primary="Communication" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Schedule />
                  </ListItemIcon>
                  <ListItemText primary="Time Management" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Schedule />
                  </ListItemIcon>
                  <ListItemText primary="Problem Solving" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Schedule />
                  </ListItemIcon>
                  <ListItemText primary="Management" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Schedule />
                  </ListItemIcon>
                  <ListItemText primary="Collaboration" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Schedule />
                  </ListItemIcon>
                  <ListItemText primary="Self-Learning" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Schedule />
                  </ListItemIcon>
                  <ListItemText primary="Leadership" />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <Schedule />
                  </ListItemIcon>
                  <ListItemText primary="Organization" />
                </ListItem>
              </Grid>
            </Grid>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Education</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <List>
              <ListItem>
                <ListItemText
                  primary="Georgia State University, Atlanta, GA"
                  secondary="December 2023"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  secondary={
                    <React.Fragment>
                      <Typography variant="body2">
                        Bachelor of Science, Computer Science
                      </Typography>
                      <Typography variant="body2">GPA: 3.57</Typography>
                      <Typography variant="body2">
                        Honors: Dean’s List (Summer 2022, Fall 2022),
                        President’s List (Spring 2023)
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Relevant Coursework"
                  secondary={
                    <React.Fragment>
                      <Typography sx={{ pt: 1 }} variant="body2">
                        Data Structures
                      </Typography>
                      <Typography sx={{ py: 2 }} variant="body2">
                        Algorithms
                      </Typography>
                      <Typography sx={{ pb: 2 }} variant="body2">
                        Mobile App Development
                      </Typography>
                      <Typography sx={{ pb: 2 }} variant="body2">
                        Interactive Computer Graphics
                      </Typography>
                      <Typography sx={{ pb: 2 }} variant="body2">
                        Web Programming
                      </Typography>
                      <Typography sx={{ pb: 2 }} variant="body2">
                        Software Engineering
                      </Typography>
                      <Typography sx={{ pb: 2 }} variant="body2">
                        System Level Programming
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
            </List>
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography>Work History</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            <List>
              <ListItem>
                <ListItemText primary="Clerk Trainer" />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Quiktrip, Duluth, GA"
                  secondary="October 2015 – Present"
                />
              </ListItem>
              <ListItem>
                <ListItemText
                  primary="Responsibilities"
                  secondary={
                    <React.Fragment>
                      <Typography sx={{ pt: 1 }} variant="body2">
                        Collaborate with a diverse team of clerks to ensure
                        seamless operations and provide top-notch customer
                        service, fostering a collaborative and supportive team
                        environment.
                      </Typography>
                      <Typography sx={{ py: 2 }} variant="body2">
                        Demonstrate conflict resolution skills, effectively
                        resolving issues among trainees and cultivating a
                        positive team environment.
                      </Typography>
                      <Typography sx={{ pb: 2 }} variant="body2">
                        Comprehensive training on EPIC functions, time clock
                        usage, and POS functionality for new clerks, resulting
                        in a streamlined onboarding process.
                      </Typography>
                      <Typography sx={{ pb: 2 }} variant="body2">
                        Manage trainee schedules, fostering efficient training
                        timelines and ensuring adequate coverage during shifts.
                      </Typography>
                      <Typography variant="body2">
                        Troubleshoot computers and POS systems, swiftly
                        resolving technical issues to minimize disruptions in
                        store operations.
                      </Typography>
                    </React.Fragment>
                  }
                />
              </ListItem>
            </List>
          </Typography>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}
