import React, { useState } from 'react';
import { connect } from 'react-redux';
import { surpriseEarnings } from '../../__redux/actions/earningActions';
import { AreaWrap, ModalContainer, FormModal, ModalCloser, ModalSubmitButton, ModalTitle, CandleLabel, CRModal, CMSelect, ButtonAreaWrap } from './styledModal'
import { fireLineModal } from '../../__redux/actions/modalActions';
import { darkModeToggler } from "../../__redux/actions/darkModeAction";

const LineModal = ({ getLinfo, lineModalTogg, fireLineModal, theme }) => {
  const [sym, setSym] = useState({label: '', value: ''})
  const symset = [{label: 'Asbury Automotive Group Inc', value: 'ABG'}, {label: 'Agree Reality Corp', value: 'ADC'}, {label: 'ABM Industries Incorporated', value: 'ABM'}, {label: 'GAIN Capital Holdings', value: 'GCAP'}, {label: 'Genesis Energy LP', value: 'GEL'}, {label: 'Microsoft Corporation', value: 'MSFT'}, {label: 'Apple Inc', value: 'AAPL'}]

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
          <ModalCloser src={require('../../assets/employee/clear-24px.svg')} onClick={onClickModalCloser}></ModalCloser>
          <AreaWrap>
            <CandleLabel fcolor={theme.fontColor} htmlFor="secsym">Company</CandleLabel>
            <CMSelect name="secsym" onChange={onChangeSymbol} options={symset}></CMSelect>
          </AreaWrap>
          <ButtonAreaWrap>
            <ModalSubmitButton bgcolor={theme.fontColor} fcolor={theme.navColor} type="submit">Graph</ModalSubmitButton>
          </ButtonAreaWrap>
        </FormModal>
      </CRModal>
    </ModalContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    lineModalTogg: state.lineModalToggler.toggle,
    theme: state.darkModeToggler.activeTheme
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
