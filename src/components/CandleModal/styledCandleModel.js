import styled from 'styled-components';
import Theme from '../../__config/theme';


const FormModal = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 50%;
  margin: 0 auto;
`;

const modalStyle = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    backgroundColor       : 'white',
    height  : 'calc(100% - 40rem)',
    maxWidth  : '50rem',
    width: 'calc(100% - 10rem)',
    minWidth: '25rem'
  },
  overlay: {
    background: "rgba(0, 0, 0, 0.75)"
  }
};

export const ModalTitle = styled.div`
  text-align: center;
  font-size: 2rem;
  color: gray;
`;

export const ModalSubmitButton = styled.button`
  position: absolute;
  bottom: 0;
  margin-bottom: 2rem;
  left: 50%;
  font-size: 1.5rem;
  font-weight: 600;
  color: black;
  background-color: #0ef994;
  height: 4rem;
`;

const ModalContainer = styled.div`
  position: relative;
  padding: 2rem;
  border-radius: 1rem;
  color: #fff;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

export const ModalCloser = styled.img`
  position: absolute;
  cursor: pointer;
  top: 0;
  right: 0;
  margin-right: 1.5rem;
  margin-top: 1.5rem;
  width: 3rem;
  height: 3rem;

  &:hover {
    transform: scale(1.1);

    @media screen and (max-width: ${Theme.screenSize.xsmall}) {
      transform: scale(1);
    }
  }
`;

export {
  ModalContainer,
  modalStyle,
  FormModal
}
