import styled from 'styled-components';

export const StyledApp = styled.div`
  background: ${props => props.theme.global.body_color};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
