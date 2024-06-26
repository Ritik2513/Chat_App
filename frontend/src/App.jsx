import React from "react";
import Left from "./home/Leftpart/Left";
import Right from "./home/Rightpart/Right";
import Signup from "./components/Signup";
import Login from "./components/Login";
import { useAuth } from "./contexts/AuthProvider";

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser)
  return (
    <>
      {/* <div className="flex h-screen overflow-y-auto no-scrollbar">
        <Left />
        <Right />
      </div> */}
      <Signup />
      {/* <Login /> */}
    </>
  );
}

export default App;
