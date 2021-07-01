import { Route, Switch, useHistory } from "react-router";
import Navigation from "./components/navigation";
import SignIn from "./pages/auth/SignIn";
import SignUp from "./pages/auth/SignUp";
import Profile from "./pages/profile";

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
        <Route path="/register">
          <SignUp />
        </Route>
        <Route path="/login">
          <SignIn />
        </Route>
        <Route path="/profile">
          <Profile />
        </Route>
        <button className="btn btn-primary" onClick={onLogOut}>
          Log out
        </button>
      </Switch>
    </div>
  );
}
export default App;
