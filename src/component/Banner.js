function Banner() {
    return(
        <section className="banner">
            <div className="banner_container">
                <div className="banner_img">
                    <a href="#">
                        <img className="a_img" src="/assets/ban-bg.png" />
                    </a>
                </div>
                <div className="banner_content">
                    <div className="page_subtitle">
                        <img src="/assets/logo-ban.png" alt=""/>
                    </div>
                    <div className="page_title">
                        <img src="/assets/title-ban.png" alt=""/>
                    </div>
                    <div className="ban_txt">
                        <img src="/assets/award-ban.png" alt=""/>
                    </div>
                    <div className="auth-action">
                        <a href="#" className="banner_btn1">
                            tranh tài ngay
                        </a>
                    </div>
                    <div className="banner-info">
                        <p>Đăng ký: 25/04/2022 - 13/05/2022 | Thi đấu: 16/05/2022 - 08/07/2022</p>
                        <p>18006277 | www.mascham.masvn.com | cs@miraeasset.com.vn</p>
                    </div>
                </div>
            </div>
            <div className="banner_contect">
                <a href="#" className="banner_phone">
                    <img src="/assets/ban-phone.png" alt=""/>
                    <div className="banner_phone_info">
                        <div className="phone_ita">HOTLINE</div>
                        <div className="phone_bold">18006277</div>
                    </div>
                </a>
                <div className="banner_icon">
                    <a href="#" className="banner_fb" target="blank">
                        <img src="/assets/ic-fb.png" alt=""/>
                    </a>
                    <a href="#" className="banner_yt" target="blank">
                        <img src="/assets/ic-yt.png" alt=""/>
                    </a>
                    <div className="banner_title">Social Media</div>
                </div>
            </div>
        </section>
    );
}
export default Banner; 