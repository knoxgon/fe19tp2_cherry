import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



const SettingsIcon = styled(FontAwesomeIcon)`
margin-left: 1rem;
font-size:3rem;

&:hover {
    transform: scale(1.1);
 }

`;

const Menu = styled.div `

display: flex;
flex-direction: column;

`;

const StyledButtons = styled.button `
margin-left: 1rem;
padding-top: 1rem;
padding-bottom: 1rem;
border: none;
border-bottom: 1px groove gray;
outline: none;

&:hover {
    transition: 0.5s ease;
    color: black;
    background-color: darkGray;
}

`;

export {
    SettingsIcon,
    Menu,
    StyledButtons
}