"use client";
import { useState, FormEvent } from 'react';
import { Typography, TextField, Box, Button, CircularProgress } from '@mui/material';
import Grid from '@mui/material/Grid2';
import Image from 'next/image';

const ContactUs = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState({state: false, code: 0, response: ''});
    const [clicked, setClicked] = useState(false);
    const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        setClicked(true);
        e.preventDefault();
        const formData = {
            name,
            email,
            phone,
            message
        }
        try {
            const res = await fetch('/api/contact', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData)
            })
            const data = await res.json();
            setClicked(false);
            if (res.ok) {
                setStatus({state: true, code: 200, response: 'Email Sent Successfully!'})
            } else {
                setStatus({state: true, code: 400, response: data.error ? data.error : 'Something went wrong'})
            }
        } catch {
            setClicked(false);
            setStatus({state: true, code: 500, response: 'Something went wrong, please try again'})
        }
    }
    return (
        <>
            {/* Title Section */}
            <Grid size={{ xs: 12 }} paddingTop={{lg: 6, md: 7, sm: 4, xs: 2}} marginBottom={5} display='flex' justifyContent='center'>
                <Typography variant='h3'>CONTACT US</Typography>
            </Grid>
            <Grid container spacing={2}>
                <Grid
                    size={{ xs: 12, sm: 6 }}
                    paddingLeft={{ xs: 1, sm: 5 }}
                    style={{ maxWidth: '600px', margin: '0 auto' }}
                >
                    <Typography variant="h6">Contact Us</Typography>
                    <Typography variant="body1" paddingBottom={2}>
                    Please fill out the form, and we’ll reach out to you via email as soon as possible to discuss your needs.
                    </Typography>
                    <Box sx={{ width: '98%', maxWidth: '600px', margin: '0 auto' }}>
                        <Image
                            src="/h_care_19.jpg"
                            alt="Home Care Image"
                            width={600}
                            height={400}
                            style={{
                                objectFit: 'cover',
                                width: '98%',
                                height: 'auto',
                                borderRadius: '8px'
                            }}
                        />
                    </Box>
                </Grid>
                <Grid size={{ xs: 12, sm: 6 }} paddingLeft={{ xs: 1, sm: 2 }}>
                {(status.code != 200) ?
                    <form onSubmit={handleSubmit}>
                        <Box sx={{ width: '98%' }} paddingBottom={3}>
                            <TextField fullWidth label="Full Name" id="name" onChange={(e) => setName(e.target.value)} required />
                        </Box>
                        <Box sx={{ width: '98%' }} paddingBottom={3}>
                            <TextField fullWidth label="Phone Number" id="phone" onChange={(e) => setPhone(e.target.value)} required />
                        </Box>
                        <Box sx={{ width: '98%' }} paddingBottom={3}>
                            <TextField fullWidth label="Email" id="email" onChange={(e) => setEmail(e.target.value)} required />
                        </Box>
                        <Box sx={{ width: '98%' }} paddingBottom={3}>
                            <TextField fullWidth label="Description" id="message" multiline minRows={4} onChange={(e) => setMessage(e.target.value)} required />
                        </Box>
                        <Box sx={{ width: '98%' }} paddingBottom={3}>
                            <Typography variant='caption'>By clicking send below, you consent to allow AB Compassionate Home Care to store and process the personal information submitted above to provide you the content requested.</Typography>
                        </Box>
                        <Box sx={{ width: '98%' }} paddingBottom={3}>
                        {!clicked ?
                        <Button type='submit' fullWidth sx={{ height: "20%" }} variant="contained" disabled={!email || !email || !email || !message}>Send</Button>
                        : <Box display='flex' justifyContent='center'> <CircularProgress /></Box>}
                    </Box>
                    </form>
                    :<Box>
                    <Typography fontSize={{lg: 40, md: 30, sm: 25, xs:20}}>{status.response}</Typography>
                    </Box>}
                    {(status.state == true && status.code != 200) &&
                    <>{status.response}</>
                    } 
                </Grid>
                {/* </form> */}
            </Grid>
        </>
    );
}

export default ContactUs;
