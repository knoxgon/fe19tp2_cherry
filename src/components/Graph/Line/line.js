import React from 'react'
import { connect } from 'react-redux'
import { optionsLine } from '../options';
import { GraphWrapper } from '../styledGraph'

const LineGraph = ({containerId, period, series}) => {
  return (
    <GraphWrapper height={250} options={optionsLine(containerId, period)} series={series} type="line" />
  )
}

const mapStateToProps = (state, props) => {
  return {
    containerId: props.containerId,
    series: props.series,
    period: props.period
  }
}

export default connect(mapStateToProps)(LineGraph)
