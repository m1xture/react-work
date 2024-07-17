import FriendlistItem from "../FriendlistItem/FriendlistItem";
import css from "./Friendlist.module.css";

const Friendlist = ({ friends }) => {
  return (
    <ul className={css.friends__list}>
      {friends.map((friend) => (
        <FriendlistItem friend={friend} key={friend.id} />
      ))}
    </ul>
  );
};

export default Friendlist;
