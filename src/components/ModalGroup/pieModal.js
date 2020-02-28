import React, { useState } from 'react';
import { connect } from 'react-redux';
import { trendsPrefetch, trends } from '../../__redux/actions/trendActions';
import { AreaWrap, ModalContainer, FormModal, ModalCloser, ModalSubmitButton, ModalTitle, CandleLabel, CRModal, CMSelect, ButtonAreaWrap } from './styledCandleModal'
import { firePieModal } from '../../__redux/actions/modalActions';
import { darkModeToggler } from "../../__redux/actions/darkModeAction";

const PieModal = ({ getPinfo, pieModalTogg, firePieModal, timePeers, comp, trend, theme }) => {
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
      <CRModal themeColor={theme.contColor} shouldCloseOnOverlayClick={false} isOpen={pieModalTogg} ariaHideApp={false}>
        <FormModal onSubmit={submitForm}>
          <ModalTitle fcolor={theme.fontColor} >Recommendation Trends</ModalTitle>
          <ModalCloser src={require('../../assets/employee/clear-24px.svg')} onClick={onClickModalCloser}></ModalCloser>
          <AreaWrap>
            <CandleLabel bgcolor={theme.fontColor} fcolor={theme.fontColor}  htmlFor="secsym">Company</CandleLabel>
            <CMSelect name="secsym" onChange={onChangeSymbol} options={symset}></CMSelect>
          </AreaWrap>
          {timePeers ?
          <AreaWrap>
            <CandleLabel bgcolor={theme.fontColor} fcolor={theme.fontColor}  htmlFor="periods">Time period</CandleLabel>
            <CMSelect name="periods" onChange={onChangePeriod} options={timePeers}></CMSelect>
          </AreaWrap> : null}
          <ButtonAreaWrap>
            <ModalSubmitButton bgcolor={theme.fontColor} fcolor={theme.navColor}  type="submit">Graph</ModalSubmitButton>
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
    theme: state.darkModeToggler.activeTheme
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
