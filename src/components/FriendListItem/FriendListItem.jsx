import clsx from "clsx";
import styles from "./FriendListItem.module.css";

export default function FriendListItem({ friend: { avatar, name, isOnline } }) {
  return (
    <div  className={clsx(styles.friendcard)}>
      <img src={avatar} alt="Avatar" width="48" />
      <p className={clsx(styles.boldtext)}>{name}</p>
      <p className={clsx(styles.boldtext, { [styles.greenText]: isOnline, [styles.redText]: !isOnline })}>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}