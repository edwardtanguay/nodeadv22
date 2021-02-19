const fs = require('fs');

const readStream = fs.createReadStream('main.txt');
const writeStream = fs.createWriteStream('main2.txt');

readStream.pipe(writeStream);

readStream.on('end', () => {
	console.log('finished writing');
});




