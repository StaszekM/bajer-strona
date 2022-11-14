import { AppNavbar } from "../navbar";
import "globalStyles.css";
import { Outlet, useRouteError } from "react-router";
import { Footer } from "../footer";
import { RouteNotFoundError } from "errors/RouteNotFoundError";
import { PropsWithChildren } from "react";
import { ErrorPage } from "views/errorPage";
import { ScrollUpButton } from "../scrollUpButton";

function Layout({
  children,
  hideFooter,
}: PropsWithChildren<{ hideFooter?: boolean }>) {
  return (
    <>
      <AppNavbar />
      {children}
      {!hideFooter && <Footer />}
      <ScrollUpButton />
    </>
  );
}

function App() {
  const routeError = useRouteError();

  if (routeError instanceof RouteNotFoundError) {
    return (
      <Layout hideFooter>
        <ErrorPage />
      </Layout>
    );
  }

  return (
    <Layout>
      <Outlet />
    </Layout>
  );
}

export default App;
