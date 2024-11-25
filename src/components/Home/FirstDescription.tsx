import Grid from '@mui/material/Grid2';
import { Typography, Box } from '@mui/material';
import Image from 'next/image';


const FirstDescription = () => {
    return (
        <>
            <Grid container spacing={2} alignItems="start">
                <Grid size={{ sm: 12, md: 6 }} display="flex" flexDirection="column" paddingTop={{ sm: 10, xs: 2 }} paddingLeft={{ xs: 2, sm: 3, md: 5, lg: 10 }}>
                    <Typography fontSize={{ lg: 50, md: 45, sm: 40, xs: 30 }} gutterBottom>
                        AB COMPASSIONATE HOME CARE
                    </Typography>
                    <Typography fontSize={{ lg: 50, md: 40, sm: 30, xs: 20 }} gutterBottom>
                        SERVICE WITH PASSION
                    </Typography>
                    <Typography variant="body2" paddingRight={{ sm: 2, xs: 2 }} sx={{ maxWidth: '100%', textAlign: 'justify', margin: '0 auto' }}>
                        Welcome to <span style={{fontWeight: 'bold'}}>AB Compassionate Home Care </span>, your trusted partner in compassionate, professional home care services. We proudly serve Calgary, 
                        Airdrie, Chestermere, Okotoks, and Cochrane, offering tailored care solutions to meet your unique needs. Whether you require
                         assistance with daily living, nursing care, or companionship for loved ones, our dedicated team is here to provide 
                         reliable support in the comfort of your home. At AB Compassionate Home Care, we are committed to enhancing the quality of life for individuals 
                         and families by delivering personalized care with dignity and respect. Let us help you or your loved ones live independently and
                          confidently <a style={{color: 'blue', textDecoration: 'none'}} href="/contactus"> contact us </a> today to learn more about our exceptional services!
                    </Typography>
                    {/* <Box>
                        Item 1 &vert; Item 2
                    </Box> */}

                </Grid>

                <Grid size={{ sm: 12, md: 6 }} display="flex" justifyContent="end" alignItems="center" paddingTop={{ xs: 2, sm: 3, md: 10, lg: 10 }}>
                    <Box sx={{ maxWidth: '600px', width: '90%', margin: "0 auto" }}>
                        <Image
                            src="/care_1.jpeg"
                            alt="Home Care Image"
                            width={600}
                            height={400}
                            style={{ objectFit: 'cover', borderRadius: '8px', width: '100%', height: 'auto' }}
                        />
                    </Box>
                </Grid>
            </Grid>


        </>
    );
}

export default FirstDescription;