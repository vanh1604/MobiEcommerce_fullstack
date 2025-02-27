import React, { Fragment } from "react";
import { Routes, Route } from "react-router-dom";
import { routes } from "./routes";
import DefaultComponent from "./components/DefaultComponents/DefaultComponent";

function App() {
  return (
    <div>
      <Routes>
        {routes.map(({ Page, path, isShowHeader }) => {
          const Layout = isShowHeader ? DefaultComponent : Fragment;
          return (
            <Route
              key={path}
              path={path}
              element={
                <Layout>
                  <Page />
                </Layout>
              }
            />
          );
        })}
      </Routes>
    </div>
  );
}
export default App;
