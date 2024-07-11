import user from "./data/user.json";
import Profile from "./components/Profile/Profile";
import stats from "./data/stats.json";
import Statistics from "./components/Statistics/Statistics";

function App() {
  return (
    <>
      <Profile user={user} />
      <Statistics stats={stats} title="files" />
    </>
  );
}

export default App;
