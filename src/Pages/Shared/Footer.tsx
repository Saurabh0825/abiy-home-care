import Grid from '@mui/material/Grid2';
import { Typography } from '@mui/material';
import { FOOTER_BACKGROUND, BACKGROUND_COLOR } from '@/utils/constants.json';
const Footer = () => {
    return (
        <footer style={{backgroundColor: FOOTER_BACKGROUND, color: BACKGROUND_COLOR,
        width: '100%',
        padding: '1rem 0',
        height: 300,
        marginTop: 40
            }}
            >
            <Grid container justifyContent="center">
        <Typography style={{ color: 'white', textAlign: 'center', maxWidth: '80%' }}>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry standard dummy text ever since the 1500s...
        </Typography>
      </Grid>
        </footer>
    );
}

export default Footer;