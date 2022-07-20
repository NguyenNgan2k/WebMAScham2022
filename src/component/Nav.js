import { useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import {CgMenuRightAlt} from 'react-icons/cg'
import call from "../assets/call.svg";
import mail from "../assets/mail.svg";
import logo2 from "../assets/logo2.svg";
function Nav(props) {
    let { pathname } = useLocation();
    //sticky
    useEffect(() => {
        window.addEventListener('scroll', isSticky);
        return () => {
            window.removeEventListener('scroll', isSticky);
        };
    });
    const isSticky = (e) => {
        const header = document.querySelector('.header');
        const scrollTop = window.scrollY;
        scrollTop >= 250 ? header.classList.add('sticky') : header.classList.remove('sticky');
    };

    return (
        <header className="header" id="nav">
            <div className="hd_top">
                <div className="container">
                    <div className="hd_right">
                        <div className="hd_phone">
                            <a href="#"><img className="img_icon" src={call}/>(+84) 2 8888 2 6868</a>
                        </div>
                        <div className="hd_email">
                            <a href="#"><img className="img_icon" src={mail}/>info@vcsc.com.vn</a>
                        </div>
                        <button className="btn_account"><a href="#">MỞ TÀI KHOẢN</a></button>
                        <button className="btn_gd"><a href="http://103.101.160.120:8888/vs/#/./login">GIAO DỊCH TRỰC TUYẾN</a></button>
                    </div>
                </div>
            </div>
            <div className="container header_container">
                <div className="header_logo">
                    <a href="#" className="logo_img">
                        <img src={logo2} />
                    </a>
                </div>
                <div className="header_left">
                    <div className="menu">
                        <div className="menu_wrap">
                            <ul className="menu_list">
                                <li className="menu-item">
                                    <NavLink to="/home" activeClassName="ation" exact={true} id="home" onClick={() => {
                                        window.scrollTo({
                                            top: 0,
                                            behavior: 'smooth'
                                        });
                                    }}> Giới thiệu </NavLink>
                                </li>
                                <li className="menu-item">
                                    <NavLink to="/rule" activeClassName="ation" onClick={() => {
                                        window.scrollTo({
                                            top: 0,
                                            behavior: 'smooth'
                                        });
                                    }}> Thể lệ thi đấu </NavLink>
                                </li>
                                <li className="menu-item">
                                    <NavLink to="/faq" activeClassName="ation" onClick={() => {
                                        window.scrollTo({
                                            top: 0,
                                            behavior: 'smooth'
                                        });
                                    }}> FAQ </NavLink>
                                </li>
                                <li className="menu-item">
                                    <NavLink to={(pathname === '/home') ? '#bangxephang' : '/home#bangxephang'} activeClassName="ation" id="bxh">
                                        Bảng xếp hạng
                                    </NavLink>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
export default Nav;
