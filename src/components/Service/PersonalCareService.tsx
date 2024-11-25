import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Image from 'next/image';
const PersonalCareService = () => {
    return (
        <div>
            <Grid size={{ xs: 12 }} display="center" justifyContent="center" marginBottom={4}>
                <Typography fontSize={{ lg: 30, md: 25, sm: 20, xs: 15 }}>Personal Care</Typography>
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
                    At AB Compassionate Home Care, we understand the importance of maintaining personal dignity and independence. Our personal care services are designed to support individuals with daily activities, ensuring they can live comfortably and confidently in their homes. <span style={{fontWeight: 'bold'}}> These services include bathing, grooming, dressing, and oral care, as well as assistance with bathroom needs and incontinence care. We also offer mobility support, helping clients safely get in and out of bed, and assist with light household duties such as cleaning, laundry, and washing dishes.</span>  Our caregivers are dedicated to providing compassionate, respectful care, empowering clients to maintain their personal hygiene and live independently. We understand that every individual has different needs, so we tailor our services to meet each client&apos;s unique situation. Whether it’s light meal preparation or escorting clients to appointments, our team is here to provide the support and care needed to enhance their quality of life. We are committed to providing the highest level of care, ensuring your loved one feels comfortable, safe, and supported at all times.
                    </Typography>
                </Grid>
            </Grid>


        </div>
    )
};

export default PersonalCareService;