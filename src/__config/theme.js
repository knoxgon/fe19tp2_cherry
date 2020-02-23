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
  background: 'red',
  greyLight:'#e6e6e6',
  beige:'#f3f3d3'
}

const ThemeColorsDark = {
  background: 'blue',
  greyLight:'#e6e6e6',
  beige:'#f3f3d3'
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