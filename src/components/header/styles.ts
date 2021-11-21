import styled from 'styled-components';

export const StyledHeader = styled.header`
  background: ${props => props.theme.header.background_color};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  margin-bottom: 2rem;
  width: 100%;
  text-align: center;
  color: ${props => props.theme.header.font_color};
  font-family: ${props => props.theme.header.font_family};
`;

export const StyledImg = styled.img`
  width: ${props => props.theme.header.desktop_logo_width}px;

  @media (max-width: 768px) {
    width: ${props => props.theme.header.mobile_logo_width}px;
  }
`;