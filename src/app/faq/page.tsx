import * as React from 'react';
import Grid from '@mui/material/Grid2';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const FAQ = () => {
    return (
        <>
        <Grid container spacing={2} paddingLeft={{xs: 3, sm: 8}} paddingTop={4}>
            <Typography variant='h5'>Frequently Asked Questions</Typography>
        </Grid>
        <Grid style={{maxWidth: '70%'}} paddingLeft={{xs: 3, sm: 8}} paddingTop={4}>
            <Accordion defaultExpanded>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1-content"
                    id="panel1-header"
                >
                    <Typography>What services does AB Compassionate Home Care provide?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    AB Compassionate Home Care offers personal care, nursing support, companionship, and transportation services. We assist with daily activities, health monitoring, emotional support, and provide transportation to appointments, all tailored to meet the specific needs of our clients in Calgary and surrounding towns.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography>Which areas do you serve?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    We proudly serve Calgary, Okotoks, Chestermere, Cochrane, Airdrie, and other surrounding towns. Our goal is to provide compassionate, personalized home care to individuals throughout these areas, ensuring they receive the care and support they deserve, wherever they live.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography>How can I arrange home care services?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    To arrange services, simply contact us via email or phone. Our team will discuss your needs, create a personalized care plan, and arrange the right services for you or your loved one. We’re here to provide support and help navigate any care needs you may have. you can contact us directly <a href='/contactus'>here</a>.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography>Do you offer 24-hour care?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    Yes, we offer flexible care schedules, including 24-hour care if needed. Whether it’s round-the-clock assistance or periodic visits, we can tailor our services to provide the right level of care for you or your loved one, ensuring safety and comfort at home.
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2-content"
                    id="panel2-header"
                >
                    <Typography>How experienced is your team?
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography>
                    Our team has over 8 years of experience in home care, assissted living, and long-term care. We are highly trained in personal care, nursing care, and offering companionship, all with a compassionate approach. Our goal is to provide reliable, professional care that enhances the well-being and independence of our clients.
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </Grid>
        </>
    );
}

export default FAQ;