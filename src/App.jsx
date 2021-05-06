import { useEffect, useState } from "react";
import { Route, Switch } from "react-router-dom";
import Main from "./routes/Main";
import "./styles/App.scss";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  console.log(window.sessionStorage);

  // function onLogin() {
  //   setIsLogged(true);
  // }

  // function onLogOut() {
  //   setIsLogged(false);

  //   const auth2 = window.gapi.auth2.getAuthInstance();
  //   auth2.signOut().then(console.log("LOG OUT"));

  //   window.sessionStorage.clear();
  // }

  // useEffect(() => {
  //   const id = window.sessionStorage.getItem("email");

  //   if (id) {
  //     onLogin();
  //   } else {
  //     onLogOut();
  //   }
  // });

  return (
    <div className="app">
      <Switch>
        <Route path="/" component={Main} />
      </Switch>
    </div>
  );
}

export default App;
