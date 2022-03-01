import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Head from "next/head";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function convertHMS(value) {
    const sec = parseInt(value, 10); // convert value to number if it's string
    let hours = Math.floor(sec / 3600); // get hours
    let minutes = Math.floor((sec - (hours * 3600)) / 60); // get minutes
    let seconds = sec - (hours * 3600) - (minutes * 60); //  get seconds
    // add 0 if value < 10; Example: 2 => 02
    if (hours < 10) { hours = "0" + hours; }
    if (minutes < 10) { minutes = "0" + minutes; }
    if (seconds < 10) { seconds = "0" + seconds; }
    return hours + ':' + minutes + ':' + seconds; // Return is HH : MM : SS
}

export default function Index() {
    let [pace, setPace] = useState(300);
    let [speed, setSpeed] = useState(20);
    let [paceInSeconds, setPaceInSeconds] = useState(180);

    function updatePace(value) {
        setPace(value)
        // pace to seconds
        let seconds = (value % 100 + Math.round(value / 100) * 60);
        setPaceInSeconds(seconds);
        setSpeed(parseFloat((60 * 60 / seconds).toFixed(2)));
    }

    function updateSpeed(value) {
        setSpeed(value)
        let seconds = Math.round(60 * 60 / value)
        setPaceInSeconds(seconds);
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

                <Box sx={{ my: 4, maxWidth: 400 }}>
                    <TableContainer component={Paper}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>项目</TableCell>
                                    <TableCell align="right">成绩(时分秒)</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                <TableRow >
                                    <TableCell component="th" scope="row">
                                        5K
                                    </TableCell>
                                    <TableCell align="right">
                                        {convertHMS(paceInSeconds * 5)}
                                    </TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell component="th" scope="row">
                                        10K
                                    </TableCell>
                                    <TableCell align="right">
                                        {convertHMS(paceInSeconds * 10)}

                                    </TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell component="th" scope="row">
                                        半马
                                    </TableCell>
                                    <TableCell align="right">
                                        {convertHMS(paceInSeconds * 42.195 / 2)}
                                    </TableCell>
                                </TableRow>
                                <TableRow >
                                    <TableCell component="th" scope="row">
                                        全马
                                    </TableCell>
                                    <TableCell align="right">
                                        {convertHMS(paceInSeconds * 42.195)}
                                    </TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Box>
            </Box>
        </Container>
    );
}
