import Grid from '@mui/material/Grid2';
import { Typography, Box } from '@mui/material';
import Image from 'next/image'


const FirstDescription = () => {
    return (
        <div>
            <Grid container spacing={2} alignItems="start">
                {/* Left Section: Title and Description */}
                <Grid size={{ sm: 12, md: 8 }} display="flex" flexDirection="column" paddingTop={10} paddingLeft={10}>
                    <Typography variant="h2" gutterBottom>
                        ABIY HOME CARE
                    </Typography>
                    <Typography variant="h2" gutterBottom>
                        SERVICE WITH PASSION
                    </Typography>
                    <Typography variant="body2" marginRight={10} sx={{maxWidth:'80%'}}>
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

                {/* Right Section: Image */}
                <Grid size={{ sm: 12, md: 4 }} display="flex" justifyContent="end" alignItems="center" paddingTop={10} paddingRight={10}>
                    <Image
                        src="/care_1.jpeg" // Replace with your image path
                        alt="Home Care Image"
                        width={600} // Adjust width as needed
                        height={400} // Adjust height as needed
                        style={{ objectFit: 'cover', borderRadius: '8px' }}
                    />
                </Grid>
            </Grid>


        </div>
    );
}

export default FirstDescription;