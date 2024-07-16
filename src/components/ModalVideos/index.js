import { useState } from 'react';
import styles from './ModalVideos.module.css';

export default function ModalVideos({titulo, capa, link}) {

    const [videoTitulo, setVideoTitulo] = useState(titulo);

    const handleChangeTitulo = (e) => {
        setVideoTitulo(e.target.value);
    }

    const [videoCapa, setVideoCapa] = useState(capa);

    const handleChangeCapa = (e) => {
        setVideoCapa(e.target.value);
    }

    const [videoLink, setVideoLink] = useState(link);

    const handleChangeLink = (e) => {
        setVideoLink(e.target.value);
    }

    function limpar() {
        setVideoTitulo('');
        setVideoCapa('');
        setVideoLink('');
    }

    return(
        <div className={styles.modal}>
            <label className={styles.campos}>
                Título
                <input value={videoTitulo} onChange={handleChangeTitulo}/>
                Categoria
                <select>
                    <option>Frontend</option>
                    <option>Backtend</option>
                    <option>Inovação e Gestão</option>
                </select>
                Imagem
                <input value={videoCapa} onChange={handleChangeCapa}/>
                Vídeo
                <input value={videoLink} onChange={handleChangeLink}/>
                Descrição
                <textarea></textarea>
            </label>
            <div className={styles.botoes}>
                <input type="submit" value="Salvar"/>
                <button onClick={limpar}>Limpar</button>
            </div>
        </div>
    )
}
