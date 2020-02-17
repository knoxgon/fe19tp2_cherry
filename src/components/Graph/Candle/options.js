import dayjs from 'dayjs';

export const options = (id) => {
  return {
    chart: { 
      background: '#000000',
      foreColor: 'white',
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
        breakpoint: 1000,
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
      foreColor: 'yellow',
      background: '#191818',
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
    },
    responsive: [
      {
        breakpoint: 1000,
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