'use strict';

import React from 'react';

class commentForm extends React.Component {
	render() {
		return (
			<form className="ui reply form">
				<div className="field">
					<input type="text" placeholder="姓名"/>
				</div>
				<div className="field">
					<textarea name="" placeholder="评论" id="" cols="30" rows="10"></textarea>
				</div>
				<button type="submit" className="ui blue button">添加评论</button>
			</form>
		);
	}
}

export {commentForm as default}