import * as React from 'react';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Link from '../src/Link';
import Copyright from '../src/Copyright';
import Head from 'next/head';

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
        <Link href="/set-operation" color="secondary">
          集合计算器（交、并、差）
        </Link>

        <Copyright />
      </Box>
    </Container>
  );
}
