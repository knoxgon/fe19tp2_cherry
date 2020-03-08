import React from 'react'
import { connect } from 'react-redux'
import { optionsArea } from '../options';
import { GraphWrapper } from '../styledGraph'

const AreaGraph = ({containerId, series, theme}) => { 
  return (
    <GraphWrapper height={250} options={optionsArea(containerId, theme.graphColor, theme.fontColor)} series={series} type="area" />
  )
}

const mapStateToProps = (state, props) => {
  return {
    containerId: props.containerId,
    series: props.series,
    theme: state.darkModeToggler.activeTheme
  }
}

export default connect(mapStateToProps)(AreaGraph)
