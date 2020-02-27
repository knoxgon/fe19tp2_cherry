import { SwitchWrapper } from './styled';
import { connect } from 'react-redux';
import React, { useEffect, useState } from 'react';

const Toggle = ({dark, ocl}) => {
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
    <SwitchWrapper dark={dark} onClick={ocl}>
      <img src={require('../../../assets/account/sun.svg')} alt="s"/>
      <img src={require('../../../assets/account/moon.svg')} alt="m"/>
    </SwitchWrapper>
  )
}

const mapStateToProps = (state, props) => {
  console.log(state)
  return {
    dark: state.darkModeToggler.toggle,
    ocl: props.ocl
  }
}

export default connect(mapStateToProps)(Toggle)
