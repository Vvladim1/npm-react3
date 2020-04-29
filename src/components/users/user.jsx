import React from "react";
import styles from "./users.module.css";
import userPhoto from "../../assets/images/userImg.jpg";
import { NavLink } from "react-router-dom";
// import { userAPI } from "../../api/api";
// import Paginator from "../common/paginator/paginator";

const User = ({user, followingInProgres, unfollow, follow}) => {
 
  return (
    <div>
        <div >
          <div className={styles.wrapper}>
            <div>
              <NavLink to={/content/ + user.id}>
                <img alt='user-face'
                  src={user.photos.small != null ? user.photos.small : userPhoto}
                  className={styles.userPhoto}
                />
              </NavLink>
            </div>
            <div>
              {user.followed ? (
                <button disabled={followingInProgres.some(id => id === user.id)} 
                  onClick={() => {
                    unfollow(user.id);}}>
                  unfollowe
                </button>)
                : (
                <button disabled={followingInProgres.some(id => id === user.id)} 
                  onClick={() => {
                    follow(user.id);}}>
                  followed
                </button>
              )}
            </div>
            <div>{user.name}</div>
            <div>{user.status}</div>
            <div>{"user.location.country"}</div>
            <div>{"user.location.city"}</div>
          </div>
        </div>
     
    </div>
  );
};

export default User;
