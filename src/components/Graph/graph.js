import React, {Component} from 'react';
import Chart from 'react-apexcharts';
import dayjs from 'dayjs';
import Axios from 'axios';
import {fxcm, oanda, forexcom, fxpro, icmarkets, icmtrader, octafx, pepperstone, fxpig } from '../../__misc/fx/';
import { poloniex, bitmex, bittrex, kraken, bitfinex, huobi, hitbtc, binance, okex, gemini, zb, kucoin } from '../../__misc/cc';
import DateTimePicker from 'react-datetime-picker';


export default class Graph extends Component {
  constructor(props) {
    super(props);

    this.initState = {
      error: null,
      isLoaded: false,
      c_closePrices: [],
      h_highPrices: [],
      l_lowPrices: [],
      o_openPrices: [],
      v_volumeDataCandle: [],
      t_timestampCandles: [],
      s_status: '',
      intervalFrom: null,
      intervalTo: null,
      
      stockExchange: ['forex', 'Crypto'],
      forexSymbol: ["oanda", "fxcm", "forex.com", "octafx", "fxpig", "pepperstone", "icmtrader", "ic markets", "fxpro"],
      cyptoSymbol: ["POLONIEX", "Bitmex", "BITTREX", "KRAKEN", "BITFINEX", "COINBASE", "HUOBI", "HITBTC", "Binance", "OKEX", "GEMINI", "ZB", "KUCOIN"],
      resolution: ['1 min', '5 min', '15 min', '30 min', '1 hour', '1 day', '1 week', '1 month'],
    }

    this.state = {
      error: null,
      isLoaded: false,
      c_closePrices: [],
      h_highPrices: [],
      l_lowPrices: [],
      o_openPrices: [],
      v_volumeDataCandle: [],
      t_timestampCandles: [],
      s_status: '',

      intervalFrom: null,
      intervalTo: null,

      exchange: [{
        type: 'forex',
        exsym: ["oanda", "fxcm", "forex.com", "octafx", "fxpig", "pepperstone", "icmtrader", "ic markets", "fxpro"],
        actsym: []
      }, {
        type: 'crypto',
        exsym: ["POLONIEX", "Bitmex", "BITTREX", "KRAKEN", "BITFINEX", "COINBASE", "HUOBI", "HITBTC", "Binance", "OKEX", "GEMINI", "ZB", "KUCOIN"],
        actsym: []
      }],

      selectedExchange: null,
      selectedExSymbol: null,
      selectedActSymbol: null,
      selectedEXACTSymbol: null,

      resolution: [
        { desc: '1 min', val: '1' },
        { desc: '5 min', val: '5' },
        { desc: '15 min', val: '15' },
        { desc: '30 min', val: '30' },
        { desc: '1 hour', val: '60' },
        { desc: '1 day', val: 'D' },
        { desc: '1 week', val: 'W' },
        { desc: '1 month', val: 'M'}
      ],
      selectedResolution: '1',

      from: new Date(),
      to: new Date(),

      series: [{
        data: []
      }],
      options: {
        chart: {
          background: '#000000',
          foreColor: 'white',
          id: "csc",
          type: 'candlestick',
          height: 290,
          toolbar: {
            show: true,
            tools: {
              download: true,
              selection: true,
              zoom: true,
              zoomin: true,
              zoomout: true,
              pan: true,
              reset: true,
              customIcons: []
            },
          }
        },
        xaxis: {
          type: 'category',
          labels: {
            formatter: function(val) {
              return dayjs(val).format('MMM DD HH:mm')
            }
          }
        }
      },
      
      seriesBar: [{
        name: 'volume',
        data: []
      }],
      optionsBar: {
        chart: {
          foreColor: 'yellow',
          background: '#191818',
          type: 'bar',
          brush: {
            enabled: true,
            target: 'csc',
            autoScaleYaxis: false
          },
          selection: {
            enabled: true,
            fill: {
              color: '#caaefc',
              opacity: 0.4
            }
          },
          toolbar: {
            show: true,
            tools: {
              download: true,
              selection: true,
              zoom: true,
              zoomin: true,
              zoomout: true,
              pan: true
            },
          }
        }
      }
    };
  }

