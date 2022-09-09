import React from "react";
import MenuIcon from "@material-ui/icons/Menu";
import { AppBar, IconButton, Toolbar, Button, Typography, makeStyles, createStyles} from "@material-ui/core";

const useStyles = makeStyles(
createStyles({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    
  },
  title: {
    flexGrow: 1,
  },
})
);
const handleClick = async() => {
    alert("contact us button clicked!")
};

export default function MyHeader() {
    const classes = useStyles();
  
    return (
      <div className={classes.root}>
        <AppBar position="static"
                color="transparent">
          <Toolbar>
            <IconButton
              className={classes.menuButton}
              edge="start"
              color="inherit"
              aria-label="menu"
            >
              <MenuIcon />
            </IconButton>
            <Typography className={classes.title} variant="h6">
              My super cool web app
            </Typography>
            <Button 
            color="inherit"
            onClick={handleClick}>
              Contact us</Button>
          </Toolbar>
        </AppBar>
      </div>
    );
  }