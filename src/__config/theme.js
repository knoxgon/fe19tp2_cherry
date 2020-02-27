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
  greyMiddle: '#666464',
  darkGrey: '#606060',
  beige: '#f3f3d3',
  green:'#50c95c',
  darkGreen: '#146895e',
  klarna: '#ffb3c6',
  WasaKredit: '#f3f3f3',
  swedBank: '#f9c35e'
  // WasaKreditFontColor: '#005aa0'
  //swedbank orange: '#ee7023'


}

}


export const ThemeColorsDark = {
  name: 'ColorsDark',
  colors: {
    //Swedbank Svart
    //Klarna Grå
    //Wasa Kredit Whatever
    backgroundColor: Theme.color.darkGrey,
    fontColor: Theme.color.white,
    navbarIconColor: Theme.color.white,
    navbarColor: Theme.color.beige,
    backgroundColorModal: Theme.color.greyMiddle,
    modalBtnColor: Theme.color.darkgreen
  },
};


export const ThemeColorsLight = {
  name: 'ColorsLight',
    colors: {
      backgroundColor: Theme.color.greyLight,
      fontColor: Theme.color.black,
      navbarIconColor: Theme.color.black,
      navbarColor: Theme.color.grey,
      backgroundColorModal: Theme.color.white,
      modalBtnColor: Theme.color.green
    
  },
};

export default Theme;