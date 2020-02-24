import styled from 'styled-components';
import Theme from '../../__config/theme';
import Chart from 'react-apexcharts';

export const GraphWrapper = styled(Chart)`
  width: 50rem;
  margin: 0 auto;

  @media screen and (max-width: ${Theme.screenSize.xsmall}) {
    width: 40rem;
  }
`;

export const GraphWrapperBar = styled(Chart)`
  width: 50rem;
  height: 25rem;
  margin: 0 auto;
  
  @media screen and (max-width: ${Theme.screenSize.xsmall}) {
    width: 40rem;
    height: 15rem;
  }
`;
