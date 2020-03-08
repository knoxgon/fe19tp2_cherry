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
      color: "#61afe8",
      foreColor: fcolor,
      stacked: false,
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
      },
    },
    xaxis: {
      categories: catry,
      title: {
        text: 'Quarter'
      }
    },
    yaxis: {
      title: {
        text: 'Earning estimation'
      },
      labels: {
        formatter: function (y) {
          return y.toFixed(2) + "%";
        }
      }
    },
    legend: {
      position: 'top',
      horizontalAlign: 'center',
      floating: true
    },
    plotOptions: {
      bar: {
        colors: {
          ranges: [{
            from: -45,
            to: 0,
            color: '#F15B46'
          }]
        },
        columnWidth: '75%',
      }
    }
  }
}

export const optionsPie = (dsid, bcolor, opt) => {
  return {
    colors: ["#1998F9", "#19E49F", "#FDB62E"],
    chart: {
      type: 'donut',
      id: dsid,
      background: bcolor
    },
    labels: ['Buy', 'Sell', 'Hold'],
    responsive: [{
      breakpoint: 700,
      options: {
        legend: {
          position: 'bottom'
        },
        plotOptions: {
          pie: {
            donut: {
              labels: {
                total: {
                  fontWeight: 700,
                  fontSize: '1.5rem'
                }
              }
            }
          }
        }
      }
    }],
    legend: {
      position: 'bottom',
      fontSize: 16,
    },
    plotOptions: {
      pie: {
        donut: {
          labels: {
            show: true,
            name: {
              show: true,
            },
            value: {
              show: true,
            },
            total: {
              fontWeight: 700,
              fontSize: '2.5rem',
              show: true,
              color: opt.color,
              formatter: () => '',
              showAlways: true,
              label: opt.act
            }
          }
        }
      }
    }
  }
}

export const optionsArea = (dsid, bcolor, fcolor) => {
  return {
    chart: {
      type: 'area',
      id: dsid,
      background: bcolor,
      foreColor: fcolor,
      toolbar: {
        show: true,
        tools: {
          download: true,
          selection: false,
          zoom: true,
          zoomin: true,
          zoomout: false,
          pan: true
        },
      }
    },
    dataLabels: {
      enabled: false
    },
    xaxis: {
      type: 'category',
      labels: {
        formatter: function (val) {
          return dayjs(val).format('MMM DD YY')
        }
      }
    },
    fill: {
      type: 'gradient',
      gradient: {
          shadeIntensity: 0,
          inverseColors: false,
          opacityFrom: 0,
          opacityTo: 0
        },
    },
    stroke: {
      curve: 'straight',
    },
    grid: {
      padding: {
        left: 30,
        right: 30
      }
    },
    labels: {
      type: 'datetime',
      labels: {
        formatter: function (val) {
          return dayjs(val).format('MMM DD YYYY')
        }
      }
    }
  }
}
