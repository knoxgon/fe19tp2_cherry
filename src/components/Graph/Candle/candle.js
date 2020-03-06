import React from 'react'
import { connect } from 'react-redux'
import {options, optionsBar} from '../options';
import { GraphWrapper, GraphWrapperBar } from '../styledGraph'


const CandleGraph = ({containerId, barid, primary, alternate, theme}) => {
  return (
    <React.Fragment>
      {alternate[0].data.length > 0 ?
        <React.Fragment>
          <GraphWrapper height={300} options={options(containerId, theme.fontColor, theme.graphColor)} series={primary} type="candlestick" />
          <GraphWrapperBar options={optionsBar(containerId, barid, theme.fontColor, theme.graphColor)} series={alternate} type="bar" height="150px" />
        </React.Fragment>
       : <GraphWrapper options={options(containerId)} series={primary} type="candlestick" />
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
    theme: state.darkModeToggler.activeTheme
  }
}

export default connect(mapStateToProps)(CandleGraph)
