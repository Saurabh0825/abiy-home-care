import Grid from '@mui/material/Grid2';
import { Typography, Box } from '@mui/material';
import Image from 'next/image';
const About = () => {
    return (
        <>
            <Grid size={{ xs: 12 }} paddingTop={4} marginBottom={5} display='flex' justifyContent='center' sx={{width: '98%'}}>
                <Typography variant='h3'>About US</Typography>
            </Grid>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }} paddingLeft={{xs: 2, sm:10}} paddingRight={{xs: 2}}>
                    <Typography variant='body1' paddingBottom={2} sx={{textAlign: 'justify'}}>
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the...
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the...
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the...
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the...
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the...
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the...
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the...
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the...
                    </Typography>
                </Grid>
                <Grid size={{ xs: 12, sm: 12, md: 6, lg: 6 }} paddingLeft={{xs: 2, sm: 10}} paddingRight={{xs: 2}}>
                    <Box sx={{maxWidth: '600px', width: '95%', margin: '0 auto'}}>
                    <Image
                        src="/care_1.jpeg"
                        alt="Home Care Image"
                        width={400}
                        height={250}
                        style={{ objectFit: 'cover', borderRadius: '8px', width: '90%', height: 'auto' }}
                    />
                    </Box>
                </Grid>
            </Grid>
            <Grid size={{ xs: 12 }} paddingTop={{xs: 5, sm: 8}} marginBottom={2} display='flex' justifyContent='center'>
                <Typography variant='h3'>Experience</Typography>
            </Grid>
            <Grid size={{ sm: 12 }} paddingLeft={{xs: 2, sm:10}} paddingRight={{xs: 2}}>
                    <Typography variant='body1' paddingBottom={2} sx={{textAlign: 'justify'}}>
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the...
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the...
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the...
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the...
                    
                    </Typography>
                </Grid>
        </>
    )
}

export default About;