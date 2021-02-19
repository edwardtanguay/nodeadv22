const fs = require('fs');
const { Transform } = require('stream');

const readStream = fs.createReadStream('main.txt');
const writeStream = fs.createWriteStream('main2.txt');

const capitalizeFilter = new Transform({
	// writableObjectMode: true,
	transform(data, encoding, callback) {
		this.push(data.toString().toUpperCase());
		callback();
	},
	final(callback) {
		callback();
	}
});

readStream.pipe(capitalizeFilter).pipe(writeStream);

readStream.on('end', () => {
	console.log('finished writing');
});




