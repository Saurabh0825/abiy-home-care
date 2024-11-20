"use client"
import * as React from 'react';
import Grid from '@mui/material/Grid2';
// import { Typography } from '@mui/material';
import Link from '@mui/material/Link';
import { Typography } from '@mui/material';



const Header = () => {
  return (
      <Grid container spacing={2} >
        <Grid
          container
          justifyContent="space-between"
          alignItems="center"
          flexDirection={{ xs: 'column', sm: 'row' }}
          sx={{ fontSize: '12px' }}
          size={12}
          paddingTop={3}
        >
          <Grid sx={{ order: { xs: 2, sm: 1 } } }>
            <Link style={{textDecoration: 'None', color: 'Black'}} variant="h6" href="/" paddingTop={10} paddingLeft={10}>Home</Link>
          </Grid>

          <Grid container columnSpacing={4} sx={{ order: { xs: 1, sm: 2 }, px:1 }} paddingRight={30}>
            <Grid container justifyContent="space-evenly">
            <Grid>
              <Link style={{textDecoration: 'None', color: 'Black'}} variant="h6" href="about">About Us</Link>
            </Grid>
            <Grid>
              <Link style={{textDecoration: 'None', color: 'Black'}} variant="h6" href="services">Services</Link>
            </Grid>
            <Grid paddingRight={30}>
                <Link style={{textDecoration: 'None', color: 'Black'}} variant="h6" href="/contactus">Contact Us</Link>
            </Grid>
            </Grid>
            <Grid container justifyContent="space-evenly" paddingRight={3}>
              <Typography>|</Typography>
              <Link style={{textDecoration: 'None', color: 'Black'}} variant="h6" href="/faq">FAQ</Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
  );
}

export default Header;