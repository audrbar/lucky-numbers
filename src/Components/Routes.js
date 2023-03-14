import { useContext } from "react";
import Auth from "./Auth";
import { Global } from "./Global";
import Login from "./Login";
import LuckyNumbers from "./LuckyNumbers";
import Users from "./Users";

function Routes() {

  const { route } = useContext(Global);


  switch (route) {
    case 'numbers': return <Auth><LuckyNumbers /></Auth>
    case 'users': return <Auth><Users /></Auth>
    case 'login': return <Login />
    default: return null
  }



}

export default Routes;