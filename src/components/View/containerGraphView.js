import React from 'react';
import { connect } from 'react-redux';
import { containerClose } from '../../__redux/actions/containerActions';
import random from 'randomstring';
import { GMArea, MCCloser, GMTitle, GMTop } from "./styled"
import CandleGraph from '../Graph/Candle/candle'
import LineGraph from '../Graph/Line/line'
import PieGraph from '../Graph/Pie/pie'

const ContainerGraphView = ({central, eraseContainer, containers}) => {
  const containerOnDel = (dsid) => {
    eraseContainer(dsid)
  }

  const renderContainers = () => {
    return containers.map(({dsid}, i) => {
      return <React.Fragment key={i}>
        <GMArea>
          <GMTop color="#0fc4ac">
            <MCCloser src={require('../../assets/employee/bin.svg')} onClick={() => containerOnDel(dsid)}></MCCloser>
          </GMTop>
          {central.map((grafData, j) => {
            if(grafData.status === 'ok' && grafData.dsid === dsid && grafData.gtype === 'candle') {
              return <React.Fragment key={j}>
                <GMTitle color="#6c96af">OHLC</GMTitle>
                <CandleGraph market={grafData.market} currency={grafData.currency} primary={grafData.primary.series} alternate={grafData.alternate.series} containerId={dsid} barid={random.generate(16)}></CandleGraph>
                </React.Fragment>
            } if(grafData.status === 'ok' && grafData.dsid === dsid && grafData.gtype === 'line') {
              return <React.Fragment key={j}>
                <GMTitle color="#30c97c">Earnings Surprises</GMTitle>
                <LineGraph series={grafData.series} period={grafData.period} symcomp={grafData.symcomp} containerId={dsid}></LineGraph>
                </React.Fragment>
            } if(grafData.status === 'ok' && grafData.dsid === dsid && grafData.gtype === 'pie') {
              return <React.Fragment key={j}>
                <GMTitle color="#44b9bf">Recommendation Trends</GMTitle>
                <PieGraph series={grafData.series} period={grafData.period} compname={grafData.compname} containerId={dsid}></PieGraph>
                </React.Fragment>
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
  return {
    central: state.central,
    containers: state.containers
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    eraseContainer: (id) => dispatch(containerClose(id))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ContainerGraphView)
