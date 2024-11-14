import { Typography, TextField, Box, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Image from 'next/image';

const ContactUs = () => {
    return (
        <>
                {/* Title Section */}
                <Grid size={{ xs: 12 }} paddingTop={12} marginBottom={5} display='flex' justifyContent='center'>
                    <Typography variant='h3'>CONTACT US</Typography>
                </Grid>

                {/* Main Content Section */}
                <Grid container spacing={2}>

                    {/* First Column: Title, Description, Image */}
                    <Grid size={{ xs: 12, sm: 6 }} paddingLeft={{ xs: 0, sm: 5 }} style={{ maxWidth: '600px', margin: '0 auto' }}>
                        <Typography variant='body1'>Title</Typography>
                        <Typography variant='body1' paddingBottom={2}>
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the...
                        </Typography>
                        <Image
                            src="/care_1.jpeg"
                            alt="Home Care Image"
                            width={600}
                            height={400}
                            style={{ objectFit: 'cover', borderRadius: '8px' }}
                        />
                    </Grid>

                    {/* Second Column: Text Fields */}
                    <Grid size={{ xs: 12, sm: 6 }} paddingLeft={{ xs: 0, sm: 2 }}>
                        <Box sx={{ width: '80%' }} paddingBottom={3}>
                            <TextField fullWidth label="Full Name*" id="fullname" />
                        </Box>
                        <Box sx={{ width: '80%' }} paddingBottom={3}>
                            <TextField fullWidth label="Phone Number*" id="phonenumber" />
                        </Box>
                        <Box sx={{ width: '80%' }} paddingBottom={3}>
                            <TextField fullWidth label="Email*" id="email" />
                        </Box>
                        <Box sx={{ width: '80%' }} paddingBottom={3}>
                            <TextField fullWidth label="Description*" id="description" multiline minRows={4}/>
                        </Box>
                        <Box sx={{ width: '80%' }} paddingBottom={3}>
                        <Button fullWidth sx={{height: "20%"}} variant="contained">Send</Button>
                        </Box>
                    </Grid>
                </Grid>
        </>
    );
}

export default ContactUs;
