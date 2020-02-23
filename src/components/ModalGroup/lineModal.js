import React, { useState } from 'react';
import { connect } from 'react-redux';
import { surpriseEarningAction } from '../../__redux/actions/earningActions';
import { AreaWrap, ModalContainer, FormModal, ModalCloser, ModalSubmitButton, ModalTitle, CandleLabel, CRModal, CMSelect, ButtonAreaWrap } from './styledCandleModal'
import { fireLineModalAction } from '../../__redux/actions/modalActions';


const LineModal = ({getLinfo, lineModalTogg, fireLineModal}) => {
  const [sym, setSym] = useState({label: '', value: ''})
  const symset = [{label: 'Asbury Automotive Group Inc', value: 'ABG'}, {label: 'Agree Reality Corp', value: 'ADC'}, {label: 'ABM Industries Incorporated', value: 'ABM'}, {label: 'GAIN Capital Holdings', value: 'GCAP'}, {label: 'Genesis Energy LP', value: 'GEL'}, {label: 'Microsoft Corporation', value: 'MSFT'}, {label: 'Apple Inc', value: 'AAPL'}]

  const submitForm = (e) => {
    e.preventDefault();
    getLinfo(sym.value)
  }

  const onChangeSymbol = (e) => {
    setSym({label: e.label, value: e.value})
  }

  const onClickModalCloser = () => {
    fireLineModal();
  }

  return (
    <ModalContainer>
      <CRModal shouldCloseOnOverlayClick={false} isOpen={lineModalTogg} ariaHideApp={false}>
        <FormModal onSubmit={submitForm}>
          <ModalTitle>Earnings Surprises</ModalTitle>
          <ModalCloser src={require('../../assets/employee/bin.svg')} onClick={onClickModalCloser}></ModalCloser>
          <AreaWrap>
            <CandleLabel htmlFor="secsym">Company</CandleLabel>
            <CMSelect name="secsym" onChange={onChangeSymbol} options={symset}></CMSelect>
          </AreaWrap>
          <ButtonAreaWrap>
            <ModalSubmitButton type="submit">Graph</ModalSubmitButton>
          </ButtonAreaWrap>
        </FormModal>
      </CRModal>
    </ModalContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    lineModalTogg: state.lineModalToggler.toggle
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getLinfo : (sym) => dispatch(surpriseEarningAction(sym)),
    fireLineModal: () => dispatch(fireLineModalAction())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(LineModal);
