import React from 'react';
import styled from 'styled-components';
import {Motion, spring} from 'react-motion';

const A = styled.a`
  width:70px;
  height:70px;
  display:flex;
  align-items:center;
  justify-content:center;
  background-color: rgba(255,255,255,.5);
  border-radius:100%;
  /*margin:5px;*/
  margin-top:100;
`

const IMG = styled.img`
  display:inline-block;
`

export default class SocialLink extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
         increase: true,
         stiffAndDamp: {
          /*stiffness:120,
          damping:18*/
          stiffness:120,
          damping:17//28//14
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
          style={{ scaleXY: spring(this.state.increase ? 1 : 0,{...this.state.stiffAndDamp, precision: 1}/*, this.state.stiffAndDamp*/),
            width: spring(this.state.increase ? 40 : 52,{...this.state.stiffAndDamp, precision: 1}/*, this.state.stiffAndDamp*/),
            height: spring(this.state.increase ? 40 : 52,{...this.state.stiffAndDamp, precision: 1}/*, this.state.stiffAndDamp*/)
          }}
        >
          {(style) => (
            <div style={{marginTop:10}}>
                      <A href={this.props.link} target="_blank" id={this.props.link === 'https://github.com/pschorey' ? 'profile-link' : ''}>
                        <IMG src={this.props.img} 
                          onMouseEnter={this.mouseEnter}
                          onMouseLeave={this.mouseLeave}
                          style={{
                            width: style.width,
                            height: style.height
                          }}
                        />
                    </A>
                    </div>
            )}
          </Motion>
      );
    }
} 