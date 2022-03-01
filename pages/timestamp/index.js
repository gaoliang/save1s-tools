import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Head from "next/head";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';


export default function Index() {
    let [timestamp, setTimestamp] = useState();
    let [timer, setTimer] = useState(0);

    let [inputTimestamp, setInputTimestamp] = useState(new Date().getTime());

    let [timeString, setTimeString] = useState('');

    useEffect(() => {
        const timer = setInterval(() => {
            setTimestamp(new Date().getTime())
        }, 1);
        setTimer(timer)
    }, []);

    function timestampToString(timestamp) {
        let date = new Date(parseInt(timestamp));
        return date.toLocaleString();
    }

    return (
        <Container maxWidth="md">
            <Head>
                <title>时间戳｜省一秒工具箱</title>
            </Head>

            <Box sx={{ my: 4 }}>

                <Typography variant="h4" component="h1" gutterBottom>
                    时间戳工具
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        当前时间戳(ms)： {timestamp}

                    </Grid>
                    <Grid item xs={6}>
                        当前时间戳(s)： {Math.floor(timestamp / 1000)}

                    </Grid>
                </Grid>

                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField fullWidth
                            margin="normal"
                            label="时间戳"
                            value={inputTimestamp}
                            onChange={e => setInputTimestamp(e.target.value)}
                            id="fullWidth" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            value={timeString}
                            label="北京时间"
                            margin="normal"
                            id="fullWidth" />
                    </Grid>
                </Grid>
                <Button variant="contained" endIcon={<SendIcon />} onClick={() => setTimeString(timestampToString(inputTimestamp))}>
                    转换
                </Button>
            </Box>
        </Container>
    );
}
