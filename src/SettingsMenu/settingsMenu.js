import React, { Component } from 'react'
// import {faWhmcs} from '@fortawesome/free-brands-svg-icons';
import * as SolidIcon from '@fortawesome/free-brands-svg-icons'


import {
    SettingsIcon,
    Menu,
    StyledButtons
} from './styledSettingsMenu';

class SettingsMenu extends Component {
    constructor() {
        super();
        
        this.state = {
          showMenu: false,
        //   isDarkMode: false,
        };
        
        this.showMenu = this.showMenu.bind(this);
        this.closeMenu = this.closeMenu.bind(this);
      }
      
      showMenu(event) {
        event.preventDefault();
        
        this.setState({ showMenu: true }, () => {
          document.addEventListener('click', this.closeMenu);
        });
      }
      
      closeMenu() {
        this.setState({ showMenu: false }, () => {
          document.removeEventListener('click', this.closeMenu);
        });
      }
    
      render() {
        return (
          <div>
             <SettingsIcon onClick={this.showMenu} icon={SolidIcon.faWhmcs}/>

            {
              this.state.showMenu
                ? (
                    <Menu>
                    <StyledButtons> Dark Mode </StyledButtons>
                    <StyledButtons> Sign Out </StyledButtons>
                    </Menu>
                )
                : (
                  null
                )
            }
          </div>
        );
      }
    }

    export default SettingsMenu;