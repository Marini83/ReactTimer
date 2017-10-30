var React = require('react');

var Form = React.createClass({
	onFormSubmit: function(e) {
		e.preventDefault();

		var location = this.refs.location.value;

		if (location.length > 0 ){
			this.refs.location.value = '';
			this.props.onSearch(location);
		}
	},
	render: function () {
		return (
			<div>
				<h3>Form Component</h3>
				<form onSubmit={this.onFormSubmit}>
					<input type="text" placeholder="Enter city" ref="location"/>
					<input type="submit" value="Submit" />
				</form>
			</div>
		)
	}
})

module.exports = Form;