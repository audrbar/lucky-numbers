import { useContext, useEffect } from 'react';
import axios from 'axios';
import Loader from "./Loader";
import Login from "./Login";
import RoleError from "./RoleError";
import { Global } from './Global';

function Auth({ children, roles }) {

    const { rote, setAuthName, logged, setLogged } = useContext(Global);


    useEffect(() => {
        axios.get('http://localhost:3003/login', { withCredentials: true })
            .then(res => {
                console.log(res.data);
                if (res.data.status === 'ok') {
                    setAuthName(res.data.name)
                    if (roles.lengh) {
                        if (roles.includes(res.data.role))
                            setLogged(1)
                    } else {
                        setLogged(3)

                    }
                    setLogged(2);
                }
                if (res.data.status === 'ok') {
                    setLogged(true);
                    setAuthName(res.data.name);
                } else {
                    setLogged(false);
                    setAuthName(null);
                }
            });
    }, [rote]);


    if (null === logged) {
        return <Loader />
    }

    if (1 === logged) {
        return  (
            <>
                {children}
            </>
        )
    }

    if (2 === logged) {
        return  (
            <>
                {children}
            </>
        )
    }

    if (3 === logged) {
        return  (
            <RoleError />
        )
    }

    if (true === logged) {
        return (
            <>
                {children}
            </>
        )
    }
    if (false === logged) {
        return (
            <Login />
        )
    }

}

export default Auth;