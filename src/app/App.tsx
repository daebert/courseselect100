import React from "react";
import { BrowserRouter, Switch, Route, RouteProps } from "react-router-dom";
import Home from "./pages/Home/Home";
import styles from "./App.module.css";
// import CourseOverview from "./pages/CourseOverview/CourseOverview";

type CustomRouteProps = RouteProps & {
  Component: () => JSX.Element;
  path: string;
};

const routes: CustomRouteProps[] = [
  { path: "/", Component: Home, exact: true },
  // { path: "/overview/:prio", Component: CourseOverview "prio="tertiary" },
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
