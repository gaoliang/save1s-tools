import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import GitHubIcon from '@mui/icons-material/GitHub';

const ResponsiveAppBar = () => {
    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: 'flex' }}
                    >
                        省一秒工具箱
                    </Typography>

                    <Box sx={{ flexGrow: 1, display: 'flex' }}>
                        <Button
                            key={'home'}
                            sx={{ my: 2, color: 'white', display: 'block' }}
                            href="/"
                        >
                            首页
                        </Button>
                    </Box>

                    <IconButton
                        size="large"
                        aria-label="account of current user"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit"
                        target="_blank"
                        href="https://github.com/gaoliang/save1s-tools"
                    >
                        <GitHubIcon />
                    </IconButton>
                </Toolbar>
            </Container>
        </AppBar>
    );
};
export default ResponsiveAppBar;