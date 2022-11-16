import React from 'react'
import styles from "./container.module.scss";

const Container = props => {
    return(
        <div className={`${styles.Container} ${props.className}`}>
            {props.children}
        </div>
    )
}

export default Container