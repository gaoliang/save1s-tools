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
        <title>????????????????????????????????????</title>
      </Head>

      <Box sx={{ my: 4 }}>

        <Typography variant="h4" component="h1" gutterBottom>
          ????????????????????????????????????
        </Typography>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            <Grid item xs={6}>
              <TextField fullWidth
                multiline
                rows={4}
                value={textA}
                margin="normal"
                label="??????A"
                onChange={e => setTextA(e.target.value)}
                id="fullWidth" />
            </Grid>
            <Grid item xs={6}>
              <TextField
                fullWidth
                multiline
                rows={4}
                value={textB}
                label="??????B"
                margin="normal"
                onChange={e => setTextB(e.target.value)}
                id="fullWidth" />
            </Grid>
          </Grid>
        </Box>
        <Box>

          <FormControl>
            <FormLabel>?????????</FormLabel>
            <RadioGroup
              row
              value={separator}
              onChange={e => setSeparator(e.target.value)}
            >
              <FormControlLabel value="linebreak" control={<Radio />} label="?????????" />
              <FormControlLabel value="comma" control={<Radio />} label="??????" />
            </RadioGroup>
          </FormControl>
        </Box>
        <ButtonGroup variant="contained" aria-label="outlined primary button group">
          <Button onClick={intersection}>??????</Button>
          <Button onClick={union}>??????</Button>
          <Button onClick={diffBA}>??????(B-A)</Button>
          <Button onClick={diffAB}>??????(A-B)</Button>
        </ButtonGroup>
        <Box>
          <TextField
            fullWidth
            multiline
            value={result}
            rows={8}
            label="????????????"
            margin="normal"
            id="fullWidth" />
        </Box>
      </Box>
    </Container>
  );
}
