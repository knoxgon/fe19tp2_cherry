import React from 'react'
import { connect } from 'react-redux'
import { optionsPie } from '../options';
import { GraphWrapper } from '../styledGraph'

const PieGraph = ({containerId, series, theme, opt}) => {
  return (
    <GraphWrapper options={optionsPie(containerId, theme.graphColor, opt)} series={series} type="donut" />
  )
}

const mapStateToProps = (state, props) => {
  return {
    containerId: props.containerId,
    series: props.series,
    opt: props.opts,
    theme: state.darkModeToggler.activeTheme
  }
}

export default connect(mapStateToProps)(PieGraph)
