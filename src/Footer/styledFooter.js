import styled from 'styled-components';
import Theme from "../config/theme";


const StyledFooter = styled.footer`
  width:100%;
  display:flex;
  position:fixed;
  align-items:center;
  justify-content:center;
  bottom:0;
  text-align:center;
  height:5rem;
  border-top: 0.02rem solid #dddddd;
  background-color:${Theme.colors.beige};
`;

const P = styled.p`
  flex-wrap:wrap;
  padding:3rem;
  font-size:1.5rem;

  @media screen and (max-width: ${Theme.screenSize.xsmall}) {
    padding:1rem;
    font-size:1.3rem;
  }
`;

export {
  StyledFooter,
  P
}
