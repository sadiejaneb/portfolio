import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import HomeIcon from "@mui/icons-material/Home";
import MoreVertOutlinedIcon from "@mui/icons-material/MoreVert";
import EmojiNatureIcon from "@mui/icons-material/EmojiNature";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const gitHub = (
  <Button href="https://github.com/sadiejaneb" target="_blank">
    <GitHubIcon />
  </Button>
);
const linkedIn = (
  <Button href="https://www.linkedin.com/in/sadiejaneb/" target="_blank"><LinkedInIcon /></Button>
)
const pages = ["About", "Portfolio", "Contact"];
const links = ["/about", "/portfolio", "/contact"];
const settings = ["Resume", gitHub, linkedIn];
const settingsLinks = ["/resume", "/"];

function NavBar() {
  const [anchorElNav, setAnchorElNav] = React.useState(null);
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  return (
    <div>
        <AppBar
          position="static"
          style={{ background: "transparent", boxShadow: "none" }}
        >
          <Container maxWidth="xl">
            <Toolbar disableGutters>
              <Box
                sx={{
                  flexGrow: 1,
                  display: { xs: "flex", md: "none" },
                }}
              >
                <IconButton
                  size="large"
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleOpenNavMenu}
                  color="primary.main"
                >
                  <MenuIcon />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorElNav}
                  anchorOrigin={{
                    vertical: "bottom",
                    horizontal: "left",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "left",
                  }}
                  open={Boolean(anchorElNav)}
                  onClose={handleCloseNavMenu}
                  sx={{
                    display: { xs: "block", md: "none" },
                  }}
                >
                  {pages.map((page, index) => (
                    <MenuItem>
                      <Button
                        key={page}
                        href={links[index]}
                        onClick={handleCloseNavMenu}
                      >
                        <Typography textAlign="center">{page}</Typography>
                      </Button>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
              <Button href="/" sx={{ sx: "none", md: "flex", mr: 1 }}>
                <HomeIcon
                  style={{ color: "#68518F" }}
                  sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
                />
              </Button>
              <Box sx={{ mr: 6 }}>
                <Button
                  href="/"
                  sx={{
                    flexGrow: 1,
                    display: { xs: "flex", md: "none" },
                  }}
                >
                  <EmojiNatureIcon
                    style={{ color: "#68518F" }}
                    sx={{ display: { xs: "flex", md: "none" }, mr: 1 }}
                  />
                </Button>
              </Box>
              <Typography
                noWrap
                component="a"
                href=""
                sx={{
                  mr: 2,
                  display: { xs: "flex", md: "none" },
                  flexGrow: 1,
                  color: "primary.main",
                  textDecoration: "none",
                }}
              ></Typography>

              <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
                {pages.map((page, index) => (
                  <Button
                    key={page}
                    href={links[index]}
                    onClick={handleCloseNavMenu}
                    sx={{ my: 2, color: "primary.main", display: "block" }}
                  >
                    {page}
                  </Button>
                ))}
              </Box>

              <Box sx={{ flexGrow: 0 }}>
                <Tooltip title="Other options">
                  <IconButton
                    style={{ color: "primary.main" }}
                    onClick={handleOpenUserMenu}
                    sx={{ p: 0 }}
                  >
                    <MoreVertOutlinedIcon
                      sx={{ my: 2, color: "primary.main", display: "block" }}
                    />
                  </IconButton>
                </Tooltip>
                <Menu
                  sx={{ mt: "45px" }}
                  id="menu-appbar"
                  anchorEl={anchorElUser}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={Boolean(anchorElUser)}
                  onClose={handleCloseUserMenu}
                >
                  {settings.map((setting, index) => (
                    <MenuItem>
                      <Button
                        key={setting}
                        href={settingsLinks[index]}
                        onClick={handleCloseUserMenu}
                      >
                        <Typography variant="subtitle2" textAlign="center">
                          {setting}
                        </Typography>
                      </Button>
                    </MenuItem>
                  ))}
                </Menu>
              </Box>
            </Toolbar>
          </Container>
        </AppBar>
     
    </div>
  );
}
export default NavBar;
