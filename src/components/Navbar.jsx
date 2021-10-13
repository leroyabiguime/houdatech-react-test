import React from "react";
import { Link } from "react-router-dom";
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';

const useStyles = makeStyles(() => ({
  navlink:{
    color: 'white',
    textDecoration: 'none'
  }
}));

function App() {
  const styles = useStyles();

  return (
    <div className={styles.root}>
      <AppBar position="static">
        <Toolbar variant="dense">
          <Link className={styles.navlink} to="/">
            <Typography variant="h5" color="inherit" >
              Contact APP
            </Typography>
          </Link>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default App