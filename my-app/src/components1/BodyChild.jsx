import React from 'react';

export default class BodyChild extends React.Component{
	render(){
		return(
			<div>
				子页面输入：
				<input type="text" onChange={this.props.childchange}/>
				{this.props.userid} {this.props.id}
				
			</div>
		)
	}
}