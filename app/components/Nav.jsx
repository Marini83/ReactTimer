var React = require('react');
var {Link,IndexLink} = require('react-router');

var Nav =  React.createClass({
    render: function(){
            return (
                <div className="top-bar">
                    <div className="top-bar-left">
                        <ul className="menu">
                        <li className="menu-text">React Timer App </li>
                            <li>
                                <IndexLink to="/" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}} >Timer </IndexLink>
                            </li>
                            <li>
                                <Link to="/countdown" activeClassName="active-link" activeStyle={{fontWeight: 'bold'}} >CountDown</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="top-bar-right">
                    <ul className="menu">
                        <li className="menu-text">
                            <p activeClassName="active" activeStyle={{fontWeight: 'bold'}}>Created by</p>
                        </li>
                        <li>
                            <a href="https://i.ytimg.com/vi/b584-AvPh8I/maxresdefault.jpg" target="_blank" activeClassName="active" activeStyle={{fontWeight: 'bold'}} >Marin Rusi</a>
                        </li>
                    </ul>
                    </div>
                </div>
            );
    }
}); 

module.exports = Nav;