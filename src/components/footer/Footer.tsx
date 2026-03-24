import {
	FaFacebook,
	FaGoogle,
	FaInstagram,
	FaMapMarkerAlt,
} from 'react-icons/fa';
import styles from './Footer.module.css';

export const Footer = () => {
	return (
		<div className={styles.footer}>
			<div className={styles.buttonDiv}>
				<a className={styles.contactButton} href="tel:+46735232851">
					Ring
				</a>
				<a
					className={styles.contactButton}
					href="mailto: vietdhrestaurang@gmail.com"
				>
					Mejla
				</a>
			</div>
			<div className={styles.linkDiv}>
				<a
					className={styles.socialLinks}
					href="https://www.facebook.com/p/Viet-DH-restaurang-61579382289671/"
					target="_blank"
					rel="noopener"
				>
					<FaFacebook />
				</a>
				<a
					className={styles.socialLinks}
					href="https://www.instagram.com/vietdhrestaurang/"
					target="_blank"
					rel="noopener"
				>
					<FaInstagram />
				</a>
				<a
					className={styles.socialLinks}
					href="https://www.google.com/search?sa=X&sca_esv=e661ce2bce94833d&authuser=1&sxsrf=ANbL-n4OWmcHkvPy5APhdreQUPDPPWr0yw:1772064851072&q=Viet+DH+restaurang+Reviews&rflfq=1&num=20&stick=H4sIAAAAAAAAAONgkxI2NDYyNjAzMDA0sTA0NTe1tLA02MDI-IpRKiwztUTBxUOhKLW4JLG0KDEvXSEotSwztbx4ESseSQAqKc6BVAAAAA&rldimm=1323060014815759890&tbm=lcl&hl=en-SE&authuser=1&ved=2ahUKEwjlid7_7_WSAxXBPhAIHevnFxwQ9fQKegQIWBAG&biw=2133&bih=1050&dpr=0.9#lkt=LocalPoiReviews&lrd=0x4651a348397a09ad:0x125c7412d79dce12,3,,,,"
					target="_blank"
					rel="noopener"
				>
					<FaGoogle />
				</a>
				<a
					className={styles.socialLinks}
					href="https://www.google.com/maps/place/Viet+DH+restaurang/@56.6605451,12.8762047,17z/data=!4m6!3m5!1s0x4651a348397a09ad:0x125c7412d79dce12!8m2!3d56.6605451!4d12.8787796!16s%2Fg%2F11xss3p6gp!5m2!1e4!1e1?entry=tts&g_ep=EgoyMDI2MDIxOC4wIPu8ASoASAFQAw%3D%3D&skid=fd01df41-453d-4815-9d24-07b252f80be2"
					target="_blank"
					rel="noopener"
				>
					<FaMapMarkerAlt />
				</a>
			</div>
			<div>Viet DH 2026 ©</div>
		</div>
	);
};
