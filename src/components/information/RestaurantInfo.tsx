import findUsImg from '../../assets/find_us.png';
import { InfoObject } from './info';
import styles from './RestaurantInfo.module.css';

export function RestaurantInfo() {
	return (
		<div className={styles.infoContainer}>
			<a className={styles.orderButton} href="tel:+46735232851">
				Ring och beställ
			</a>
			<div className={styles.findUsText}>Hitta till oss</div>
			<a
				className={styles.findUsLink}
				href="https://www.google.com/maps/place/Viet+DH+restaurang/@56.6604271,12.8763978,16z/data=!4m6!3m5!1s0x4651a348397a09ad:0x125c7412d79dce12!8m2!3d56.6605451!4d12.8787796!16s%2Fg%2F11xss3p6gp!5m2!1e4!1e1?entry=ttu&g_ep=EgoyMDI2MDMxOC4xIKXMDSoASAFQAw%3D%3D"
				target="_blank"
				rel="noopener"
			>
				<img src={findUsImg} alt="" className={styles.findUsImage} />
			</a>

			<div className={styles.openingHours}>
				Öppettider:{' '}
				<span style={{ color: 'white' }} className="text-span">
					{InfoObject.openingHours}
				</span>
			</div>
			<div className={styles.address}>
				Address:{' '}
				<span style={{ color: 'white' }} className="text-span">
					{InfoObject.address}
				</span>
			</div>
			<div className={styles.phoneNumber}>
				Telefonnummer:{' '}
				<span style={{ color: 'white' }} className="text-span">
					<a className={styles.phoneNumberTag} href="tel:+46735232851">
						{InfoObject.phoneNumber}
					</a>
				</span>
			</div>
		</div>
	);
}
