import React from 'react';
import useStyles from './styles';
import { AppBar, Grid, Toolbar, Typography } from '@material-ui/core';

const Footer = () => {
  const classes = useStyles();

  return (
    <AppBar className={classes.appBar}>
      <Grid item>
        <Toolbar className={classes.toolbar}>
          <Typography variant="body1">
            © 2021 Zakoopka Inc.
          </Typography>
        </Toolbar>
      </Grid>
    </AppBar>
  )
}

export default Footer;