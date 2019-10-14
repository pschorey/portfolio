import { createGlobalStyle } from 'styled-components';

import chalk1 from './Airbrush.ttf'
import scoreboard from './ScoreBoard.woff2'

export default createGlobalStyle`
    @font-face {
        font-family: 'Chalk';
        src: local('Chalk1'), url(${chalk1}) format('truetype');
        /*font-weight:900;
        font-style:normal;*/
        /*font-weight:300;*/
        font-style:normal;
    }


    @font-face {
        font-family: 'Scoreboard';
        src: local('Scoreboard'), url(${scoreboard}) format('woff2');
        font-weight:400;
        font-style:normal;
    }
`;

/*
    @font-face {
        font-family: 'Chalk2';
        src: local('Chalk1'), url(${chalk2}) format('truetype');
        font-weight:900;
        font-style:normal;
    }
*/