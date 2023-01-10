import Button, { BackBtn } from "../../../Components/Button";
import logo from "../../../assets/logo.svg";
import styles from "./style.module.css";
import PageHeader from "../../../Components/PageHeader";
import UploadImageTemp from "../../../Components/UploadImageTemp";
import { InputTemp, SelectTemp } from "../../../Components/InputTemp";

const Kyc = () => {
  return (
    <>
      <div className={styles.header}>
        <img src={logo} />
      </div>
      <div className={styles.container}>
        <BackBtn />
        <PageHeader pageTitle='KYC' />
        <div className='flex-lg w-full gap-20'>
          <UploadImageTemp btnText='Add Company Logo' />
          <div className={styles.inputSection}>
            <div className='input-flex-btwn'>
              <InputTemp
                marginRight
                label='REPRESENTATIVE -1 NAME'
                value='Esther Joyce'
              />
              <InputTemp
                marginLeft
                label='REPRESENTATIVE -2 NAME'
                value='Chidi Brown'
              />
            </div>
            <div className='input-flex-btwn'>
              <InputTemp
                marginRight
                label='DATE OF REGISTRATION'
                value='23/02/1997'
              />
              <InputTemp
                marginLeft
                label='CAC REGISTRATION NUMBER'
                value='2984928748dh'
              />
            </div>
            <SelectTemp
              label='OPERATION LOCATIONS'
              placeholder='Maitama, Abuja,     Ikeja, Lagos,     Oluyole, Ibadan'
            />
            <div className='input-flex-btwn'>
              <InputTemp
                marginRight
                label='ACCOUNT NUMBER'
                value='1029384747'
              />
              <InputTemp
                marginLeft
                label='ACCOUNT NAME'
                value='ABC Oil & Gas Ltd'
              />
            </div>
            <p className={styles.infoText}>
              Enter your Sterling Alternative finance acc number. Dont have one?{" "}
              <span className='text-green'>Click here</span>
            </p>
            <InputTemp label='BVN' value='2838908744729' />
            <div className={styles.btns}>
              <Button text='Cancel' width='39%' />
              <Button text='Sign up' variant='primary' width='57%' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Kyc;
