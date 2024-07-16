import styles from './Header.module.css';
import { Link } from "react-router-dom";
import logo from '../../assets/LogoMain.png';
import HeaderLink from '../HeaderLink';

function Header() {
    return (
        <header className={styles.header}>
            <Link to="./">
                <img src={logo} alt='Logo do aluraflix'/>
            </Link>
            <nav>
                <HeaderLink url="./">
                    HOME
                </HeaderLink>

                <HeaderLink url="./NovoVideo">
                    NOVO VÍDEO
                </HeaderLink>
            </nav>
        </header>
    )
}

export default Header;