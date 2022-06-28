import { useEffect } from 'react';
import { NavLink, Route, BrowserRouter as Router,useLocation } from 'react-router-dom';
function Nav() {
    let {pathname} = useLocation()
    let {hash} = useLocation()
    console.log('--check path--'+pathname + hash)

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
                                    <li className="menu-item ">
                                        <NavLink to="/home" activeClassName="ation" exact={true}> Giới thiệu </NavLink>
                                    </li>
                                    <li className="menu-item">
                                        <NavLink to="/rule" activeClassName="ation"> Thể lệ thi đấu </NavLink>
                                    </li>
                                    <li className="menu-item">
                                        <NavLink to="/faq" activeClassName="ation"> FAQ </NavLink>        
                                    </li>
                                    <li className="menu-item rank-scroll">
                                        <a  href={((pathname === '/home') ? '#bangxephang' : '/home#bangxephang')}>
                                            Bảng xếp hạng
                                        </a>
                                    </li>
                                    <li className="menu-item">
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
      