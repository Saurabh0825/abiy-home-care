import Grid from "@mui/material/Grid2";
import { Typography, Link } from "@mui/material";

const FooterContent = () => {
    return (
        <>
            <Grid container spacing={2} paddingLeft={{ xs: 5, sm: 7 }} paddingTop={{ xs: 3, sm: 4 }}>
                <Typography fontSize={{lg: 30, md: 27, sm: 24, xs: 20}}>AB COMPASSIONATE HOME CARE</Typography>
            </Grid>
            <Grid container spacing={2} paddingLeft={{ xs: 5, sm: 7 }} paddingTop={{ xs: 3, sm: 4 }}>
                <Grid container size={{ xs: 12, sm: 3 }}>
                    <Grid size={{ xs: 12 }}>
                        <Link style={{ textDecoration: 'None', color: 'White'}} fontSize={{lg: 21, md: 19, sm: 18, xs: 17}} href="about">ABOUT US</Link>
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                        <Link style={{ textDecoration: 'None', color: 'White' }} fontSize={{lg: 21, md: 19, sm: 18, xs: 17}} href="contactus">CONTACT US</Link>
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                        <Link style={{ textDecoration: 'None', color: 'White' }} fontSize={{lg: 21, md: 19, sm: 18, xs: 17}} href="services">SERVICES</Link>
                    </Grid>
                </Grid>
                <Grid container size={{ xs: 12, sm: 6, md:3 }}>
                    <Link style={{ textDecoration: 'None', color: 'White' }} fontSize={{lg: 21, md: 19, sm: 18, xs: 17}} href="faq">FAQ</Link>
                    <Grid size={{ xs: 12 }}>
                        <Link style={{ textDecoration: 'None', color: 'White' }} fontSize={{lg: 21, md: 19, sm: 18, xs: 17}} href="contactus">SCHEDULE APPOINTMENT</Link>
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                        <Link style={{ textDecoration: 'None', color: 'White' }} fontSize={{lg: 21, md: 19, sm: 18, xs: 17}} href="/">SERVICE LOCATION</Link>
                    </Grid>
                </Grid>
                <Grid container size={{ xs: 12, sm: 6, md:3 }}>
                    <Grid size={{ xs: 12 }}>
                        <Typography style={{ textDecoration: 'None', color: 'White' }} fontSize={{lg: 21, md: 19, sm: 18, xs: 17}} >+1 (587) 889-3986
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                    <Typography style={{ textDecoration: 'None', color: 'White' }} fontSize={{lg: 21, md: 19, sm: 18, xs: 17}}>asheboa@yahoo.com
                    </Typography>
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                        <Link style={{ textDecoration: 'None', color: 'White' }} fontSize={{lg: 21, md: 19, sm: 18, xs: 17}} href="/">MISSION AND VISSION</Link>
                    </Grid>
                </Grid>
                <Grid container size={{ xs: 12, sm: 6, md:3 }}>
                    <Typography variant="h6">ADDRESS</Typography>
                    <Grid size={{ xs: 12 }}>
                        <Typography variant="body2">97 Redstone Ave NE<br />Calgary, AB<br />T3N 0J7, Canada</Typography>
                    </Grid>
                </Grid>
            </Grid>
            <Grid display="flex" justifyContent="center" marginTop={3}>
                <Typography>© {new Date().getFullYear()} AB COMPASSIONATE HOME CARE. ALL RIGHTS RESERVED</Typography>
            </Grid>
        </>
    );
}

export default FooterContent;