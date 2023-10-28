import Image from "next/image";
import styles from "./UserCard.module.scss";
import { UserInterface } from "@/api/user.interfaces";
import Text from "../Text/Text";

const UserCard = ({ name, photo, email, position, phone }: UserInterface) => {
  return (
    <div className={styles.card}>
      <Image
        className={styles.photo}
        src={photo}
        alt={name + " photo"}
        width={70}
        height={70}
      />
      <Text>{name}</Text>

      <div>
        <Text>{position}</Text>
        <Text>{email}</Text>
        <Text>{phone}</Text>
      </div>
    </div>
  );
};

export default UserCard;
