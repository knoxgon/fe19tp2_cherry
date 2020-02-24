import React from 'react'
import { connect } from 'react-redux'
import {options, optionsBar} from '../options';
import { GraphWrapper, GraphWrapperBar } from '../styledGraph'


const CandleGraph = ({containerId, barid, primary, alternate, market, currency}) => {
  return (
    <React.Fragment>
      {alternate[0].data.length > 0 ?
        <React.Fragment>
          <GraphWrapper options={options(containerId, market, currency)} series={primary} type="candlestick" />
          <GraphWrapperBar options={optionsBar(containerId, barid)} series={alternate} type="bar" height="150px" />
        </React.Fragment>
       : <GraphWrapper options={options(containerId, market, currency)} series={primary} type="candlestick" />
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
