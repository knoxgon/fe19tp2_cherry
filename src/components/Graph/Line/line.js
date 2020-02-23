import React from 'react'
import { connect } from 'react-redux'
import Chart from 'react-apexcharts';
import { optionsLine } from '../options';


const LineGraph = ({containerId, period, symcomp, series}) => {
  return (
    <Chart options={optionsLine(containerId, period, symcomp)} series={series} type="line" height="350px" width="550px" />
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
