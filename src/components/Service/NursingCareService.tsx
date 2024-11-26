import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Image from 'next/image';
const NursingCareService = () => {
    return (
        <div>
            <Grid size={{ xs: 12 }} display="center" justifyContent="center" marginBottom={4} marginTop={4} id="nursing_care">
                <Typography fontSize={{ lg: 30, md: 25, sm: 20, xs: 15 }}>Nursing Care</Typography>
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
                                        src='/h_care_6.jpg'
                                        alt="Home Care Image"
                                        width={100}
                                        height={100}
                                    />
                                </Box>
                            </Grid>
                            <Grid size={{ xs: 6, sm: 6, md: 6, lg: 6 }}>
                                <Box>
                                    <Image
                                        src='/h_care_7.jpg'
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
                                        src='/h_care_8.jpg'
                                        alt="Home Care Image"
                                        width={100}
                                        height={100}
                                    />
                                </Box>
                            </Grid>
                            <Grid size={{ xs: 6, sm: 6, md: 6, lg: 6 }}>
                                <Box>
                                    <Image
                                        src='/h_care_9.jpg'
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
                        Thank you for the clarification. Here&apos;s the updated version that focuses on your capabilities: Our nursing care services are designed to provide clients with personalized care in the comfort of their own homes, supporting their health and well-being. <span style={{fontWeight: 'bold'}}>We offer a range of services including wound care and dressing changes, medication administration, and reminders, </span> ensuring clients stay on track with their prescribed treatments as directed by their healthcare providers. <span style={{fontWeight: 'bold'}}> We also monitor blood sugar and vital signs such as blood pressure, temperature, pulse, and respiration, </span> to track and assess the overall health status of our clients. Our team is trained to observe any changes in health and communicate with family members or healthcare professionals as needed, ensuring that the care plan remains aligned with medical needs. By providing these essential nursing services, we aim to give our clients the peace of mind that their health is being closely monitored and cared for in their own home. Whether recovering from an illness, managing ongoing conditions, or simply needing routine check-ups, we are here to assist with every aspect of their health care. Our goal is to offer compassionate and professional support that complements the care clients receive from their doctors, helping them stay healthy, comfortable, and well-supported while living independently. We strive to make a positive impact on both the physical and emotional well-being of each client.
                    </Typography>
                </Grid>
            </Grid>


        </div>
    )
};

export default NursingCareService;