import css from "./FriendslistItem.module.css";

const FriendlistItem = ({ friend }) => {
  return (
    <li key={friend.id} className={css.friends__item}>
      <span className={friend.isOnline ? css.online + " " + css.span : css.offline + " " + css.span}>
        {/* {friend.isOnline ? "online" : "offline"} */}
      </span>
      <img
        className={css.friends__avatar}
        src={friend.avatar}
        alt="User avatar"
        width="48"
      />
      <p className={css.friends__name}>{friend.name}</p>
    </li>
  );
};

export default FriendlistItem;
