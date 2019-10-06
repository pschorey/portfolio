/*
import React from 'react';
import styled from 'styled-components';
import {Motion, spring} from 'react-motion';


const MyDiv = styled.div`
	height:300px;
  background-color:green;
`


export default class SocialContacts extends React.Component {
	constructor(props) {
  		super(props);
    	this.state = {

    	};
  	}

  render() {
    	return (
			<MyDiv>
        <div>github, etc....</div>
        <Motion defaultStyle={{x: 0}} style={{x: spring(10)}}>
          {value => <div>{value.x}</div>}
        </Motion>
			</MyDiv>
    	);
  	}
}	
*/

import React from 'react';
import {Motion, spring} from 'react-motion';
import styled from 'styled-components';

const Demo0 = styled.div`
    width:100%;
    height:vh;
    background-color: rgb(240, 240, 232);
    position: absolute;
    top:0;
`

const DemoBlock = styled.div`
    z-index:2;
    position: absolute;
    top: -400px;
    width: 100%;
    height: 400px;
    border-radius: 0px 0px 20px 20px;
    background-color: rgb(130, 181, 198);
`

export default class SocialContacts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {open: false};
  };

  handleMouseDown = () => {
    this.setState({open: !this.state.open});
  };

  handleTouchStart = (e) => {
    e.preventDefault();
    this.handleMouseDown();
  };

  render() {
    return (
      <div>
        <button
          onMouseDown={this.handleMouseDown}
          onTouchStart={this.handleTouchStart}>
          Toggle
        </button>

        <Motion style={{x: spring(this.state.open ? 400 : 0)}}>
          {({x}) =>
            // children is a callback which should accept the current value of
            // `style`
            <Demo0 className="demo0">
              <DemoBlock className="demo0-block" style={{
                WebkitTransform: `translate3d(0, ${x}px, 0)`,
                transform: `translate3d(0, ${x}px, 0)`,
              }} />
            </Demo0>
          }
        </Motion>
      </div>
    );
  };
}