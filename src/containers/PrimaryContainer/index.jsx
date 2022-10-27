import React from 'react'
import styles from "./style.module.css"

export default function PrimaryContainer (props) {
    return (
        <div className={styles.container}>
          <div className={styles.containerPart}>
         {props.children}
        </div>
        
        </div>
    )
}