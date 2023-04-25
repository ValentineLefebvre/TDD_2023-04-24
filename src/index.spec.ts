// @ts-ignore see https://github.com/jest-community/jest-extended#setup
import * as matchers from "jest-extended";
import { Spot, Player, Cell, Grid, Game } from ".";

expect.extend(matchers);

// let emptyGrid : Grid = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];



/////////////// Functions

/** 
 * Returns the next player, given the last one.
*/
export const switchPlayers = function (currentPlayer:Player):Player {
	let nextPlayer:Player = "X";
	if(currentPlayer ==="X")
	{
		nextPlayer = "O";
	}
	return nextPlayer;
}

/**
 * Takes as an argument the current state of the game board and the clicked position.
 * Returns true if that position of the board is open / empty (" ") and false if a player has already played there.
*/
export const spotIsOpen = function (board:Grid, position:Spot):boolean {
	if (board[position.x][position.y] === " ")
	{
		return true
	}
	else
	{
		return false
	}
}

const computeNextGame = function (Game, position:Spot):Game
{
	return Game
}



/////////////// Tests

// tests de spotIsOpen()
test("case libre 1", () => {
	// GIVEN
	const myGrid : Grid = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]];
	const a: Spot = {
		x: 0,
		y: 0,
	};
	  
	// WHEN
	const actual = spotIsOpen(myGrid, a);

	// THEN
	const expected: boolean = true;
	expect(actual).toEqual(expected);
});
test("case libre 2", () => {
	// GIVEN
	const myGrid : Grid = [["X", " ", " "], [" ", " ", " "], [" ", " ", " "]];
	const a: Spot = {
		x: 0,
		y: 0,
	};
	  
	// WHEN
	const actual = spotIsOpen(myGrid, a);

	// THEN
	const expected: boolean = false;
	expect(actual).toEqual(expected);
});
test("case libre 3", () => {
	// GIVEN
	const myGrid : Grid = [["O", " ", " "], [" ", " ", " "], [" ", " ", " "]];
	const a: Spot = {
		x: 0,
		y: 0,
	};
	  
	// WHEN
	const actual = spotIsOpen(myGrid, a);

	// THEN
	const expected: boolean = false;
	expect(actual).toEqual(expected);
});
test("case libre 4", () => {
	// GIVEN
	const myGrid : Grid = [["O", " ", " "], [" ", " ", " "], [" ", " ", " "]];
	const a: Spot = {
		x: 1,
		y: 0,
	};
	  
	// WHEN
	const actual = spotIsOpen(myGrid, a);

	// THEN
	const expected: boolean = true;
	expect(actual).toEqual(expected);
});

// tests de switchPlayers()
test("Changement de joueur O -> X", () => {
	// GIVEN
	const previousPlayer : Player = "O"
	  
	// WHEN
	const actual = switchPlayers(previousPlayer);

	// THEN
	const expected: Player = "X";
	expect(actual).toEqual(expected);
});

test("Changement de joueur X -> O", () => {
	// GIVEN
	const previousPlayer : Player = "X";
	  
	// WHEN
	const actual = switchPlayers(previousPlayer);
	
	// THEN
	const expected: Player = "O";
	expect(actual).toEqual(expected);
});

// tests de computeNextGame()
test("Tour du joueur O", () => {
	// GIVEN
	const previousPlayer : Player = "O"
	const currentGrid : Grid = [["X", " ", " "], [" ", " ", " "], [" ", " ", " "]];
	const currentGame : Game = {
		grid: currentGrid,
		nextPlayer: previousPlayer,
	};
	const spotPlayed : Spot = {
		x: 1,
		y: 0,
	};
	  
	// WHEN
	const actual = computeNextGame(currentGame, spotPlayed);

	// THEN
	const newGrid : Grid = [["X", " ", " "], ["O", " ", " "], [" ", " ", " "]];
	const nextPlayer : Player = "X"
	const expected : Game = {
		grid: newGrid,
		nextPlayer: nextPlayer,
	};
	expect(actual).toEqual(expected);
});