import Grid from '@mui/material/Grid2';
import { TextField, Box, Button } from '@mui/material';

const HomeContact = () => {
    return (
        <div>
            <Grid size={{ xs: 12, sm: 6 }} paddingLeft={{ xs: 0, sm: '8%' }} paddingTop={5}>
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
                    <TextField fullWidth label="Description*" id="description" multiline minRows={4} />
                </Box>
                <Box sx={{ width: '80%' }} paddingBottom={3}>
                    <Button fullWidth sx={{ height: "20%" }} variant="contained">Send</Button>
                </Box>
            </Grid>
        </div>
    );
}

export default HomeContact;