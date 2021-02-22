const loginUser = () => {
	return new Promise((resolve, reject) => {
		const randomNumber = Math.floor(Math.random() * 2) + 1;
		if (randomNumber === 2) {
			reject({
				message: 'bad login'
			});
		} else {
			setTimeout(() => {
				resolve();
			}, 1000);
		}
	});
};

const getUserData = (id) => {
	return new Promise((resolve, reject) => {
		setTimeout(() => {
			resolve({
				id,
				firstName: 'Alex',
				lastName: 'Handrotter'
			});
		}, 1000);
	});
};

loginUser().then(() => {
	console.log('user is logged in');
}).then(() => {
	getUserData(42).then((data) => {
		console.log(`got user data for "${data.lastName}, ${data.firstName}" (#${data.id})`);
	});
}).catch((e) => {
	console.log('error: ' + e.message);
});

