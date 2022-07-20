import banlogo from "../assets/logo-ban.png";
import bantitle from "../assets/title-ban.png";
import banbg from "../assets/ban-bg.png";
import award from "../assets/award-ban.png";
import banphone from "../assets/ban-phone.png";
import icfb from "../assets/ic-fb.png";
import icyt from "../assets/ic-yt.png";

function Banner() {
    return(
        <section className="banner">
            <div className="banner_container">
                <div className="banner_img">
                    <a href="#">
                        <img className="a_img" src={banbg} />
                    </a>
                </div>
                <div className="banner_content">
                   
                    <div className="page_title">
                        <img  className="a_img"  src={bantitle} alt=""/>
                    </div>
                    <div className="ban_txt">
                        <img src={award} alt=""/>
                    </div>
                    <div className="auth-action">
                        <a href="#" className="banner_btn1">
                            tranh tài ngay
                        </a>
                    </div>
                    
                </div>
            </div>
            <div className="banner_contect">
                <a href="#" className="banner_phone">
                    <img src={banphone} alt=""/>
                    <div className="banner_phone_info">
                        <div className="phone_ita">HOTLINE</div>
                        <div className="phone_bold">(+84) 2 8888 2 6868</div>
                    </div>
                </a>
                <div className="banner_icon">
                    <a href="#" className="banner_fb" target="blank">
                        <img src={icfb} alt=""/>
                    </a>
                    <a href="#" className="banner_yt" target="blank">
                        <img src={icyt} alt=""/>
                    </a>
                    <div className="banner_title">Social Media</div>
                </div>
            </div>
        </section>
    );
}
export default Banner; 