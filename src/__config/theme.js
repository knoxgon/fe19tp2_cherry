export const CheckDarkMode = ()  => {
  return JSON.parse(localStorage.getItem('Darkmode')) === true
}


export const ToggleDarkMode = () => {
  if (CheckDarkMode()){ 
    localStorage.setItem('Darkmode', JSON.stringify(false))
  } else {
    localStorage.setItem('Darkmode', JSON.stringify(true));
  }  
}

const colorScheme = () => {
  return CheckDarkMode() ? ThemeColorsDark : ThemeColorsLight
}

const ThemeColorsLight = {
  background: 'white',
  fontColor: 'black',
  greyLight:'#e6e6e6',
  beige:'#f3f3d3',
  borderUnderlineColor:'#dddddd'
}

const ThemeColorsDark = {
  background:'#262626',
  fontColor: 'white',
  greyLight:'#e6e6e6',
  beige:'#f3f3d3',
  borderUnderlineColor:'white'
}

const Theme = {
  colors: colorScheme(),
  screenSize: {
    xsmall: '600px',
    small: '768px',
    medium: '992px',
    large: '1200px'
  }
}


export default Theme;