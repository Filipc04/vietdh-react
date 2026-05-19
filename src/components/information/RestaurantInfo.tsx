import { InfoObject } from './info';
import styles from './RestaurantInfo.module.css';

export function RestaurantInfo() {
	return (
		<div className={styles.infoContainer}>
			<a className={styles.orderButton} href="tel:+46735232851">
				Ring och beställ
			</a>
			<div className={styles.findUsText}>Hitta till oss</div>
			<iframe
				title="Karta över Viet DH Restaurang"
				src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2192.797127135498!2d12.876199313182566!3d56.660545073322965!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4651a348397a09ad%3A0x125c7412d79dce12!2sViet%20DH%20restaurang!5e0!3m2!1sen!2sse!4v1779191341331!5m2!1sen!2sse"
				className={styles.findUsMap}
				allowFullScreen
				loading="lazy"
				referrerPolicy="no-referrer-when-downgrade"
			/>

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
