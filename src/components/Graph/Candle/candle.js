import React from 'react'
import { connect } from 'react-redux'
import Chart from 'react-apexcharts';
import {options, optionsBar} from './options';

const CandleGraph = ({idset, barid, excRed}) => {
  return (
    <React.Fragment>
      {excRed.map((grafData, i) => {
        if(grafData.status === 'ok' && grafData.dsid === idset && grafData.alternate.series[0].data.length > 0) {
          return <React.Fragment key={i}>
            <Chart options={options(grafData.dsid)} series={grafData.primary.series} type="candlestick" height="350px" width="550px" />
            <Chart options={optionsBar(grafData.dsid, barid)} series={grafData.alternate.series} type="bar"  height="150px" width="550px" />
          </React.Fragment>;
        } else if(grafData.status === 'ok' && grafData.dsid === idset) {
          return <Chart key={i} options={options(grafData.dsid)} series={grafData.primary.series} type="candlestick" height="350px" width="550px" />
        }
        return null;
      })}
    </React.Fragment>
  )
}

const mapStateToProps = (state, props) => {
  return {
    excRed: state.excRed,
    idset: props.idset,
    barid: props.barid
  }
}

export default connect(mapStateToProps)(CandleGraph)
