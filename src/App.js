import React, { Suspense } from "react";
import { Route, Switch, useHistory } from "react-router";
import ProductList from "./components/list/products";
import Navigation from "./components/navigation";

const SignIn = React.lazy(() => import("./pages/auth/SignIn"));
const SignUp = React.lazy(() => import("./pages/auth/SignUp"));
const Profile = React.lazy(() => import("./pages/profile"));

function App() {
  const history = useHistory();

  const onLogOut = () => {
    localStorage.removeItem("auth.token");
    history.replace("/");
  };
  return (
    <div className="container">
      <Navigation />
      <Switch>
        <Suspense fallback={<div className="row">Loading...</div>}>
          <Route path="/register">
            <SignUp />
          </Route>
          <Route path="/login">
            <SignIn />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/" exact>
            <ProductList />
          </Route>
          <button className="btn btn-primary" onClick={onLogOut}>
            Log out
          </button>
        </Suspense>
      </Switch>
    </div>
  );
}
export default App;
