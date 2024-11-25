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
                    At <span style={{fontWeight: 'bold'}}>AB Compassionate Home Care</span>, we are dedicated to providing exceptional home care services with over 8 years of experience in assisting individuals with chronic health conditions and helping with their daily living tasks. Our founder, a passionate and experienced professional in the home care industry, has a deep understanding of the importance of compassionate care. With a background in personal nursing, our team is committed to ensuring the highest quality of care tailored to each client&apos;s specific needs. We specialize in a wide range of services, including personal care, nursing Care, transportation, and companionship. Our mission is to help individuals maintain their dignity, independence, and well-being while receiving the care they deserve. Since our inception, we’ve proudly served Calgary and its surrounding towns, offering reliable and compassionate care that families can trust. Whether assisting with daily activities, providing nursing care, or offering safe transportation, we are here to make life easier for those who need it most. At AB Compassionate Home Care, our clients&apos; comfort and happiness are our top priority.
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
                <Typography variant='h3'>Serving Calgary and Surrounding Areas</Typography>
            </Grid>
            <Grid size={{ sm: 12 }} paddingLeft={{xs: 2, sm:10}} paddingRight={{xs: 2}}>
                    <Typography variant='body1' paddingBottom={2} sx={{textAlign: 'justify'}}>
                       
AB Compassionate Home Care offers exceptional home care services, including personal care, nursing care, companionship, and transportation. We assist with daily living activities, health monitoring, and mobility, ensuring clients’ well-being at home. Our compassionate team also provides emotional care and safe transportation to appointments and social events. Serving Calgary, Okotoks, Chestermere, Cochrane, Airdrie, and surrounding areas, we are dedicated to providing reliable, personalized care for individuals. At AB Compassionate Home Care, we prioritize dignity, independence, and overall happiness for our clients.
                    </Typography>
                </Grid>
        </>
    )
}

export default About;