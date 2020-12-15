const fs = require("fs");

const streamLectura = fs.createReadStream("data343.txt", { encoding: 'utf8' });


streamLectura.on("open", () => {
	console.log("abriendo archivo")
}).on("data", () => {
	console.log("----")
}).on('close', () => {
	console.log("archivo cerrado")
}).on('error', () => {
	console.log("error en el archivo")
})
