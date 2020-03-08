import React from 'react'
import { connect } from 'react-redux'
import { optionsPie } from '../options';
import { GraphWrapper } from '../styledGraph'

const PieGraph = ({containerId, series, theme}) => {
  return (
    <GraphWrapper options={optionsPie(containerId, theme.fontColor, theme.graphColor)} series={series} type="pie" />
  )
}

const mapStateToProps = (state, props) => {
  return {
    containerId: props.containerId,
    series: props.series,
    theme: state.darkModeToggler.activeTheme
  }
}

export default connect(mapStateToProps)(PieGraph)
