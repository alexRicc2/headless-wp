import Container from '../ui/Container'
import styles from './style.module.scss'

export const Subscribe = () =>{
    return (
        <div className={styles.posthero}>
            <Container className={styles.posthero__container}>
            <h2>Grow your organic traffic sustainably</h2>
            <p>Hey, I’m Zac! If you’re looking to improve your website’s online presence you’ve come to the right place.</p>

            <div className={styles.inputContainer}>
                <input placeholder="Your Email: "></input>
                <button>Subscribe now</button>
            </div>
            </Container>
        </div>
    )
}