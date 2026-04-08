import { Header } from '../components';
import styles from './ImagePage.module.css';

export const ImagePage = () => {
	return (
		<div className={styles.pageContent}>
			<Header />
			<div className={styles.content}>
				<h1 className={styles.comingSoonText}>Kommer snart...</h1>
			</div>
		</div>
	);
};
