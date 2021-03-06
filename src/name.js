import React from 'react';
import styled from 'styled-components';
import Nav from './nav';
import pauly from './img/pauly.gif';
import guitar from './img/guitar.jpg'
import board from './img/boards/additionBoard.jpg';

const NameDiv = styled.div`
	display:flex;
	flex-direction:column;
	text-align:center;
	background-color:gray;
	position:relative;
	/*background-image : url(${board});*/
	
	background-size: cover;

`

const DevName = styled.h1`
	line-height:90px;
	font-size:90px;
	font-family: Chalk;
	font-weight:300;
	margin-left: auto;
	margin-right:auto;
	margin-top:70px;
	padding:20px;
	
	@media(min-width:810px) {
		/*padding-top:120px;*/
	}

	@media(max-width: 700px) {
		font-size: 70px;
	}
	@media(max-width: 520px) {
		font-size: 60px;
	}
	@media(max-width: 400px) {
		font-size:55px;
	}
	@media(max-width: 300px) {
		font-size: 50px;
	}
	@media(max-width: 220px) {
		font-size: 35px;
	}
	@media(max-width: 779px) {
		/*height:316px;*/
	}
`

/*
const Button = styled.button`
	align-self:center;
	margin-top:10px;
	height:80px;
	width:160px;
	border-radius: 25px 10px;
	font-size:30px;
	background-color:pink;
	:hover {
    	cursor: pointer;
  	}
`
*/

const Img = styled.img`
	margin:15px 0;
	width:100%;
	max-width:490px;
	height:auto;
	align-self:center;
	-webkit-filter: grayscale(100%); /* Safari 6.0 - 9.0 */
  	filter: grayscale(100%);
`

const PaulyImg = styled(Img)`
	max-height:314px;
`

const GuitarImg = styled(Img)`
	position:absolute;
	bottom:20px;
`

const seriously = 'Seriously, who gives a kid the initials PMS?  Middle school was fun, maybe that\'s why I teach in one now.'
const guitarTip = 'I hav a minor in music for playing classical guitar, but nowadays I just like to rock out with my daughter.'

export default class Name extends React.Component {
	constructor(props) {
  		super(props);
    	this.state = {
      		text: 'Paul Matthew Schorey',
      		height: '100vh',
      		disabled: false,
      		/*buttonVis: false,*/
      		style: {color: 'white'}, /*pin over the top*/
      		showMe: true
    	};
    	this.updateDimensions = this.updateDimensions.bind(this);
    	this.animateName = this.animateName.bind(this);
    	/*this.notPaullyShore = this.notPaullyShore.bind(this);*/
  	}

  	updateDimensions () {
  		//not needed without images...
  		let height = window.innerHeight;  //-60 for nav height if removing absolute pos.
  		height = height < 600 ? 601 : height; //549
  		this.setState({height: height});
		
  	}

    componentDidMount() {
    	window.addEventListener('resize', this.updateDimensions);
	    this.updateDimensions();
        /*
        setTimeout( () => {
        	this.animateName();
      		//window.addEventListener('load', this.animateName)
    	}, 4000);
		*/

    }

	componentWillUnmount() {
		window.removeEventListener('resize', this.updateDimensions);
	}

	animateName () {
		this.setState({disabled: true})
		/*this.setState({buttonVis: false})*/
	    let startChain = () => {
		    let stringName = 'Paul Matthew Schorey';
		    let tempString = '';
		    let tempFirst = 'P'
		    let tempMid = 'M'
		    let tempLast = 'S'
		    
		    this.setState({style: {color: 'white'}})
		    this.setState({text: 'PMS'})
		    
		    for (let i = 1; i < 16; i++) {
		      setTimeout(() => {
		          if (i < 4) {
		            tempFirst += stringName[i]
		          }
		          if (i > 3 && i < 10) {
		            tempMid += stringName[i + 2]
		            if (stringName[i+2] === 'w') {
		            }
		          }
		          if (i > 9 && i < 16) {
		            tempLast += stringName[i + 4]
		          }
		          tempString = tempFirst + ' ' + tempMid + ' ' + tempLast
		          this.setState({text: tempString})
		          if (i === 15) {
		             setTimeout(this.notPaullyShore, 1000)
		          }
		        }, i * 250);
		    }    
	  	}
	      
		if ( this.state.text.length > 3 ) {
		    this.setState({text: 'PMS'})
		    this.setState({style: {color: 'pink'}})
		    setTimeout(startChain, 2000)
		} else {
		    startChain();
		}
	}


	//My wife said that aside from pointing out my unfortunate initials, alluding to
	//my unfortunate middle school years corresponding with the hight of Pauly Shore's carrer
	//nobody would get the humor in it.....well I know someone who would:
	// https://www.youtube.com/watch?v=_BaMx_n2_hM
	/*
	notPaullyShore () {
	    this.setState({style: {color: 'pink'}})
	    this.setState({text: 'Not to be confused with...'})
	  	let paullyShore = () => {
	  		this.setState({showMe: false})
	  		this.setState({text: 'Pauly Shore'})
	  	}
	  	setTimeout(paullyShore, 1500)
	  	let simply = () => {
	  		this.setState({showMe: true})
	    	this.setState({style: {color: 'black'}})
	    	this.setState({text: 'Simply...'})
	  	}
	  	setTimeout(simply, 3000)
	  	let paulSchorey = () => {
	  		this.setState({text: 'Paul Schorey'})
	    	this.setState({disabled: false})
	    	setTimeout( () => {
				this.setState({buttonVis: true})
	    	}, 2000);
	  	}
	  	setTimeout(paulSchorey, 4000)
	}
	*/
  render() {
    	return (
			<NameDiv id='welcome-section' style={{height:this.state.height}}>
				<div id='home'></div>
				<Nav />
				<DevName title={seriously} style={this.state.style}>{this.state.text} </DevName>
				{/*
					//...Uncomment to add the refresh button again
					{this.state.buttonVis && <Button disabled={this.state.disabled} onClick={this.animateName}>Again?</Button>}
				*/
				}
				{this.state.showMe ? <GuitarImg title={guitarTip} alt='Playing guitar with my daughter' src={guitar} /> : <PaulyImg src={pauly} />}
			</NameDiv>
    	);
  	}
}