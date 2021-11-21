import React from 'react';
import { StyledCountdown } from './styles';

export interface CountdownProps {
  datetime: any;
}

// Write your countdown code in this component
export const Countdown = (props: CountdownProps) => {
  return (
    <StyledCountdown>
      {props.datetime}
    </StyledCountdown>
  );
};

