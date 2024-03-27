import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogOutButton from '../Buttons/LogOutButton/LogOutButton';
import FairShareLogoMobile2 from "../../Images/FairShareLogo2.png";



import {
    AppBar,
    Box,
    Toolbar,
    Button,
    Tooltip,
    MenuItem,
    Typography,
    IconButton,
    Menu,
    Container,
} from '@mui/material';

function Navbar(props) {

    const store = useSelector((store) => store);
    const user = useSelector((store) => store.user);
    const history = useHistory();

    const [anchorElNav, setAnchorElNav] = React.useState(null);
    const [anchorElUser, setAnchorElUser] = React.useState(null);
    const [heading, setHeading] = useState('Functional Component');
  
    return (
        <AppBar style={{ position: 'sticky', backgroundColor: 'white' }} >
         <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Box
                        sx={{
                            flexGrow: 20,
                            display: { xs: 'none', md: 'flex' },
                        }}>
                            <Link to="/">
                                <img
                                    src={FairShareLogoMobile2}
                                    style={{
                                        width: 300,
                                        height: 50,
                                    }}
                                />
                            </Link>
                    </Box>
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'flex', sm: 'none', md: 'none' },
                        }}>
                        <IconButton
                            size="large"
                            aria-label="account of current user"
                            aria-controls="menu-appbar"
                            aria-haspopup="true"

                            color="inherit"
                        >
                            <MenuIcon fontSize="large" />
                        </IconButton>
                    </Box>
                    {/* APPEARS when width is medium */}
                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', sm: 'flex', md: 'none' },
                        }}>
                        <Link to="/">
                            <img
                                src={FairShareLogoMobile2}
                                alt="logo"
                                style={{
                                    width: 300,
                                    height: 50,
                                }}
                            />
                        </Link>
                    </Box>

                    <Box
                        sx={{
                            flexGrow: 1,
                            display: { xs: 'none', md: 'flex' },
                        }} >
                            <Button
                                key={1}
                                sx={{
                                    my: 2,
                                    color: 'white',
                                    display: 'block',
                                }} >
                                <Typography textAlign="center">
                                    <Link
                                        style={{
                                            fontSize: '1.3rem',
                                            textDecoration: 'none',
                                            color: 'white',
                                        }}
                                        to={'/home'}
                                    >
                                    </Link>
                                </Typography>
                            </Button>
                    </Box>
                    <Box sx={{ flexGrow: 0 }}>
                            {user.id && (
                                <MenuItem>
                                    <LogOutButton className="primary-btn" />
                                </MenuItem>
                            )}
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
  }
  
  export default Navbar;