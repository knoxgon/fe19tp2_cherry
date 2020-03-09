import styled from 'styled-components';
import Theme from '../../__config/theme';
import Chart from 'react-apexcharts';

export const GraphWrapper = styled(Chart)`
  margin: 0 auto;
  transition: all 0.75s linear;
  @media screen and (max-width: ${Theme.screenSize.small}) {
    margin: initial;
  }
`;

export const GraphWrapperBar = styled(Chart)`
  margin: 0 auto;
  transition: all 0.75s linear;
`;
