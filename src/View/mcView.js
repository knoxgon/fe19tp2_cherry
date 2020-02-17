import React from 'react';
import { connect } from 'react-redux';
import { modalClose, modalCreate } from '../__redux/actions/modalAction';
import random from 'randomstring';
import { GMArea } from "./styled"
import CModal from '../components/CModal/cmodal';
import CandleGraph from '../components/Graph/Candle/candle'

const MCView = ({excRed, eraseModal, modRed, createModal}) => {
  const modOnClick = () => {
    createModal()
  }
  const modOnDel = (dsid) => {
    eraseModal(dsid)
  }
  return (
    <React.Fragment>
      {modRed.map((mod, i) => {
        return <React.Fragment key={i}>
          <GMArea>
            <CModal sharedId={mod.dsid}></CModal>
            <button onClick={modOnClick}>Open</button>
            <button onClick={() => modOnDel(mod.dsid)}>Del me</button>
            {excRed.map((grafData, j) => {
              if(grafData.status === 'ok' && grafData.dsid === mod.dsid)
                return <CandleGraph key={j} idset={mod.dsid} barid={random.generate(16)}></CandleGraph>
              return null;
            })}
          </GMArea>
        </React.Fragment>
      })}
    </React.Fragment>
  );
}

const mapStateToProps = (state) => {
  return {
    excRed: state.excRed,
    modRed: state.modRed
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    eraseModal: (id) => dispatch(modalClose(id)),
    createModal: () => dispatch(modalCreate())
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(MCView)
