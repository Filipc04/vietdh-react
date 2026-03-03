import styles from './App.module.css';
import { Header, LunchMenu } from './components';

function App() {
	return (
		<>
			<Header />
			<section className={styles.lunchAndInfo}>
				<LunchMenu />
				<div>Panel</div>
			</section>
		</>
	);
}

export default App;
