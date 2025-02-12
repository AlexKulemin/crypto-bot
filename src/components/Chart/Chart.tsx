import { useEffect, useState } from 'react';
import {
	Area,
	AreaChart,
	CartesianGrid,
	ResponsiveContainer,
	XAxis,
} from 'recharts';

import { BotType } from '../../models/bot-item-dto';
import { data } from './data';
import styles from './styles.module.css';

export default function Chart({ botId }: { botId: BotType | null }) {
	const [activeBotId, setActiveBotId] = useState<BotType>('yellow_bot');

	useEffect(() => {
		setActiveBotId(botId || 'yellow_bot');
	}, [botId]);

	return (
		<div className={styles.chart}>
			<h3 className={styles.value}>+32.6%</h3>
			<ResponsiveContainer width="100%" height="100%">
				<AreaChart
					width={500}
					height={400}
					data={data[activeBotId!]}
					margin={{
						top: 0,
						right: 0,
						left: 0,
						bottom: 0,
					}}
				>
					<CartesianGrid stroke="rgba(255, 255, 255, 0.1)" />
					<XAxis dataKey="name" fontSize={12} />
					<defs>
						<linearGradient
							id="myRadialGradient"
							x1="0"
							y1="50%"
							x2="0"
							y2="100%"
						>
							<stop offset="0%" stopColor="#0e7cd2" />
							<stop offset="100%" stopColor="transparent" />
						</linearGradient>
					</defs>
					<Area
						type="monotone"
						dataKey="uv"
						stroke="#007dde"
						fill="url(#myRadialGradient)"
					/>
				</AreaChart>
			</ResponsiveContainer>
		</div>
	);
}
