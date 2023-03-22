"use strict";

import Joke from "./Joke.js";

const app = {
	items: [],
	init() {
		this.getData();
		this.render();
	},
	getData() {
		fetch("https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,racist,sexist,explicit&amount=10&type=twopart")
			.then(function (response) {
				return response.json();
			})
			.then(function (json) {
				json.jokes.forEach(function (jokeData) {
					const jokeInstance = new Joke(jokeData.setup, jokeData.delivery);
					app.items.push(jokeData);
					document.querySelector("#list").insertAdjacentHTML("beforeend", jokeInstance.htmlString());
				});
				console.log(app.items[0]);
			});
	},
	onSearch() {},
	render(message) {},
};
app.init();
