import React, { useState } from 'react';
import { connect } from 'react-redux';
import { trendsPrefetch, trends } from '../../__redux/actions/trendActions';
import { AreaWrap, ModalContainer, FormModal, ModalCloser, ModalSubmitButton, ModalTitle, CandleLabel, CRModal, CMSelect, ButtonAreaWrap } from './styledCandleModal'
import { firePieModal } from '../../__redux/actions/modalActions';


const PieModal = ({getPinfo, pieModalTogg, firePieModal, timePeers, comp, trend}) => {
  const [period, setPeriod] = useState('');
  const symset = [{label: 'Asbury Automotive Group Inc', value: 'ABG'}, {label: 'Agree Reality Corp', value: 'ADC'}, {label: 'ABM Industries Incorporated', value: 'ABM'}, {label: 'GAIN Capital Holdings', value: 'GCAP'}, {label: 'Genesis Energy LP', value: 'GEL'}, {label: 'Microsoft Corporation', value: 'MSFT'}, {label: 'Apple Inc', value: 'AAPL'}]

  const submitForm = (e) => {
    e.preventDefault();
    trend(period, comp)
  }
  
  const onChangeSymbol = (e) => {
    getPinfo(e.value)
  }
  
  const onChangePeriod = (e) => {
    setPeriod(e.value)
  }

  const onClickModalCloser = () => {
    firePieModal();
  }

  return (
    <ModalContainer>
      <CRModal shouldCloseOnOverlayClick={false} isOpen={pieModalTogg} ariaHideApp={false}>
        <FormModal onSubmit={submitForm}>
          <ModalTitle>Recommendation Trends</ModalTitle>
          <ModalCloser src={require('../../assets/employee/bin.svg')} onClick={onClickModalCloser}></ModalCloser>
          <AreaWrap>
            <CandleLabel htmlFor="secsym">Company</CandleLabel>
            <CMSelect name="secsym" onChange={onChangeSymbol} options={symset}></CMSelect>
          </AreaWrap>
          {timePeers ?
          <AreaWrap>
            <CandleLabel htmlFor="periods">Time period</CandleLabel>
            <CMSelect name="periods" onChange={onChangePeriod} options={timePeers}></CMSelect>
          </AreaWrap> : null}
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
    pieModalTogg: state.pieModalToggler.toggle,
    timePeers: state.predata.periods,
    comp: state.predata.compname
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPinfo: (sym) => dispatch(trendsPrefetch(sym)),
    trend: (per, sym) => dispatch(trends(per, sym)),
    firePieModal: () => dispatch(firePieModal()),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PieModal);
