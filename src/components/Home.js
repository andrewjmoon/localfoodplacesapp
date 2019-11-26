import React from 'react';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import { Link } from 'react-router-dom';
import { withStyles } from '@material-ui/core/styles';

const styles = {
  root: {
    background: 'linear-gradient(45deg, red 10%, #FF8E53 80%)',
    borderRadius: 3,
    border: 0,
    color: 'lightblue',
    height: 48,
    padding: '0 30px',
    boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)'
  },
  grow: {
    flexGrow: 0.05,
    color: 'black'
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20
  }
};

const Home = props => {
  const { classes } = props;
  return (
    <>
      <Container className={classes.root} maxWidth="sm">
        <Typography
          variant="h6"
          colorInherit="inherit"
          className={classes.grow}
        >
          <Link className="Link" to="/about">
            <p>About</p>
          </Link>
        </Typography>
        <br />
        <Typography
          variant="h6"
          colorInherit="inherit"
          className={classes.root}
        >
          <Link className="Link" to="/searchablemap">
            <p>Search Map</p>
          </Link>
        </Typography>
        <br />
        <Typography variant="h6" className={classes.root}>
          <Link className="Link" to="/map">
            <p>Restaurant Map</p>
          </Link>
        </Typography>
        <br />
        <Typography variant="h6" className={classes.root}>
          <Link className="Link" to="/map2">
            <p>Food Business Map</p>
          </Link>
        </Typography>
        <br />
        <Typography variant="h6" className={classes.root}>
          <Link className="Link" to="/localfoodplaces">
            <p>Local Food Business List</p>
          </Link>
        </Typography>
        <br />
        <Typography variant="h6" className={classes.root}>
          <Link className="Link" to="/restaurants">
            <p>Restaurant List</p>
          </Link>
        </Typography>
      </Container>
    </>
  );
};

export default withStyles(styles)(Home);
