import React from 'react';
import styled from 'styled-components';
import {Motion, spring} from 'react-motion';

const A = styled.a`
  width:70px;
  height:70px;
  display:flex;
  align-items:center;
  justify-content:center;
`

const IMG = styled.img`
  display:inline-block;
  /*
  width:50px;
  height:50px;*/
`
export default class SocialLink extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
         increase: true
      };
      this.mouseEnter = this.mouseEnter.bind(this);
      this.mouseLeave = this.mouseLeave.bind(this);
    }

    mouseEnter () {
      this.setState({increase: !this.state.increase});
    }

    mouseLeave () {
      this.setState({increase: !this.state.increase});
    }

  render() {
      return (
        <Motion
          defaultStyle={{ scaleXY: 1, width:40, height:40}}
          style={{ scaleXY: this.state.increase ? spring(1) : spring(0),
            width: this.state.increase ? spring(40) : spring(65),
            height: this.state.increase ? spring(40) : spring(65)
          }}
        >
          {(style) => (
                    <A href={this.props.link} >
                      <IMG src={this.props.img} 
                        onMouseEnter={this.mouseEnter}
                        onMouseLeave={this.mouseLeave}
                        style={{
                          /*transform: `scaleX(${style.scaleXY})`,*/
                          /*opacity: style.scaleXY,*/
                          width: style.width,
                          height: style.height
                        }}
                      />
                  </A>
            )}
          </Motion>
      );
    }
} 