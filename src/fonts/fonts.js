import { createGlobalStyle } from 'styled-components';

import chalk1 from './edosz.ttf'
import chalk2 from './chawp.regular.ttf'

export default createGlobalStyle`
    @font-face {
        font-family: 'Chalk';
        src: local('Chalk1'), url(${chalk1}) format('truetype');
        font-weight:900;
        font-style:normal;
    }

    @font-face {
        font-family: 'Chalk2';
        src: local('Chalk1'), url(${chalk2}) format('truetype');
        font-weight:900;
        font-style:normal;
    }
`;