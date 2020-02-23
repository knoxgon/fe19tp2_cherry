import React from 'react'
import { connect } from 'react-redux'
import Chart from 'react-apexcharts';
import {options, optionsBar} from '../options';


const CandleGraph = ({containerId, barid, primary, alternate, market, currency}) => {
  return (
    <React.Fragment>
      {alternate[0].data.length > 0 ?
        <React.Fragment>
          <Chart options={options(containerId, market, currency)} series={primary} type="candlestick" height="350px" width="550px" />
          <Chart options={optionsBar(containerId, barid)} series={alternate} type="bar"  height="150px" width="550px" />
        </React.Fragment>
       : <Chart options={options(containerId, market, currency)} series={primary} type="candlestick" height="350px" width="550px" />
      }
    </React.Fragment>
  )
}

const mapStateToProps = (state, props) => {
  return {
    containerId: props.containerId,
    barid: props.barid,
    primary: props.primary,
    alternate: props.alternate,
    market: props.market,
    currency: props.currency
  }
}

export default connect(mapStateToProps)(CandleGraph)
