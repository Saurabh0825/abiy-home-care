import Grid from '@mui/material/Grid2';
import { Typography, Box } from '@mui/material';
import Image from 'next/image';


const FirstDescription = () => {
    return (
        <>
            <Grid container spacing={2} alignItems="start">
                <Grid size={{ sm: 12, md: 6 }} display="flex" flexDirection="column" paddingTop={{ sm: 10, xs: 2 }} paddingLeft={{ xs: 2, sm: 3, md: 5, lg: 10 }}>
                    <Typography fontSize={{ lg: 60, md: 50, sm: 40, xs: 30 }} gutterBottom>
                        ABIY HOME CARE
                    </Typography>
                    <Typography fontSize={{ lg: 50, md: 40, sm: 30, xs: 20 }} gutterBottom>
                        SERVICE WITH PASSION
                    </Typography>
                    <Typography variant="body2" paddingRight={{ sm: 2, xs: 2 }} sx={{ maxWidth: '100%', textAlign: 'justify', margin: '0 auto' }}>
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                        into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                        release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                        software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Typography>
                    <Box>
                        Item 1 &vert; Item 2
                    </Box>

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