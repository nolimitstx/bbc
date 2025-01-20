"use client"
import React, { useState } from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import styles from '../page.module.css';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

export default function SubscribeButton() {
  const [open, setOpen] = useState(false);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [twitter, setTwitter] = useState('');
  const [instagram, setInstagram] = useState('');

  const theme = useTheme();
  const matches = useMediaQuery('(min-width: 960px)'); // Adjust the breakpoint to match your CSS media query


  const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setOpen(false);
    setName('');
    setPhone('');
    setEmail('');
    setTwitter('');
    setInstagram('');
  };
  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    // Ensure phone contains only numbers
    const phoneRegex = /^[0-9]+$/;
    if (!phoneRegex.test(phone)) {
      alert('Phone number must contain only numbers');
      return;
    }

    // Remove "@" from the beginning of twitter and instagram if present
    const sanitizedTwitter = twitter.startsWith('@') ? twitter.slice(1) : twitter;
    const sanitizedInstagram = instagram.startsWith('@') ? instagram.slice(1) : instagram;

    const response = await fetch('/api/subscribe', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ name, phone, email, twitter: sanitizedTwitter, instagram: sanitizedInstagram }),
    });

    if (response.ok) {
      console.log('Subscription successful');
    } else {
      console.error('Subscription failed');
    }

    handleClose();
  };

  return (
    <>
      <Button variant="contained" className={styles.subscribe} sx={{
          fontSize: matches ? '24px' : '18px', // Match .mintSoon font size for larger screens
          padding: matches ? '12px 24px' : '8px 16px', // Adjust padding accordingly
          marginTop: 0,
          marginLeft: '1rem',
        }} onClick={handleOpen}>
        Subscribe
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        fullWidth
        maxWidth="sm" // You can change this to 'xs', 'sm', 'md', 'lg', 'xl' based on your requirement
      >
          <DialogTitle gutterBottom sx={{ fontFamily: 'Luckiest Guy', color: 'black', textAlign: 'center' }}>
            Subscribe below to stay up to date
          </DialogTitle>
          <DialogContent>
          <Box component="form" sx={{ mt: 2 }}>
            <TextField
              sx={{ fontFamily: 'Luckiest Guy' }}
              fullWidth
              margin="normal"
              label="Name"
              value={name}
              onChange={(e) => {
                const value = e.target.value;
                const regex = /^[a-zA-Z\s]*$/; // Letters and spaces only
                if (regex.test(value)) {
                  setName(value);
                }
              }}
              className={styles['textfield-white-bg']}
            />
            <TextField
              sx={{ fontFamily: 'Luckiest Guy' }}
              fullWidth
              margin="normal"
              label="Phone Number"
              value={phone}
              onChange={(e) => {
                const value = e.target.value;
                const regex = /^[0-9]*$/; // Numbers only
                if (regex.test(value) && value.length <= 15) {
                  console.log('tyoe', typeof value)
                  setPhone(value);
                }
              }}
              inputProps={{ pattern: "[0-9]*" }}
              className={styles['textfield-white-bg']}

            />
            <TextField
              sx={{ fontFamily: 'Luckiest Guy' }}
              fullWidth
              required
              margin="normal"
              label="Email"
              type="email"
              value={email}
              onChange={(e) => {
                if (e.target.value?.length <= 254) {
                  setEmail(e.target.value)
                }
              }}
              className={styles['textfield-white-bg']}

            />
            <TextField
              sx={{ fontFamily: 'Luckiest Guy' }}
              fullWidth
              required
              margin="normal"
              label="Twitter"
              value={twitter}
              onChange={(e) => {
                const value = e.target.value.replace(/^@/, ''); // Remove "@" if present
                const regex = /^[a-zA-Z0-9_]*$/; // Alphanumeric and underscores only
                if (regex.test(value) && value.length <= 15) {
                  setTwitter(value);
                }
              }}
              className={styles['textfield-white-bg']}

            />
            <TextField
              sx={{ fontFamily: 'Luckiest Guy' }}
              fullWidth
              margin="normal"
              label="Instagram"
              value={instagram}
              onChange={(e) => {
                const value = e.target.value.replace(/^@/, ''); // Remove "@" if present
                const regex = /^[a-zA-Z0-9._]*$/; // Letters, numbers, periods, and underscores only
                if (regex.test(value) && value.length <= 30) {
                  setInstagram(value);
                }
              }}
              className={styles['textfield-white-bg']}

            />
          </Box>
        </DialogContent>
        <DialogActions>
          <Button variant='outlined' onClick={handleClose} color="primary" sx={{ fontFamily: 'Luckiest Guy' }}>
            Cancel
          </Button>
          <Button variant="contained" onClick={handleSubmit} color="primary" sx={{ fontFamily: 'Luckiest Guy' }}>
            Subscribe
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
}