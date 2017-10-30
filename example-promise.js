// function getTempCallback (location, callback) {
// 	callback(undefined, 28);
// 	callback('City not found');
// }

// getTempCallback('Toronto', function (err, temp){
// 	if (err){
// 		console.log('error', err);
// 	} else {
// 		console.log('success', temp)
// 	}
// });

// function getTempPromise (location) {
// 	return new Promise(function (resolve, reject) {
// 		setTimeout( function () {
// 			resolve(29);
// 			reject('City not found');
// 		}, 1000);
// 	});
// }

// getTempPromise('Toronto').then(function(temp){
// 	console.log('promise success', temp);
// }, function (err){
// 	console.log('promise error', err);
// })

//Challenge area

function addPromise(a,b){
	return new Promise(function (resolve, reject){
		if (typeof a === 'number' && typeof b === 'number'){
			resolve(a+b);
		}
		reject('A & B need to be numbers');
	});
}

addPromise(3,4).then(function(sum){
		console.log('promise success', sum);
	}, function(err) {
		console.log('promise error', err);
});

addPromise('crap',4).then(function(sum){
		console.log('This should not show up');
	}, function(err) {
		console.log('promise error should appear', err);
})





