import { AppNavbar } from "../navbar";
import "../../globalStyles.css";
import { Outlet } from "react-router";

function App() {
  return (
    <>
      <AppNavbar />
      <Outlet />
    </>
  );
}

export default App;
