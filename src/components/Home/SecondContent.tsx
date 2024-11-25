import Grid from '@mui/material/Grid2';
import { Typography } from '@mui/material';

const SecondContent = () => {
    return (
        <div>
            <Grid container justifyContent='center' paddingTop={{lg: 10, md: 7, sm: 5, xs: 2}} id="mission_vision">
                <Typography fontSize={{lg: 50, md: 40, sm: 30, xs: 20}} fontWeight='bold' style={{fontStyle: 'bold'}}>
                    Mission and Vision
                </Typography>
                <Typography variant='body2' maxWidth='90%' paddingTop={{lg: 5, md: 3, sm: 2, xs: 2}} style={{textAlign: 'justify'}}>
                At AB Compassionate Home Care, our mission is to deliver unparalleled home care services that enrich the lives of individuals and their families in Calgary, Airdrie, Chestermere, Okotoks, and Cochrane. We are committed to providing care with dignity, respect, and compassion, ensuring our clients feel valued and supported in every aspect of their lives. By fostering trust and building meaningful connections, we aim to create a nurturing environment where individuals can thrive while receiving personalized support tailored to their unique needs. Our goal is to empower our clients to maintain their independence, well-being, and quality of life in the comfort and familiarity of their own homes. Our vision is to be recognized as the leading home care provider in our communities, setting the standard for excellence, reliability, and compassion in the industry. We aspire to create a future where accessible, high-quality home care services are available to all who need them, allowing individuals to age gracefully, recover with dignity, and live fulfilling lives surrounded by support and understanding. Through innovation, continuous improvement, and a highly skilled team, we aim to exceed expectations and redefine what it means to provide exceptional care. At AB Compassionate Home Care, we envision a world where families have peace of mind knowing their loved ones are in capable, caring hands. By prioritizing empathy, professionalism, and a commitment to excellence, we strive to make a positive, lasting impact on the lives of the individuals and communities we serve. Together, we aim to build a foundation of care that enhances not only the lives of our clients but also the well-being of their families and our society as a whole.
                </Typography>
            </Grid>
        </div>
    );
}

export default SecondContent;