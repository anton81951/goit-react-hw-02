import clsx from "clsx";
import styles from "../FriendList/FriendList.module.css";

import FriendListItem from "../FriendListItem/FriendListItem";

export default function FriendList ({friends}) {
    return (<ul className={clsx(styles.friendlistorder)}>
        {friends.map((friend) => (
        <li key={friend.id}>
          <FriendListItem friend={friend} />
        </li>
      ))}
    </ul>
    );
}
