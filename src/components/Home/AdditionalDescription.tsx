import { Typography, Box } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Image from 'next/image';
const AdditionalDescription = () => {
    return (
        <div>
      <Grid container spacing={2} justifyContent="center">
        
        {/* Title Section */}
        <Grid size={{xs:12}}  container justifyContent="center" paddingBottom={10} paddingTop={10} paddingLeft={{xs: 2}}>
          <Typography variant="h2">Our Service Detail Explanation</Typography>
        </Grid>
        
        {/* Content Section */}
        <Grid container spacing={2} justifyContent="center" paddingLeft={{ xs: '2%', sm: '5%' }}>
          
          <Grid size={{xs:12, sm: 12, md:6}}>
            <Typography variant="h4" style={{paddingBottom:12}}>First Paragraph</Typography>
            <Typography variant="body2" sx={{textAlign: 'justify'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                        into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                        release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                        software like Aldus PageMaker including versions of Lorem Ipsum. survived not only five centuries, but also the leap
                        into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                        release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                        software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>

                        <Typography variant="h4" style={{marginTop: 50, paddingBottom: 12, paddingLeft: 10}}>Second Paragraph</Typography>
            <Typography variant="body2" sx={{textAlign: 'justify'}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                        industry standard dummy text ever since the 1500s, when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap
                        into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                        release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                        software like Aldus PageMaker including versions of Lorem Ipsum. survived not only five centuries, but also the leap
                        into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the
                        release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing
                        software like Aldus PageMaker including versions of Lorem Ipsum.</Typography>
          </Grid>
          
          <Grid size={{xs:12, sm:12, md:6}} paddingLeft={0}>
          <Box sx={{maxWidth:'600px', width: '90%', margin: "0 auto"}}>
            <Image 
            alt='home-care-image'
            src='/care_5.jpg'
            width={500}
            height={300}
            style={{
                objectFit: 'cover', borderRadius: '8px', width: '100%'
            }}
            />
            </Box>
          </Grid>
        </Grid>
      </Grid>
    </div>
    );
}

export default AdditionalDescription;