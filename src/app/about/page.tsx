import Grid from '@mui/material/Grid2';
import { Typography } from '@mui/material';
import Image from 'next/image';
const About = () => {
    return (
        <>
            <Grid size={{ xs: 12 }} paddingTop={8} marginBottom={5} display='flex' justifyContent='center'>
                <Typography variant='h3'>About US</Typography>
            </Grid>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12, sm: 6 }} paddingLeft={{xs: 0, sm:10}}>
                    <Typography variant='body1' paddingBottom={2}>
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the...
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the...
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the...
                        It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the...
                    
                    </Typography>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }} paddingLeft={{xs: 0, sm: 20}}>
                    <Image
                        src="/care_1.jpeg"
                        alt="Home Care Image"
                        width={400}
                        height={250}
                        style={{ objectFit: 'cover', borderRadius: '8px' }}
                    />
                </Grid>
            </Grid>
            <Grid size={{ xs: 12 }} paddingTop={8} marginBottom={5} display='flex' justifyContent='center'>
                <Typography variant='h3'>Experience</Typography>
            </Grid>
            <Grid size={{ sm: 12 }} paddingLeft={{xs: 0, sm:10}}>
                    <Typography variant='body1' paddingBottom={2}>
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