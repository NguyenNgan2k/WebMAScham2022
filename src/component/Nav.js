import { useEffect, useRef } from 'react';
import { NavLink, Route, BrowserRouter as Router, useLocation, Redirect } from 'react-router-dom';
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
            <div className="container header_container">
                <div className="header_logo">
                    <a href="#" className="logo_img">
                        <img src="/assets/logo.png" />
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
                                <li className="menu-item" onClick={() => {
                                        window.scrollTo({
                                            top: 0,
                                            behavior: 'smooth'
                                        });
                                    }}>
                                    <NavLink to="/history" activeClassName="ation"> Lịch sử cuộc thi </NavLink>
                                </li>
                            </ul>

                        </div>
                    </div>

                </div>
                <div className="action">
                    <a href="#" className="header__btn1">đăng ký</a>
                    <a href="#" className="header__btn2">đăng nhập</a>
                </div>
            </div>
        </header>
    );
}
export default Nav;
