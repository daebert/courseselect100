import React from "react";
import { BrowserRouter, Switch, Route, RouteProps } from "react-router-dom";
import Home from "./pages/Home/Home";
import styles from "./App.module.css";
import CourseOverview from "./pages/CourseOverview/CourseOverview";
import CourseDetail from "./pages/CourseDetail/CourseDetail";

type CustomRouteProps = RouteProps & {
  Component: () => JSX.Element;
  path: string;
};

const routes: CustomRouteProps[] = [
  { path: "/", Component: Home, exact: true },
  { path: "/overview/", Component: CourseOverview },
  { path: "/detail/", Component: CourseDetail },
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
