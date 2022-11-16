import React from 'react'
import grafico from '../../images/Graph1.png'
import Container from '../ui/Container'
import styles from './style.module.scss'

export const Hero = () =>{
    return(
        <>
        <section className={styles.hero}>
            <Container className={styles.hero__container}>
                <div className={styles.textoContainer}>
                    <h2><span>cutting-edge</span> and <span>Data driven</span> SEO</h2> 
                    <p>It’s time to ditch the cookie-cutter approach to SEO.</p>
                </div>
                <div className={styles.imageContainer}>
                <img src={grafico} alt=""/>
                </div>
            </Container>
        </section>
        <div className={styles.lorem}></div>
        </>
    )
}
