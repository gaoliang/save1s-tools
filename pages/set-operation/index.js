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
import Copyright from '../../src/Copyright';


export default function Index() {
  const [textA, setTextA] = useState("");
  const [textB, setTextB] = useState("");
  const [result, setResult] = useState("");
  const [separator, setSeparator] = useState("linebreak");


  function textToSet(text) {
    text = text.trim()
    let elements;
    switch (separator) {
      case 'linebreak':
        elements = text.split(/\r?\n/);
        break
      case 'comma':
        elements = text.split(',');
    }
    return new Set(elements);
  }


  function setToText(set) {
    switch (separator) {
      case 'linebreak':
        return Array.from(set).join('\n')
      case 'comma':
        return Array.from(set).join(',')
    }
  }

  function intersection() {
    let setA = textToSet(textA)
    let setB = textToSet(textB, separator)
    setResult(setToText(new Set([...setA].filter(x => setB.has(x)))))
  }

  function union() {
    let setA = textToSet(textA)
    let setB = textToSet(textB)
    setResult(setToText(new Set([...setA, ...setB])))
  }


  function diffAB() {
    let setA = textToSet(textA)
    let setB = textToSet(textB)
    setResult(setToText(new Set([...setA].filter(x => !setB.has(x)))))
  }

  function diffBA() {
    let setA = textToSet(textA)
    let setB = textToSet(textB)
    setResult(setToText(new Set([...setB].filter(x => !setA.has(x)))))
  }


  return (
    <Container maxWidth="md">
      <Head>
        <title>集合计算器｜省一秒工具箱</title>
      </Head>

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
            <RadioGroup
              row
              value={separator}
              onChange={e => setSeparator(e.target.value)}
            >
              <FormControlLabel value="linebreak" control={<Radio />} label="换行符" />
              <FormControlLabel value="comma" control={<Radio />} label="逗号" />
            </RadioGroup>
          </FormControl>
        </Box>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button onClick={intersection}>交集</Button>
          <Button onClick={union}>并集</Button>
          <Button onClick={diffBA}>差集(B-A)</Button>
          <Button onClick={diffAB}>差集(A-B)</Button>
        </ButtonGroup>
        <Box>
          <TextField
            fullWidth
            multiline
            value={result}
            rows={8}
            label="运算结果"
            margin="normal"
            id="fullWidth" />
        </Box>
      </Box>
      <Copyright />
    </Container>
  );
}
