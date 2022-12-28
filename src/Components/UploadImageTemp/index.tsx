import Button from "@components/Button";
import { useRef } from "react";
import styles from "./style.module.css";

const UploadImageTemp = ({
  edit,
  src,
  onChange,
  btnText,
}: {
  edit?: boolean;
  src?: string;
  onChange?: () => void;
  btnText: string;
}) => {
  const imageRef = useRef<HTMLInputElement>(null);
  return (
    <div
      className={styles.container}
      style={{ position: "relative", width: "fit-content" }}>
      <div className={styles.imageContainer}>
        {!src ? (
          <div className={styles.placeholder}>
            <p>Upload image</p>
          </div>
        ) : (
          <img src={src} />
        )}
      </div>
      {!edit && (
        <>
          <input
            hidden
            ref={imageRef}
            type='file'
            accept='image/*'
            onChange={onChange}
          />
          <button onClick={() => imageRef.current && imageRef.current.click()}>
            {btnText}
          </button>
        </>
      )}
    </div>
  );
};

export default UploadImageTemp;
