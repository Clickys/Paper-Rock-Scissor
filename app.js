const gameTools = {

	gameOptions: [{
		name: 'Rock',
		isPlayerPick: false,
		isComputerPick: false,
		weaponClass: 'fa fa-hand-rock-o rockIcon'
	}, {
		name: 'Paper',
		isPlayerPick: false,
		isComputerPick: false,
		weaponClass: 'fa fa-hand-paper-o'
	}, {
		name: 'Scissor',
		isPlayerPick: false,
		isComputerPick: false,
		weaponClass: 'fa fa-hand-scissors-o'
	}],

	playerPick: function(position) {
		debugger;
		this.resetOptions();
		this.gameOptions[position].isPlayerPick = true;
		this.displayPick();
		view.displayePlayer();
		return this.gameOptions[position].name;
	},

	displayPick: function() {
		this.gameOptions.forEach(function(obj) {
			if (obj.isPlayerPick === true) {
				console.log(`Player pick is: ${obj.name}`);
			}
			if (obj.isComputerPick === true) {
				console.log(`Computer pick is: ${obj.name}`);
			}
		})
	},

	computerPick: function() {
		this.resetOptions();
		let computerPick = Math.floor((Math.random() * 3));
		this.gameOptions[computerPick].isComputerPick = true;
		this.displayPick();
		view.displayePlayer();
		return this.gameOptions[computerPick].name;
	},

	resetOptions: function() {
		this.gameOptions.forEach(function(obj) {
			obj.isPlayerPick = false;
			obj.isComputerPick = false;
			view.clearDOM();
		})
	},

	comparePlayerVsComputerPick: function(pos) {
		let playerPick = this.playerPick(pos);
		let computerPick = this.computerPick();

		if (playerPick === computerPick) {
			console.log('Tie');
		} else if (playerPick === 'Rock' && computerPick === 'Paper') {
			console.log('Player wins');
		} else if (playerPick === 'Rock' && computerPick === 'Scissor') {
			console.log('Player Wins');
		} else if (playerPick === 'Paper' && computerPick === 'Rock') {
			console.log('Player Wins');
		} else if (playerPick === 'Paper' && computerPick === 'Scissor') {
			console.log('Computer Wins');
		} else if (playerPick === 'Scissor' && computerPick === 'Paper') {
			console.log('Player Win');
		} else if (playerPick === 'Scissor' && computerPick === 'Rock') {
			console.log('Computer win');
		}
	}


};
const handlers = {
	playerPickWeapon: function(pos) {
		gameTools.comparePlayerVsComputerPick(pos);
	}
}

const view = {
	displayePlayer: function() {
		let playerResults = document.getElementById('playerResults');
		let computerResutls = document.getElementById('computerResults');

		gameTools.gameOptions.forEach(function(obj) {
			if (obj.isPlayerPick === true) {
				let createI = document.createElement('i');
				createI.className += obj.weaponClass;
				playerResults.appendChild(createI);

			}
			if (obj.isComputerPick === true) {
				let createI = document.createElement('i');
				createI.className += obj.weaponClass;
				computerResutls.appendChild(createI);

			}
		})
	},
	clearDOM: function() {
		let playerResults = document.getElementById('playerResults');
		let computerResutls = document.getElementById('computerResults');

		playerResults.innerHTML = '';
		computerResutls.innerHTML = '';
	}
}
