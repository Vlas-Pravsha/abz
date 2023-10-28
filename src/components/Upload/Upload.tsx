import React, { useState } from "react";
import { ChangeHandler } from "react-hook-form";
import styles from "./Upload.module.scss";

interface UploadProps {
  value?: string;
  onChange: ChangeHandler;
  name: string;
  onBlur: ChangeHandler;
  error: boolean;
  text: string;
}

const Upload = React.forwardRef(
  (
    { value, onChange, name, onBlur, error, text }: UploadProps,
    ref: React.Ref<any>
  ) => {
    const [fileName, setFileName] = useState("");
    // const [uploaded, setUploaded] = useState("");

    // const hostUrl = "http://localhost:3000/";

    const onChangePhoto = (event: React.ChangeEvent<HTMLInputElement>) => {
      const file = event.target?.files?.[0];
      setFileName(file ? file.name : "");
      onChange(event);
    };

    // const handleUpload = async () => {
    //   const formData = new FormData();

    //   const res = await fetch(hostUrl, {
    //     method: "POST",
    //     body: formData,
    //   });
    //   const data = await res.json();

    //   setUploaded(data);
    // };

    return (
      <label className={`${styles.wrap} ${error ? styles.error : ""} `}>
        <div className={styles.button}>Upload</div>
        <div className={styles.label}>
          <input
            type="file"
            style={{ display: "none" }}
            onChange={onChangePhoto}
            onBlur={onBlur}
            name={name}
            value={value}
            ref={ref}
          />
          {fileName ? fileName : "Upload your photo"}
        </div>
        <span className={`${styles.span} ${error ? styles.error : ""} `}>
          {text}
        </span>
      </label>
    );
  }
);
Upload.displayName = "Upload";

export default Upload;
