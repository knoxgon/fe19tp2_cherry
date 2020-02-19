import React from 'react';
import { connect } from 'react-redux';
import { modalClose, modalCreate } from '../__redux/actions/modalAction';
import random from 'randomstring';
import { GMArea } from "./styled"
import CModal from '../components/CModal/cmodal';
import CandleGraph from '../components/Graph/Candle/candle'

const MCView = ({exchange, eraseModal, modals, createModal}) => {
  const modOnClick = () => {
    createModal()
  }
  const modOnDel = (dsid) => {
    eraseModal(dsid)
  }

  const renderModal = () => {
    return modals.map(({dsid}, i) => {
      return <React.Fragment key={i}>
        <GMArea>
          <CModal sharedId={dsid}></CModal>
          <button onClick={modOnClick}>Open</button>
          <button onClick={() => modOnDel(dsid)}>Del me</button>
          {exchange.map((grafData, j) => {
            if(grafData.status === 'ok' && grafData.dsid === dsid)
              return <CandleGraph key={j} modalId={dsid} barid={random.generate(16)}></CandleGraph>
            return null;
          })}
        </GMArea>
      </React.Fragment>
    })
  }


  return (
    renderModal()
  )
}

const mapStateToProps = (state) => {
  return {
    exchange: state.exchange,
    modals: state.modals
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    eraseModal: (id) => dispatch(modalClose(id)),
    createModal: () => dispatch(modalCreate())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MCView)
