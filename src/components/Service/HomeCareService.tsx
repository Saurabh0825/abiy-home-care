import { Box, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Image from 'next/image';
const HomeCareService = () => {
    return (
        <div>
            <Grid size={{ xs: 12 }} display="center" justifyContent="center" marginBottom={4}>
                <Typography fontSize={{ lg: 30, md: 25, sm: 20, xs: 15 }}>Home Care</Typography>
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
            </Grid>


        </div>
    )
};

export default HomeCareService;