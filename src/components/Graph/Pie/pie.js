import React from 'react'
import { connect } from 'react-redux'
import { optionsPie } from '../options';
import { GraphWrapper } from '../styledGraph'

const PieGraph = ({containerId, series}) => {
  return (
    <GraphWrapper options={optionsPie(containerId)} series={series} type="pie" />
  )
}

const mapStateToProps = (state, props) => {
  return {
    containerId: props.containerId,
    series: props.series
  }
}

export default connect(mapStateToProps)(PieGraph)
