import styled, { keyframes } from 'styled-components';
import Theme from '../../../__config/theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const collmat = keyframes`{
  0% {
    transform: scale(0.9);
  }

  25% {
    transform: scale(1);
  }

  60% {
    transform: scale(0.9);
  }

  100% {
    transform: scale(0.9);
  }
}`;


export const TutorButtonCaps = styled.div`
  display: flex;
  flex-direction: row;
  position: relative;
  color: #fff;
  justify-content: space-between;

  button {
    cursor: pointer;
    border: 1px solid #3cc8b4;
    background: #3cc8b4;
    color: #fff;
    border: 1px solid #3cc8b4;
    font-size: 2rem;
    margin: 2rem;
    width: 15rem;
    height: 5rem;
    @media screen and (min-width: ${Theme.deviceSize.iph678P.w}) and (max-width: ${Theme.deviceSize.galaxy.w}){
      font-size: 1.8rem;
      line-height: 3.5rem;
      width: 10rem;
      height: 3.5rem;
      margin: 1rem;
    }
  }
`;

export const TutorClose = styled(FontAwesomeIcon)`
  position: absolute;
  cursor: pointer;
  top: 0;
  right: 0;
  margin-right: 1.5rem;
  font-size: 3.5rem;
  color: ${props => props.xcolor};

  &:hover {
    transform: scale(1.1);

    @media screen and (max-width: ${Theme.screenSize.xsmall}) {
      transform: scale(1);
    }
  }
