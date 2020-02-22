import React, { useState } from 'react';
import { exchangeCandleAction, exchangeTypeSymGrpAction, exchangeSymAction } from '../../__redux/actions/exchangeCandleAction';
import { connect } from 'react-redux';
import DateTimePicker from 'react-datetime-picker';
import Select from 'react-select';
import { parseDate, parseDatePrev, normDatePrev } from './misc';
import { ModalContainer, FormModal, ModalCloser, ModalSubmitButton, ModalTitle, CandleLabel, CRModal } from './styledCandleModal'
import { fireCandleModalAction } from '../../__redux/actions/modalActions';

const CandleModal = ({sharedId, getinfo, retStatus, getExc, exchangeSymbolGroup, exchangeSymbol, getSym, modalTogg, fireCandleModal}) => {
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
    getinfo(inputs, sharedId)
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
      <CRModal shouldCloseOnOverlayClick={false} isOpen={modalTogg} ariaHideApp={false}>
        <FormModal onSubmit={submitForm}>
          <ModalTitle>Graph Title</ModalTitle>
          <ModalCloser src={require('../../assets/employee/bin.svg')} onClick={onClickModalCloser}></ModalCloser>
          <CandleLabel htmlFor="datefrom">Starting date</CandleLabel>
          <DateTimePicker name="datefrom" onChange={onChangeDateFromInput} maxDate={new Date()} value={dtpFrom} />

          <label htmlFor="dateto">End date</label>
          <DateTimePicker name="dateto" onChange={onChangeDateToInput} value={dtpTo} maxDate={new Date()} minDate={dtpFrom} />

          <label htmlFor="platform">Platform</label>
          <Select name="platform" onChange={onChangePlatform} options={platforms}></Select>

          <label htmlFor="resolution">Resolution</label>
          <Select name="resolution" onChange={onChangeResolution} options={resolutions}></Select>

          {exchangeSymbolGroup.length &&
            <React.Fragment>
              <label htmlFor="symbolgroup">Market</label>
              <Select name="symbolgroup" onChange={onChangeSymbolGroup} options={exchangeSymbolGroup} value={{label: inputs.selectedSymbolGroup}}></Select>
            </React.Fragment>
          }

          {exchangeSymbol &&
            <React.Fragment>
              <label htmlFor="currencies">Currency</label>
              <Select name="currencies" onChange={onChangeSymbol} options={exchangeSymbol} value={{label: inputs.selectedSymbol.label}}></Select>
            </React.Fragment>
          }
          <ModalSubmitButton type="submit">Graph</ModalSubmitButton>
          <div>{retStatus}</div>
        </FormModal>
      </CRModal>
    </ModalContainer>
  );
}

const mapStateToProps = (state) => {
  return {
    modalTogg: state.modalToggler.toggle,
    retStatus: state.exchange.status,
    exchangeSymbolGroup: state.exchangeSymbolGroup.selectedExSymGroup,
    exchangeSymbol:    state.exchangeSymbol.selectedExSymMul
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getinfo : (inf, sid) => dispatch(exchangeCandleAction(inf, sid)),
    getExc  : (inp) => dispatch(exchangeTypeSymGrpAction(inp)),
    getSym  : (ing, fcx) => dispatch(exchangeSymAction(ing, fcx)),
    fireCandleModal: () => dispatch(fireCandleModalAction())
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CandleModal);
