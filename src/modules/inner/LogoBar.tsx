
import { Globe } from 'react-bootstrap-icons';
import { Link } from 'react-router-dom';

export default function LogoBar({onLogout}: any) {
    return (<div className="logostrip">
            <div className="logo"></div>
            <div className="channels">
                <div className="channel1"><Link to={`/`}>Homes</Link></div>
                <div className="channel2"><Link to={`/products/all`}>Products</Link></div>
            </div>
            <div className="last">
                <div className="one"><a href="" className="yourhome">Airbnb your home</a></div>
                <div className="two"><a href="" className="globe-link">
                {<Globe />}</a></div>
                <div className="three">
                    <div className="rounded-custom">
                        <div className="button-content">
                        <div className="breadcrumb"><img src="/images/common/svg/breadcrumb.svg" alt="" className="breadcrumb-img" /></div>
                        <div className="profileimage">
                            <img src="/images/common/svg/big-profile-image-holder.svg" alt="" className="profileimg" onClick={(e)=>{
                                onLogout(e);
                            }} /></div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}