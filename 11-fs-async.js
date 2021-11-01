const { readFile, writeFile } = require('fs');

console.log('start');

readFile('./content/first.txt', 'utf-8', (err, res) => {
	if (err) {
		console.log(err);
		return;
	}

	const response1 = res;

	readFile('./content/second.txt', (err, res) => {
		if (err) {
			console.log(err);
			return;
		}

		const response2 = res;

		writeFile('./content/result.txt', `${response1} : ${response2}`, 'utf-8', (err, res) => {
			if (err) {
				console.log(err);
				return;
			}
	
			console.log('done with this task');
		});
	});
});

console.log('starting the next task');