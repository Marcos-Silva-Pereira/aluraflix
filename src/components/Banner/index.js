import styles from './Banner.module.css';
import banner from '../../assets/player.png';

function Banner() {
    return (
        <section className={styles.capa} style={{backgroundImage: `url(${banner})`}}>
            <div className={styles.info}>
                <h1>Front-End</h1>
                <h2>SEO com React</h2>
                <p>
                Eu to aqui pra nesse vídeo dizer que a gente vai aprender a começar uma app inspirada 
                no desenho Pokémon com Nextjs e React, ver algumas dicas sobre performance e de quebra 
                conhecer uma plataforma sensacional pra fazer deploy que é a Vercel. Tudo em 22 minutos 
                nesse vídeo feito com todo o carinho do mundo construindo uma "Pokedex"! 
                </p>
            </div>

            <div className={styles.imagem}>
                <a href='https://www.youtube.com/embed/c8mVlakBESE?si=UQtMIyygkPDcW2VI'>
                    <img src={banner}/>
                </a>
            </div>
        </section>
    )
}

export default Banner;