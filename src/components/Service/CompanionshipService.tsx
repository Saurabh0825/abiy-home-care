import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Image from 'next/image';
const CompanionshipService = () => {
    return (
        <div>
            <Grid size={{ xs: 12 }} display="center" justifyContent="center" marginBottom={4} marginTop={4}>
                <Typography fontSize={{ lg: 30, md: 25, sm: 20, xs: 15 }}>Companionship and Transportation Service</Typography>
            </Grid>
            <Grid container spacing={2} paddingRight={2}>
                <Grid size={{ xs: 12, sm: 12, md: 3, lg: 3 }} paddingLeft={{ lg: 6, md: 1, xs: '20%', sm: '20%' }} paddingRight={2}>
                    <Box
                        border="solid 0.5px #C5B6B6"
                        padding={1}
                        sx={{
                            width: { xs: '80%', sm: '80%', md: '100%', lg: '100%' },
                            display: 'flex',
                            flexDirection: 'column',
                            gap: '10px',
                        }}
                    >
                        <Grid container spacing={2} sx={{ marginBottom: '10px' }}>
                            <Grid size={{ xs: 6, sm: 6, md: 6, lg: 6 }}>
                                <Box>
                                    <Image
                                        src='/care_1.jpeg'
                                        alt="Home Care Image"
                                        width={100}
                                        height={100}
                                    />
                                </Box>
                            </Grid>
                            <Grid size={{ xs: 6, sm: 6, md: 6, lg: 6 }}>
                                <Box>
                                    <Image
                                        src='/care_2.jpg'
                                        alt="Home Care Image"
                                        width={100}
                                        height={100}
                                    />
                                </Box>
                            </Grid>
                        </Grid>

                        <Grid container spacing={2}>
                            <Grid size={{ xs: 6, sm: 6, md: 6, lg: 6 }}>
                                <Box>
                                    <Image
                                        src='/care_3.jpg'
                                        alt="Home Care Image"
                                        width={100}
                                        height={100}
                                    />
                                </Box>
                            </Grid>
                            <Grid size={{ xs: 6, sm: 6, md: 6, lg: 6 }}>
                                <Box>
                                    <Image
                                        src='/care_4.jpg'
                                        alt="Home Care Image"
                                        width={100}
                                        height={100}
                                    />
                                </Box>
                            </Grid>
                        </Grid>
                    </Box>
                </Grid>

                <Grid size={{ xs: 12, sm: 12, md: 9, lg: 9 }} textAlign="justify">
                    <Typography paddingLeft={{ xs: 2 }}>
                    At AB Compassionate Home Care, we offer both companionship and transportation services to ensure that our clients remain socially engaged, active, and independent. Our companionship services are designed to combat loneliness and isolation by providing your loved one with a friendly and caring presence. Whether it’s engaging in conversations, participating in hobbies, or simply spending time together, our caregivers offer meaningful interactions that promote emotional well-being. Additionally, we assist with daily tasks, ensuring clients maintain their routines with dignity and ease. We also provide transportation services to ensure that your loved one can attend doctor appointments, worship services, senior centers, or other important events. Our caregivers offer safe and reliable transportation, assisting with mobility and ensuring comfort during the journey. Whether it&apos;s for medical check-ups or social outings, we make sure your loved one stays connected to their community and continues to engage in activities that bring them joy. By combining companionship with transportation, we provide a holistic approach to care, helping your loved one live independently and enjoy a fulfilling, active lifestyle. Our goal is to ensure both physical and emotional well-being, creating a positive experience for both clients and their families.
                    </Typography>
                </Grid>
            </Grid>


        </div>
    )
};

export default CompanionshipService;