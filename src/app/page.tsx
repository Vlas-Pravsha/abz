import { Button } from "@/components";
import Heading from "@/components/Heading/Heading";
import UserCard from "@/components/UserCard/UserCard";
import styles from "./page.module.scss";
import Text from "@/components/Text/Text";
import UserList from "@/components/UserList/UserList";
import { UserGateway } from "@/api/user";
import { useEffect } from "react";
import Input from "@/components/Input/Input";
import Register from "@/components/Register/Register";

export default async function Home() {
  const userList = await UserGateway.getUsers(1);
  const positionList = await UserGateway.getPositions();

  return (
    <main>
      <div className={styles.main}>
        <div>
          <div className={styles.textContainer}>
            <Heading>Test assignment for front-end developer</Heading>
            <Text>
              What defines a good front-end developer is one that has skilled
              knowledge of HTML, CSS, JS with a vast understanding of User
              design thinking as they&rsquo;ll be building web interfaces with
              accessibility in mind. They should also be excited to learn, as
              the world of Front-End Development keeps evolving.
            </Text>
            <div className={styles.btnWrap}>
              <Button>Sign up</Button>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <UserList userList={userList || []} />
        <Register positionList={positionList || []} />
      </div>
    </main>
  );
}
