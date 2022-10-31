import { AppNavbar } from "../navbar";
import "../../globalStyles.css";
import { WelcomeBanner } from "../welcomeBanner";
import { AboutUsBanner } from "../aboutUsBanner";

function App() {
  return (
    <>
      <AppNavbar />
      <WelcomeBanner />
      <AboutUsBanner />
    </>
  );
}

export default App;
