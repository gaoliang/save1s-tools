import React, { useState, useEffect } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Head from "next/head";
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import InputAdornment from '@mui/material/InputAdornment';

import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';
import { handleBreakpoints } from '@mui/system';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';


export default function Index() {
    const [weight, setWeight] = useState('');
    const [height, setHeight] = useState('');
    const [bmi, setBmi] = useState('');

    function updateBmi(h, w) {
        if (h && w) {
            setBmi(w / (h * h / 10000));
        } else {
            setBmi(0)
        }
        console.log("updateBmi", w, h, bmi);
    }
    function updateHeight(value) {
        console.log("updateHeight", value);
        setHeight(value);
        updateBmi(value, weight);
    }


    function updateWeight(value) {
        console.log("updateWeight", value);
        setWeight(value);
        updateBmi(height, value);
    }

    let result;

    if (bmi && bmi <= 18.4) {
        result = <Alert severity="warning">你的 BMI 值: {bmi.toFixed(2)}，身体状态：偏瘦，再增重 {(18.5 * (height * height / 10000) - weight).toFixed(2)} Kg 可达正常</Alert>
    } else if (bmi && bmi <= 23.9) {
        result = <Alert severity="success">你的 BMI 值: {bmi.toFixed(2)}，身体状态：正常</Alert>
    } else if (bmi && bmi <= 27.9) {
        result = <Alert severity="warning">你的 BMI 值: {bmi.toFixed(2)}，身体状态：过重，再减 {(weight - (23.9 * (height * height / 10000))).toFixed(2)} Kg 可达正常</Alert>
    } else if (bmi) {
        result = <Alert severity="error">你的 BMI 值: {bmi.toFixed(2)}，身体状态：肥胖，再减 {(weight - (23.9 * (height * height / 10000))).toFixed(2)} Kg 可达正常</Alert>
    }

    return (
        <Container maxWidth="md">
            <Head>
                <title>BMI指数｜省一秒工具箱</title>
            </Head>

            <Box sx={{ my: 4 }}>

                <Typography variant="h4" component="h1" gutterBottom>
                    BMI指数
                </Typography>

                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <TextField fullWidth
                            margin="normal"
                            label="体重"
                            type="number"
                            value={weight}
                            onChange={e => updateWeight(e.target.value)}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">kg</InputAdornment>,
                            }}
                            id="fullWidth" />
                    </Grid>
                    <Grid item xs={6}>
                        <TextField
                            fullWidth
                            label="身高"
                            type="number"
                            margin="normal"
                            value={height}
                            onChange={e => updateHeight(e.target.value)}
                            InputProps={{
                                endAdornment: <InputAdornment position="end">cm</InputAdornment>,
                            }}
                            id="fullWidth" />
                    </Grid>
                </Grid>

            </Box>

            <Box sx={{ my: 4 }}>
                <Stack sx={{ width: '100%' }} spacing={2}>
                    {result}
                </Stack>
            </Box>


            <Box sx={{ my: 4, maxWidth: 400 }}>
                <TableContainer component={Paper}>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>身体状态</TableCell>
                                <TableCell align="right">BMI范围</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            <TableRow >
                                <TableCell component="th" scope="row">
                                    偏瘦
                                </TableCell>
                                <TableCell align="right">
                                    &lt;= 18.4
                                </TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell component="th" scope="row">
                                    正常
                                </TableCell>
                                <TableCell align="right">
                                    18.5 ~ 23.9
                                </TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell component="th" scope="row">
                                    过重
                                </TableCell>
                                <TableCell align="right">
                                    24.0 ~ 27.9
                                </TableCell>
                            </TableRow>
                            <TableRow >
                                <TableCell component="th" scope="row">
                                    肥胖
                                </TableCell>
                                <TableCell align="right">
                                    &gt;= 28.0
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    </Table>
                </TableContainer>
            </Box>
        </Container>
    );
}
