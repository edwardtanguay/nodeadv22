const getStream = require('get-stream');
const fs = require('fs');

// write file with stream
const fileName = "data343.txt";
console.time('writeFile');
const file = fs.createWriteStream(fileName);
for (let i = 1; i <= 10; i++) {
	file.write(String(Math.floor(Math.random() * 999) + 1000) + '\n');
}
file.end();
console.timeEnd('writeFile');

// read file with stream
(async () => {
	console.time('readFile');
	const stream = fs.createReadStream(fileName, { encoding: "utf-8" });
	const content = await getStream(stream);
	console.log(content);
	console.timeEnd('readFile');
})();