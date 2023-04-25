// Types
export type Spot = {
	x: 0 | 1 | 2 ;
	y: 0 | 1 | 2 ;
};

export type Player = "X" | "O";

export type Cell = Player | " ";

export type Grid = [[Cell, Cell, Cell], [Cell, Cell, Cell], [Cell, Cell, Cell]];

export type Game = {
	grid: Grid;
	nextPlayer: Player;
};
