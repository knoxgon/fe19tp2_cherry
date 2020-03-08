import dayjs from 'dayjs';

export const options = (id, fcolor, bcolor) => {
  return {
    chart: {
      id: id,
      type: 'candlestick',
      foreColor: fcolor,
      background: bcolor,
      toolbar: {
        show: true,
        tools: {
          download: true,
          selection: true,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
          reset: true
        },
      }
    },
    xaxis: {
      type: 'category',
      labels: {
        formatter: function (val) {
          return dayjs(val).format('MMM DD HH:mm')
        }
      }
    },
    responsive: [
      {
        breakpoint: 768,
        options: {
          plotOptions: {
            bar: {
              horizontal: false
            }
          },
          legend: {
            position: "bottom"
          }
        }
      }
    ]
  }
}

export const optionsBar = (trgId, id, fcolor, bcolor) => {
  return {
    chart: {
      type: 'bar',
      id: id,
      foreColor: fcolor,
      background: bcolor,
      brush: {
        enabled: true,
        target: trgId,
        autoScaleYaxis: false
      },
      selection: {
        enabled: true,
        fill: {
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
    },
    responsive: [
      {
        breakpoint: 768,
        options: {
          plotOptions: {
            bar: {
              horizontal: false
            }
          },
          legend: {
            position: "bottom"
          }
        }
      }
    ]
  }
}

export const optionsLine = (dsid, catry, fcolor, bcolor) => {
  return {
    chart: {
      id: dsid,
      type: 'line',
      foreColor: fcolor,
      background: bcolor,
      toolbar: {
        show: true,
        tools: {
          download: true,
          selection: true,
          zoom: true,
          zoomin: true,
          zoomout: true,
          pan: true,
          reset: true
        },
      }
    },
    stroke: {
      curve: 'smooth'
    },
    xaxis: {
      categories: catry,
      title: {
        text: 'Timeline'
      }
    },
    yaxis: {
      title: {
        text: 'Earning estimation'
      }
    },
    legend: {
      position: 'top',
      horizontalAlign: 'center',
      floating: true,
      offsetY: -25,
      offsetX: -5
    },
    responsive: [
      {
        breakpoint: 768,
        options: {
          legend: {
            position: "bottom"
          }
        }
      }
    ]
  }
}

export const optionsPie = (dsid, fcolor, bcolor) => {
  return {
    chart: {
      type: 'pie',
      id: dsid,
      foreColor: fcolor,
      background: bcolor,
    },
    labels: ['Buy', 'Hold', 'Sell', 'Strong buy', 'Strong sell'],
    responsive: [{
      breakpoint: 768,
      options: {
        legend: {
          position: 'bottom'
        }
      }
    }],
    dataLabels: {
      formatter: function (val, opts) {
          return opts.w.config.series[opts.seriesIndex]
      },
    },
    legend: {
      position: 'bottom',
      horizontalAlign: 'center'
    }
  }
}