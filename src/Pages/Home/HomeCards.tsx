import Grid from '@mui/material/Grid2';
import { Typography, Card, CardContent, CardMedia } from '@mui/material';
import { CARD_COLOR } from '@/utils/constants.json';
const HomeCards = () => {
    return (
        <div>
            <Grid container spacing={2}>
                <Grid size={{ xs: 12 }} display="flex" justifyContent="center" alignItems="center">
                    <Typography
                        variant="h4"
                        style={{ border: 'solid', borderWidth: 1, borderRadius: 5, paddingRight: 30, paddingLeft: 30, paddingTop: 5, marginTop: 50, backgroundColor: '#FFFFFF' }}
                    >
                        VISION
                    </Typography>
                </Grid>
                <Grid container spacing={2} minHeight={160} sx={{ flexGrow: 1 }} paddingTop={10}>
                    <Grid display="flex" justifyContent="center" alignItems="center" size="grow">
                        <Card sx={{ maxWidth: 300 }} style={{ backgroundColor: CARD_COLOR, cursor: 'pointer' }} >
                            <CardMedia
                                sx={{ height: 200 }}
                                image='/care_2.jpg'
                                title='Service 1'
                            />
                            <CardContent>
                                <Typography variant='h6'>
                                    Service 1
                                </Typography>
                                <Typography>
                                    industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                                    scrambled it to make a type specimen book.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid display="flex" justifyContent="center" alignItems="center">
                        <Card sx={{ maxWidth: 300 }} style={{ backgroundColor: CARD_COLOR, cursor: 'pointer' }} >
                            <CardMedia
                                sx={{ height: 200 }}
                                image='/care_3.jpg'
                                title='Service 2'
                            />
                            <CardContent>
                                <Typography variant='body2'>
                                    service 2
                                </Typography>
                                <Typography>
                                    industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                                    scrambled it to make a type specimen book.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid display="flex" justifyContent="center" alignItems="center" size="grow">
                        <Card sx={{ maxWidth: 300 }} style={{ backgroundColor: CARD_COLOR, cursor: 'pointer' }} >
                            <CardMedia
                                sx={{ height: 200 }}
                                image='care_4.jpg'
                                title='Service 2'
                            />
                            <CardContent>
                                <Typography variant='body2'>
                                    Service 3
                                </Typography>
                                <Typography>
                                    industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                                    scrambled it to make a type specimen book.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </div>


    );
}

export default HomeCards;