  onFormSubmit = (e) => {
    e.preventDefault();
    const { selectedExchange, selectedEXACTSymbol, selectedResolution, intervalFrom, intervalTo } = this.state
    Axios(`https://cors-anywhere.herokuapp.com/https://finnhub.io/api/v1/${selectedExchange}/candle?symbol=${selectedEXACTSymbol}&resolution=${selectedResolution}&from=${intervalFrom}&to=${intervalTo}&token=bp3cl47rh5r9d7scmmd0`)
     .then((result) => {
      const { c, h, l, o, t, s, v } = result.data;
      if(s !== 'no_data' && c != null && h != null && l != null && o != null && t != null ) {
        this.setState({
          c_closePrices: [...c],
          h_highPrices: [...h],
          l_lowPrices: [...l],
          o_openPrices: [...o],
          t_timestampCandles: [...t],
          s_status: s
        });
        if(v) {
          this.setState({v_volumeDataCandle: [...v]})
        }
      } else {
        return this.setState({
          isLoaded:true
        })
      }
    },
    (error) => {
      this.setState({
        isLoaded:true,
        error
      });
    })
    .then(() => {
      let examp = [];
      let vals = [];
      const ts = [...this.state.t_timestampCandles];
      ts.forEach((dt, i) => {
        examp.push({
            x: new Date(dt * 1000),
            y: [this.state.o_openPrices[i], this.state.h_highPrices[i], this.state.l_lowPrices[i], this.state.c_closePrices[i]]
          })
          if(this.state.v_volumeDataCandle.length > 0) {
            vals.push(this.state.v_volumeDataCandle[i])
          }
      });
      if(this.state.v_volumeDataCandle.length > 0) {
        this.setState({
          seriesBar: [{
            data: [...vals]
          }]
        })
      }
      this.setState({
        series: [{
          data: [...examp]
        }],
        isLoaded: true
      })
    })
  }
  
  onChangeDateFromInput = (e) => {
    this.setState({from : e, intervalFrom: parseInt((new Date(e).getTime()).toString().substring(0,  10))})
  }
  onChangeDateToInput = (e) => {
    this.setState({to : e, intervalTo: parseInt((new Date(e).getTime()).toString().substring(0,  10))})
  }

  onChangeExchange = (e) => {
    const exchange = [...this.state.exchange];
    exchange[0].actsym = [];
    exchange[1].actsym = [];
    this.setState({exchange})

    switch(e.target.value) {
      case 'forex':
        this.setState({
          selectedExchange: e.target.value,
          selectedExSymbol: [...exchange[0].exsym]
        })
      break;
      case 'crypto':
        this.setState({
          selectedExchange: e.target.value,
          selectedExSymbol: [...exchange[1].exsym]
        })
      break;
      default:
        this.setState({
          selectedExSymbol: []
        })
      break;
    }
  }

  onChangeInputResolution = (e) => {
    this.setState({[e.target.name]: e.target.value})
  }

