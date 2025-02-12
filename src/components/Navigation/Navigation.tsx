import clsx from 'clsx';

import styles from './styles.module.css';

export default function Navigation() {
	return (
		<section className={styles.navigation}>
			<button className={styles.button}>
				<div className={styles['button-icon']}>
					<img src="/icons/dashboard.svg" alt="Dashboard icon" />
				</div>
				<div
					className={clsx(styles['button-name'], styles['button-name--active'])}
				>
					Dashboard
				</div>
			</button>
			<button className={styles.button}>
				<div className={styles['button-icon']}>
					<img src="/icons/megabot.svg" alt="Megabot icon" />
				</div>
				<div className={styles['button-name']}>Megabot</div>
			</button>
			<button className={styles.button}>
				<div className={styles['button-icon']}>
					<img src="/icons/market.svg" alt="Bot market icon" />
				</div>
				<div className={styles['button-name']}>Bot market</div>
			</button>
			<button className={styles.button}>
				<div className={styles['button-icon']}>
					<img src="/icons/coin.svg" alt="Coin prices icon" />
				</div>
				<div className={styles['button-name']}>Coin prices</div>
			</button>
			<button className={styles.button}>
				<div className={styles['button-icon']}>
					<img src="/icons/profile.svg" alt="profile icon" />
					<span className={styles.badge}>3</span>
				</div>
				<div className={styles['button-name']}>Profile</div>
			</button>
		</section>
	);
}
