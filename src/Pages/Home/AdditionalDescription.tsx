import { Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Image from 'next/image';
const AdditionalDescription = () => {
    return (
        <div>
      <Grid container spacing={2} justifyContent="center">
        
        {/* Title Section */}
        <Grid size={{xs:12}}  container justifyContent="center">
          <Typography variant="h2">Our Service Detail Explanation</Typography>
        </Grid>
        
        {/* Content Section */}
        <Grid size={{xs:12, sm:10}} container spacing={2} justifyContent="center">
          
          <Grid size={{xs:12, sm:6}}>
            <Typography variant="h4">First Paragraph</Typography>
            <Typography variant="body2">working</Typography>
          </Grid>
          
          <Grid size={{xs:12, sm:6}}>
            <Image 
            alt='home-care-image'
            src='/care_1.jpeg'
            width={200}
            height={200}
            />
          </Grid>
        </Grid>
      </Grid>
    </div>
    );
}

export default AdditionalDescription;