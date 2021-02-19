const randomNumber = (start, end) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve(Math.floor(Math.random() * end) + start);
		}, 1000);
	});
};

const main = async function () {
	for (let x = 0; x < 4; x++) {
		console.log(await randomNumber(0, 9));
	}
}

const main2 = async function () {
	for (let x = 0; x < 4; x++) {
		await randomNumber(0, 9).then(rn => console.log(rn));
	}
}

main();
main2();