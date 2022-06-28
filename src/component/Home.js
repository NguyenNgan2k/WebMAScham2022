import { memo, React } from "react";
import { NavLink, useLocation } from 'react-router-dom'
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import BXH  from "./BXH";
function Home(props) {
    const queryParams = new URLSearchParams(window.location.search)
    const gt = queryParams.get("giai-thuong")
    const bxh = queryParams.get("bxh")
    return (
        <>
            <section className="section intro" id="information">
                <div className="container intro_container">
                    <div className="col-6 intro_col">
                        <h2 className="intro__title" data-aos="fade-up">
                            ĐẤU TRƯỜNG CHỨNG KHOÁN MASCHAM
                        </h2>
                        <p className="intro__txt" data-aos="fade-up" data-aos-delay="200">
                            Nơi các nhà đầu tư trực tiếp áp dụng các phương pháp,
                            triết lý đầu tư của riêng mình,
                            thử thách bản lĩnh và kiến thức với sự thay đổi của thị trường.
                        </p>
                        <p className="intro__txt" data-aos="fade-up" data-aos-delay="400">
                            Chúng tôi tin rằng, thành công bền vững trong đầu tư là một
                            hành trình không ngừng học hỏi và rèn luyện mỗi ngày.
                        </p>
                        <p className="intro__txt" data-aos="fade-up" data-aos-delay="600">
                            Tại <span className="f-bold">MAScham 2022 - Mùa 4</span>,
                            Công ty Chứng khoán Mirae Asset sẽ luôn đồng hành cùng quý khách hàng
                            trên hành trình này để hiện thực hóa con đường thành công của mình.
                        </p>
                    </div>
                    <div className="col-6 intro_col_vid">
                        <a href="#" className="intro_vid">
                            <img className="intro_img" src="/assets/home-vid.png" alt="" />
                        </a>
                    </div>
                    <div className="col intro_col">
                        <p className="intro_txt" data-aos="fade-up" data-aos-delay="800">
                            Sau 3 lần tổ chức, với hơn <span className="f-bold">2500+</span> người
                            tham gia, MAScham tự hào là sân chơi nhận được sự ủng hộ đông đảo
                            của các nhà đầu tư đã có kinh nghiệm và mới tham gia vào thị trường.
                        </p>
                        <p className="intro_txt" data-aos="fade-up" data-aos-delay="1000">
                            Các nhà đầu tư được chia làm 2 bảng đấu với mức tổng giá trị tài sản
                            ròng dưới 500 triệu đối với bảng Premier League và trên 500 triệu đối với bảng Champion league.
                        </p>
                        <p className="intro_txt" data-aos="fade-up" data-aos-delay="1200">
                            Tất cả những gì bạn phải làm là
                            <a href="#register-end" className="intro__link"> THAM GIA NGAY!</a> Càng tích lũy được nhiều lợi
                            nhuận,
                            bạn càng có cơ hội chiến thắng tại đấu trường này.
                        </p>
                        <p className="intro_txt" data-aos="fade-up" data-aos-delay="1200">
                            Cập nhật thị trường
                            <a href="#" className="f-bold blue" target="blank"> tại đây</a>
                        </p>
                        <p className="intro_txt" data-aos="fade-up" data-aos-delay="1200">
                            Bổ sung kiến thức chứng khoán
                            <a href="#" className="f-bold blue" target="blank"> tại đây</a>
                        </p>
                        <div className="intro-action">
                            <a href="#" className="intro_btn">THAM GIA NGAY</a>
                        </div>
                    </div>
                </div>
            </section>

            <section className="section join">
                <div className="container">
                    <div className="col">
                        <h2 className="join_title">
                            cách thức tham gia
                        </h2>
                    </div>
                    <div className="swiper-chung">
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide swiper-slide-active">
                                    <div className="join_item">
                                        <div className="join_step">BƯỚC 01</div>
                                        <div className="join_ic">
                                            <img src="/assets/tg-ic1.svg" alt="" />
                                        </div>
                                        <div className="join_title f-bold">
                                            ĐĂNG KÝ
                                            <div className="ora ora20">25/04/2022 - 13/05/2022</div>
                                        </div>
                                        <div className="join_txt">
                                            Bạn cần mở tài khoản giao dịch tại Công ty Chứng Khoán
                                            Mirae Asset trước để tham gia cuộc thi.
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="join_item">
                                        <div className="join_step blue">BƯỚC 02</div>
                                        <div className="join_ic">
                                            <img src="/assets/tg-ic2.svg" alt="" />
                                        </div>
                                        <div className="join_title f-bold">
                                            PHÂN LOẠI BẢNG ĐẤU

                                            <div className="ora ora20">13/05/2022</div>
                                        </div>
                                        <div className="join_txt">
                                            Dựa trên tổng tài sản ròng (cổ phiếu và tiền), BTC sẽ xếp
                                            bạn vào bảng thi đấu Premier hoặc Champion.
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="join_item">
                                        <div className="join_step">BƯỚC 03</div>
                                        <div className="join_ic">
                                            <img src="/assets/tg-ic3.svg" alt="" />
                                        </div>
                                        <div className="join_title f-bold">
                                            TRANH TÀI

                                            <div className="ora ora20">16/05/2022 - 08/07/2022</div>
                                        </div>
                                        <div className="join_txt">
                                            Chính thức tranh tài cuộc đua đến ngôi vô địch
                                            <span className="f-bold">MAScham 2022 - Mùa 4</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section prize">
                <div className="container prize_container">
                    <h2 className="section_title">
                        <span className="ora">GIẢI THƯỞNG HẤP DẪN</span>
                    </h2>
                    <div className="prize_txt">
                        Tổng giá trị giải thưởng lên đến gần
                        <span className="blue f-bold"> 400 triệu đồng</span>
                    </div>
                    <div className="prize_btn">
                        <NavLink className="button2" to={(bxh ? '?bxh=' + bxh + '&' : '?') + "giai-thuong=tab1"} activeClassName="active">CHAMPION LEAGUE</NavLink>
                        <NavLink className="button2" to={(bxh ? '?bxh=' + bxh + '&' : '?') + "giai-thuong=tab2"} activeClassName="active">PREMIER LEAGUE</NavLink>
                        <NavLink className="button2" to={(bxh ? '?bxh=' + bxh + '&' : '?') + "giai-thuong=tab3"} activeClassName="active">ĐĂNG KÍ SỚM</NavLink>
                    </div>
                    {(!gt || gt === 'tab1') && <Tab1 />}
                    {(gt === 'tab2') && <Tab2 />}
                    {(gt === 'tab3') && <Tab3 />}
                </div>
                <img src="/assets/pr-bg.png" alt="" className="prize_bg" />
            </section>
            <section className="section intro">
                <div className="container intro_wrap">
                    <div className="col-6 intro_col_vid">
                        <a href="#" className="intro_vid">
                            <img src="/assets/avi.png" alt="" />
                        </a>
                    </div>
                    <div className="col-6 intro_col">
                        <h2 className="intro_title">
                            <span className="ora">Lời khuyên từ người thắng cuộc MAScham 2021 - mùa 1</span>
                        </h2>
                        <p className="intro_txt">
                            Cùng gặp gỡ cô gái vàng trong làng đầu tư chứng khoán: Quán quân
                            cuộc thi MAScham 2021 - mùa 1 tại bảng đấu Premier League, với
                            <span className="f-bold"> tỷ suất lợi nhuận 117.29% </span> trong 2
                            tháng.
                        </p>
                        <p className="intro_txt">
                            Vậy đâu là bí quyết thắng cuộc của cô gái này?
                        </p>
                    </div>
                </div>
            </section>
            <div className="ready section">
                <div className="container">
                    <div className="ready_title">
                        bạn đã sẵn sàng
                        <br />
                        để tiến lên vị trí dẫn đầu chưa?
                    </div>
                    <div className="intro-action">
                        <a href="" className="intro_btn">THAM GIA NGAY</a>
                    </div>
                </div>
            </div>
         <BXH />
           
        </>

    );
}
export default memo(Home);