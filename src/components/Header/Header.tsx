import styles from './styles.module.css';

export default function Header() {
	return (
		<header className={styles.header}>
			<button className={styles.button}>
				<img
					className={styles['button-icon']}
					src="/icons/menu.svg"
					alt="Hamburger menu button"
				/>
			</button>
			<h1 className={styles.title}>Dashboard</h1>
			<button className={styles.button}>
				<img
					className={styles['button-icon']}
					src="/icons/refresh.svg"
					alt="Refresh menu button"
				/>
			</button>
		</header>
	);
}
