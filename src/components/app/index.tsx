import { AppNavbar } from "../navbar";
import "../../globalStyles.css";
import { Outlet, useRouteError } from "react-router";
import { Footer } from "../footer";

function App() {
  const xd = useRouteError();
  console.log(xd);
  return (
    <>
      <AppNavbar />
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
