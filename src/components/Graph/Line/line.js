import React from 'react'
import { connect } from 'react-redux'
import { optionsLine } from '../options';
import { GraphWrapper } from '../styledGraph'

const LineGraph = ({containerId, period, symcomp, series}) => {
  return (
    <GraphWrapper options={optionsLine(containerId, period, symcomp)} series={series} type="line" />
  )
}

const mapStateToProps = (state, props) => {
  return {
    containerId: props.containerId,
    series: props.series,
    symcomp: props.symcomp,
    period: props.period
  }
}

export default connect(mapStateToProps)(LineGraph)
