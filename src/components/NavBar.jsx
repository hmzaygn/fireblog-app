import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import Menu from "@mui/material/Menu";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
import { Button } from "@mui/material";
import { useAuthContext } from "../contexts/AuthProvider";
import useAuthCalls from "../hooks/useAuthCalls";

export default function NavBar() {
  const { currentUser } = useAuthContext();
  const { logout } = useAuthCalls();
  const auth = true;
  const [anchorEl, setAnchorEl] = React.useState(null);
  const navigate = useNavigate();

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            onClick={() => navigate("/")}
            variant="h6"
            component="div"
            sx={{ flexGrow: 1, cursor: "pointer" }}
          >
            {"<HMZAYGN/>"}
          </Typography>
          {auth && (
            <div>
              <IconButton
                size="small"
                aria-label="account of current user"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                {currentUser?.displayName || ""}
                <AccountCircle sx={{ marginLeft: ".5rem" }} />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "right",
                }}
                open={Boolean(anchorEl)}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>
                  {currentUser?.email ? (
                    <Link
                      style={{ textDecoration: "none" }}
                      to="/login"
                      onClick={logout}
                    >
                      Logout
                    </Link>
                  ) : (
                    <Link style={{ textDecoration: "none" }} to="/login">
                      Login
                    </Link>
                  )}
                </MenuItem>
                <MenuItem onClick={handleClose}>
                  <Link style={{ textDecoration: "none" }} to="/register">
                    Register
                  </Link>
                </MenuItem>
                {currentUser?.email && (
                  <MenuItem onClick={handleClose}>
                    <Link style={{ textDecoration: "none" }} to="/newblog">
                      New Blog
                    </Link>
                  </MenuItem>
                )}
                <MenuItem onClick={handleClose}>
                  <Link style={{ textDecoration: "none" }} to="/details">
                    details
                  </Link>
                </MenuItem>
              </Menu>
            </div>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  );
}
