import React from 'react'
import { connect } from 'react-redux'
import { optionsLine } from '../options';
import { GraphWrapper } from '../styledGraph'

const LineGraph = ({containerId, period, series, theme}) => { 
  return (
    <GraphWrapper height={250} options={optionsLine(containerId, period, theme.fontColor, theme.graphColor)} series={series} type="line" />
  )
}

const mapStateToProps = (state, props) => {
  return {
    containerId: props.containerId,
    series: props.series,
    period: props.period,
    theme: state.darkModeToggler.activeTheme
  }
}

export default connect(mapStateToProps)(LineGraph)
