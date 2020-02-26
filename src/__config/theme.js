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

const colorScheme = () => {
  //return CheckDarkMode() ? ThemeColorsDark : ThemeColorsLight
}




const Theme = {
  colors: colorScheme(),
  screenSize: {
    xsmall: '600px',
    small: '768px',
    medium: '992px',
    large: '1200px'
  }, 
  color: {
  white: 'white',
  black: 'black',
  grey: 'grey',
  greyLight: '#e6e6e6',
  darkGrey: '#3a3939',
  beige: '#f3f3d3',
  green:'5a9667',
  darkGreen: '137223'

}

}


export const ThemeColorsLight = {
  name: 'ColorsLight',
  colors: {
    backgroundColor: Theme.color.greyLight,
    fontColor: Theme.color.black,
    navbarIconColor: Theme.color.black,
    navbarColor: Theme.color.grey,
    borderUnderlineColor: Theme.color.grey,
    backgroundColorModal: Theme.color.white,
    modalBtnColor: Theme.color.green
  },
};


export const ThemeColorsDark = {
  name: 'ColorsDark',
    colors: {
    backgroundColor: Theme.color.darkGrey,
    fontColor: Theme.color.white,
    navbarIconColor: Theme.color.white,
    navbarColor: Theme.color.beige,
    borderUnderlineColor: Theme.color.white,
    backgroundColorModal: Theme.color.darkgrey,
    modalBtnColor: Theme.color.darkgreen
  },
};

export default Theme;