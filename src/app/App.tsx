import React from "react";
import { BrowserRouter, Switch, Route, RouteProps } from "react-router-dom";
import styles from "./App.module.css";
import CourseOverview from "./pages/CourseOverview/CourseOverview";
import CourseDetail from "./pages/CourseDetail/CourseDetail";
import Login from "./pages/Login/Login";
import Dashboard from "./pages/Dashboard/Dashboard";
import Confirm from "./pages/Confirm/Confirm";
import BackendLogin from "./pages/BackendLogin/BackendLogin";

type CustomRouteProps = RouteProps & {
  Component: () => JSX.Element;
  path: string;
};

const routes: CustomRouteProps[] = [
  { path: "/", Component: Login, exact: true },
  { path: "/dashboard", Component: Dashboard },
  { path: "/overview", Component: CourseOverview },
  { path: "/detail", Component: CourseDetail },
  { path: "/confirm", Component: Confirm },
  { path: "/backendlogin", Component: BackendLogin },
];

function App(): JSX.Element {
  return (
    <div className={styles.container}>
      <BrowserRouter>
        <Switch>
          {routes.map(({ Component, ...routeProps }) => (
            <Route key={routeProps.path} {...routeProps}>
              <Component />
            </Route>
          ))}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
