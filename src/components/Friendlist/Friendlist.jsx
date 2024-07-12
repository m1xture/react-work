import FriendlistItem from "../FriendlistItem/FriendlistItem";

const Friendlist = ({ friends }) => {
  return (
    <>
      {friends.map((friend) => (
        <FriendlistItem friend={friend} key={friend.id} />
      ))}
    </>
  );
};

export default Friendlist;
