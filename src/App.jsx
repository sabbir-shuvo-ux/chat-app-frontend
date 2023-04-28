import { useState } from "react";

import "./App.css";

import ChatsPage from "./components/ChatsPage";
import AuthPage from "./components/AuthPage";

function App() {
  const [user, setUser] = useState(undefined);

  if (!user) {
    return <AuthPage onAuth={(user) => setUser(user)} />;
  } else {
    return <ChatsPage user={user} />;
  }
}

export default App;
