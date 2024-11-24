import HomeCareService from '@/components/Service/HomeCareService';
import TransportService from '@/components/Service/TransportService';
import DeleteAdditionalService from '@/components/Service/delete-AdditionalService';
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
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                    industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                    scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                    into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                </Typography>
            </Grid>
            <HomeCareService />
            <TransportService />
            <DeleteAdditionalService />
            <Grid display="flex" justifyContent="center">
                <Button href='/contactus' color="primary" variant="contained">
                    Contact Us
                </Button>
                {/* <Button 
  href="/contactus" 
  variant="contained" 
  color="primary" 
  fullWidth
>
  Contact Us
</Button> */}
            </Grid>
        </div>
    );
}

export default Service;