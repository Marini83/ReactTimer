var React = require('react');



var About =  (props) => {
	return (
		<div>
			<h1 className="text-center page-title">About</h1>
			<p> This is a weather application build ont React </p>
			<p> Here are some of the tools I used:
				<ul>
					 <li>
					 	<a href="https://facebook.github.io/react"> React </a> - This was the javascript framework used
					 </li>
					  <li>
					 	<a href="https://openweathermap.org"> OpenWeather Map </a> - Open weather map to search for weather data by city name.
					 </li>
				</ul>
			</p>
			</div>
		)
};

module.exports = About;