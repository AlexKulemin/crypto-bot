import clsx from 'clsx';
import { useState } from 'react';

import { botClassModel } from '../../models/bot-class-model';
import { BotType } from '../../models/bot-item-dto';
import { BotIcon, MegaBotIcon } from '../BotIcons/index';
import styles from './styles.module.css';

export default function BotItem({
	name,
	value,
	megaBotId,
	activeBotId,
	onChangeActiveBot,
}: BotItemProps) {
	const [isAnimation, setIsAnimation] = useState(false);

	const handleBotClick = (name: BotType) => {
		onChangeActiveBot(name);

		if (name === megaBotId) {
			setIsAnimation(true);
			setTimeout(() => {
				setIsAnimation(false);
			}, 1000);
		}
	};

	return (
		<div
			className={clsx(styles.bot, {
				[styles['bot-active']]: name === activeBotId,
			})}
			role="button"
			onClick={() => handleBotClick(name)}
		>
			<div className={clsx(styles.icon, styles[`icon-${botClassModel[name]}`])}>
				{megaBotId === name ? <MegaBotIcon /> : <BotIcon />}
			</div>
			<div className={styles.name}>
				{megaBotId === name ? 'megabot' : 'attack'}
			</div>
			<div
				className={clsx(
					styles.value,
					value >= 0 ? styles['value-positive'] : styles['value-negative']
				)}
			>{`${value}%`}</div>

			{megaBotId === name && (
				<span
					className={clsx(styles.arrows, {
						[styles['arrows-animation']]: isAnimation,
					})}
				>
					<img src="/images/arrows.png" alt="Arrows" />
				</span>
			)}
		</div>
	);
}

interface BotItemProps {
	name: BotType;
	value: number;
	megaBotId: BotType;
	activeBotId: BotType | null;
	onChangeActiveBot: (name: BotType) => void;
}
