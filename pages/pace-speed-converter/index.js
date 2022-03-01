import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Head from "next/head";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

export default function Index() {
    let [pace, setPace] = useState(300);
    let [speed, setSpeed] = useState(20);

    function updatePace(value) {
        setPace(value)
        // pace to seconds
        let seconds = (value % 100 + Math.round(value / 100) * 60);
        setSpeed(parseFloat((60 * 60 / seconds).toFixed(2)));
    }

    function updateSpeed(value) {
        setSpeed(value)
        let seconds = Math.round(60 * 60 / value)
        setPace(seconds % 60 + parseInt(seconds / 60) * 100)
    }


    return (
        <Container maxWidth="md">
            <Head>
                <title>配速时速转换｜省一秒工具箱</title>
            </Head>

            <Box sx={{ my: 4 }}>

                <Typography variant="h4" component="h1" gutterBottom>
                    配速时速转换
                </Typography>

                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField fullWidth
                            margin="normal"
                            type="number"
                            value={pace}
                            onChange={e => updatePace(e.target.value)}
                            label="配速"
                            helperText="格式：330、625..."
                            id="fullWidth" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            label="跑步机时速"
                            type="number"
                            value={speed}
                            onChange={e => updateSpeed(e.target.value)}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">km/h</InputAdornment>,
                            }}
                            margin="normal"
                            id="fullWidth" />

                    </Grid>
                </Grid>


            </Box>
        </Container>
    );
}
