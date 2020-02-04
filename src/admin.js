import React from 'react';
import Header from "./header";
import Footer from "./footer";
import styled from 'styled-components';

const StyledPage = styled.div`
width:100%;
height:100%;
`;

class admin extends React.Component {
    render() {
        return (
            <StyledPage>
                <Header />
                <p>hej</p>
                <Footer />
            </StyledPage>

        );
    }
}

export default admin;