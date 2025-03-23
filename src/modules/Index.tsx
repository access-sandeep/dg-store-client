
import HeaderAnnouncements from './common/HeaderAnnouncements';
import Footer from "./common/Footer";
import SideFilter from './common/SideFilter';
import { Link, Outlet } from 'react-router-dom';
import Nav from './common/Nav';
import { useContext } from 'react';
import { showDropDown } from '../shared/animations/drop-down-menu';
import LoggedInContext from '../contexts/loggedinContext';
import LogoBar from './inner/LogoBar';
import SearchBar from './inner/SearchBar';
import MainContent from './inner/MainContent';
import ContinueExploringStrip from './inner/ContinueExploringStrip';
import FooterBar from './inner/FooterBar';
import Home from './Home';

export default function Index({onLogout}: any) {
    const loggedInContext = useContext(LoggedInContext);
    
    const doLogout = (e:any)=>{
        e.stopPropagation();
        e.preventDefault();
        onLogout(e);
        showDropDown(e);
    }

    return <div className="wrapper">
      <LogoBar onLogout={doLogout} />
      <SearchBar />
      <Outlet />
      <ContinueExploringStrip />
      <FooterBar />
    </div>
}