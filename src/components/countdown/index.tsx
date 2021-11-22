import { Duration } from 'moment';
import React from 'react';
import { StyledCountdownContainer, StyledCountdownTitle } from './styles';

export interface CountdownProps {
  duration?: Duration;
}

export const Countdown = (props: CountdownProps) => {
  const duration = props.duration

  const days = duration && duration.days();
  const hours = duration && duration.hours();
  const mins = duration && duration.minutes();
  const sec = duration && duration.seconds();

  const isEvenReached = sec !== undefined && sec < 0;

  return (
    <StyledCountdownContainer>
      <StyledCountdownTitle>
        {duration && sec !== undefined
          ? isEvenReached 
            ? 'Event Reached' 
            :`${days} days ${hours}:${mins}:${sec}`
          : 'Target Date is Not Specified'}
      </StyledCountdownTitle>
    </StyledCountdownContainer>
  );
};

