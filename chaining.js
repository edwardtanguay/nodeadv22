const loginUser = (id) => {
	return new Promise((resolve, reject) => {
		const randomNumber = Math.floor(Math.random() * 2) + 1;
		if (randomNumber === 2) {
			reject({
				message: `bad login for id ${id}`
			});
		} else {
			setTimeout(() => {
				resolve({
					state: 'successful',
					id
				});
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

loginUser(43).then((response) => {
	console.log(`user ${response.id} is logged in`);
	getUserData(response.id).then((data) => {
		console.log(`got user data for "${data.lastName}, ${data.firstName}" (#${data.id})`);
	});
}).catch((e) => {
	console.log('error: ' + e.message);
});