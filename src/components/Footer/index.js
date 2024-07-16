import styles from './Footer.module.css';
import logo from '../../assets/LogoMain.png';

function Footer() {
    return (
        <footer className={styles.footer}>
            <img src={logo} alt='Logo do aluraflix'/>
        </footer>
    )
}

export default Footer;