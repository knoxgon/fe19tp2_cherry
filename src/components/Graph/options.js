import dayjs from 'dayjs';

export const options = (id) => {
  return {
    chart: { 
      id: id,
      type: 'candlestick',
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

export const optionsBar = (trgId, id) => {
  return {
    chart: {
      type: 'bar',
      id: id,
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

export const optionsLine = (dsid, catry) => {
  return {
    chart: {
      id: dsid,
      type: 'line',
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

export const optionsPie = (dsid) => {
  return {
    chart: {
      type: 'pie',
      id: dsid
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