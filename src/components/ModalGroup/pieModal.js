import React, { useState } from 'react';
import { connect } from 'react-redux';
import { trendsPrefetch, trends } from '../../__redux/actions/trendActions';
import { AreaWrap, ModalContainer, FormModal, ModalCloser, ModalSubmitButton, ModalTitle, CandleLabel, CRModal, CMSelect, ButtonAreaWrap } from './styledModal'
import { firePieModal } from '../../__redux/actions/modalActions';
import { darkModeToggler } from "../../__redux/actions/darkModeAction";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const PieModal = ({ getPinfo, pieModalTogg, firePieModal, timePeers, comp, comps, trend, theme }) => {
  const [period, setPeriod] = useState(null);

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
          <ModalCloser icon={faTimes} xcolor={theme.fontColor} onClick={onClickModalCloser}></ModalCloser>
          <AreaWrap>
            <CandleLabel bgcolor={theme.fontColor} fcolor={theme.fontColor}  htmlFor="secsym">Company</CandleLabel>
            <CMSelect name="secsym" onChange={onChangeSymbol} options={comps}></CMSelect>
          </AreaWrap>
          {timePeers ?
          <AreaWrap>
            <CandleLabel bgcolor={theme.fontColor} fcolor={theme.fontColor}  htmlFor="periods">Time period</CandleLabel>
            <CMSelect name="periods" onChange={onChangePeriod} options={timePeers}></CMSelect>
          </AreaWrap> : null}
          <ButtonAreaWrap>
            <ModalSubmitButton bgcolor={theme.fontColor} fcolor={theme.contColor}  type="submit">Graph</ModalSubmitButton>
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
    comps: state.comps[0].cmp,
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
