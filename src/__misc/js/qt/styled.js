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
    color: #6f2407;
    font-size: 2rem;
    margin: 2rem;
    width: 15rem;
    height: 5rem;
    @media screen and (min-width: ${Theme.screenSize.cronicOff12}) and (max-width: ${Theme.screenSize.cronicOffMax12}) {
      font-size: 2rem;
      margin: 1.5rem;
      width: 11rem;
      height: 3rem;
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
  height: fit-content;
  border: 4px solid #c2e1f5;
  animation: ${collmat} 5s ease-out forwards normal;
  z-index: 2;

  &#cid { top: 1.1rem;}
  &#pid { top: 10rem;}
  &#aid { top: 20rem;}
  &#lid { top: 26rem;}

  @media screen and (max-width: ${Theme.screenSize.small}) {
    bottom: 8.5rem;
    &#cid {
      top: unset;
    }
    &#pid {
      top: unset;
      left: 0rem;
    }
    &#aid {
      top: unset;
      left: 0rem;
    }
    &#lid {
      top: unset;
    }
  }

  @media screen and (min-width: ${Theme.screenSize.medium}) and (max-width: ${Theme.screenSize.small}) {
    &#cid{ top: unset; left: 5rem;
      &::before { left: 3rem; }
      &::after { left: 3rem; }
      p { padding: 1rem; }}
    &#pid{top: unset; left: 13rem;
      p { padding: 1rem; }}
    &#aid{ top: unset; left: 33rem;
      p { padding: 1rem; }}
    &#lid{ top: unset; left: 53rem;
      p { padding: 1.3rem; padding-bottom: 0rem; }
      h2 { margin: 3rem 0 -2rem 0; }}
  }
  @media screen and (min-width: ${Theme.screenSize.offMed}) and (max-width: ${Theme.screenSize.offMedMax}) {
    &#cid{ top: unset; left: 5rem;
      &::before { left: 3rem; }
      &::after { left: 3rem; }
      p { padding: 1rem; }}
    &#pid{top: unset; left: 11rem;
      p { padding: 1rem; }}
    &#aid{ top: unset; left: 30rem;
      p { padding: 1rem; }}
    &#lid{ top: unset; left: 49.5rem;
      p { padding: 1.3rem; padding-bottom: 0rem; }
      h2 { margin: 3rem 0 -2rem 0; }}
  }
  @media screen and (min-width: ${Theme.screenSize.offMed2}) and (max-width: ${Theme.screenSize.offMedMax2}) {
    &#cid{ top: unset; left: 5rem;
      &::before { left: 3rem; }
      &::after { left: 3rem; }
      p { padding: 1rem; }}
    &#pid{top: unset; left: 10rem;
      p { padding: 1rem; }}
    &#aid{ top: unset; left: 27.5rem;
      p { padding: 1rem; }}
    &#lid{ top: unset; left: 46rem;
      p { padding: 1.3rem; padding-bottom: 0rem; }
      h2 { margin: 3rem 0 -2rem 0; }}
  }
  @media screen and (min-width: ${Theme.screenSize.offMed3}) and (max-width: ${Theme.screenSize.offMedMax3}) {
    &#cid{ top: unset; left: 3.5rem;
      &::before { left: 3rem; }
      &::after { left: 3rem; }
      p { padding: 1rem; }}
    &#pid{top: unset; left: 8.5rem;
      p { padding: 1rem; }}
    &#aid{ top: unset; left: 25rem;
      p { padding: 1rem; }}
    &#lid{ top: unset; left: 42rem;
      p { padding: 1.3rem; padding-bottom: 0rem; }
      h2 { margin: 3rem 0 -2rem 0; }}
  }
  @media screen and (min-width: ${Theme.screenSize.offMed4}) and (max-width: ${Theme.screenSize.offMedMax4}) {
    &#cid{ top: unset; left: 2.5rem;
      &::before { left: 3rem; }
      &::after { left: 3rem; }
      p { padding: 1rem; }}
    &#pid{top: unset; left: 7rem;
      p { padding: 1rem; }}
    &#aid{ top: unset; left: 23rem;
      p { padding: 1rem; }}
    &#lid{ top: unset; left: 39rem;
      p { padding: 1.3rem; padding-bottom: 0rem; }
      h2 { margin: 3rem 0 -2rem 0; }}
  }
  @media screen and (min-width: ${Theme.screenSize.offMed5}) and (max-width: ${Theme.screenSize.offMedMax5}) {
    &#cid{ top: unset; left: 2rem;
      &::before { left: 3rem; }
      &::after { left: 3rem; }
      p { padding: 1rem; }}
    &#pid{top: unset; left: 5.5rem;
      p { padding: 1rem; }}
    &#aid{ top: unset; left: 21rem;
      p { padding: 1rem; }}
    &#lid{ top: unset; left: 36.5rem;
      p { padding: 1.3rem; padding-bottom: 0rem; }
      h2 { margin: 3rem 0 -2rem 0; }}
  }
  @media screen and (min-width: ${Theme.screenSize.offMed6}) and (max-width: ${Theme.screenSize.offMedMax6}) {
    &#cid{ top: unset; left: 2rem;
      &::before { left: 3rem; }
      &::after { left: 3rem; }
      p { padding: 1rem; }}
    &#pid{top: unset; left: 4.5rem;
      p { padding: 1rem; }}
    &#aid{ top: unset; left: 19rem;
      p { padding: 1rem; }}
    &#lid{ top: unset; left: 33.5rem;
      p { padding: 1.3rem; padding-bottom: 0rem; }
      h2 { margin: 3rem 0 -2rem 0; }}
  }
  @media screen and (min-width: ${Theme.screenSize.offMed7}) and (max-width: ${Theme.screenSize.offMedMax7}) {
    &#cid{ top: unset; left: 2rem;
      &::before { left: 3rem; }
      &::after { left: 3rem; }
      p { padding: 1rem; }}
    &#pid{top: unset; left: 2.5rem;
      p { padding: 1rem; }}
    &#aid{ top: unset; left: 16rem;
      p { padding: 1rem; }}
    &#lid{ top: unset; left: 29.5rem;
      p { padding: 1.3rem; padding-bottom: 0rem; }
      h2 { margin: 3rem 0 -2rem 0; }}
  }
  @media screen and (min-width: ${Theme.screenSize.offMed8}) and (max-width: ${Theme.screenSize.offMedMax8}) {
    &#cid{ top: unset; left: 2rem;
      &::before { left: 3rem; }
      &::after { left: 3rem; }
      p { padding: 1rem; }}
    &#pid{top: unset; left: 1.5rem;
      p { padding: 1rem; }}
    &#aid{ top: unset; left: 14.5rem;
      p { padding: 1rem; }}
    &#lid{ top: unset; left: 27.5rem;
      p { padding: 1.3rem; padding-bottom: 0rem; }
      h2 { margin: 3rem 0 -2rem 0; }}
  }
  @media screen and (min-width: ${Theme.screenSize.cronicOff}) and (max-width: ${Theme.screenSize.cronicOffMax}) {
    &#cid{ top: unset; left: 2rem;
      &::before { left: 3rem; }
      &::after { left: 3rem; }
      p { padding: 1rem; }}
    &#pid{top: unset; left: 0.5rem;
      p { padding: 1rem; }}
    &#aid{ top: unset; left: 11.5rem;
      p { padding: 1rem; }}
    &#lid{ top: unset; left: 23.5rem;
      p { padding: 1.3rem; padding-bottom: 0rem; }
      h2 { margin: 3rem 0 -2rem 0; }}
  }
  @media screen and (min-width: ${Theme.screenSize.cronicOff2}) and (max-width: ${Theme.screenSize.cronicOffMax2}) {
    &#cid{ top: unset; left: 1rem;
      &::before { left: 3rem; }
      &::after { left: 3rem; }
      p { padding: 1rem; }}
    &#pid{top: unset; left: 0rem;
      p { padding: 1rem; }}
    &#aid{ top: unset; left: 11rem;
      p { padding: 1rem; }}
    &#lid{ top: unset; left: 22rem;
      p { padding: 1.3rem; padding-bottom: 0rem; }
      h2 { margin: 3rem 0 -2rem 0; }}
  }
  @media screen and (min-width: ${Theme.screenSize.cronicOff3}) and (max-width: ${Theme.screenSize.cronicOffMax3}) {
    &#cid{ top: unset; left: 0rem;
      &::before { left: 3rem; }
      &::after { left: 3rem; }
      p { padding: 1rem; }}
    &#pid{top: unset; left: 0rem;
      &::before { margin-left: -4.6rem; }
      &::after  { margin-left: -4rem; }
      p { padding: 1rem; }}
    &#aid{ top: unset; left: 9.5rem;
      p { padding: 1rem; }}
    &#lid{ top: unset; left: 20rem;
      p { padding: 1.3rem; padding-bottom: 0rem; }
      h2 { margin: 3rem 0 -2rem 0; }}
  }
  @media screen and (min-width: ${Theme.screenSize.cronicOff4}) and (max-width: ${Theme.screenSize.cronicOffMax4}) {
    &#cid{ top: unset; left: 0rem;
      &::before { left: 3rem; }
      &::after { left: 3rem; }
      p { padding: 1rem; }}
    &#pid{top: unset; left: 0rem;
      &::before { margin-left: -5.6rem; }
      &::after  { margin-left: -5rem; }
      p { padding: 1rem; }}
    &#aid{ top: unset; left: 8rem;
      p { padding: 1rem; }}
    &#lid{ top: unset; left: 18.5rem;
      p { padding: 1.3rem; padding-bottom: 0rem; }
      h2 { margin: 3rem 0 -2rem 0; }}
  }
  @media screen and (min-width: ${Theme.screenSize.cronicOff5}) and (max-width: ${Theme.screenSize.cronicOffMax5}) {
    &#cid{ top: unset; left: 0rem;
      &::before { left: 3rem; }
      &::after { left: 3rem; }
      p { padding: 1rem; }}
    &#pid{top: unset; left: 0rem;
      &::before { margin-left: -6.6rem; }
      &::after  { margin-left: -6rem; }
      p { padding: 1rem; }}
    &#aid{ top: unset; left: 6.5rem;
      p { padding: 1rem; }}
    &#lid{ top: unset; left: 0rem; width: auto;
      &::before { margin-left: 6.8rem; }
      &::after  { margin-left: 7.4rem; }
      p { padding: 1.3rem; padding-bottom: 0rem; }
      h2 { margin: 3rem 0 -2rem 0; }}
  }
  @media screen and (min-width: ${Theme.screenSize.cronicOff6}) and (max-width: ${Theme.screenSize.cronicOffMax6}) {
    &#cid{ top: unset; left: 0rem;
      &::before { left: 3rem; }
      &::after { left: 3rem; }
      p { padding: 1rem; }}
    &#pid{top: unset; left: 0rem;
      &::before { margin-left: -7.6rem; }
      &::after  { margin-left: -7rem; }
      p { padding: 1rem; }}
    &#aid{ top: unset; left: 5.5rem;
      p { padding: 1rem; }}
    &#lid{ top: unset; left: 0rem; width: auto;
      &::before { margin-left: 6rem; }
      &::after  { margin-left: 6.6rem; }
      p { padding: 1.3rem; padding-bottom: 0rem; }
      h2 { margin: 3rem 0 -2rem 0; }}
  }
  @media screen and (min-width: ${Theme.screenSize.cronicOff7}) and (max-width: ${Theme.screenSize.cronicOffMax7}) {
    &#cid{ top: unset; left: 0rem;
      &::before { left: 3rem; }
      &::after { left: 3rem; }
      p { padding: 1rem; }}
    &#pid{top: unset; left: 0rem;
      &::before { margin-left: -7.6rem; }
      &::after  { margin-left: -7rem; }
      p { padding: 1rem; }}
    &#aid{ top: unset; left: 4rem;
      p { padding: 1rem; }}
    &#lid{ top: unset; left: 0rem; width: auto;
      &::before { margin-left: 5.4rem; }
      &::after  { margin-left: 6rem; }
      p { padding: 1.3rem; padding-bottom: 0rem; }
      h2 { margin: 3rem 0 -2rem 0; }}
  }
  @media screen and (min-width: ${Theme.screenSize.cronicOff8}) and (max-width: ${Theme.screenSize.cronicOffMax8}) {
    &#cid{ top: unset; left: 0rem;
      &::before { left: 3rem; }
      &::after { left: 3rem; }
      p { padding: 1rem; }}
    &#pid{top: unset; left: 0rem;
      &::before { margin-left: -8.6rem; }
      &::after  { margin-left: -8rem; }
      p { padding: 1rem; }}
    &#aid{ top: unset; left: 3rem;
      p { padding: 1rem; }}
    &#lid{ top: unset; left: 0rem; width: auto;
      &::before { margin-left: 4.8rem; }
      &::after  { margin-left: 5.4rem; }
      p { padding: 1.3rem; padding-bottom: 0rem; }
      h2 { margin: 3rem 0 -2rem 0; }}
  }
  @media screen and (min-width: ${Theme.screenSize.cronicOff9}) and (max-width: ${Theme.screenSize.cronicOffMax9}) {
    &#cid{ top: unset; left: 0rem;
      &::before { left: 3rem; }
      &::after { left: 3rem; }
      p { padding: 1rem; }}
    &#pid{top: unset; left: 0rem;
      &::before { margin-left: -9.6rem; }
      &::after  { margin-left: -9rem; }
      p { padding: 1rem; }}
    &#aid{ top: unset; left: 2rem;
      p { padding: 1rem; }}
    &#lid{ top: unset; left: 0rem; width: auto;
      &::before { margin-left: 3.8rem; }
      &::after  { margin-left: 4.4rem; }
      p { padding: 1.3rem; padding-bottom: 0rem; }
      h2 { margin: 3rem 0 -2rem 0; }}
  }
  @media screen and (min-width: ${Theme.screenSize.cronicOff10}) and (max-width: ${Theme.screenSize.cronicOffMax10}) {
    &#cid{ top: unset; left: 0rem; width: 34.5rem;
      &::before { left: 3rem; }
      &::after { left: 3rem; }
      p { padding: 1rem; }}
    &#pid{top: unset; left: 0rem; width: 34.5rem;
      &::before { margin-left: -11.2rem; }
      &::after  { margin-left: -10.6rem; }
      p { padding: 1rem; }}
    &#aid{ top: unset; left: 1rem; width: 34.5rem;
      &::before { margin-left: -4.6rem; }
      &::after  { margin-left: -4rem; }
      p { padding: 1rem; }}
    &#lid{ top: unset; left: 0rem; width: 34.5rem;
      &::before { margin-left: 4.8rem; }
      &::after  { margin-left: 5.4rem; }
      p { padding: 1.3rem; padding-bottom: 0rem; }
      h2 { margin: 3rem 0 -2rem 0; }}
  }
  @media screen and (min-width: ${Theme.screenSize.cronicOff11}) and (max-width: ${Theme.screenSize.cronicOffMax11}) {
    &#cid{ top: unset; left: 0rem; width: 32rem;
      &::before { left: 3rem; }
      &::after { left: 3rem; }
      p { padding: 1rem; }}
    &#pid{top: unset; left: 0rem; width: 32rem;
      &::before { margin-left: -10.6rem; }
      &::after  { margin-left: -10rem; }
      p { padding: 1rem; }}
    &#aid{ top: unset; left: 0rem; width: 32rem;
      p { padding: 1rem; }}
    &#lid{ top: unset; left: 0rem; width: 32rem;
      &::before { margin-left: 4.2rem; }
      &::after  { margin-left: 4.8rem; }
      p { padding: 1.3rem; padding-bottom: 0rem; }
      h2 { margin: 3rem 0 -2rem 0; }}
  }
  @media screen and (min-width: ${Theme.screenSize.cronicOff12}) and (max-width: ${Theme.screenSize.cronicOffMax12}) {
    &#cid{ top: unset; left: 0rem; width: 27.5rem;
      &::before { left: 3rem; }
      &::after { left: 3rem; }
      p { padding: 1rem; font-size: 1.5rem; }}
    &#pid{top: unset; left: 0rem; width: 27.5rem;
      &::before { margin-left: -8.6rem; }
      &::after  { margin-left: -8rem; }
      p { padding: 1rem; font-size: 1.5rem; }}
    &#aid{ top: unset; left: 0rem; width: 27.5rem;
      &::before { margin-left: -1.6rem; }
      &::after  { margin-left: -1rem; }
      p { padding: 1rem; font-size: 1.5rem; }}
    &#lid{ top: unset; left: 0rem; width: 29.5rem;
      &::before { margin-left: 4.2rem; }
      &::after  { margin-left: 4.8rem; }
      p { padding: 1.3rem; font-size: 1.5rem; padding-bottom: 0rem; line-height: 2rem; }
      h2 { margin: 1rem 0 -2rem 0; }}
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
    margin: 3rem 0 -2rem 0;
    text-align: center;
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
`;
