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
  screenSize: {
    xsmall: '600px',
    small: '768px',
    medium: '992px',
    large: '1200px'
  }
}

export default Theme;
