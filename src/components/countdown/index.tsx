import React from 'react';
import { StyledCountdown } from './styles';

export interface CountdownProps {
  datetime: any;
}

// Write your countdown code in this component
export const Countdown = (props: CountdownProps) => {
  return (
    <StyledCountdown>
      <div style={{ border: '.5px solid gray', width: 50, borderRadius: '3px', background: '#EFEFEF', padding: 3 }}>
        <div>{props.datetime}</div>
      </div>
    </StyledCountdown>
  );
};

