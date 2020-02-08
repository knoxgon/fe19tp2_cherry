import React from 'react';
import { StyledFooter, P } from './styledFooter';


class Footer extends React.Component {
  render() {
    return (
      <StyledFooter>
        <P>Stockholm - Sweden 131 42</P> <P>Long(59.31), Lat(18.20)</P>
      </StyledFooter>
    );
  }
}

export default Footer;
