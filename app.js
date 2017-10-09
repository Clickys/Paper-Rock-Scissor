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
		weaponClass: 'fa fa-hand-paper-o paperIcon'
	}, {
		name: 'Scissor',
		isPlayerPick: false,
		isComputerPick: false,
		weaponClass: 'fa fa-hand-scissors-o scissorIcon'
	}],

	playerPick: function(position) {
		debugger;
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
		let computerPick = Math.floor((Math.random() * 3));
		this.gameOptions[computerPick].isComputerPick = true;
		this.displayPick();
		view.displayComputer();
		return this.gameOptions[computerPick].name;
	},

	resetOptions: function() {
		this.gameOptions.forEach(function(obj) {
			obj.isPlayerPick = false;
			obj.isComputerPick = false;

		})
		view.clearDOM();
	},

	comparePlayerVsComputerPick: function(pos) {
		this.resetOptions();
		let playerPick = this.playerPick(pos);
		let computerPick = this.computerPick();

		if (playerPick === computerPick) {
			view.isWinner();
		} else if (playerPick === 'Rock' && computerPick === 'Paper') {
			view.isWinner('Computer');
		} else if (playerPick === 'Rock' && computerPick === 'Scissor') {
			view.isWinner('Player');
		} else if (playerPick === 'Paper' && computerPick === 'Rock') {
			view.isWinner('Player');
		} else if (playerPick === 'Paper' && computerPick === 'Scissor') {
			view.isWinner('Computer');
		} else if (playerPick === 'Scissor' && computerPick === 'Paper') {
			view.isWinner('Player');
		} else if (playerPick === 'Scissor' && computerPick === 'Rock') {
			view.isWinner('Computer');
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
	displayComputer: function() {
		let computerResutls = document.getElementById('computerResults');
		gameTools.gameOptions.forEach(function(obj) {
			if (obj.isComputerPick === true) {
				let createI = document.createElement('i');
				createI.className += obj.weaponClass;
				computerResutls.appendChild(createI);
			}
		})
	},
	isWinner: function(winner) {
		let winnerDisplay = document.getElementById('winner');
		if (winner === undefined) {
			winnerDisplay.innerHTML = `Its tie !!`;
		} else {
			winnerDisplay.innerHTML = `${winner} Won The Round !!`;
		}

	},

	clearDOM: function() {
		let playerResults = document.getElementById('playerResults');
		let computerResutls = document.getElementById('computerResults');
		let winnerDisplay = document.getElementById('winner');

		playerResults.innerHTML = '';
		computerResutls.innerHTML = '';
		winnerDisplay.innerHTML = '';
	}
}
