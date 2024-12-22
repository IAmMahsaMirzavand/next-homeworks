"use client"
import React from 'react';
import { Box, TextField, Button, Typography, Link, Avatar } from '@mui/material';
import { styled } from '@mui/system';

const BackgroundContainer = styled(Box)(({ theme }) => ({
  height: '100vh',
  // width:'100%',
 
  // backgroundImage: `url('./WR_MindMachine_Illustration_Mobile_Square.png')`,
  backgroundSize: 'cover',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
}));

const BlurContainer = styled(Box)(({ theme }) => ({
  width: 350,
  height: 500,
  position: 'relative',
  borderRadius: 8,
  overflow: 'hidden',
  '&:before': {
    content: '""',
    position: 'absolute',
    top: -25,
    left: -25,
    right: 0,
    bottom: 0,
    background: 'inherit',
    boxShadow: 'inset 0 0 0 200px rgba(255, 255, 255, 0.2)',
    filter: 'blur(10px)',
    // zIndex: -1,
  },
}));

export default function SignIn() {
  return (
    <BackgroundContainer>
      <BlurContainer>
        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            height: '100%',
            px: 3,
          }}
        >
          <Avatar
            // src="https://bit.ly/2tlJLoz"
            sx={{ width: 120, height: 120, mb: 3 }}
          />
          <TextField
            variant="standard"
            fullWidth
            placeholder="@Mahsa"
            InputProps={{
              disableUnderline: true,
              sx: {
                borderBottom: '2px solid rgba(255, 255, 255, 0.3)',
                fontSize: 18,
                fontWeight: 'bold',
                color: 'rgba(255, 255, 255, 0.8)',
                '&::placeholder': { color: 'rgba(255, 255, 255, 0.8)' },
              },
            }}
            sx={{ mb: 2 }}
          />
          <TextField
            variant="standard"
            fullWidth
            type="password"
            placeholder="Password"
            InputProps={{
              disableUnderline: true,
              sx: {
                borderBottom: '2px solid rgba(255, 255, 255, 0.3)',
                fontSize: 18,
                fontWeight: 'bold',
                color: 'rgba(255, 255, 255, 0.8)',
                '&::placeholder': { color: 'rgba(255, 255, 255, 0.8)' },
              },
            }}
            sx={{ mb: 2 }}
          />
          <Button
             type="submit"
             fullWidth
             sx={{
               mt: 2,
               height: 60,
               backgroundColor: 'rgba(255, 255, 255, 0.2)',
               color: '#fff',
               borderRadius: 2,
               fontWeight: 'bold',
               transition: 'all 0.6s ease-in-out',
               '&:hover': {
                 backgroundColor: 'rgba(255, 255, 255, 0.3)',
               },
            }}
          >
            LOG IN
          </Button>
          <Typography variant="body2" sx={{ mt: 2, color: 'rgba(255,255,255,0.8)' }}>
            <Link href="#" underline="hover" sx={{ color: 'rgba(255,255,255,0.4)' }}>
              Forgot Password?
            </Link>
          </Typography>
        </Box>
      </BlurContainer>
    </BackgroundContainer>
  );
}
