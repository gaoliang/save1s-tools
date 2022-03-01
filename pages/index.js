import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import Head from 'next/head';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';

export default function Index() {
  return (
    <Container maxWidth="sm">
      <Head>
        <title>省一秒工具箱</title>
      </Head>
      <Box sx={{ my: 4 }}>
        <Typography variant="h4" component="h1" gutterBottom>
          省一秒工具箱
        </Typography>
        <Stack spacing={1} divider={<Divider orientation="horizontal" flexItem />}
        >
          <Link href="/set-operation" underline="none">
            集合计算器（交、并、差）
          </Link>
          <Link href="/timestamp" underline="none">
            时间戳工具
          </Link>
          <Link href="/pace-speed-converter" underline="none">
            配速时速转换
          </Link>
          <Link href="/bmi" underline="none">
            BMI计算器
          </Link>
        </Stack>
        <Copyright />
      </Box>
    </Container>
  );
}
