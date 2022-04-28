let sampleData = {
	apps: [
		{ id: 1, title: "Lorem", published: true, userId: 123 },
		{ id: 2, title: "Ipsum", published: false, userId: 123 },
		{ id: 3, title: "Dolor", published: true, userId: 456 },
		{ id: 4, title: "Sit", published: true, userId: 789 },
		{ id: 5, title: "Amet", published: false, userId: 123 },
		{ id: 6, title: "Et", published: true, userId: 123 },
	],
	organizations: [
		{ id: 1, name: "Google", suspended: true, userId: 123 },
		{ id: 2, name: "Apple", suspended: false, userId: 456 },
		{ id: 3, name: "Fliplet", suspended: false, userId: 123 },
	],
};

class User {
	constructor(id, data, newArray) {
		this.id = id;
		this.data = data;
		this.newArray = newArray;
	}
	select(arr) {
		this.newArray = sampleData[arr];
		return this;
	}
	attributes(...rest) {
		this.data = rest;
		return this;
	}
	where(arg) {
		const key = Object.keys(arg);
		const value = arg[key];
		this.newArray.filter((data) => data[key] === value);
		return this;
	}
	order(key) {
		this.newArray.sort((a, b) => a[key].localeCompare(b[key]));
		return this;
	}
	findAll() {
		let data = new Set(this.data);
		this.newArray.filter((item) => {
			!Object.keys(item).some((key) => data.has(key));
		});
		return this;
	}
}

let user = new User();
user.id = 123;
const check = user.select(["apps"]).where({ published: true }).order(["title"]);
const checker = sampleData["apps"].filter((item) => item["published"] === true);

console.log(check);
