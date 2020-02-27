import React, { useState } from 'react';
import { connect } from 'react-redux';
import { trendsPrefetch, trends } from '../../__redux/actions/trendActions';
import { AreaWrap, ModalContainer, FormModal, ModalCloser, ModalSubmitButton, ModalTitle, CandleLabel, CRModal, CMSelect, ButtonAreaWrap } from './styledCandleModal'
import { firePieModal } from '../../__redux/actions/modalActions';
import { darkModeToggler } from "../../__redux/actions/darkModeAction";

const PieModal = ({ backgroundColorModal, fontColor, dmToggler, getPinfo, pieModalTogg, firePieModal, timePeers, comp, trend}) => {
  const [period, setPeriod] = useState(null);
  const symset = [{label: 'Asbury Automotive Group Inc', value: 'ABG'}, {label: 'Agree Reality Corp', value: 'ADC'}, {label: 'ABM Industries Incorporated', value: 'ABM'}, {label: 'GAIN Capital Holdings', value: 'GCAP'}, {label: 'Genesis Energy LP', value: 'GEL'}, {label: 'Microsoft Corporation', value: 'MSFT'}, {label: 'Apple Inc', value: 'AAPL'}]

  const submitForm = (e) => {
    e.preventDefault();
    trend(period, comp)
  }
  
  const onChangeSymbol = (e) => {
    getPinfo(e)
  }
  
  const onChangePeriod = (e) => {
    setPeriod(e.value)
  }

  const onClickModalCloser = () => {
    firePieModal();
  }

  return (
    <ModalContainer>
      <CRModal themeColor={backgroundColorModal} shouldCloseOnOverlayClick={false} isOpen={pieModalTogg} ariaHideApp={false}>
        <FormModal onSubmit={submitForm}>
          <ModalTitle style = {{color: fontColor }}>Recommendation Trends</ModalTitle>
          <ModalCloser src={require('../../assets/employee/clear-24px.svg')} onClick={onClickModalCloser}></ModalCloser>
          <AreaWrap>
            <CandleLabel style = {{color: fontColor }} htmlFor="secsym">Company</CandleLabel>
            <CMSelect name="secsym" onChange={onChangeSymbol} options={symset}></CMSelect>
          </AreaWrap>
          {timePeers ?
          <AreaWrap>
            <CandleLabel style = {{color: fontColor }} htmlFor="periods">Time period</CandleLabel>
            <CMSelect name="periods" onChange={onChangePeriod} options={timePeers}></CMSelect>
          </AreaWrap> : null}
          <ButtonAreaWrap>
            <ModalSubmitButton style = {{color: fontColor }} type="submit">Graph</ModalSubmitButton>
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
    comp: state.predata.compname,
    fontColor: state.darkModeToggler.color.colors.fontColor,
    isDmToggler: state.darkModeToggler.toggle,
    backgroundColorModal: state.darkModeToggler.color.colors.backgroundColorModal,

  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getPinfo: (sym) => dispatch(trendsPrefetch(sym)),
    trend: (per, sym) => dispatch(trends(per, sym)),
    firePieModal: () => dispatch(firePieModal()),
    dmToggler: () => dispatch(darkModeToggler())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PieModal);
