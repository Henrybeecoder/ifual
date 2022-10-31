import React from 'react'
import PrimaryContainer from '../../containers/PrimaryContainer'
import styles from "./style.module.css"
import customer from "../../assets/svg/customer.svg"
import vendor from "../../assets/svg/vendor.svg"

export default function StartPage() {
    return (
        <PrimaryContainer>
            <div className={styles.startContainer}>
                <h1>Which user type are you?</h1>
                <p className={styles.select}>Please select as adequate</p>
                <div className={styles.pointerFlex}>
                    <div className={styles.container}>
                        <img src={customer} alt="" />
                        <p>Customer</p>
                    </div>
                    <div className={styles.container}>
                        <img src={vendor} alt="" />
                        <p>Vendor</p>
                    </div>
                </div>
            </div>
        </PrimaryContainer>


    )
}