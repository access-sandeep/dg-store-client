
import HeaderAnnouncements from './common/HeaderAnnouncements';
import Footer from "./common/Footer";
import SideFilter from './common/SideFilter';
import { Link, Outlet } from 'react-router-dom';
import Nav from './common/Nav';
import { useContext, useEffect, useState } from 'react';
import Storecontext from '../contexts/storeContext';
import { logout } from '../store/login';
import { showDropDown } from '../shared/animations/drop-down-menu';

export default function Index({onLogout}: any) {
    const store = useContext(Storecontext);
    const [accessToken, setAccessToken] =  useState({access_token: "", user_id:""});
    
    useEffect(()=>{
        store.subscribe(()=>{
          setAccessToken(store.getState().login[0]);
          console.log("From Index",store.getState().login[0]);
        });
      }, [store]);

    const doLogout = (e:any)=>{
        e.stopPropagation();
        e.preventDefault();
        setAccessToken({access_token: "", user_id:""});
        store.dispatch(logout(accessToken));
        onLogout();
        showDropDown(e);
    }

    return <div className="container">
    <HeaderAnnouncements message="New - Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam eget tincidunt lorem." />
    <div className='row'>
      <div className='col-lg-1'>
        <Link to={`/`} className='navbar-brand mr-0 mr-md-2'>
          <img src='logo1.png' width={50} alt=''/>
        </Link>
      </div>
        <div className='col-lg-3'>
          <div className='row'>
            <div className='col-12'>
            <div className="input-group mb-3 mt-2">
              <input type="text" className="form-control" placeholder="Search" aria-label="Search" aria-describedby="button-addon2" />
              <div className="input-group-append">
                <button className="btn btn-outline-secondary" type="button" id="button-addon2">Enter</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='col-lg-5'>
        <div className='row'>
          <Nav />
        </div>
      </div>
      <div className='col-lg-3'>
        <div className='row'>
          <div className='col-2 pt-2'>
            <a href="/" className='text-center'>
              <i className="bi bi-bell-fill"></i>
            </a>
          </div>
          <div className='col-2 pt-2'>
            <a href="/" className='text-center'>
              <i className="bi bi-chat-fill"></i>
            </a>
          </div>
          <div className='col-2 pt-2'>
            <a href="/" className='text-center'>
              <i className="bi bi-calendar-date-fill"></i>
            </a>
          </div>
          <div className='col-2 pt-2'>
            <a href="/" className='text-center'>
              <i className="bi bi-cart-fill"></i>
            </a>
          </div>
          <div className='col-4'>
            <div className='row'>
              <div className='col-1 pt-2'>
                <span className='text-end'>
                  <i className="bi bi-three-dots-vertical"></i>
                </span>
              </div>
              <div className='col-8 pt-2 text-end dropdown'>
                <a href="/" className="dropdown-toggle"  onClick={e=>{
                    showDropDown(e);
                }} id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  <i className="bi bi-file-person-fill"></i>
                </a>
                <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                    <a className="dropdown-item" href="/">My Profile</a>
                    <a className="dropdown-item" href="/">Change Password</a>
                    <a className="dropdown-item" href="/" onClick={e=>{
                        doLogout(e);
                    }}>Logout</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div className='border-top row'>
      <div className='col-lg-3 text-bg-light border-end'>
        <SideFilter />
      </div>
      <div className='col-lg-9'><Outlet /></div>
    </div>
    <Footer />
  </div>
}