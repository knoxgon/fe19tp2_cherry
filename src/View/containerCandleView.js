import React from 'react';
import { connect } from 'react-redux';
import { containerClose } from '../__redux/actions/containerAction';
import random from 'randomstring';
import { GMArea, MCCloser } from "./styled"
import CandleGraph from '../components/Graph/Candle/candle'

const ContainerCandleView = ({exchange, eraseContainer, containers}) => {
  const containerOnDel = (dsid) => {
    eraseContainer(dsid)
  }

  const renderContainers = () => {
    return containers.map(({dsid}, i) => {
      return <React.Fragment key={i}>
        <GMArea>
          <MCCloser src={require('../assets/employee/bin.svg')} onClick={() => containerOnDel(dsid)}></MCCloser>
          {exchange.map((grafData, j) => {
            if(grafData.status === 'ok' && grafData.dsid === dsid)
              return <CandleGraph key={j} containerId={dsid} barid={random.generate(16)}></CandleGraph>
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

export default connect(mapStateToProps, mapDispatchToProps)(ContainerCandleView)
