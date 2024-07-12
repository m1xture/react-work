import user from "./data/user.json";
import Profile from "./components/Profile/Profile";
import stats from "./data/stats.json";
import Statistics from "./components/Statistics/Statistics";
import FriendList from "./components/Friendlist/Friendlist";
import friends from "./data/friends.json";
import TransactionHistory from "./components/TransactionHistory/TransactionHistory";
import transactions from "./data/transactions.json";

function App() {
  return (
    <>
      <Profile user={user} />
      <Statistics stats={stats} title="files" />
      <FriendList friends={friends} />
      <TransactionHistory items={transactions} />
    </>
  );
}

export default App;
