"use client";
import { useState, FormEvent } from 'react';
import { Typography, TextField, Box, Button } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Image from 'next/image';

const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        const formData = {
            name,
            email,
            phone, 
            message
        };
        setStatus('Sending...');
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await res.json();
            if (res.ok) {
                setStatus('Message Sent Successfully!');
            } else {
                setStatus(data.error || 'Something went wrong');
            }
        } catch {
            setStatus('Error sending message');
        }
    }
    return (
        <>
                {/* Title Section */}
                <Grid size={{ xs: 12 }} paddingTop={12} marginBottom={5} display='flex' justifyContent='center'>
                    <Typography variant='h3'>CONTACT US</Typography>
                </Grid>

                {/* Main Content Section */}
                <Grid container spacing={2}>

                    {/* First Column: Title, Description, Image */}
                    <Grid size={{ xs: 12, sm: 6 }} paddingLeft={{ xs: 0, sm: 5 }} style={{ maxWidth: '600px', margin: '0 auto' }}>
                        <Typography variant='body1'>Title</Typography>
                        <Typography variant='body1' paddingBottom={2}>
                            It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the...
                        </Typography>
                        <Image
                            src="/care_1.jpeg"
                            alt="Home Care Image"
                            width={600}
                            height={400}
                            style={{ objectFit: 'cover', borderRadius: '8px' }}
                        />
                    </Grid>

                    {/* Second Column: Text Fields */}
                    {/* <form> */}
                    <Grid size={{ xs: 12, sm: 6 }} paddingLeft={{ xs: 0, sm: 2 }}>
                        <form onSubmit={handleSubmit}>
                        <Box sx={{ width: '80%' }} paddingBottom={3}>
                            <TextField fullWidth label="Full Name*" id="fullname" onChange={(e) => setName(e.target.value)} required />
                        </Box>
                        <Box sx={{ width: '80%' }} paddingBottom={3}>
                            <TextField fullWidth label="Phone Number*" id="phonenumber" onChange={(e) => setPhone(e.target.value)} required/>
                        </Box>
                        <Box sx={{ width: '80%' }} paddingBottom={3}>
                            <TextField fullWidth label="Email*" id="email" onChange={(e) => setEmail(e.target.value)} required/>
                        </Box>
                        <Box sx={{ width: '80%' }} paddingBottom={3}>
                            <TextField fullWidth label="Description*" id="description" multiline minRows={4} onChange={(e) => setMessage(e.target.value)} required/>
                        </Box>
                        <Box sx={{ width: '80%' }} paddingBottom={3}>
                        <Button type="submit" fullWidth sx={{height: "20%"}} variant="contained">Send</Button>
                        {status && <p>{status}</p>}
                        </Box>
                        </form>
                    </Grid>
                    {/* </form> */}
                </Grid>
        </>
    );
}

export default ContactUs;
