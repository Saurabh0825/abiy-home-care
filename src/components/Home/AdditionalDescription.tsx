import { Typography, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Image from 'next/image';
const AdditionalDescription = () => {
    return (
        <div>
      <Grid container spacing={2} justifyContent="center">
        
        {/* Title Section */}
        <Grid size={{xs:12}}  container justifyContent="center" paddingBottom={10} paddingTop={10} paddingLeft={{xs: 2}} id="service_near_you">
          <Typography fontSize={{lg: 50, md: 40, sm: 30, xs: 20}}>Compassionate Home Care Services Near You</Typography>
        </Grid>
        
        {/* Content Section */}
        <Grid container spacing={2} justifyContent="center" paddingLeft={{ xs: '2%', sm: '5%' }} paddingRight={{xs: '2%', sm: '5%'}}>
          
          <Grid size={{xs:12, sm: 12, md:6}}>
            <Typography variant="h4" style={{paddingBottom:12}}>Our Home Care Services in Calgary, Alberta</Typography>
            <Typography variant="body2" sx={{textAlign: 'justify'}}>
            Calgary’s growing and diverse population deserves compassionate and professional care, and AB Compassionate Home Care is here to meet that need. We proudly serve individuals and families across all quadrants of Calgary, offering personalized support to people from various backgrounds and cultures. Our experienced team is dedicated to delivering exceptional home care services that align with our mission to enhance the quality of life for those we serve. Whether it’s personal care, nursing care, companionship, or transportation service, we ensure every client receives dignified and reliable assistance tailored to their unique needs. As Calgary continues to expand, we remain committed to being a trusted partner in the community, empowering individuals to live independently and confidently in their own homes. Let us support you and your loved ones with care you can depend on.
            </Typography>
                        <Typography variant="h4" style={{marginTop: 50, paddingBottom: 12, paddingLeft: 10}}>Home Care Services in Okotoks, Airdrie, Chestermere, and Cochrane</Typography>
            <Typography variant="body2" sx={{textAlign: 'justify'}}>
            At AB Compassionate Home Care, we are proud to extend our exceptional services to the vibrant communities of Okotoks, Airdrie, Chestermere, and Cochrane. Each town has its unique charm and growing population, and we are here to support individuals and families with personalized care that meets their needs. Our experienced team is dedicated to helping clients maintain their independence and quality of life, no matter where they are. From personal care to nursing and companionship, we deliver reliable, compassionate services to diverse communities in these thriving towns. Whether it’s providing transportation, assisting with daily activities, or offering professional health care, we are committed to fostering a sense of comfort and trust. AB Compassionate Home Care is here to make a difference, one home at a time.
            </Typography>
          </Grid>
          
          <Grid size={{xs:12, sm:12, md:6}} paddingLeft={0}>
          <Box sx={{maxWidth:'600px', width: '90%', margin: "0 auto"}}>
            <Image 
            alt='home-care-image'
            src='/care_5.jpg'
            width={500}
            height={300}
            style={{
                objectFit: 'cover', borderRadius: '8px', width: '100%'
            }}
            />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </div>
    );
}

export default AdditionalDescription;