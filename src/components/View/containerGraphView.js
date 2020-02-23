import React from 'react';
import { connect } from 'react-redux';
import { containerClose } from '../../__redux/actions/containerAction';
import random from 'randomstring';
import { GMArea, MCCloser } from "./styled"
import CandleGraph from '../Graph/Candle/candle'
import LineGraph from '../Graph/Line/line'

const ContainerGraphView = ({exchange, eraseContainer, containers}) => {
  const containerOnDel = (dsid) => {
    eraseContainer(dsid)
  }

  const renderContainers = () => {
    return containers.map(({dsid}, i) => {
      return <React.Fragment key={i}>
        <GMArea>
          <MCCloser src={require('../../assets/employee/bin.svg')} onClick={() => containerOnDel(dsid)}></MCCloser>
          {exchange.map((grafData, j) => {
            if(grafData.status === 'ok' && grafData.dsid === dsid && grafData.gtype === 'candle') {
              return <CandleGraph key={j} containerId={dsid} barid={random.generate(16)}></CandleGraph>
            } if(grafData.status === 'ok' && grafData.dsid === dsid && grafData.gtype === 'line') {
              return <LineGraph key={j} containerId={dsid}></LineGraph>
            }
            return null;
          })}
        </GMArea>
      </React.Fragment>
    })
  }
  return (
    renderContainers()
  )
}

const mapStateToProps = (state) => {
  console.log(state)
  return {
    exchange: state.exchange,
    containers: state.containers
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    eraseContainer: (id) => dispatch(containerClose(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerGraphView)
