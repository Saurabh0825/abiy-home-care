// "use client"
// import * as React from 'react';
// import Grid from '@mui/material/Grid2';
// import Link from '@mui/material/Link';
// import { Typography } from '@mui/material';



// const Header = () => {
//   return (
//       <Grid container spacing={2} >
//         <Grid
//           container
//           justifyContent="space-between"
//           alignItems="center"
//           flexDirection={{ xs: 'column', sm: 'row' }}
//           sx={{ fontSize: '12px' }}
//           size={12}
//           paddingTop={3}
//         >
//           <Grid sx={{ order: { xs: 2, sm: 1 } } }>
//             <Link style={{textDecoration: 'None', color: 'Black'}} variant="h6" href="/" paddingTop={10} paddingLeft={10}>Home</Link>
//           </Grid>

//           <Grid container columnSpacing={4} sx={{ order: { xs: 1, sm: 2 }, px:1 }} paddingRight={30}>
//             <Grid container justifyContent="space-evenly">
//             <Grid>
//               <Link style={{textDecoration: 'None', color: 'Black'}} variant="h6" href="about">About Us</Link>
//             </Grid>
//             <Grid>
//               <Link style={{textDecoration: 'None', color: 'Black'}} variant="h6" href="services">Services</Link>
//             </Grid>
//             <Grid paddingRight={30}>
//                 <Link style={{textDecoration: 'None', color: 'Black'}} variant="h6" href="/contactus">Contact Us</Link>
//             </Grid>
//             </Grid>
//             <Grid container justifyContent="space-evenly" paddingRight={3}>
//               <Typography>|</Typography>
//               <Link style={{textDecoration: 'None', color: 'Black'}} variant="h6" href="/faq">FAQ</Link>
//             </Grid>
//           </Grid>
//         </Grid>
//       </Grid>
//   );
// }

// export default Header;

"use client";
import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import Link from "@mui/material/Link";
import { Typography, IconButton, Collapse, Box } from "@mui/material";
import {BACKGROUND_COLOR} from '@/utils/constants.json';
import MenuIcon from "@mui/icons-material/Menu";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  return (
    <Grid container spacing={2}>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        flexDirection="row"
        sx={{ fontSize: "12px" }}
        paddingTop={3}
      >
        {/* Logo or Home Link */}
        <Grid>
          <Link
            style={{ textDecoration: "none", color: "Black" }}
            variant="h6"
            href="/"
          >
            Home
          </Link>
        </Grid>

        {/* Menu Icon for Smaller Screens */}
        <Grid
          sx={{ display: { xs: "flex", sm: "none" }, justifyContent: "flex-end", flexGrow: 1 }}
        >
          <IconButton
            size="large"
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuToggle}
            sx={{ marginLeft: "auto" }}
          >
            <MenuIcon />
          </IconButton>
        </Grid>

        {/* Full Menu for Larger Screens */}
        <Grid
          container
          columnSpacing={4}
          sx={{ display: { xs: "none", sm: "flex" }, justifyContent: "space-evenly" }}
          paddingRight={30}
        >
          <Grid>
            <Link
              style={{ textDecoration: "none", color: "Black" }}
              variant="h6"
              href="/about"
            >
              About Us
            </Link>
          </Grid>
          <Grid>
            <Link
              style={{ textDecoration: "none", color: "Black" }}
              variant="h6"
              href="/services"
            >
              Services
            </Link>
          </Grid>
          <Grid>
            <Link
              style={{ textDecoration: "none", color: "Black" }}
              variant="h6"
              href="/contactus"
            >
              Contact Us
            </Link>
          </Grid>
          <Grid>
            <Typography>|</Typography>
          </Grid>
          <Grid>
            <Link
              style={{ textDecoration: "none", color: "Black" }}
              variant="h6"
              href="/faq"
            >
              FAQ
            </Link>
          </Grid>
        </Grid>
      </Grid>

      {/* Collapsible Menu for Smaller Screens */}
      <Collapse in={menuOpen} sx={{ width: "100%", backgroundColor: BACKGROUND_COLOR, color: "black" }}>
        <Box sx={{ padding: 2 }}>
          <Link
            style={{ textDecoration: "none", color: "black", display: "block", margin: "8px 0" }}
            variant="h6"
            href="/about"
          >
            About Us
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black", display: "block", margin: "8px 0" }}
            variant="h6"
            href="/services"
          >
            Services
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black", display: "block", margin: "8px 0" }}
            variant="h6"
            href="/contactus"
          >
            Contact Us
          </Link>
          <Link
            style={{ textDecoration: "none", color: "black", display: "block", margin: "8px 0" }}
            variant="h6"
            href="/faq"
          >
            FAQ
          </Link>
        </Box>
      </Collapse>
    </Grid>
  );
};

export default Header;
