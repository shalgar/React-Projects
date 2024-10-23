import "./index.css";
import Avatar from "./components/avatar";
import Intro from "./components/intro";
import SkillList from "./components/skillist";

function App() {
  return (
    <div className="card">
      <Avatar />
      <div className="data">
        <Intro />
        <SkillList />
      </div>
    </div>
  );
}

export default App;