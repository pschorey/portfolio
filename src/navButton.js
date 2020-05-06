import React from 'react';
import styled from 'styled-components';
import {Motion, spring} from 'react-motion';
import addBoard from './img/boards/additionBoard.jpg'
//Safari doesn't allow smooth scrolling, so scroll, scroll-doc, and ease-component are required....
var scroll = require('scroll')
var page = require('scroll-doc')()
var ease = require('ease-component')

const NavButtonDiv = styled.div`
	z-index:999;
  height:30px;
	line-height:30px;
	margin:5px 10px;
	/*border:solid;
	border-weight:2px;*/
	border-radius: 10px / 20px;
	background-color: rgba(255,255,255,.8);/*white;*//*rgb(128, 191, 255);*/
	/*background-image : url(${addBoard});*/
	:hover {
		/*background-color:gray;*/
	}

	:hover a {
		cursor: pointer;
	}	
`

const A = styled.a`
	padding:0px 15px;	
	text-decoration:none;
	font-size:20px;
`

export default class NavButton extends React.Component {
	constructor(props) {
  		super(props);
    	this.state = {
    		link: '#' + this.props.link.toLowerCase(),
    		title: this.props.link,
    		anchorTarget: null,
    		hover:false,
    		stiffAndDamp: {
    			stiffness:250,
    			damping:4
    		}
    	};
    	this.handleClick = this.handleClick.bind(this);
    	this.mouseEnter = this.mouseEnter.bind(this);
    	this.mouseLeave = this.mouseLeave.bind(this);
  	}

  	handleClick() {
  		scroll.top(page, this.state.anchorTarget.offsetTop, { ease: ease.inQuad })
  	}

  	mouseEnter() {
  		this.setState({
  			hover: true
  		})
  	}

  	 mouseLeave() {
  		this.setState({
  			hover: false
  		})
  	}

  	componentDidMount() {
  	    this.setState({
  	    	anchorTarget : document.getElementById(this.state.link.slice(1))
  	    })	
  	}

    render() {
    	return (
    		<Motion style={{
          r: spring(this.state.hover ? 50 : 60, this.state.stiffAndDamp), 
    			g: spring(this.state.hover ? 50 : 60, this.state.stiffAndDamp), 
    			b: spring(this.state.hover ? 50 : 60, this.state.stiffAndDamp)
        }}>
    			{({r, g, b}) => 
		  			<NavButtonDiv style={{
		  				/*borderColor: `rgb(${r},${g},${b})`*/
		  			}}
		  				onMouseEnter={this.mouseEnter}
		  				onMouseLeave={this.mouseLeave}
		  			>
							<A  onClick={this.handleClick} style={{
								color: `rgb(${r},${g},${b})`
							}}>
								{this.state.title}
							</A>
		  			</NavButtonDiv>
				}
	        </Motion>
    	);
  	}
}	

/*
          r: spring(this.state.hover ? 253 : 255, this.state.stiffAndDamp), 
          g: spring(this.state.hover ? 253 : 255, this.state.stiffAndDamp), 
          b: spring(this.state.hover ? 150 : 255, this.state.stiffAndDamp)
          */


		