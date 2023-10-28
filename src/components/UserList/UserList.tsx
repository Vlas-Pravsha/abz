"use client";
import { UserInterface } from "@/api/user.interfaces";
import Heading from "../Heading/Heading";
import UserCard from "../UserCard/UserCard";
import styles from "./UserList.module.scss";
import React, { useState, useEffect } from "react";
import Button from "../Button/Button";
import { UserGateway } from "@/api/user";

interface UserListProps {
  userList: UserInterface[];
}

const UserList = ({ userList }: UserListProps) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [users, setUsers] = useState<UserInterface[]>([]);

  const handleShowMore = () => {
    if (userList) {
      setCurrentPage(currentPage + 1);
    }
  };

  const fetchUsers = async () => {
    const userList = await UserGateway.getUsers(currentPage);
    if (userList) {
      setUsers([...userList]);
    }
  };

  useEffect(() => {
    fetchUsers();
  }, [currentPage]);

  return (
    <div className={` ${styles.userList}`} id="userList">
      <div className={styles.grid}>
        {users.map((user) => {
          return <UserCard key={user.id} {...user}></UserCard>;
        })}
      </div>
      <div>
        <Button onClick={handleShowMore}>Show more</Button>
      </div>
    </div>
  );
};

export default UserList;
