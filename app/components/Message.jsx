var React = require('react');

// var Message = React.createClass({
// 	render: function () {
// 		var {temp,location} = this.props;
// 		return (
// 			<div >
// 				<h3>Message Component</h3>
// 				Temperature in {location} is {temp}
// 			</div>
			
// 		)
// 	}
// })


var Message = ({temp, location} ) => {
	// var {temp,location} = props;
	return (
			<div >
				<h3>Message Component</h3>
				Temperature in {location} is {Math.floor(temp)}
			</div>
			
		);

}

module.exports = Message;