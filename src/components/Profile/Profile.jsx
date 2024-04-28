import clsx from "clsx";
import styles from "./Profile.module.css";

export default function Profile({
  user: { username, tag, location, avatar, stats },
}) {
    return (
        <div className={clsx(styles.mainframe)}>
        <div className={clsx(styles.portretcontainer)}>
          <img
            src={avatar}
            alt="User avatar"
            className={clsx(styles.avatar)}
          />
          <p className={clsx(styles.profiletext)}>{username}</p>
          <p className={clsx(styles.biotext)}>@{tag}</p>
          <p className={clsx(styles.biotext)}>{location}</p>
        </div>
      
        <ul className={clsx(styles.parameterslist)}>
          <li className={clsx(styles.parametercolumn)}>
            <span>Followers</span>
            <span className={clsx(styles.boldtext)}>{stats.followers}</span>
          </li>
          <li className={clsx(styles.parametercolumn)}>
            <span>Views</span>
            <span className={clsx(styles.boldtext)}>{stats.views}</span>
          </li>
          <li className={clsx(styles.parametercolumn)}>
            <span>Likes</span>
            <span className={clsx(styles.boldtext)}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    );
  }