  onChangeInputSymbol = (e) => {
    const exchange = [...this.state.exchange];
    exchange[0].actsym = [];
    exchange[1].actsym = [];
    this.setState({exchange})

    if(this.state.selectedExchange === 'forex') {
      switch(e.target.value) {
        case 'oanda':
          exchange[0].actsym = oanda;
          this.setState({exchange, selectedActSymbol: e.target.value})
          break;
        case 'fxcm':
          exchange[0].actsym = fxcm;
          this.setState({exchange, selectedActSymbol: e.target.value})
          break;
        case 'forex.com':
          exchange[0].actsym = forexcom;
          this.setState({exchange, selectedActSymbol: e.target.value})
          break;
        case 'fxpro':
          exchange[0].actsym = fxpro;
          this.setState({exchange, selectedActSymbol: e.target.value})
          break;
        case 'fxpig':
          exchange[0].actsym = fxpig;
          this.setState({exchange, selectedActSymbol: e.target.value})
          break;
        case 'ic markets':
          exchange[0].actsym = icmarkets;
          this.setState({exchange, selectedActSymbol: e.target.value})
          break;
        case 'icmtrader':
          exchange[0].actsym = icmtrader;
          this.setState({exchange, selectedActSymbol: e.target.value})
          break;
        case 'octafx':
          exchange[0].actsym = octafx;
          this.setState({exchange, selectedActSymbol: e.target.value})
          break;
        case 'pepperstone':
          exchange[0].actsym = pepperstone;
          this.setState({exchange, selectedActSymbol: e.target.value})
          break;
        default:
          return;
      }
    } else if(this.state.selectedExchange === 'crypto') {
      switch(e.target.value) {
        case 'POLONIEX':
          exchange[1].actsym = poloniex;
          this.setState({exchange, selectedActSymbol: e.target.value})
          break;
        case 'Bitmex':
          exchange[1].actsym = bitmex;
          this.setState({exchange, selectedActSymbol: e.target.value})
          break;
        case 'BITTREX':
          exchange[1].actsym = bittrex;
          this.setState({exchange, selectedActSymbol: e.target.value})
          break;
        case 'KRAKEN':
          exchange[1].actsym = kraken;
          this.setState({exchange, selectedActSymbol: e.target.value})
          break;
        case 'BITFINEX':
          exchange[1].actsym = bitfinex;
          this.setState({exchange, selectedActSymbol: e.target.value})
          break;
        case 'COINBASE':
          exchange[1].actsym = oanda;
          this.setState({exchange, selectedActSymbol: e.target.value})
          break;
        case 'HUOBI':
          exchange[1].actsym = huobi;
          this.setState({exchange, selectedActSymbol: e.target.value})
          break;
        case 'HITBTC':
          exchange[1].actsym = hitbtc;
          this.setState({exchange, selectedActSymbol: e.target.value})
          break;
        case 'Binance':
          exchange[1].actsym = binance;
          this.setState({exchange, selectedActSymbol: e.target.value})
          break;
        case 'OKEX':
          exchange[1].actsym = okex;
          this.setState({exchange, selectedActSymbol: e.target.value})
          break;
        case 'GEMINI':
          exchange[1].actsym = gemini;
          this.setState({exchange, selectedActSymbol: e.target.value})
          break;
        case 'ZB':
          exchange[1].actsym = zb;
          this.setState({exchange, selectedActSymbol: e.target.value})
          break;
        case 'KUCOIN':
          exchange[1].actsym = kucoin;
          this.setState({exchange, selectedActSymbol: e.target.value})
          break;
        default:
          return;
      }
    }
  }

  onChangeEXACTSym = (e) => {
    Object.values(this.state.exchange).find(a =>a.type === this.state.selectedExchange).actsym.map(b => {
      if(b.displaySymbol === e.target.value){
        return this.setState({
          selectedEXACTSymbol: b.symbol
        })
      }
      return null;
    })
  }

  render() {
    return (
      <div>
        <form onSubmit={this.onFormSubmit}>
          <DateTimePicker onChange={this.onChangeDateFromInput} value={this.state.from}/>
          <DateTimePicker onChange={this.onChangeDateToInput} value={this.state.to} minDate={this.state.from}/>

          <select name="selectedExchange" onChange={this.onChangeExchange}>
            <option defaultValue={null}>--Choose--</option>
            {this.state.exchange.map(function(stockName, i){
              return <option key={i} value={stockName.type}>{stockName.type}</option>;
            })}
          </select>

          {this.state.selectedExSymbol && 
          <select name="selectedActSymbol" onChange={this.onChangeInputSymbol}>
            {this.state.selectedExSymbol.map(function(sym, i){
              return <option key={i} value={sym}>{sym}</option>;
            })}
          </select>}

          {this.state.selectedActSymbol && 
          <select name="selectedEXACTSymbol" onChange={this.onChangeEXACTSym}>
            {Object.values(this.state.exchange).find(e => e.type === this.state.selectedExchange).actsym.map((symbol, i) => {
              return <option key={i} value={symbol.displaySymbol}>{symbol.displaySymbol}</option>;
            })}
          </select>}

          <select name="selectedResolution" onChange={this.onChangeInputResolution}>
            {this.state.resolution.map(function(resolut, i){
              return <option key={i} value={resolut.val}>{resolut.desc}</option>;
            })}
          </select>

          <button type="submit">Graph</button>

        </form>
        { this.state.selectedExchange &&
        <h2>Candle{ ' ' + this.state.selectedExchange }</h2>
        }
        {this.state.s_status === 'ok' &&
          <div>
            <div>
              <Chart options={this.state.options} series={this.state.series} type="candlestick" height={300}/>
            </div>
            {this.state.v_volumeDataCandle.length > 0 &&
              <div>
                <Chart options={this.state.optionsBar} series={this.state.seriesBar} type="bar" height={150} />
              </div>
            }
          </div>}
        </div>
    );
  }
}
