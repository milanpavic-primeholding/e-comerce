import React from 'react';
import logo from '../../assets/img/logo.png';
import { styled } from '@mui/system';
import { Typography } from '@mui/material';

const StyledHeader = styled('header')`
    display:flex;
    align-items:center;
    padding:20px 0;
    justify-content:center;
`;

const Header = () => {
    return (
        <StyledHeader>
            <img src={logo} alt="logo" width="100px" />
            <Typography pl={1}>E-COMMERCE</Typography>
        </StyledHeader>
    )
}

export default Header;