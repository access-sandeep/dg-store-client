import React, { useContext, useState, FormEvent, useEffect  } from 'react';
import './App.scss';
import store from  "./store/configureStore";
import Storecontext from './contexts/storeContext';
import Index from './modules/Index';
import ThemeContext from './contexts/themeContext';
import LoggedInContext from './contexts/loggedinContext';

import { logout, postLogin } from "./store/login";
import HeaderAnnouncements from './modules/common/HeaderAnnouncements';
import Footer from "./modules/common/Footer";
import { useCookies } from 'react-cookie'


function App() {
  const [loggedIn, setLoggedIn] = useState(false);

  const [accessToken, setAccessToken] =  useState({access_token: ""});

  const [cookies, setCookie] = useCookies(['access_token']);
  

  useEffect(()=>{
    let logged_in_token = store.getState().login[0];
    if(logged_in_token?.access_token!==undefined) {
      console.log("if")
      setCookie("access_token", logged_in_token.access_token);
      setAccessToken(logged_in_token);
      setLoggedIn(logged_in_token.access_token!=="");
    } else {
      console.log("ielsef")
      setAccessToken(cookies.access_token);
      setLoggedIn(cookies.access_token!=="");
    }
    // store.subscribe(()=>{
    //   let logged_in_token = store.getState().login[0];
    //   if(logged_in_token?.access_token!==undefined) {
    //     setCookie("access_token", logged_in_token.access_token);
    //     setAccessToken(logged_in_token);
    //     setLoggedIn(logged_in_token.access_token!=="");
    //   } else {
    //     console.log("Cookie access token", cookies.access_token);
    //     setAccessToken(cookies.access_token);
    //     setLoggedIn(cookies.access_token!=="");
    //   }
    // });
  }, [cookies.access_token, setCookie, accessToken, loggedIn, cookies]);

  async function loginFormSubmit(email: string, password: string, keepLogin: boolean, evt: FormEvent<HTMLFormElement>) {
      evt.preventDefault();
      evt.stopPropagation();
      store.dispatch(postLogin({
          url: "auth/login", 
          method: "POST", 
          data: { email, password, keepLogin }, 
          onSuccess: "login/successActions", 
          onError: "login/errorActions"
      }));
      setLoggedIn(loggedIn?false:true);
  }

  let authorizedPage;

  const handelLogout = (e: any) =>{
    console.log("triggered logout")
    e.preventDefault();
    e.stopPropagation();
    store.dispatch(logout({access_token:"", user_id:"0"}));
    if(cookies.access_token) {
      setCookie("access_token", "");
    }
    setAccessToken({access_token:""});
    setLoggedIn(false);
  };

  if(loggedIn) {
    authorizedPage = <Index onLogout={(e: any) => {
      handelLogout(e)
    }}/>
  } else {
    authorizedPage = <Login onLoginSsubmit={loginFormSubmit} />;
  }
  return <LoggedInContext.Provider value={accessToken.access_token}><Storecontext.Provider value={store as any}><ThemeContext.Provider value={"HomePage"}>{authorizedPage}</ThemeContext.Provider></Storecontext.Provider></LoggedInContext.Provider>;
}

export function Login({onLoginSsubmit}: any) {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [keepLogin, setKeepLogin] = useState(false);

    async function loginFormSubmit(evt: FormEvent<HTMLFormElement>) {
        evt.preventDefault();
        evt.stopPropagation();
        onLoginSsubmit(email, password, keepLogin, evt);
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
            }} checked={keepLogin} />
            <label className="form-check-label">Keep me loggedIn for 24 hours</label>
          </div>
          <button type="submit" className="btn btn-primary" name="submit">Submit</button>
        </form>         
      </div>
      <Footer />
    </div>
}

export default App;