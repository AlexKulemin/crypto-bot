import { BotItemDto } from './bot-item-dto';

export interface DataDto {
	trading_capital: number;
	trading_capital_currency: string;
	balance: number;
	on_hold: number;
	bots: BotItemDto[];
}
