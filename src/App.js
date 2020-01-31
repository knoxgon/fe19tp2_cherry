import React from 'react';
import styled from 'styled-components';
import Logo from "./assets/logo_transparent.png";


const StyledApp = styled.div`
width:100%;
height:100%;
`;

const Nav = styled.nav`
width:100%;
height:13rem;
display:flex;
background-color:#e6e6e6;
`;

const Ul = styled.ul`
list-style-type:none;
display:flex;
width:100%;
align-items:center;
margin:0;
padding:0;
overflow:hidden;

`;

const Li = styled.li`
flex:0.7;
color:black;
text-align:center;
padding: 2rem 2rem;
text-decoration:none;
`;

const A = styled.a`
font-weight:500;
text-align:center;
color:#1a1a1a;
padding: 1.4rem 1.6rem;
font-size:2.3rem;
text-decoration:none;

`;

const LiAccount = styled.li`
flex:3;
text-align:end;
padding: 2rem 6rem;
font-size:2rem;
text-decoration:none;

`;


const StyledLogo = styled.div`
margin-left:3rem;
`;

const Footer = styled.footer`
width:100%;
display:flex;
position:fixed;
align-items:center;
justify-content:center;
bottom:0;
text-align:center;
height:5rem;
background-color:#e6e6e6;
`;

const P = styled.p`
padding:4rem;
font-size:1.8rem;
`;






class App extends React.Component {
  render() {
    return (


      <StyledApp>
        <Nav>

          <Ul>
            <StyledLogo><img src={Logo} alt="website logo" /></StyledLogo>
            <Li><A className="active" href="#home">Home</A></Li>
            <Li><A href="">Solutions</A></Li>
            <Li><A href="">About</A></Li>
            <LiAccount><A href="">Account</A></LiAccount>
          </Ul>

        </Nav>

        <Footer>
          <P>Stockholm - Sweden 131 42</P> <P>Long(59.31), Lat(18.20)</P>
        </Footer>

      </StyledApp>
    );
  }
}

export default App;
