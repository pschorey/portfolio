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
         increase: true,
         stiffAndDamp: {
          stiffness:120,
          damping:14
        }
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
          style={{ scaleXY: spring(this.state.increase ? 1 : 0, this.state.stiffAndDamp),
            width: spring(this.state.increase ? 40 : 65, this.state.stiffAndDamp),
            height: spring(this.state.increase ? 40 : 65, this.state.stiffAndDamp)
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