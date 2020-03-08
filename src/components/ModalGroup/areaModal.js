import React, { useState } from 'react';
import { connect } from 'react-redux';
import { AreaWrap, ModalContainer, FormModal, ModalCloser, ModalSubmitButton, ModalTitle, CandleLabel, CRModal, CMSelect, ButtonAreaWrap } from './styledModal'
import { fireAreaModal } from '../../__redux/actions/modalActions';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
import { tick } from '../../__redux/actions/tickrate';

const AreaModal = ({ comps, getAinfo, areaModalTogg, fireAreaModal, theme }) => {
  const [sym, setSym] = useState({label: '', value: ''})

  const submitForm = (e) => {
    e.preventDefault();
    getAinfo(sym)
  }

  const onChangeSymbol = (e) => {
    setSym({label: e.label, value: e.value})
  }

  const onClickModalCloser = () => {
    fireAreaModal();
  }

  return (
    <ModalContainer>
      <CRModal themeColor={theme.contColor} shouldCloseOnOverlayClick={false} isOpen={areaModalTogg} ariaHideApp={false}>
        <FormModal onSubmit={submitForm}>
          <ModalTitle fcolor={theme.fontColor}>Stock Movement</ModalTitle>
          <ModalCloser icon={faTimes} xcolor={theme.fontColor} onClick={onClickModalCloser}></ModalCloser>
          <AreaWrap>
            <CandleLabel fcolor={theme.fontColor} htmlFor="stocksym">Company</CandleLabel>
            <CMSelect name="stocksym" onChange={onChangeSymbol} options={comps}></CMSelect>
          </AreaWrap>
          <ButtonAreaWrap>
            <ModalSubmitButton bgcolor={theme.fontColor} fcolor={theme.contColor} type="submit">Graph</ModalSubmitButton>
          </ButtonAreaWrap>
        </FormModal>
      </CRModal>
    </ModalContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    areaModalTogg: state.areaModalToggler.toggle,
    theme: state.darkModeToggler.activeTheme,
    comps: state.comps[0].cmp
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getAinfo : (sym) => dispatch(tick(sym)),
    fireAreaModal: () => dispatch(fireAreaModal())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AreaModal);
