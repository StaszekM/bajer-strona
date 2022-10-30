import "./styles.css";
import { WorkInProgressBanner } from "../workInProgressBanner/WorkInProgressBanner";
import { AppNavbar } from "../navbar";

function App() {
  return (
    <>
      <AppNavbar />
      <div className="main">
        <WorkInProgressBanner />
      </div>
    </>
  );
}

export default App;
