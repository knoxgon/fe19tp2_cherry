import ReactModal from 'react-modal';
import React, { useState } from 'react';
import { exchangeCandleAction, exchangeTypeSymGrpAction, exchangeSymAction } from '../../__redux/actions/exchangeCandleAction';
import { connect } from 'react-redux';
import DateTimePicker from 'react-datetime-picker';
import Select from 'react-select';
import { parseDate, parseDatePrev, normDatePrev } from './misc';
import {customStyles, styleGMArea} from './styledCModel'

const CModal = ({sharedId, getinfo, retStatus, getExc, excSymGrp, excSym, getSym}) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [inputs, setInputs] = useState({selectedExchange: '', selectedSymGrp: '',  selectedSym: {label: '', value: ''}, selectedResolution: '', intervalFrom: parseDatePrev(new Date()), intervalTo: parseDate(new Date())})
  const [dtpFrom, setDtpFrom] = useState(normDatePrev(new Date()))
  const [dtpTo, setDtpTo] = useState(new Date())
  const exchanges = [{value: 'forex', label: 'Forex'}, {value: 'crypto', label: 'Crypto'}];
  const resolutions = [{value: '1', label: '1 minute'}, {value: '5', label: '5 minutes'}, {value: '15', label: '15 minutes'}, {value: '30', label: '30 minutes'}, {value: '60', label: '1 hour'}, {value: 'D', label: '1 day'}, {value: 'W', label: '1 week'}, {value: 'M', label: '1 month'}];


  const onChangeDateFromInput = (e) => {
    setDtpFrom(e)
    setInputs({...inputs, intervalFrom: parseDate(e)})
  }
  
  const onChangeDateToInput = (e) => {
    setDtpTo(e)
    setInputs({...inputs, intervalTo: parseDate(e)})

  }

  const onClickModalCloser = () => {
    setModalOpen(false)
  }

  const onClickModalOpener = () => {
    setModalOpen(true)
  }

  const doSome = (e) => {
    e.preventDefault();
    getinfo(inputs, sharedId)
  }

  const onChangeExchange = (e) => {
    getExc(e.value);
    setInputs({...inputs, selectedSym: {...inputs.selectedSym}, selectedExchange: e.value, selectedSymGrp: 'Select...'})
  }

  const onChangeResolution = (e) => {
    setInputs({...inputs, selectedResolution: e.value})
  }

  const onChangeSymGrp = (e) => {
    getSym(e.value, inputs.selectedExchange);
    setInputs({...inputs, selectedSymGrp: e.value, selectedSym: {label: 'Select...', value: ''}})
  }

  const onChangeSym = (e) => {
    setInputs({...inputs, selectedSym: {label: e.label, value: e.value}})
  }

  return (
    <div style={{styleGMArea}}>
      <button onClick={onClickModalOpener}>Open me</button>
      <ReactModal style={customStyles} isOpen={modalOpen} ariaHideApp={false} onRequestClose={onClickModalCloser}>
        <form onSubmit={doSome} style={{'textAlign': 'center', 'display': 'flex', 'flexDirection': 'column', 'width': '50%', 'margin': '0 auto'}}>
          <label htmlFor="datefrom">Starting date</label>
          <DateTimePicker name="datefrom" onChange={onChangeDateFromInput} maxDate={new Date()} value={dtpFrom} />

          <label htmlFor="dateto">End date</label>
          <DateTimePicker name="dateto" onChange={onChangeDateToInput} value={dtpTo} maxDate={new Date()} minDate={dtpFrom} />

          <label htmlFor="selexc">Platform</label>
          <Select name="selexc" onChange={onChangeExchange} options={exchanges}></Select>

          <label htmlFor="resol">Resolution</label>
          <Select name="resol" onChange={onChangeResolution} options={resolutions}></Select>

          {excSymGrp &&
            <React.Fragment>
              <label htmlFor="symgrp">Market</label>
              <Select name="symgrp" onChange={onChangeSymGrp} options={excSymGrp} value={{label: inputs.selectedSymGrp}}></Select>
            </React.Fragment>
          }

          {excSym &&
            <React.Fragment>
              <label htmlFor="symul">Currency</label>
              <Select name="symul" onChange={onChangeSym} options={excSym} value={{label: inputs.selectedSym.label}}></Select>
            </React.Fragment>
          }
          <button type="submit">Graph</button>
          <div>{retStatus}</div>
        </form>
      </ReactModal>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    retStatus: state.excRed.status,
    excSymGrp: state.excSymGrp.selectedExSymGroup,
    excSym:    state.excSym.selectedExSymMul
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getinfo : (inf, sid) => dispatch(exchangeCandleAction(inf, sid)),
    getExc  : (inp) => dispatch(exchangeTypeSymGrpAction(inp)),
    getSym  : (ing, fcx) => dispatch(exchangeSymAction(ing, fcx))
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(CModal);
