import React from 'react'
import { connect } from 'react-redux'
import Chart from 'react-apexcharts';
import { optionsPie } from '../options';


const PieGraph = ({containerId, period, symcomp, series}) => {
  return (
    <Chart options={optionsPie(containerId, period, symcomp)} series={series} type="pie" height="350px" width="550px" />
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
