import React, { useState } from 'react';
import { connect } from 'react-redux';
import { surpriseEarnings } from '../../__redux/actions/earningActions';
import { AreaWrap, ModalContainer, FormModal, ModalCloser, ModalSubmitButton, ModalTitle, CandleLabel, CRModal, CMSelect, ButtonAreaWrap } from './styledModal'
import { fireLineModal } from '../../__redux/actions/modalActions';
import { darkModeToggler } from "../../__redux/actions/darkModeAction";
import { faTimes } from '@fortawesome/free-solid-svg-icons';

const LineModal = ({ comps, getLinfo, lineModalTogg, fireLineModal, theme }) => {
  const [sym, setSym] = useState({label: '', value: ''})

  const submitForm = (e) => {
    e.preventDefault();
    getLinfo(sym)
  }

  const onChangeSymbol = (e) => {
    setSym({label: e.label, value: e.value})
  }

  const onClickModalCloser = () => {
    fireLineModal();
  }

  return (
    <ModalContainer>
      <CRModal themeColor={theme.contColor} shouldCloseOnOverlayClick={false} isOpen={lineModalTogg} ariaHideApp={false}>
        <FormModal onSubmit={submitForm}>
          <ModalTitle fcolor={theme.fontColor}>Earnings Surprises</ModalTitle>
          <ModalCloser icon={faTimes} xcolor={theme.fontColor} onClick={onClickModalCloser}></ModalCloser>
          <AreaWrap>
            <CandleLabel fcolor={theme.fontColor} htmlFor="secsym">Company</CandleLabel>
            <CMSelect name="secsym" onChange={onChangeSymbol} options={comps}></CMSelect>
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
    lineModalTogg: state.lineModalToggler.toggle,
    theme: state.darkModeToggler.activeTheme,
    comps: state.comps[0].cmp
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getLinfo : (sym) => dispatch(surpriseEarnings(sym)),
    fireLineModal: () => dispatch(fireLineModal()),
    dmToggler: () => dispatch(darkModeToggler())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LineModal);
