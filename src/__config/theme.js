export const CheckDarkMode = ()  => {
  return JSON.parse(localStorage.getItem('DarkMode')) === true
}

export const ToggleDarkMode = () => {
 if (CheckDarkMode()){ 
   localStorage.setItem('DarkMode', JSON.stringify(false))
 } else {
   localStorage.setItem('DarkMode', JSON.stringify(true));
  }  
}

const Theme = {
  deviceSize: {
    iph5SE: {w: '320px', h: '568px', offsetw: '359px'},
    galaxy: {w: '360px', h: '640px', offsetw: '374px'},
    iph678X: {w: '375px', h: '667px', offsetw: '399px'},
    kindle: {w: '400px', h: '667px', offsetw: '413px'},
    iph678P: {w: '414px', h: '736px', offsetw: '479px'},
    nokia: {w: '480px', h: '854px', offsetw: '599px'},
    nexus: {w: '600px', h: '960px', offsetw: '766px'},
    ipad: {w: '768px', h: '1024px', offsetw: '900px'}
  },
  screenSize: {
    xsmall: '600px',
    small: '768px',
    medium: '992px',
    large: '1200px'
  }
}

export default Theme;
