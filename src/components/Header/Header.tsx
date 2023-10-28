"use client";
import styles from "./Header.module.scss";
import Image from "next/image";
import Button from "../Button/Button";

const Header = () => {
  function scroolTo(id: string) {
    const element = document.getElementById(id);

    element?.scrollIntoView({
      behavior: "smooth",
      block: "end",
      inline: "nearest",
    });
  }
  return (
    <div className={styles.header}>
      <div className="container">
        <div className={styles.wrap}>
          <Image
            className={styles.logo}
            src="/Logo.svg"
            alt="Next.js Logo"
            width={104}
            height={26}
            priority
          />
          <div className={styles.buttons}>
            <Button onClick={() => scroolTo("userList")}>Users</Button>
            <Button onClick={() => scroolTo("register")}>Sign up</Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
