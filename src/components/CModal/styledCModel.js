import styled from 'styled-components';


const modalStyle = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)',
    backgroundColor       : 'white',
    height                : '400px',
    width                 : '500px',
  },
  overlay: {
    background: "rgba(0, 0, 0, 0.75)"
  }
};

const ModalContainer = styled.div`
  padding: 2rem;
  border-radius: 1rem;
  color: #fff;
  display: flex;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  margin-bottom: 1rem;
`;

export {
  ModalContainer,
  modalStyle
}
