import { FormEvent, useContext, useEffect, useState } from "react";
import Storecontext from "../contexts/storeContext";
import { postLogin } from "../store/login";
import HeaderAnnouncements from './common/HeaderAnnouncements';
import React from "react";
import Footer from "./common/Footer";
import LoggedInContext from "../contexts/loggedinContext";

export default function Login({onLoginSuccess}: any) {
    const store = useContext(Storecontext);
    const authToken = useContext(LoggedInContext);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [keepLogin, setKeepLogin] = useState(false);
    const [accessToken, setAccessToken] =  useState({access_token: ""})

    useEffect(()=>{
      store.subscribe(()=>{
        setAccessToken(store.getState().login[0]);
        onLoginSuccess(store.getState().login[0]);
      });
    }, [accessToken, store, onLoginSuccess]);

    async function loginFormSubmit(evt: FormEvent<HTMLFormElement>) {
        evt.preventDefault();
        evt.stopPropagation();

        store.dispatch(postLogin({
            url: "auth/login", 
            method: "POST", 
            data: { email, password, keepLogin }, 
            onSuccess: "login/successActions", 
            onError: "login/errorActions"
        }));
    }
    
    return <div className="container">
      <HeaderAnnouncements message="Login to continue ..." />
      <div>
        <form onSubmit={evt=>{
          loginFormSubmit(evt);
        }}>
          <div className="form-group">
            <label>Login email</label>
            <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Enter email" value={email} onChange={(e) => setEmail(e.target.value)} />
            <small id="emailHelp" className="form-text text-muted">We'll never share your email with anyone else.</small>
          </div>
          <div className="form-group">
            <label>Password</label>
            <input type="password" className="form-control" id="password" name="password" placeholder="Password" value={password}  onChange={(e) => setPassword(e.target.value)} />
          </div>
          <div className="form-group form-check">
            <input type="checkbox" className="form-check-input" id="persistence24" name="persistence24" onChange={(e) => { 
              return setKeepLogin(e.target.checked)
            }} />
            <label className="form-check-label">Keep me loggedIn for 24 hours</label>
          </div>
          <button type="submit" className="btn btn-primary" name="submit">Submit</button>
        </form>         
      </div>
      <Footer />
    </div>
}