import Card from '../Card';
import styles from './Categorias.module.css';
import { useState } from 'react';
import db from '../../json/db.json'

function Categoria( {tipo, cor } ) {

   const [lista, setLista] = useState(db.videos)

    const deletandoVideo = (id) => {
        const listaVideos = lista.filter(video => video.id !== id)
        setLista(listaVideos)
    }

    const estiloTitulo = {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: cor,
        margin: '25px',
        borderRadius: '15px',
        color: '#fff',
        textAlign: 'center',
        width: '400px',
        height: '70px',
        fontSize: '32px',
    }

    return (
        <>
            <div className={styles.categoria}>
                <div style={estiloTitulo}>
                    {tipo}
                </div>
                <section className={styles.container}>
                    {lista.map((video) => {
                        return <Card {...video} 
                            key={video.id} 
                            capa={video.capa}
                            id={video.id}
                            titulo={video.titulo}
                            link={video.link}
                            cor={cor}
                            aoDeletar={deletandoVideo}
                            />
                    })}
                </section>
            </div>
        </>
    )
}

export default Categoria; 