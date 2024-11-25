import PersonalCareService from '@/components/Service/PersonalCareService';
import NursingCareService from '@/components/Service/NursingCareService';
import CompanionshipService from '@/components/Service/CompanionshipService';
import { Button, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

const Service = () => {
    return (
        <div>
            <Grid size={{ xs: 12 }} paddingTop={{ lg: 4, md: 3, sm: 2, xs: 2 }} marginBottom={2} display='flex' justifyContent='center' sx={{ width: '98%' }}>
                <Typography variant='h3'>Our Services</Typography>
            </Grid>
            <Grid sx={{ xs: 12 }} paddingLeft={{ lg: 6, md: 4, sm: 3, xs: 2 }} paddingRight={{ xs: 2 }} marginBottom={{lg: 5, md: 4, sm: 3, xs: 2}}>
                <Typography style={{ textAlign: "justify" }} variant="body2">
                At AB Compassionate Home Care, our goal is to provide personalized care that enhances the well-being of our clients. We offer compassionate personal care, professional nursing services, and meaningful companionship to ensure comfort, independence, and emotional support. Additionally, we provide reliable transportation to help clients stay active and connected to their community.
                </Typography>
            </Grid>
            <PersonalCareService />
            <NursingCareService />
            <CompanionshipService />
            <Grid display="flex" justifyContent="center" marginTop={{lg: 5, md: 4, sm: 3, xs: 2}}>
                <Button href='/contactus' color="primary" variant="contained">
                    Contact Us
                </Button>
            </Grid>
        </div>
    );
}

export default Service;