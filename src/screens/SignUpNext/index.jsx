import React, { useState, useRef, useCallback } from 'react'
//Containers
import SecondaryContainer from '../../containers/SecondaryContainer'
import Button from '../../Components/Button'
//Styles
import styles from "./style.module.css"
//Icons
import backIcon from "../../assets/svg/backIcon.svg"
import { useDropzone } from "react-dropzone";
//utile
import { states } from "../../utils/state";

export default function SignUpNext() {
    const [companylogo, setCompanyLogo] = useState("")
    const [showCompanyLogo, setShowCompanyLogo] = useState(false)
    // form date
    const [representative1, setRepresentative1] = useState("")
    const [representative2, setRepresentative2] = useState("")
    const [dateOfRegistration, setDateOfRegistration] = useState("")
    const [cacRegistrationNumber, setCacRegistrationNumber] = useState("")
    const [location, setLocation] = useState("")
    const [accountNumber, setAccountNumber] = useState("")
    const [bvn, setBvn] = useState("")

    const handleStateChange = (event) => {
        setLocation(event.target.value);
    };
    // The function for the on drop image
    const onDrop = useCallback((acceptedFiles) => {
        acceptedFiles.forEach((file) => {
            const reader = new FileReader()

            reader.onabort = () => console.log('file reading was aborted')
            reader.onerror = () => console.log('file reading has failed')
            reader.onload = () => {
                const binaryStr = reader.result
                if (binaryStr?.length > 0) {
                    setShowCompanyLogo(true)
                    setCompanyLogo(binaryStr)
                }
            }
            reader.readAsDataURL(file)
        })
    }, [])
    const { acceptedFiles, getRootProps, getInputProps } = useDropzone({ onDrop });

    return (
        <SecondaryContainer>
            <div className={styles.container}>
                <div className={styles.backButton}>
                    <img src={backIcon} alt="" />
                    <p>Back</p>
                </div>
                <div className={styles.title}>
                    KYC
                </div>
                <div className={styles.formContainer}>
                    <div className={styles.firstContainer}>
                        <div {...getRootProps({ className: "dropzone" })}>
                            <input {...getInputProps()} />
                            {!showCompanyLogo ? (
                                <div className={styles.uploadContainer}>
                                    <p>Upload</p>
                                    <p>image</p>
                                </div>
                            ) : (
                                <div className={styles.imageX}>
                                    <img src={companylogo} alt="" style={{ width: "100%" }} />
                                </div>
                            )}
                            <p className={styles.company}>Add Company Logo</p>
                        </div>
                    </div>
                    <div className={styles.secondContainer}>
                        <div className={styles.form}>
                            <div className={styles.formFlex}>
                                <div className={styles.formHolder}>
                                    <label>
                                        REPRESENTATIVE 1 NAME
                                    </label>
                                    <input type="text" placeholder='Enter name' value={representative1} onChange={(e) => setRepresentative1(e.target.value)} />
                                </div>
                                <div className={styles.formHolder}>
                                    <label>
                                        REPRESENTATIVE 2 NAME
                                    </label>
                                    <input type="text" placeholder='Enter name' value={representative2} onChange={(e) => setRepresentative2(e.target.value)} />
                                </div>
                            </div>
                            <div className={styles.formFlex}>
                                <div className={styles.formHolder}>
                                    <label>
                                        DATE OF REGISTRATION
                                    </label>
                                    <input type="text" placeholder='Enter name' value={dateOfRegistration} onChange={(e) => setDateOfRegistration(e.target.value)} />
                                </div>
                                <div className={styles.formHolder}>
                                    <label>
                                        CAC REGISTRATION NUMBER
                                    </label>
                                    <input type="text" placeholder='Enter name' value={cacRegistrationNumber} onChange={(e) => setCacRegistrationNumber(e.target.value)} />
                                </div>
                            </div>
                            <div className={styles.formHolder}>
                                <label>
                                    operation locations
                                </label>
                                <select value={location} onChange={handleStateChange}>
                                    <option value="">Select location</option>
                                    {states.map((state) => {
                                        return (
                                            <option key={state.code} value={state.name}>
                                                {state.name}
                                            </option>
                                        );
                                    })}
                                </select>
                            </div>
                            <div className={styles.formFlex}>
                                <div className={styles.formHolder}>
                                    <label>
                                        ACCOUNT NUMBER
                                    </label>
                                    <input type="text" placeholder='Enter account number' value={accountNumber} onChange={(e) => setAccountNumber(e.target.value)} />
                                </div>
                                <div className={styles.formHolder}>
                                    <label>
                                        ACCOUNT NAME
                                    </label>
                                    <input type="text" placeholder='Enter name' />
                                </div>
                            </div>
                            <div className={styles.formHolder}>
                                <label>
                                    BVN
                                </label>
                                <input type="text" placeholder='Enter number' value={bvn} onChange={(e) => setBvn(e.target.value)} />
                            </div>
                        </div>
                    </div>
                </div>
                <div className={styles.buttonFlex}>
                    <div className={styles.cancelButton}>
                        <Button text="Cancel" />
                    </div>
                    <div className={styles.signupButton}>
                        <Button 
                        text="Sign up" 
                        primary 
                        invalid={
                            representative1?.length > 0 && 
                            representative2?.length && 
                            dateOfRegistration?.length &&
                            cacRegistrationNumber?.length &&
                            location?.length &&
                            accountNumber?.length &&
                            bvn?.length
                             ? false : true} 
                             />
                    </div>
                </div>
            </div>
            <div className={styles.footer}>
        <p>&#169;2022 iFuel. All rights reserved.</p>
      </div>
        </SecondaryContainer>
    )
}