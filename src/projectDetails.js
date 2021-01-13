import React from 'react';
import styled from 'styled-components';
import {Motion, spring} from 'react-motion';

const ProjectDetailsContainer = styled.div`
  width:100%;
  height:100%;
  position:absolute;
	
`

const PullDown = styled.div`
    z-index:2;
    position: absolute;
    height: 100%;
    width: 100%;
    top:0px;
    left:0px;
    background-color: #ebddb2;
    background-image: radial-gradient(circle, #ebddb2, #ded0a6);

    @media(max-width: 319px) {
      width:90vw;
      height:90vh;
      font-size:.8em;
      margin:0px;
      padding:0px;
    }
`

const Title = styled.div`
   text-align:center;
   font-size:1.3em;
`

const Link = styled.div`
  display:flex;
  height: 35px;
  line-height: 35px;
  background-color: rgb(27, 99, 63);
  border-radius:5px;
  width:80%;
  text-align:center;
  align-content:center;
  justify-content:center;
  margin:auto;
  color:white;

  :hover {
    background-color: rgba(27, 99, 63, .8);
  }

  a {
    color: inherit;
    height:100%;
    width:100%;
    padding:0px;
    margin:0px;
  }
`

const Summary = styled.div`
  padding:10px;
`

export default class ProjectDetails extends React.Component {
	constructor(props) {
  		super(props);
    	this.state = {
        clicked: true,
        display: 'none',
        sliderWidth: window.innerWidth,
        sliderHeight: window.innerHeight,
        stiffAndDamp: {
          stiffness:1,/*50,*/
          damping:4
        }
    	};
      this.handleMouseDown = this.handleMouseDown.bind(this)
      this.mouseIn = this.mouseIn.bind(this)
      this.mouseOut = this.mouseOut.bind(this)
  	}

  handleMouseDown () {
    let display = this.state.display === 'none' ? '' : 'none';
    this.setState({
      clicked: !this.state.clicked,
      display: display
    })
  }

  mouseIn () {
    this.setState({
      clicked: false,
      display: ''
    })
  }

  mouseOut () {
      this.setState({
        clicked: true,
        display: 'none'
      })
  }

  render() {
    	return (
  			<ProjectDetailsContainer 
          className='project-title' 
          onClick={this.handleMouseDown}
          onMouseEnter={() => this.mouseIn()}
          onMouseLeave={() => this.mouseOut()} >
          <Motion style={{x: spring(this.state.clicked ? 350 : 700, this.state.stiffAndDamp),
            opac: spring(this.state.clicked ? 0 : 1)
          }}>
  				{({x, opac}) =>
            <div>
              <PullDown style={{
                        opacity: `${opac}`
                      }}>
                      <Title>{this.props.title}</Title>
                      <Summary>{this.props.summary}</Summary>
                {this.props.link !== '' && <Link><a href={this.props.link} style={{display: `${this.state.display}`}}>View Project</a></Link>}
                <ul>     
                { this.props.tech.map((skill, index) => 
                     <li key={index} >{skill}</li>
                  )
                }
                </ul>  
              </PullDown> 
            </div>       
          }
          </Motion>
  			</ProjectDetailsContainer>
    	);
  	}
}	
		