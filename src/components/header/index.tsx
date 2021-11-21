import React from 'react';
import { StyledHeader, StyledImg} from './styles';

export const Header = () => {
    return (
        <StyledHeader>
            <StyledImg src="koala-logo.png" />
            <h1>Koala Web Engineer Coding Challenge</h1>
        </StyledHeader>
    );
};