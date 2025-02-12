import { BotType } from './bot-item-dto';

export type BotClassModel = Record<BotType, string>;

export const botClassModel: BotClassModel = {
	yellow_bot: 'yellow',
	green_bot: 'green',
	blue_bot: 'blue',
	red_bot: 'red',
	white_bot: 'white',
	orange_bot: 'orange',
};
