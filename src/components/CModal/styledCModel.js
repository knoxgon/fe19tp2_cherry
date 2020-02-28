import styled from 'styled-components';


const FormModal = styled.form`
  display: flex;
  flex-direction: column;
  text-align: center;
  width: 50%;
  margin: 0 auto;
`;

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
  FormModal
}
