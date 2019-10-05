import React from 'react';
import styled from 'styled-components';


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
			</MyDiv>
    	);
  	}
}	