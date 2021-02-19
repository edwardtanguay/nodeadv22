const fs = require('fs');
const { promisify } = require('util');

const writeFile = promisify(fs.writeFile);

const writeTasks = [
	{
		fileName: './data/notes.txt',
		content: 'this file exists'
	},
	{
		fileName: './data2/notes.txt',
		content: 'this should generate an error'
	},
	{
		fileName: './data/notes2.txt',
		content: 'file will be created'
	},
];

writeTasks.forEach(writeTask => {
	writeFile(writeTask.fileName, writeTask.content)
		.then(() => console.log('file written'))
		.catch((error) => console.log(`error creating file: "${error.message}"`));
})

console.log('outside the loop');