import ModalVideos from '../../components/ModalVideos';
import styles from './NovoVideo.module.css';

function NovoVideo() {
    return (
        <>
            <div className={styles.container}>
                <div className={styles.titulo}>
                    <h1>NOVO VÍDEO</h1>
                    <p>COMPLETE O FORMULÁRIO PARA CRIAR UM NOVO CARD DE VÍDEO</p>
                </div>

                <ModalVideos/>
            </div>
        </>
    )
}

export default NovoVideo;