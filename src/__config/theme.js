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
    nexus: {w: '600px', h: '960px', offsetw: '625px'},
    ipad: {w: '768px', h: '1024px', offsetw: '900px'}
  },
  screenSize: {
    xsmall: '600px',
    small: '1070px',
    medium: '992px',
    large: '1200px',
    offMedMax: '991px',
    offMed: '950px',
    offMedMax2: '949px',
    offMed2: '900px',
    offMedMax3: '899px',
    offMed3: '850px',
    offMedMax4: '849px',
    offMed4: '800px',
    offMedMax5: '799px',
    offMed5: '750px',
    offMedMax6: '749px',
    offMed6: '700px',
    offMedMax7: '699px',
    offMed7: '650px',
    offMedMax8: '649px',
    offMed8: '600px',
    cronicOffMax: '599px',
    cronicOff: '575px',
    cronicOffMax2: '574px',
    cronicOff2: '550px',
    cronicOffMax3: '549px',
    cronicOff3: '525px',
    cronicOffMax4: '524px',
    cronicOff4: '500px',
    cronicOffMax5: '499px',
    cronicOff5: '475px',
    cronicOffMax6: '474px',
    cronicOff6: '450px',
    cronicOffMax7: '449px',
    cronicOff7: '425px',
    cronicOffMax8: '424px',
    cronicOff8: '400px',
    cronicOffMax9: '399px',
    cronicOff9: '375px',
    cronicOffMax10: '374px',
    cronicOff10: '350px',
    cronicOffMax11: '349px',
    cronicOff11: '325px',
    cronicOffMax12: '324px',
    cronicOff12: '300px',
    cronicOffMax13: '299px',
    cronicOff13: '275px',
    cronicOffMax14: '274px',
    cronicOff14: '250px',
  }
}

export default Theme;
