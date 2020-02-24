import React from 'react'
import { connect } from 'react-redux'
import { optionsPie } from '../options';
import { GraphWrapper } from '../styledGraph'


const PieGraph = ({containerId, period, symcomp, series}) => {
  return (
    <GraphWrapper options={optionsPie(containerId, period, symcomp)} series={series} type="pie" />
  )
}

const mapStateToProps = (state, props) => {
  return {
    containerId: props.containerId,
    series: props.series,
    symcomp: props.compname,
    period: props.period
  }
}

export default connect(mapStateToProps)(PieGraph)
