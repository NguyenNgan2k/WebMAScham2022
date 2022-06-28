function Footer() {
    return(
        <footer className="footer">
        <div className="container footer_container">
            <div className="footer_logo_wrap">
                <div className="footer_logo">
                    <a href="#">
                        <img src="/assets/logo-big.png" alt=""/>
                    </a>
                </div>
            </div>
            <div className="grid_container">
                <div className="col-3 grid_item no_title">
                    Nhà cung cấp dịch vụ <br/>
                    chứng khoán toàn diện hàng <br/>
                    đầu tại Việt Nam
                </div>
                <div className="col-3 grid_item">
                    <div className="footer__title">Hội sở</div>
                    <ul className="footer__list">
                        <li>
                            <div className="footer__item">
                                <img className="footer__icon" src="/assets/ft-ic1.svg" alt=""/>
                                <div className="footer__info">
                                    Toà nhà Le Meridien, Tầng 7, 3C Tôn Đức Thắng, Phường Bến
                                    Nghé, Quận 1, Tp. Hồ Chí Minh
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="footer__item">
                                <img className="footer__icon" src="/assets/ft-ic2.svg" alt=""/>
                                <div className="footer__info">
                                    Hotline:
                                    <a className="bold" href="tel:18006277">18006277</a>
                                </div>
                            </div>
                        </li>
                        <li>
                            <div className="footer__item">
                                <img className="footer__icon" src="/assets/ft-ic3.svg" alt=""/>
                                <div className="footer__info">
                                    Email:
                                    <a href="mailto:cs@miraeasset.com.vn">cs@miraeasset.com.vn</a>
                                </div>
                            </div>
                        </li>
                    </ul>
                </div>
                <div className="col-3 grid_item grid_fb">
                    <a href="#" className="f-bold footer__title"
                        target="blank"><img src="/assets/ic-fb.png" className="ic" alt=""/>
                        Fanpage</a>
                   
                </div>
                <div className="col-3 grid_item">
                    <a href="#" className="f-bold footer__title"
                        target="blank"><img src="/assets/ic-yt.png" className="ic" alt=""/>
                        Youtube</a>
                   
                </div>
            </div>
        </div>
    </footer>
    );
}
export default Footer;