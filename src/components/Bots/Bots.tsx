import { useEffect, useState } from 'react';

import { BotItemDto, BotType } from '../../models/bot-item-dto';
import { RangeModelId } from '../../models/range-model';
import BotItem from '../BotItem/BotItem';
import Chart from '../Chart/Chart';
import RangeFilter from '../RangeFilter/RangeFilter';
import styles from './styles.module.css';

export default function Bots({ items }: { items: BotItemDto[] }) {
	const megaBotId = [...items].sort((a, b) => b.cost - a.cost)[0].name;
	const [activeRange, setActiveRange] = useState<RangeModelId | null>(null);
	const [activeBot, setActiveBot] = useState<BotType | null>(null);
	const [bots, setBots] = useState<BotItemDto[]>([]);

	useEffect(() => {
		const rangeBotId =
			(localStorage.getItem('rangeBotId') as RangeModelId) ?? '24h';
		setActiveRange(rangeBotId);
		const sortedBots = [...items].sort((a, b) => a[rangeBotId] - b[rangeBotId]);
		setBots(sortedBots);
	}, []);

	const handleChange = (rangeId: RangeModelId) => {
		localStorage.setItem('rangeBotId', rangeId);
		const sortedBots = [...items].sort((a, b) => a[rangeId] - b[rangeId]);
		setBots(sortedBots);
		setActiveRange(rangeId);
	};

	return (
		<>
			<Chart botId={activeBot} />
			<div className={styles.bots}>
				{bots.map((bot) => (
					<BotItem
						key={bot.name}
						value={bot[activeRange!]}
						megaBotId={megaBotId}
						activeBotId={activeBot}
						name={bot.name}
						onChangeActiveBot={setActiveBot}
					/>
				))}
			</div>
			<RangeFilter activeRange={activeRange!} onChange={handleChange} />
		</>
	);
}
