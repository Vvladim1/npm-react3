import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/userImg.jpg";
import { NavLink } from "react-router-dom";
// import * as axios from "axios";
import { userAPI } from "../../api/api";
import Paginator from "../common/paginator/paginator";
import User from "./user";

const Users = ({totalUsersCount, pageSize, currentPage, onPageChanged, users, ...props}) => {
  let pageCount = Math.ceil(totalUsersCount / pageSize);
  let pages = [];
  for (let i = 1; i <= pageCount; i++) {
    pages.push(i);
  }
  return (
    <div>
      <Paginator totalItemsCount={totalUsersCount} 
                 pageSize={pageSize}
                 currentPage={currentPage} 
                 onPageChanged={onPageChanged} />
      {users.map(u => (
        <User key={u.id} 
              user={u} 
              followingInProgres={props.followingInProgres} 
              follow={props.follow}
              unfollow={props.unfollow} />
      ))}
    </div>
  );
};

export default Users;
