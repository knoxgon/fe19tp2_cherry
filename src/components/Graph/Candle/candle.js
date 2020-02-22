import React from 'react'
import { connect } from 'react-redux'
import Chart from 'react-apexcharts';
import {options, optionsBar} from '../options';


const CandleGraph = ({containerId, barid, exchange}) => {
  return (
    exchange.map(({status, dsid, primary, alternate}, i) => {
      if(status === 'ok' && alternate.series[0].data.length > 0 && dsid === containerId) {
        return <React.Fragment key={i}>
          <Chart options={options(dsid)} series={primary.series} type="candlestick" height="350px" width="550px" />
          <Chart options={optionsBar(dsid, barid)} series={alternate.series} type="bar"  height="150px" width="550px" />
        </React.Fragment>
      } else if(status === 'ok' && dsid === containerId) {
        return <Chart key={i} options={options(dsid)} series={primary.series} type="candlestick" height="350px" width="550px" />
      }
      return null;
    })
  )
}

const mapStateToProps = (state, props) => {
  return {
    exchange: state.exchange,
    containerId: props.containerId,
    barid: props.barid
  }
}

export default connect(mapStateToProps)(CandleGraph)
