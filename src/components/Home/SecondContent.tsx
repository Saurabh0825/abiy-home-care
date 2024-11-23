import Grid from '@mui/material/Grid2';
import { Typography } from '@mui/material';

const SecondContent = () => {
    return (
        <div>
            <Grid container justifyContent='center' paddingTop={{lg: 10, md: 7, sm: 5, xs: 2}}>
                <Typography fontSize={{lg: 50, md: 40, sm: 30, xs: 20}} fontWeight='bold' style={{fontStyle: 'bold'}}>
                    Our Services
                </Typography>
                <Typography variant='body2' maxWidth='90%' paddingTop={{lg: 5, md: 3, sm: 2, xs: 2}} style={{textAlign: 'justify'}}>
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                        into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                        release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                        software like Aldus PageMaker including versions of Lorem Ipsum. survived not only five centuries, but also the leap
                        into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                        release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                        software like Aldus PageMaker including versions of Lorem Ipsum.

                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                        into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                        release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                        software like Aldus PageMaker including versions of Lorem Ipsum. survived not only five centuries, but also the leap
                        into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                        release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                        software like Aldus PageMaker including versions of Lorem Ipsum.
               
                </Typography>
            </Grid>
        </div>
    );
}

export default SecondContent;