"use client"
import * as React from 'react';
import Grid from '@mui/material/Grid2';
// import { Typography } from '@mui/material';
import Link from '@mui/material/Link';



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
        >
          <Grid sx={{ order: { xs: 2, sm: 1 } } }>
            <Link style={{textDecoration: 'None', color: 'Black'}} variant="h6" href="/">© Home Icon</Link>
          </Grid>
          <Grid container columnSpacing={4} sx={{ order: { xs: 1, sm: 2 }, px:1 }}>
            <Grid>
              <Link style={{textDecoration: 'None', color: 'Black'}} variant="h6" href="about">ABOUT US</Link>
            </Grid>
            <Grid>
              <Link style={{textDecoration: 'None', color: 'Black'}} variant="h6" href="services">SERVICES</Link>
            </Grid>
            <Grid>
                <Link style={{textDecoration: 'None', color: 'Black'}} variant="h6" href="/contactus">CONTACT US</Link>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
  );
}

export default Header;