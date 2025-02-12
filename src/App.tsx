import Bots from './components/Bots/Bots';
import Header from './components/Header/Header';
import MainInfo from './components/MainInfo/MainInfo';
import Navigation from './components/Navigation/Navigation';
import data from './data/data.min.json';
import { DataDto } from './models/data-dto';
import styles from './styles.module.css';

function App() {
	const { trading_capital, trading_capital_currency, balance, on_hold, bots } =
		data as DataDto;

	return (
		<div className={styles.app}>
			<div className={styles.container}>
				<Header />
				<MainInfo
					capital={trading_capital}
					currency={trading_capital_currency}
					balance={balance}
					hold={on_hold}
				/>

				<Bots items={bots} />
				<Navigation />
			</div>
		</div>
	);
}

export default App;
