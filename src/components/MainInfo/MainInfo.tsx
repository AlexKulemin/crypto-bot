import styles from './styles.module.css';

export default function MainInfo({
	capital,
	currency,
	balance,
	hold,
}: MainInfoProps) {
	return (
		<section className={styles.info}>
			<div className={styles.capital}>
				<h3 className={styles['capital-title']}>trading capital</h3>
				<div className={styles['capital-value']}>
					{capital} {currency}
				</div>
			</div>
			<div className={styles.box}>
				<div className={styles['box-item']}>
					<div className={styles['box-item-title']}>balance: </div>
					<div className={styles['box-item-value']}>{balance}</div>
					<div className={styles['box-item-icon']}>
						<img src="/icons/h.svg" alt="icon" />
					</div>
				</div>

				<div className={styles['box-item']}>
					<div className={styles['box-item-title']}>On HoLD:</div>
					<div className={styles['box-item-value']}>{hold}</div>
					<div className={styles['box-item-icon']}>
						<img src="/icons/h.svg" alt="icon" />
					</div>
				</div>
			</div>
		</section>
	);
}

interface MainInfoProps {
	capital: number;
	currency: string;
	balance: number;
	hold: number;
}
