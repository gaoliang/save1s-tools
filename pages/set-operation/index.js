import React, { useState } from 'react';
import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import ButtonGroup from '@mui/material/ButtonGroup';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Head from "next/head";


export default function Index() {
  const [textA, setTextA] = useState("");
  const [textB, setTextB] = useState("");

  return (
    <Container maxWidth="md">
      <Box sx={{ my: 4 }}>

        <Typography variant="h4" component="h1" gutterBottom>
          集合计算器（交、并、差）
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField fullWidth
                multiline
                rows={4}
                value={textA}
                margin="normal"
                label="集合A"
                onChange={e => setTextA(e.target.value)}
                id="fullWidth" />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                multiline
                rows={4}
                value={textB}
                label="集合B"
                margin="normal"
                onChange={e => setTextB(e.target.value)}
                id="fullWidth" />
            </Grid>
          </Grid>
        </Box>
        <Box>

          <FormControl>
            <FormLabel>分隔符</FormLabel>
            <RadioGroup row >
              <FormControlLabel value="comma" control={<Radio />} label="逗号" />
              <FormControlLabel value="linebreak" control={<Radio />} label="换行符" />
            </RadioGroup>
          </FormControl>
        </Box>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button>交集</Button>
          <Button>并集</Button>
          <Button>差集(B-A)</Button>
          <Button>差集(A-B)</Button>
        </ButtonGroup>
        <Box>
          <TextField
            fullWidth
            multiline
            rows={8}
            label="运算结果"
            margin="normal"
            id="fullWidth" />
        </Box>
      </Box>
    </Container>
  );
}
