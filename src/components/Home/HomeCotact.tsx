"use client";
import { useState, FormEvent } from 'react'
import Grid from '@mui/material/Grid2';
import { TextField, Box, Button, Typography, CircularProgress } from '@mui/material';

const HomeContact = () => {
    const [name, setName] = useState('');
    const [phone, setPhone] = useState('');
    const [email, setEmail] = useState('');
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
        <div>
            <Grid size={{ xs: 12, sm: 6 }} paddingLeft={{ xs: '5%', sm: '5%' }} paddingTop={5}>
                {(status.code != 200) ?
                <form onSubmit={handleSubmit}>
                    <Box sx={{ width: '95%' }} paddingBottom={3}>
                        <TextField fullWidth label="Full Name" id="name" onChange={(e) => setName(e.target.value)} required/>
                    </Box>
                    <Box sx={{ width: '95%' }} paddingBottom={3}>
                        <TextField fullWidth label="Phone Number" id="phone" onChange={(e) => setPhone(e.target.value)} required/>
                    </Box>
                    <Box sx={{ width: '95%' }} paddingBottom={3}>
                        <TextField fullWidth label="Email" type='email' id="email" onChange={(e) => setEmail(e.target.value)} required/>
                    </Box>
                    <Box sx={{ width: '95%' }} paddingBottom={3}>
                        <TextField fullWidth label="Description" id="message" multiline minRows={4} onChange={(e) => setMessage(e.target.value)} required/>
                    </Box>
                    <Box sx={{ width: '98%' }} paddingBottom={3}>
                            <Typography variant='caption'>By clicking send below, you consent to allow AB Compassionate Home Care to store and process the personal information submitted above to provide you the content requested.</Typography>
                        </Box>
                    <Box sx={{ width: '95%' }} paddingBottom={3}>
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
        </div>
    );
}

export default HomeContact;