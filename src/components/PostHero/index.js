import Container from '../ui/Container'
import styles from './style.module.scss'

export const PostHero = () =>{
    return (
        <div className={styles.posthero}>
            <Container className={styles.posthero__container}>
            <h2>The SEO Hustler <span>BLOG</span></h2>
            <p>TSH’s blog is the best place to learn Search Engine Optimization from scratch. Get exclusive SEO tips and insights by becoming a part of our email community.</p>

            <div className={styles.inputContainer}>
                <input placeholder="Your Email: "></input>
                <button>Subscribe now</button>
            </div>
            </Container>
        </div>
    )
}