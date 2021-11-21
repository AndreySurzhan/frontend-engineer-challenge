import styled from 'styled-components';

export const StyledApp = styled.div`
  background: ${props => props.theme.global.body_color};
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  height: 100vh;
  color: ${props => props.theme.text.primary_text_color};
`;
