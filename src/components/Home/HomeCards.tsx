import Grid from '@mui/material/Grid2';
import { Typography, Card, CardContent, CardMedia, CardActionArea } from '@mui/material';
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
                            <CardActionArea href="/services#personal_care">
                            <CardMedia
                                sx={{ height: 200 }}
                                image='/h_care_16.jpg'
                                title='personal home care image'
                            />
                            <CardContent>
                                <Typography variant='h6' style={{fontWeight: 'bold'}}>
                                    Personal Care
                                </Typography>
                                <Typography>
                                We assist with bathing, grooming, dressing, oral hygiene, bathroom needs, and incontinence support, helping clients maintain their independence, personal hygiene, and dignity every day.
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid size={{xs:12, sm: 6, md: 4, lg: 4}} display="flex" justifyContent="center" alignItems="center">
                        <Card sx={{ maxWidth: 300 }} style={{ backgroundColor: CARD_COLOR, cursor: 'pointer' }} >
                        <CardActionArea href="/services#nursing_care">
                            <CardMedia
                                sx={{ height: 200 }}
                                image='/h_care_15.jpg'
                                title='nursing home care image'
                            />
                            <CardContent>
                                <Typography variant='h6' style={{fontWeight: 'bold'}}>
                                    Nursing Care
                                </Typography>
                                <Typography>
                                Our skilled nursing services include wound care, medication reminders / administration, insulin and blood glucose monitoring, and vital signs checks, ensuring comprehensive health management at home.
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                    <Grid size={{xs:12, sm: 12, md: 4, lg: 4}} display="flex" justifyContent="center" alignItems="center">
                        <Card sx={{ maxWidth: 300 }} style={{ backgroundColor: CARD_COLOR, cursor: 'pointer' }} >
                        <CardActionArea href="/services#companionship">
                            <CardMedia
                                sx={{ height: 200 }}
                                image='/h_care_14.jpg'
                                title='compassionate home care image'
                            />
                            <CardContent>
                                <Typography variant='h6' style={{fontWeight: 'bold'}}>
                                    Companionship
                                </Typography>
                                <Typography>
                                Our caregivers provide compassionate companionship, offering support and engagement that allows your loved ones to enjoy meaningful moments while you focus on your personal responsibilities.
                                </Typography>
                            </CardContent>
                            </CardActionArea>
                        </Card>
                    </Grid>
                </Grid>
            </Grid>
        </div>


    );
}

export default HomeCards;