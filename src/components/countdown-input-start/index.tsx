import { Moment } from 'moment';
import React from 'react';
import ReactDatetimeClass from "react-datetime";
import { StyledCountdownInputStart } from './styles';

export interface CountdownInputStartProps {
    onChange: (value: Moment | string) => void
}

export const CountdownInputStart = (props: CountdownInputStartProps) => {
    return (
        <StyledCountdownInputStart>
            <ReactDatetimeClass onChange={props.onChange}></ReactDatetimeClass>
        </StyledCountdownInputStart>
    );
};