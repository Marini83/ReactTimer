var React = require('react');
var Clock = require('Clock');

var CountDown =  (props) => {
    return (
        <div>
        <h1 className="text-center page-title">CountDown</h1>
            <Clock totalSeconds = {129} />
        </div>
    )
};

module.exports = CountDown;