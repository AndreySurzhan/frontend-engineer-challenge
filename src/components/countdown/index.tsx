import { Duration } from 'moment';
import React from 'react';
import { StyledCountdownContainer, StyledCountdownTitle } from './styles';

export interface CountdownProps {
  duration?: Duration;
}

/**
 * Function that returns string representing current countdown state
 * @param {Duration | null} duration - duration object represented by moment Duration type. 
 * Holds data reflacting time distance between now and Future Event Date
 * @returns {string} - If Duration is passed - returns diration in 'd hh:mm:ss' format. 
 * If duration is passed and event is in past - returns 'Event Reached.
 * If duration is not passed returns 'Target Date is Not Specified'
 */
export const getCountdownTitle = (duration?: Duration) => {
  const days = duration && duration.days();
  const hours = duration && duration.hours();
  const mins = duration && duration.minutes();
  const sec = duration && duration.seconds();

  const isDurationSet = duration && sec !== undefined && !isNaN(sec)
  const isEvenReached = sec !== undefined && sec < 0;

  return isDurationSet
    ? isEvenReached 
      ? 'Event Reached' 
      :`${days} days ${hours} hours ${mins} minutes ${sec} seconds` 
    : 'Target Date is Not Specified';
}

export const Countdown = (props: CountdownProps) => {
  const duration = props.duration;
  const countdownTitle = getCountdownTitle(duration);

  return (
    <StyledCountdownContainer>
      <StyledCountdownTitle>
        {countdownTitle}
      </StyledCountdownTitle>
    </StyledCountdownContainer>
  );
};

