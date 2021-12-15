import React from "react";

import styles from "./UserList.module.css";
import Card from "../UI/Card";

const UserList = (props) => {
  if (props.users.length === 0) {
    return (
      <Card className={styles.users}>
        <ul>내용을 추가해주세요</ul>
      </Card>
    );
  }
  return (
    <Card className={styles.users}>
      <ul>
        {props.users.map((user) => {
          return (
            <li key={user.id}>
              {user.name} ({user.age} 세)
            </li>
          );
        })}
      </ul>
    </Card>
  );
};

export default UserList;
