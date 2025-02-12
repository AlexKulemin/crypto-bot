import clsx from 'clsx';

import { RangeModelId } from '../../models/range-model';
import styles from './styles.module.css';

export default function RangeFilter({ activeRange, onChange }: RangeProps) {
	const rangeItems: Record<RangeModelId, string> = {
		'24h': '24h',
		'7d': '7 days',
		'30d': '30 days',
		all_time: 'All time',
	};

	const handleClick = (rangeId: RangeModelId) => {
		onChange(rangeId);
	};
	return (
		<div className={styles.range}>
			<div className={styles.title}>Time Range:</div>
			<div className={styles.controls}>
				{(Object.keys(rangeItems) as RangeModelId[]).map((key) => (
					<button
						key={key}
						className={clsx(
							styles.button,
							key === activeRange && styles['button-active']
						)}
						onClick={() => handleClick(key)}
					>
						{rangeItems[key]}
					</button>
				))}
			</div>
		</div>
	);
}

interface RangeProps {
	activeRange: RangeModelId;
	onChange: (range: RangeModelId) => void;
}
