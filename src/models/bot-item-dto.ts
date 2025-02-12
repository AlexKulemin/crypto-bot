export interface BotItemDto {
	name: BotType;
	cost: number;
	'24h': number;
	'7d': number;
	'30d': number;
	'60d': number;
	'90d': number;
	all_time: number;
}

export type BotType =
	| 'yellow_bot'
	| 'green_bot'
	| 'blue_bot'
	| 'red_bot'
	| 'white_bot'
	| 'orange_bot';
