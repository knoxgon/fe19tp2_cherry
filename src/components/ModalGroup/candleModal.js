import React, { useState } from 'react';
import { connect } from 'react-redux';
import { exchangeCandleAction, exchangeTypeSymGrpAction, exchangeSymAction } from '../../__redux/actions/exchangeActions';
import { parseDate, parseDatePrev, normDatePrev } from './misc';
import { AreaWrap, ModalContainer, FormModal, ModalCloser, ModalSubmitButton, ModalTitle, CandleLabel, CRModal, CMSelect, CMDateTimePicker, ButtonAreaWrap } from './styledCandleModal'
import { fireCandleModal } from '../../__redux/actions/modalActions';
import { ToggleDarkMode } from '../../__config/theme';
import { darkModeToggler } from "../../__redux/actions/darkModeAction";



const CandleModal = ({ fontColor, backgroundColorModal, getinfo, getExc, exchangeSymbolGroup, exchangeSymbol, getSym, candleModalTogg, fireCandleModal, dmToggler, ...props }) => {
  const [inputs, setInputs] = useState({selectedPlatform: '', selectedSymbolGroup: '',  selectedSymbol: {label: '', value: ''}, selectedResolution: '', intervalFrom: parseDatePrev(new Date()), intervalTo: parseDate(new Date())})
  const [dtpFrom, setDtpFrom] = useState(normDatePrev(new Date()))
  const [dtpTo, setDtpTo] = useState(new Date())
  const platforms = [{value: 'forex', label: 'Forex'}, {value: 'crypto', label: 'Crypto'}];
  const resolutions = [{value: '1', label: '1 minute'}, {value: '5', label: '5 minutes'}, {value: '15', label: '15 minutes'}, {value: '30', label: '30 minutes'}, {value: '60', label: '1 hour'}, {value: 'D', label: '1 day'}, {value: 'W', label: '1 week'}, {value: 'M', label: '1 month'}];

  const onChangeDateFromInput = (e) => {
    setDtpFrom(e)
    setInputs({...inputs, intervalFrom: parseDate(e)})
  }
  
  const onChangeDateToInput = (e) => {
    setDtpTo(e)
    setInputs({...inputs, intervalTo: parseDate(e)})

  }

  const submitForm = (e) => {
    e.preventDefault();
    getinfo(inputs)
  }

  const onChangePlatform = (e) => {
    getExc(e.value);
    setInputs({...inputs, selectedSymbol: {...inputs.selectedSymbol}, selectedPlatform: e.value, selectedSymbolGroup: 'Select...'})
  }

  const onChangeResolution = (e) => {
    setInputs({...inputs, selectedResolution: e.value})
  }

  const onChangeSymbolGroup = (e) => {
    getSym(e.value, inputs.selectedPlatform);
    setInputs({...inputs, selectedSymbolGroup: e.value, selectedSymbol: {label: 'Select...', value: ''}})
  }

  const onChangeSymbol = (e) => {
    setInputs({...inputs, selectedSymbol: {label: e.label, value: e.value}})
  }

  const onClickModalCloser = () => {
    fireCandleModal();
  }

  return (
    <ModalContainer>
      <CRModal themeColor={backgroundColorModal} shouldCloseOnOverlayClick={false} isOpen={candleModalTogg} ariaHideApp={false}>
        <FormModal onSubmit={submitForm}>
          <ModalTitle style = {{ color: fontColor }}>Open-High-Low-Close</ModalTitle>
          <ModalCloser src={require('../../assets/employee/clear-24px.svg')} onClick={onClickModalCloser}></ModalCloser>
          <AreaWrap>
            <CandleLabel style = {{ color: fontColor }} htmlFor="datefrom">Starting date</CandleLabel>
            <CMDateTimePicker name="datefrom" onChange={onChangeDateFromInput} maxDate={new Date()} value={dtpFrom} />
          </AreaWrap>
          <AreaWrap>
            <CandleLabel style = {{ color: fontColor }} htmlFor="dateto">End date</CandleLabel>
            <CMDateTimePicker name="dateto" onChange={onChangeDateToInput} value={dtpTo} maxDate={new Date()} minDate={dtpFrom} />
          </AreaWrap>
          <AreaWrap>
            <CandleLabel style = {{ color: fontColor }} htmlFor="platform">Platform</CandleLabel>
            <CMSelect name="platform" onChange={onChangePlatform} options={platforms}></CMSelect>
          </AreaWrap>
          <AreaWrap>
            <CandleLabel style = {{ color: fontColor }} htmlFor="resolution">Resolution</CandleLabel>
            <CMSelect name="resolution" onChange={onChangeResolution} options={resolutions}></CMSelect>
          </AreaWrap>
          {exchangeSymbolGroup.length &&
            <React.Fragment>
              <AreaWrap>
                <CandleLabel style = {{ color: fontColor }} htmlFor="symbolgroup">Market</CandleLabel>
                <CMSelect name="symbolgroup" onChange={onChangeSymbolGroup} options={exchangeSymbolGroup} value={{label: inputs.selectedSymbolGroup}}></CMSelect>
              </AreaWrap>
            </React.Fragment>}
          {exchangeSymbol &&
            <React.Fragment>
              <AreaWrap>
                <CandleLabel style = {{ color: fontColor }} htmlFor="currencies">Currency</CandleLabel>
                <CMSelect name="currencies" onChange={onChangeSymbol} options={exchangeSymbol} value={{label: inputs.selectedSymbol.label}}></CMSelect>
              </AreaWrap>
            </React.Fragment>}
          <ButtonAreaWrap>
            <ModalSubmitButton style = {{ color: fontColor }} type="submit">Graph</ModalSubmitButton>
          </ButtonAreaWrap>
        </FormModal>
      </CRModal>
    </ModalContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    candleModalTogg: state.candleModalToggler.toggle,
    exchangeSymbolGroup: state.exchangeSymbolGroup.selectedExSymGroup,
    exchangeSymbol:    state.exchangeSymbol.selectedExSymMul,
    backgroundColorModal: state.darkModeToggler.color.colors.backgroundColorModal,
    fontColor: state.darkModeToggler.color.colors.fontColor,
    isDmToggler: state.darkModeToggler.toggle
    
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getinfo : (inf) => dispatch(exchangeCandleAction(inf)),
    getExc  : (inp) => dispatch(exchangeTypeSymGrpAction(inp)),
    getSym  : (ing, fcx) => dispatch(exchangeSymAction(ing, fcx)),
    fireCandleModal: () => dispatch(fireCandleModal()),
    dmToggler: () => dispatch(darkModeToggler())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CandleModal);
