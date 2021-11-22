import { Moment } from 'moment';
import React from 'react';
import ReactDatetimeClass from "react-datetime";
import { StyledCountdownInputStart } from './styles';

export interface CountdownInputStartProps {
    onChange: (value: Moment | string) => void;
    value?: Moment;
}

export const CountdownInputStart = (props: CountdownInputStartProps) => {
    return (
        <StyledCountdownInputStart>
            <ReactDatetimeClass value={props.value} onChange={props.onChange}></ReactDatetimeClass>
        </StyledCountdownInputStart>
    );
};