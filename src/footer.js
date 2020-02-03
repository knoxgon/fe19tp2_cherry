
import React from 'react';
import styled from 'styled-components';
import Theme from "./config/theme";



const StyledFooter = styled.footer`
width:100%;
display:flex;
position:fixed;
align-items:center;
justify-content:center;
bottom:0;
text-align:center;
height:5rem;
background-color:${Theme.colors.greyLight};
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

class Footer extends React.Component {

    render() {
        return (
<StyledFooter>
    <P>Stockholm - Sweden 131 42</P> <P>Long(59.31), Lat(18.20)</P>
</StyledFooter>

);
    }
}

export default Footer;

