"use client";
import { useState, useEffect } from "react";
import Button from "../Button/Button";
import Heading from "../Heading/Heading";
import Input from "../Input/Input";
import Label from "../Label/Label";
import Text from "../Text/Text";
import Upload from "../Upload/Upload";
import styles from "./Register.module.scss";
import { IPosition } from "@/api/positions.interfaces";
import { useForm } from "react-hook-form";
import Modal from "../modal/Modal";

interface IPositionProps {
  positionList: IPosition[];
}

const phonePatern = new RegExp(/^[\+]{0,1}380([0-9]{9})$/);
const emailPatern = new RegExp(
  /^(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])$/
);
function validatePhoto(value: any) {
  const file = value[0];
  if (!file) {
    return "No file selected";
  }
  if (
    !file.type.startsWith("image/jpeg") &&
    !file.type.startsWith("image/jpg")
  ) {
    return "Invalid file format. Please upload a JPEG/JPG image";
  }

  if (file.size > 5 * 1024 * 1024) {
    return "File size exceeds the limit. Please upload a smaller image";
  }
  const image = new Image();
  const imageURL = URL.createObjectURL(file);

  image.onload = () => {
    if (image.width < 70 || image.height < 70) {
      return "Image dimensions are too small. Minimum dimensions are 70x70 pixels";
    }
  };
  image.src = imageURL;

  // Return undefined if the image dimensions are valid
  return undefined;
}

const Register = ({ positionList }: IPositionProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({});
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  function toogleHandleClick() {
    setIsVisible(!isVisible);
  }
  const onSubmit = (data: any) => {
    // fetch("https://frontend-test-assignment-api.abz.agency/api/v1/users", {
    //   method: "POST",
    //   body: JSON.stringify(data),
    // })
    //   .then((response) => response.json())
    //   .then((result) => {
    //     console.log(result);
    //   })
    //   .catch((error) => {
    //     console.error("Ошибка при отправке запроса:", error);
    //   });
    setFormData(data);
    setIsVisible(true);
    console.log(data);
  };

  return (
    <div className={styles.wrap} id="register">
      <Heading>Working with POST request</Heading>
      <form className={styles.form}>
        <Label
          error={errors.hasOwnProperty("name")}
          text={errors.hasOwnProperty("name") ? "invalid name" : ""}
        >
          <Input
            {...register("name", {
              required: true,
              minLength: 2,
              maxLength: 60,
            })}
            error={errors.hasOwnProperty("name")}
            placeholder="Your name"
          />
        </Label>
        <Label
          error={errors.hasOwnProperty("email")}
          text={errors.hasOwnProperty("email") ? "invalid email" : ""}
        >
          <Input
            {...register("email", {
              required: true,
              pattern: emailPatern,
              minLength: 2,
              maxLength: 100,
            })}
            error={errors.hasOwnProperty("email")}
            placeholder="Email"
          />
        </Label>

        <Label
          error={errors.hasOwnProperty("phone")}
          text="+38 (XXX) XXX - XX - XX"
        >
          <Input
            {...register("phone", {
              required: true,
              pattern: phonePatern,
            })}
            error={errors.hasOwnProperty("phone")}
            placeholder="Phone"
          />
        </Label>
        <div className={styles.radioWrap}>
          <div className={styles.radioInputTitle}>Select your position</div>
          {positionList.map((el) => (
            <div className={styles.radio} key={el.id}>
              <label className={styles.radioLabel}>
                <input
                  {...register("position", { required: true })}
                  type="radio"
                  value={el.name}
                  className={styles.radioInput}
                />
                <span className={styles.text}>{el.name}</span>
              </label>
            </div>
          ))}
        </div>
        <Upload
          {...register("photo", { required: true, validate: validatePhoto })}
          error={errors.hasOwnProperty("photo")}
          text={errors.hasOwnProperty("photo") ? "invalid photo" : ""}
        />
        <div className={styles.button}>
          <Button onClick={handleSubmit(onSubmit)}>Sign up</Button>
        </div>
      </form>
      {isVisible && <Modal data={formData} onClose={toogleHandleClick}></Modal>}
    </div>
  );
};

export default Register;
