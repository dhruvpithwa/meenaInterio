import { useState } from 'react';
import { Avatar, Box, Button, Typography, TextField } from '@mui/material';
import { LockOutlined as LockOutlinedIcon } from '@mui/icons-material';
import { doc, getDoc } from "firebase/firestore"; 
import { db } from '../firebase-config';
import { useNavigate } from 'react-router';
import Cookies from 'js-cookie';
import { v4 as uuidv4 } from 'uuid';

export const Login = () => {

    const navigate = useNavigate();
    const [isUserValid, setUserValidity] = useState(true);

    const authenticateUser = async (inputEmail, inputPassword) => {
        const docRef = doc(db, "users", inputEmail);
        const docSnap = await getDoc(docRef);
        if (docSnap.exists()) {
            const { password }  = docSnap.data();
            return password === inputPassword;
        } 
        return false;
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        const data = new FormData(event.currentTarget);
        const isUserVerified = await authenticateUser(data.get('email'), data.get('password'));
        setUserValidity(isUserVerified);
        
        if(isUserVerified){
            Cookies.set('authToken', uuidv4(), { expires: 1 / 24 });
            navigate('/admin');
        }
    };


    return (
        <Box
            sx={{
                marginTop: 8,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
        >
            <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
                Sign in
            </Typography>
            <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    id="email"
                    label="Email Address"
                    name="email"
                    autoComplete="email"
                    autoFocus
                />
                <TextField
                    margin="normal"
                    required
                    fullWidth
                    name="password"
                    label="Password"
                    type="password"
                    id="password"
                    autoComplete="current-password"
                />
                <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{ mt: 3, mb: 2 }}
                >
                    Sign In
                </Button>
                {!isUserValid && <Typography 
                    color={'error'}
                    sx={{ 
                        textAlign: 'center'
                    }}
                >
                    Invalid user or password !
                </Typography>}
            </Box>
        </Box>
    );
}