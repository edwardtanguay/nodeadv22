const randomNumber = (start, end) => {
	return Math.floor(Math.random() * end) + start;
};

const numbers = [];
for (let x = 0; x < 100; x++) {
	numbers.push(randomNumber(0, 9));
}
console.log(numbers.join(', '));