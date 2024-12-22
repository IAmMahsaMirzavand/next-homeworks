import { Box, Button, TextField } from '@mui/material'
import React from 'react'

export default function login() {
  return (
   
    <Box
    component="form"
    sx={{ 
      maxWidth:400,
      // margin:,
      marginLeft:60,
      marginTop:20,
      padding: 5,
      display:"flex",
      boxShadow: 3,
      borderRadius: 2,
      flexDirection:"column",
      gap:2,
     }}
    noValidate
    autoComplete="off"
  >
    
    
      <TextField
        
        id="outlined-disabled"
        label="email"
        variant="outlined"
      />
      <TextField
        id="outlined-password-input"
        label="Password"
        type="password"
        autoComplete="current-password"
        variant="outlined"
      />
      
      <Button type="submit" variant="containd" color="primary" fullWidth>Login</Button>
      
      </Box>
  )
}
