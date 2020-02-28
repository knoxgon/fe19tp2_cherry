import { SwitchWrapper } from './styled';
import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';

const Toggle = ({dark, ocl, theme}) => {
  const [mode, setMode] = useState(JSON.parse(localStorage.getItem('DarkMode')));
  
  useEffect(() => {
    if(JSON.parse(localStorage.getItem('DarkMode')) === true){
      setMode(true)
    }
    else {
      setMode(false)
    }
  }, [mode, setMode])

  return (
    <SwitchWrapper bgcol={theme.swbgColor} brcol={theme.swbrColor} dark={dark} onClick={ocl}>
      <img src={require('../../../assets/account/sun.svg')} alt="s"/>
      <img src={require('../../../assets/account/moon.svg')} alt="m"/>
    </SwitchWrapper>
  )
}

const mapStateToProps = (state, props) => {
  return {
    dark: state.darkModeToggler.toggle,
    ocl: props.ocl,
    theme: state.darkModeToggler.activeTheme
  }
}

export default connect(mapStateToProps)(Toggle)
