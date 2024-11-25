"use client";
import React, { useState } from "react";
import Grid from "@mui/material/Grid2";
import Link from "@mui/material/Link";
import { BACKGROUND_COLOR } from "@/utils/constants.json";
import { Typography, IconButton, Collapse, Box } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { usePathname } from "next/navigation";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname(); // Get the current route

  const handleMenuToggle = () => {
    setMenuOpen((prev) => !prev);
  };

  // Define styles for active and inactive links
  const activeLinkStyle: React.CSSProperties = {
    textDecoration: "none",
    color: "black",
    position: "relative",
    fontWeight: "bold",
  };

  const inactiveLinkStyle: React.CSSProperties = {
    textDecoration: "none",
    color: "Black",
  };

  const activeLineStyle: React.CSSProperties = {
    content: "''",
    position: "absolute",
    top: "-4px",
    left: "0",
    height: "4px",
    width: "100%",
    backgroundColor: "black",
  };

  return (
    <Grid container spacing={2}>
      <Grid
        container
        justifyContent="space-between"
        alignItems="center"
        flexDirection={{ xs: "row", sm: "row" }}
        sx={{ fontSize: "12px" }}
        size={12}
        paddingTop={3}
      >
        {/* Logo or Home Link */}
        <Grid sx={{ order: { xs: 1, sm: 1 } }}>
          <Link
            style={pathname === "/" ? activeLinkStyle : inactiveLinkStyle}
            variant="h6"
            href="/"
            paddingTop={{ ls: 10, md: 6, sm: 4, xs: 2 }}
            paddingLeft={{ ls: 10, md: 6, sm: 4, xs: 2 }}
          >
            {pathname === "/" && <span style={activeLineStyle} />}
            Home
          </Link>
        </Grid>

        {/* Menu Icon for Smaller Screens */}
        <Grid sx={{ display: { xs: "flex", sm: "none" }, order: 2 }}>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuToggle}
          >
            <MenuIcon />
          </IconButton>
        </Grid>

        {/* Full Menu for Larger Screens */}
        <Grid
          container
          columnSpacing={4}
          sx={{
            display: { xs: "none", sm: "flex" },
            order: 3,
            paddingRight: 30,
            justifyContent: "flex-end",
          }}
        >
          <Grid>
            <Link
              style={pathname === "/about" ? activeLinkStyle : inactiveLinkStyle}
              variant="h6"
              href="/about"
            >
              {pathname === "/about" && <span style={activeLineStyle} />}
              About Us
            </Link>
          </Grid>
          <Grid>
            <Link
              style={pathname === "/services" ? activeLinkStyle : inactiveLinkStyle}
              variant="h6"
              href="/services"
            >
              {pathname === "/services" && <span style={activeLineStyle} />}
              Services
            </Link>
          </Grid>
          <Grid>
            <Link
              style={pathname === "/contactus" ? activeLinkStyle : inactiveLinkStyle}
              variant="h6"
              href="/contactus"
            >
              {pathname === "/contactus" && <span style={activeLineStyle} />}
              Contact Us
            </Link>
          </Grid>
          <Grid>
            <Typography>|</Typography>
          </Grid>
          <Grid>
            <Link
              style={pathname === "/faq" ? activeLinkStyle : inactiveLinkStyle}
              variant="h6"
              href="/faq"
            >
              {pathname === "/faq" && <span style={activeLineStyle} />}
              FAQ
            </Link>
          </Grid>
        </Grid>
      </Grid>

      {/* Collapsible Menu for Smaller Screens */}
      <Collapse in={menuOpen} sx={{ width: "100%", backgroundColor: BACKGROUND_COLOR, color: "black" }}>
        <Box sx={{ padding: 2 }}>
          <Link
            style={{
              ...inactiveLinkStyle,
              ...(pathname === "/about" && activeLinkStyle),
              display: "block",
              margin: "8px 0",
            }}
            variant="h6"
            href="/about"
          >
            {pathname === "/about" && <span style={activeLineStyle} />}
            About Us
          </Link>
          <Link
            style={{
              ...inactiveLinkStyle,
              ...(pathname === "/services" && activeLinkStyle),
              display: "block",
              margin: "8px 0",
            }}
            variant="h6"
            href="/services"
          >
            {pathname === "/services" && <span style={activeLineStyle} />}
            Services
          </Link>
          <Link
            style={{
              ...inactiveLinkStyle,
              ...(pathname === "/contactus" && activeLinkStyle),
              display: "block",
              margin: "8px 0",
            }}
            variant="h6"
            href="/contactus"
          >
            {pathname === "/contactus" && <span style={activeLineStyle} />}
            Contact Us
          </Link>
          <Link
            style={{
              ...inactiveLinkStyle,
              ...(pathname === "/faq" && activeLinkStyle),
              display: "block",
              margin: "8px 0",
            }}
            variant="h6"
            href="/faq"
          >
            {pathname === "/faq" && <span style={activeLineStyle} />}
            FAQ
          </Link>
        </Box>
      </Collapse>
    </Grid>
  );
};

export default Header;
