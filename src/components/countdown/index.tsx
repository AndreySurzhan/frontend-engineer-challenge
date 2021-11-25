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
 * If duration is not passed returns 'Event Date is Not Specified'
 */
export const getCountdownTitle = (duration?: Duration) => {
  if(!duration || !duration.isValid()) return 'Event Date is Not Specified';

  const days: number = duration.days();
  const hours: number = duration.hours();
  const mins: number = duration.minutes();
  const sec: number = duration.seconds();

  const isEvenReached: boolean = sec !== undefined && !isNaN(sec) && sec <= 0;

  return isEvenReached 
      ? 'Event Reached' 
      :`${days} days ${hours} hours ${mins} minutes ${sec} seconds`;
}

export const Countdown = (props: CountdownProps) => {
  const duration = props.duration;
  const countdownTitle = getCountdownTitle(duration);

  return (
    <StyledCountdownContainer>
      <StyledCountdownTitle data-testid="countdown-title">
        {countdownTitle}
      </StyledCountdownTitle>
    </StyledCountdownContainer>
  );
};

