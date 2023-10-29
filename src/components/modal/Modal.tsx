import Image from "next/image";
import s from "./Modal.module.scss";
import React from "react";
import Button from "./Button/Button";

interface ModalProps {
  data: any;
  onClose: () => void;
}

type DataItem = {
  name: string;
  email: string;
  phone: string;
  position: string;
  photo: any;
};

const Modal = ({ data, onClose }: ModalProps) => {
  const photo = data.photo && data.photo[0];

  return (
    <div className={s.modal}>
      <div className={s.overlay} onClick={onClose}></div>
      <div className={s.wrapper}>
        <h2 className={s.title}>Your data:</h2>
        <div className={s.items}>
          <p>Name: {data.name}</p>
          <p>Email: {data.email}</p>
          <p>Phone: {data.phone}</p>
          <p>Position: {data.position}</p>
          <p>Photo:</p>
          {photo && (
            <div>
              <Image
                src={URL.createObjectURL(photo)}
                alt="User's Photo"
                className={s.userImg}
                width={400}
                height={250}
              />
            </div>
          )}
        </div>
        <div className={s.buttonWrapper} onClick={onClose}>
          <Button>Yes, im sure</Button>
          <div onClick={onClose}>
            <Button type="secondary">No, cancel</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
