import Grid from '@mui/material/Grid2';
import { Typography } from '@mui/material';
import Image from 'next/image'

const FirstDescription = () => {
    return (
        <div>
            <Grid container spacing={2} alignItems="center">
                {/* Left Section: Title and Description */}
                <Grid size={{ xs: 12, sm: 8 }} display="flex" flexDirection="column">
                    <Typography variant="h3" gutterBottom>
                        Abiy Home Care
                    </Typography>
                    <Typography variant="body2">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry`&pos;`s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                        into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                        release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                        software like Aldus PageMaker including versions of Lorem Ipsum.
                    </Typography>
                </Grid>

                {/* Right Section: Image */}
                <Grid size={{ xs: 12, sm: 4 }} display="flex" justifyContent="end" alignItems="center">
                    <Image
                        src="/favicon.ico" // Replace with your image path
                        alt="Home Care Image"
                        width={200} // Adjust width as needed
                        height={200} // Adjust height as needed
                        style={{ objectFit: 'cover', borderRadius: '8px' }}
                    />
                </Grid>
            </Grid>


        </div>
    );
}

export default FirstDescription;