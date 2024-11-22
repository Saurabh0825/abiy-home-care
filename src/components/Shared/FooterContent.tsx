import Grid from "@mui/material/Grid2";
import { Typography, Link } from "@mui/material";

const FooterContent = () => {
    return (
        <>
            <Grid container spacing={2} paddingLeft={{ xs: 5, sm: 7 }} paddingTop={{ xs: 3, sm: 4 }}>
                <Typography variant="h4">ABIY HOME CARE</Typography>
            </Grid>
            <Grid container spacing={2} paddingLeft={{ xs: 5, sm: 7 }} paddingTop={{ xs: 3, sm: 4 }}>
                <Grid container size={{ xs: 12, sm: 3 }}>
                    <Grid size={{ xs: 12 }}>
                        <Link style={{ textDecoration: 'None', color: 'White' }} variant="h6" href="about">About Us</Link>
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                        <Link style={{ textDecoration: 'None', color: 'White' }} variant="h6" href="contactus">Contact Us</Link>
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                        <Link style={{ textDecoration: 'None', color: 'White' }} variant="h6" href="services">Services</Link>
                    </Grid>
                </Grid>
                <Grid container size={{ xs: 12, sm: 6, md:3 }}>
                    <Link style={{ textDecoration: 'None', color: 'White' }} variant="h6" href="faq">FAQ</Link>
                    <Grid size={{ xs: 12 }}>
                        <Link style={{ textDecoration: 'None', color: 'White' }} variant="h6" href="contactus">Schedule Appointmnet</Link>
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                        <Link style={{ textDecoration: 'None', color: 'White' }} variant="h6" href="/">Who we are</Link>
                    </Grid>
                </Grid>
                <Grid container size={{ xs: 12, sm: 6, md:3 }}>
                    <Grid size={{ xs: 12 }}>
                        <Typography variant="h6">+1 (548) 394-4828
                        </Typography>
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                    <Typography variant="h6">james@james.com
                    </Typography>
                    </Grid>
                    <Grid size={{ xs: 12 }}>
                    <Typography variant="h6">Abinet Tesfaye
                    </Typography>
                    </Grid>
                </Grid>
                <Grid container size={{ xs: 12, sm: 6, md:3 }}>
                    <Typography variant="h6">Address</Typography>
                    <Grid size={{ xs: 12 }}>
                        <Typography variant="body2">85 James Ave<br />Calgary, AB<br />T13 U34, Canada</Typography>
                    </Grid>
                </Grid>
            </Grid>
        </>
    );
}

export default FooterContent;