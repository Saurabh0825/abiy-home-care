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
                        Our Services
                    </Typography>
                </Grid>
                <Grid container spacing={2} minHeight={160} sx={{ flexGrow: 1 }} paddingTop={10}>
                    <Grid size={{xs:12, sm: 6, md: 4, lg: 4}} display="flex" justifyContent="center" alignItems="center">
                        <Card sx={{ maxWidth: 300 }} style={{ backgroundColor: CARD_COLOR, cursor: 'pointer' }} >
                            <CardMedia
                                sx={{ height: 200 }}
                                image='/care_2.jpg'
                                title='Service 1'
                            />
                            <CardContent>
                                <Typography variant='h6'>
                                    Personal Care
                                </Typography>
                                <Typography>
                                We assist with bathing, grooming, dressing, oral hygiene, bathroom needs, and incontinence support, helping clients maintain their independence, personal hygiene, and dignity every day.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid size={{xs:12, sm: 6, md: 4, lg: 4}} display="flex" justifyContent="center" alignItems="center">
                        <Card sx={{ maxWidth: 300 }} style={{ backgroundColor: CARD_COLOR, cursor: 'pointer' }} >
                            <CardMedia
                                sx={{ height: 200 }}
                                image='/care_3.jpg'
                                title='Service 2'
                            />
                            <CardContent>
                                <Typography variant='h6'>
                                    Nursing Care
                                </Typography>
                                <Typography>
                                Our skilled nursing services include wound care, medication reminders / administration, insulin and blood glucose monitoring, and vital signs checks, ensuring comprehensive health management at home.
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid size={{xs:12, sm: 12, md: 4, lg: 4}} display="flex" justifyContent="center" alignItems="center">
                        <Card sx={{ maxWidth: 300 }} style={{ backgroundColor: CARD_COLOR, cursor: 'pointer' }} >
                            <CardMedia
                                sx={{ height: 200 }}
                                image='care_4.jpg'
                                title='Service 2'
                            />
                            <CardContent>
                                <Typography variant='h6'>
                                    Companionship
                                </Typography>
                                <Typography>
                                Our caregivers provide compassionate companionship, offering support and engagement that allows your loved ones to enjoy meaningful moments while you focus on your personal responsibilities.
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