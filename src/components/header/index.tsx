import React from 'react';
import { StyledHeader, StyledImg} from './styles';
import logo from '../../assets/images/koala-logo.png';

export const Header = () => {
    return (
        <StyledHeader>
            <StyledImg alt="koala-logo" src={logo} />
            <h1>Koala Web Engineer Coding Challenge</h1>
        </StyledHeader>
    );
};