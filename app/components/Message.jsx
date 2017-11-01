var React = require('react');




var Message = ({temp, location} ) => {
	// var {temp,location} = props;
	return (
			<div >
				<h3 className="text-center">
				Temperature in {location} is {Math.floor(temp)} </h3>
			</div>
			
		);

}

module.exports = Message;