import { Moment } from 'moment';
import React from 'react';
import ReactDatetimeClass from "react-datetime";
import { StyledCountdownInputStart } from './styles';
import "react-datetime/css/react-datetime.css";

export interface CountdownInputStartProps {
    onChange: (value: Moment | string) => void;
    value?: Moment;
}

export const CountdownInputStart = (props: CountdownInputStartProps) => {
    return (
        <StyledCountdownInputStart>
            <h2>Select Event Datetime</h2>
            <ReactDatetimeClass value={props.value} onChange={props.onChange}></ReactDatetimeClass>
        </StyledCountdownInputStart>
    );
};