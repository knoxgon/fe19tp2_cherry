import React from 'react'
import { connect } from 'react-redux'
import Chart from 'react-apexcharts';
import { optionsLine } from '../options';


const LineGraph = ({containerId, exchange}) => {
  return (
    exchange.map(({status, dsid, series, gtype, period, symcomp}, i) => {
      console.log(i)
      if(gtype === 'line') {
        if(status === 'ok' && dsid === containerId) {
          return <React.Fragment key={i}>
            <Chart options={optionsLine(dsid, period, symcomp)} series={series} type="line" height="350px" width="550px" />
          </React.Fragment>
        } return null;
      } return null;
    })
  )
}

const mapStateToProps = (state, props) => {
  console.log(state)
  return {
    exchange: state.exchange,
    containerId: props.containerId
  }
}

export default connect(mapStateToProps)(LineGraph)