`;

export const TutorBox = styled.div`
	position: fixed;
	background: #88b7d5;
  width: 33rem;
  left: 14rem;
  top: 15rem;
  border: 4px solid #c2e1f5;
  animation: ${collmat} 5s ease-out infinite normal;
  z-index: 2;

  &#cid {
    top: 8.1rem;
  }
  &#pid {
    top: 23rem;
    left: 13.5rem;
  }
  &#lid {
    top: 28.2rem;
    width: 50rem;
  }

  @media screen and (min-width: ${Theme.deviceSize.iph5SE.w}) and (max-width: ${Theme.deviceSize.ipad.w}) {
    width: 23rem;
    bottom: 8.5rem;
    &#cid{
      top: unset;
      &::before { left: 3rem; }
      &::after { left: 3rem; }
      p { padding: 1rem; }
    }
    &#pid{
      top: unset;
      p { padding: 1rem; }
    }
    &#lid{
      width: auto;
      top: unset;
      p { padding: 1.3rem; padding-bottom: 0rem; }
      h2 { margin: 2rem 0 -2rem 0; }
    }
  }
  @media screen and (min-width: ${Theme.deviceSize.iph5SE.w}) and (max-width: ${Theme.deviceSize.iph5SE.offsetw}) {&#cid{left:   0rem;} &#pid{left:    0rem}}
  @media screen and (min-width: ${Theme.deviceSize.galaxy.w})  and (max-width: ${Theme.deviceSize.galaxy.offsetw}) {&#cid{left: 0.5rem;} &#pid{left:  1.4rem}}
  @media screen and (min-width: ${Theme.deviceSize.iph678X.w}) and (max-width: ${Theme.deviceSize.iph678X.offsetw}) {&#cid{left: 0.5rem;} &#pid{left:    2rem}}
  @media screen and (min-width: ${Theme.deviceSize.iph678P.w}) and (max-width: ${Theme.deviceSize.iph678P.offsetw}) {&#cid{left: 0.9rem;} &#pid{left:  3.4rem}}
  @media screen and (min-width: ${Theme.deviceSize.nokia.w}) and (max-width: ${Theme.deviceSize.nokia.offsetw}) {&#cid{left: 1.9rem;} &#pid{left:  5.8rem}}
  @media screen and (min-width: ${Theme.deviceSize.nexus.w}) and (max-width: ${Theme.deviceSize.nexus.offsetw}) {&#cid{left: 3.4rem;} &#pid{left: 10.3rem}}

  @media screen and (min-width: ${Theme.deviceSize.nexus.w}) and (max-width: ${Theme.deviceSize.ipad.w}){
    &#lid, &#cid, &#pid{
      p {
        font-size: 2.25rem;
        line-height: 3.5rem;
        font-weight: 600;
      }
      h2 {
        font-size: 3rem;
      }
    }
  }

  @media screen and (min-width: ${Theme.deviceSize.iph5SE.w}) and (max-width: ${Theme.deviceSize.iph5SE.offsetw}){
    &#lid{
      left: 0rem;
      &::before { left: 19.7rem; }
      &::after { left: 19.7rem; }
      p {
        margin-bottom: -1.5rem;
      }
    }
  }
  @media screen and (min-width: ${Theme.deviceSize.galaxy.w}) and (max-width: ${Theme.deviceSize.galaxy.offsetw}){
    &#lid{
      left: 0rem;
      &::before { left: 22rem; }
      &::after { left: 22rem; }
    }
  }
  @media screen and (min-width: ${Theme.deviceSize.iph678X.w}) and (max-width: ${Theme.deviceSize.iph678X.offsetw}){
    &#lid{
      left: 0rem;
      &::before { left: 23.1rem; }
      &::after { left: 23.1rem; }
    }
  }
  @media screen and (min-width: ${Theme.deviceSize.iph678P.w}) and (max-width: ${Theme.deviceSize.iph678P.offsetw}){
    &#lid{
      left: 0rem;
      &::before { left: 25.4rem; }
      &::after { left: 25.4rem; }
    }
  }
  @media screen and (min-width: ${Theme.deviceSize.nokia.w}) and (max-width: ${Theme.deviceSize.nokia.offsetw}){
    &#lid{
      left: 0rem;
      &::before { left: 29.5rem; }
      &::after { left: 29.5rem; }
    }
  }
  @media screen and (min-width: ${Theme.deviceSize.nexus.w}) and (max-width: ${Theme.deviceSize.nexus.offsetw}){
    &#lid{
      left: 0rem;
      &::before { left: 37.1rem; }
      &::after { left: 37.1rem; }
    }
  }
  @media screen and (min-width: ${Theme.deviceSize.ipad.offsetw}) and (max-width: ${Theme.deviceSize.ipad.w}){
    &#lid{
      left: 0rem;
      &::before { left: 47.7rem; }
      &::after { left: 47.7rem; }
    }
    &#cid{
      left: 0rem;
      width: auto;
      &::before { left: 6.2rem; }
      &::after { left: 6.2rem; }
    }
    &#pid{
      left: 0rem;
      width: auto;
      &::before { left: 27.9rem; }
      &::after { left: 27.9rem; }
    }
  }

  &::after, &::before {
    position: absolute;
    pointer-events: none;
    right: 100%;
    top: 50%;
    border: solid transparent;
    content: " ";
    height: 0;
    width: 0;

    @media screen and (max-width: ${Theme.screenSize.small}) {
      top: 100%;
    	left: 50%;
    }
  }
 
  &::after {
    border-color: rgba(136, 183, 213, 0);
    border-right-color: #88b7d5;
    border-width: 3rem;
    margin-top: -3rem;

    @media screen and (max-width: ${Theme.screenSize.small}) {
      border-top-color: #88b7d5;
      border-right-color: transparent;
      margin-left: -3rem;
      margin-top: unset;
    }
  }

  &::before {
    border-color: rgba(194, 225, 245, 0);
    border-right-color: #c2e1f5;
    border-width: 3.6rem;
    margin-top: -3.6rem;

    @media screen and (max-width: ${Theme.screenSize.small}) {
      border-top-color: #c2e1f5;
      border-right-color: transparent;
      margin-left: -3.6rem;
      margin-top: unset;
    }
  }

  h2 {
    margin: 0;
    text-align: center;
  }

  @media screen and (min-width: ${Theme.screenSize.small}) {
    h2 {
      padding-top: 1rem;
      margin-bottom: -1rem;
    }
  }
  
  p {
    color: black;
    font-size: 1.80rem;
    width: auto;
    line-height: 2.5rem;
    font-weight: 500;
    padding: 2rem;
  }
`;

export const TutorCont = styled.div`
  color: #ddf8c6;
  text-align: center;
  font-size: 1.5rem;
  font-weight: bold;
  text-shadow: 0 1px 2px rgba(0, 0, 0, 0.4);
`;
