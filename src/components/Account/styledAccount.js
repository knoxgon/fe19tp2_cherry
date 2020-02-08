import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

const SparbankenImg = styled.img`
  margin: 3rem 1rem 3rem 1rem;
  justify-content: center;
  width: 9rem;
  height: auto;
  border-right: 0.02rem solid #dddddd;
`;

const Styleddiv = styled.div`
  display: flex;
  align-items: center;
`;

const StyledH2 = styled.h2`
  margin-left: 0rem;
  font-size: 1.5rem;
`;

const StyledAddUser = styled.img`
  margin-left: 4rem;
  width: 4rem;
  
  &:hover {
    transform: scale(1.1);
  }
`;

const UserFunctionDiv = styled.div`
  display: flex;
  align-items: center;
`;

const StyledP = styled.p`
  font-size: 2rem;
  font-weight: bold;
  margin-block-start: 0rem;
  margin-block-end: 0rem;
  margin-left: 2rem;
`;

const StyledGraph = styled(FontAwesomeIcon)`
  font-size: 3.5rem;
  margin: 3rem 0rem 3rem 4.2rem;

  &:hover {
    transform: scale(1.1);
  }
`;
const StyledLogout = styled(FontAwesomeIcon)`
  font-size: 3.5rem;
  margin: 3rem 0rem 0rem 4.4rem;

  &:hover {
    transform: scale(1.1);
  }
`;

const LogoutDiv = styled.div`
  display: flex;
  text-align: center;
  align-items: flex-end;
  height: 28rem;
`;


const StyledApiIcon = styled.img`
  margin-left: 3.5rem;
  width: 5rem;

  &:hover {
    transform: scale(1.1);
  }
`;

const StyledPtag = styled.p`
  font-size: 2rem;
  font-weight: bold;
  margin-block-start: 0rem;
  margin-block-end: 0rem;
  margin-left: 1.3rem;
`;

const BorderUnderline = styled.div`
  margin: 2rem 4rem 2rem 4rem;
  height: 0.1rem;
  background-color: #dddddd;
`;


export {
  Wrapper,
  SparbankenImg,
  Styleddiv,
  StyledH2,
  StyledAddUser,
  UserFunctionDiv,
  StyledP,
  StyledGraph,
  StyledLogout,
  LogoutDiv,
  StyledApiIcon,
  StyledPtag,
  BorderUnderline
}
