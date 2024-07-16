import styles from './Card.module.css';
import React from "react";
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import ModalVideos from '../ModalVideos';
import excluir from './Frame 1.png';
import editar from './Frame 5.png';
import fechar from './cross.png'

function Card( { capa, id, titulo, link, cor, aoDeletar } ) {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const container = {
        width: '400px',
        height: '100%',
        border: `5px solid ${cor}`,
        borderRadius: '15px',
    }

    return (
        <>
            <div>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={styles.modal}>
                    <a onClick={handleClose}>
                        <img src={fechar}/>
                    </a>
                    <h1 className={styles.titulo}>Editar Card:</h1>
                    <ModalVideos onClose={handleClose} titulo={titulo} capa={capa} link={link}/>
                </Box>
            </Modal>
            </div>

            <section style={container}>
                <a href={link}>
                    <img className={styles.video} src={capa}/>
                </a>
                <div className={styles.botoes}>
                    <button onClick={() => aoDeletar(id)}>
                        <img className={styles.excluir} src={excluir}/> 
                    </button>

                    <button onClick={handleOpen}> 
                        <img className={styles.editar} src={editar}/>    
                    </button>
                </div>
            </section>
        </>
    )
}

export default Card;