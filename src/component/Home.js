import React, { memo, useRef } from "react";
import { NavLink, useLocation } from 'react-router-dom'
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import BXH  from "./BXH";
// Da thay doi

function Home(props) {
    const queryParams = new URLSearchParams(window.location.search)
    const gt = queryParams.get("giai-thuong")
    const bxh = queryParams.get("bxh")
    const ServicesRef = useRef(null);

    let { hash } = useLocation();

    React.useEffect(() => {
        if(hash){
            ServicesRef.current.scrollIntoView() 
            document.getElementById("home").classList.remove("ation")
        }
        else {
           document.getElementById("home").classList.add("ation")
           document.getElementById("bxh").classList.remove("ation")
        }
    }, [hash])

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
                            <a className="f-bold blue" target="blank"> tại đây</a>
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
                        <NavLink className="button2" to={(bxh ? '?bxh=' + bxh + '&' : '?') + "giai-thuong=tab1"} >CHAMPION LEAGUE</NavLink>
                        <NavLink className="button2" to={(bxh ? '?bxh=' + bxh + '&' : '?') + "giai-thuong=tab2"}>PREMIER LEAGUE</NavLink>
                        <NavLink className="button2" to={(bxh ? '?bxh=' + bxh + '&' : '?') + "giai-thuong=tab3"}>ĐĂNG KÍ SỚM</NavLink>
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
            <section className="section rank" id="bangxephang" ref={ServicesRef}>
                <div className="container">
                    <h2 className="section_title">
                        <span className="ora">
                            bảng xếp hạng MAScham 2022 - Mùa 4
                        </span>
                    </h2>
                    <p className="rank_txt">
                        KẾT QUẢ ĐƯỢC CẬP NHẬT MỚI NHẤT VÀO CUỐI NGÀY
                        <span id="date-time">14/06/2022</span>
                    </p>
                    <div className="rank_form">
                        <form action="" className="rank_search">
                            <input type="text" className="ser_inp" placeholder="Tìm kiếm " />
                            <button className="ser_btn" type="submit">
                                <img src="/assets/ser-ic.svg" alt="" />
                            </button>
                        </form>
                    </div>
                    <div className="tab">
                        <div className="tab_wrap">
                            <div className="tab_chung">
                                <div className="tab-container">
                                    <div className="tab-wrapper">
                                        <NavLink className="tab_slide" to={(gt ? '?giai-thuong=' + gt + '&' : '?') + "bxh=all"} activeClassName="active" >
                                            <div className="tab_btn f-bold" >All</div>
                                        </NavLink>
                                        <NavLink className="tab_slide" to={(gt ? '?giai-thuong=' + gt + '&' : '?') + "bxh=champion"} activeClassName="active">
                                            <div className="tab_btn f-bold">Champion League </div>
                                        </NavLink>
                                        <NavLink className="tab_slide" to={(gt ? '?giai-thuong=' + gt + '&' : '?') + "bxh=premier"} activeClassName="active" >
                                            <div className="tab_btn f-bold" >Premier League</div>
                                        </NavLink>

                                    </div>

                                </div>
                            </div>
                            <div className="tab_main">

                                {(!bxh || bxh === 'all') && <div className="tab_content">
                                    <table className="table">
                                        <thead className="title">
                                            <tr>
                                                <th className="left">xếp hạng</th>
                                                <th>tài khoản</th>
                                                <th className="left">nickname</th>
                                                <th className="left">lợi nhuận (%)</th>
                                                <th>bảng thi đấu</th>
                                            </tr>
                                        </thead>
                                        <tbody className="content">
                                            <tr>
                                                <td className="left">1</td>
                                                <td className="left">077C380XXX</td>
                                                <td className="left">Tr4d3r9xS1uK4pV1Pr0 </td>
                                                <td className="left">113.3</td>
                                                <td>Champion</td>
                                            </tr>
                                            <tr>
                                                <td className="left">2</td>
                                                <td className="left">077C880XXX</td>
                                                <td className="left">Tram Vo</td>
                                                <td className="left">84.96</td>
                                                <td>Premier</td>
                                            </tr>
                                            <tr>
                                                <td className="left">3</td>
                                                <td className="left">077C982XXX</td>
                                                <td className="left">Mimiamazon</td>
                                                <td className="left">79.73</td>
                                                <td>Premier</td>
                                            </tr>
                                            <tr>
                                                <td className="left">4</td>
                                                <td className="left">077C382XXX</td>
                                                <td className="left">Justin</td>
                                                <td className="left">74.42</td>
                                                <td>Premier</td>
                                            </tr>
                                            <tr>
                                                <td className="left">5</td>
                                                <td className="left">077C786XXX</td>
                                                <td className="left">cutloss</td>
                                                <td className="left">67.84</td>
                                                <td>Champion</td>
                                            </tr>
                                            <tr>
                                                <td className="left">6</td>
                                                <td className="left">077C480XXX</td>
                                                <td className="left">Max1982</td>
                                                <td className="left">62.69</td>
                                                <td>Champion</td>
                                            </tr>
                                            <tr>
                                                <td className="left">7</td>
                                                <td className="left">077C782XXX</td>
                                                <td className="left">Tung kun</td>
                                                <td className="left">56.2</td>
                                                <td>Champion</td>
                                            </tr>
                                            <tr>
                                                <td className="left">8</td>
                                                <td className="left">077C380XXX</td>
                                                <td className="left">GỒNG LÃI</td>
                                                <td className="left">50.94</td>
                                                <td>Premier</td>
                                            </tr>
                                            <tr>
                                                <td className="left">9</td>
                                                <td className="left">077C382XXX</td>
                                                <td className="left">HienSon</td>
                                                <td className="left">49.47</td>
                                                <td>Premier</td>
                                            </tr>
                                            <tr>
                                                <td className="left">10</td>
                                                <td className="left">077C983XXX</td>
                                                <td className="left">khanhcuong</td>
                                                <td className="left">48.82</td>
                                                <td>Premier</td>
                                            </tr>
                                            <tr>
                                                <td className="left">11</td>
                                                <td className="left">077C127XXX</td>
                                                <td className="left">Mai Mạnh</td>
                                                <td className="left">46.22</td>
                                                <td>Premier</td>
                                            </tr>
                                            <tr>
                                                <td className="left">12</td>
                                                <td className="left">077C385XXX</td>
                                                <td className="left">Ý ôm bom </td>
                                                <td className="left">45.87</td>
                                                <td>Premier</td>
                                            </tr>
                                            <tr>
                                                <td className="left">13</td>
                                                <td className="left">077C114XXX</td>
                                                <td className="left">MrGolia</td>
                                                <td className="left">45.22</td>
                                                <td>Premier</td>
                                            </tr>
                                            <tr>
                                                <td className="left">14</td>
                                                <td className="left">077C380XXX</td>
                                                <td className="left">Huy Hoang</td>
                                                <td className="left">44.3</td>
                                                <td>Champion</td>
                                            </tr>
                                            <tr>
                                                <td className="left">15</td>
                                                <td className="left">077C780XXX</td>
                                                <td className="left">Toilm15173</td>
                                                <td className="left">43.12</td>
                                                <td>Premier</td>
                                            </tr>
                                            <tr>
                                                <td className="left">16</td>
                                                <td className="left">077C382XXX</td>
                                                <td className="left">BEST 01</td>
                                                <td className="left">42.83</td>
                                                <td>Premier</td>
                                            </tr>
                                            <tr>
                                                <td className="left">17</td>
                                                <td className="left">077C489XXX</td>
                                                <td className="left">No Name - VT</td>
                                                <td className="left">41.99</td>
                                                <td>Premier</td>
                                            </tr>
                                            <tr>
                                                <td className="left">18</td>
                                                <td className="left">077C388XXX</td>
                                                <td className="left">iêm Ý vẫn xinh</td>
                                                <td className="left">40.61</td>
                                                <td>Premier</td>
                                            </tr>
                                            <tr>
                                                <td className="left">19</td>
                                                <td className="left">077C087XXX</td>
                                                <td className="left">Andylee</td>
                                                <td className="left">39.96</td>
                                                <td>Premier</td>
                                            </tr>
                                            <tr>
                                                <td className="left">20</td>
                                                <td className="left">077C133XXX</td>
                                                <td className="left">swingtrader</td>
                                                <td className="left">39.95</td>
                                                <td>Premier</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>}
                                {(bxh === 'champion') && <div className="tab_content">
                                    <table className="table">
                                        <thead className="title">
                                            <tr>
                                                <th className="left">xếp hạng</th>
                                                <th>tài khoản</th>
                                                <th className="left">nickname</th>
                                                <th className="left">lợi nhuận (%)</th>
                                                <th>bảng thi đấu</th>
                                            </tr>
                                        </thead>
                                        <tbody className="content">
                                            <tr>
                                                <td className="left">1</td>
                                                <td className="left">077C380XXX</td>
                                                <td className="left">Tr4d3r9xS1uK4pV1Pr0 </td>
                                                <td className="left">113.3</td>
                                                <td>Champion</td>
                                            </tr>
                                            <tr>
                                                <td className="left">2</td>
                                                <td className="left">077C786XXX</td>
                                                <td className="left">cutloss</td>
                                                <td className="left">67.84</td>
                                                <td>Champion</td>
                                            </tr>
                                            <tr>
                                                <td className="left">3</td>
                                                <td className="left">077C480XXX</td>
                                                <td className="left">Max1982</td>
                                                <td className="left">62.69</td>
                                                <td>Champion</td>
                                            </tr>
                                            <tr>
                                                <td className="left">4</td>
                                                <td className="left">077C782XXX</td>
                                                <td className="left">Tung kun</td>
                                                <td className="left">56.2</td>
                                                <td>Champion</td>
                                            </tr>
                                            <tr>
                                                <td className="left">5</td>
                                                <td className="left">077C380XXX</td>
                                                <td className="left">Huy Hoang</td>
                                                <td className="left">44.3</td>
                                                <td>Champion</td>
                                            </tr>
                                            <tr>
                                                <td className="left">6</td>
                                                <td className="left">077C880XXX</td>
                                                <td className="left">Đăng-Thắng</td>
                                                <td className="left">38.51</td>
                                                <td>Champion</td>
                                            </tr>
                                            <tr>
                                                <td className="left">7</td>
                                                <td className="left">077C079XXX</td>
                                                <td className="left">Tèo 223</td>
                                                <td className="left">36.41</td>
                                                <td>Champion</td>
                                            </tr>
                                            <tr>
                                                <td className="left">8</td>
                                                <td className="left">077C112XXX</td>
                                                <td className="left">Đinh Danh Vũ</td>
                                                <td className="left">35.73</td>
                                                <td>Champion</td>
                                            </tr>
                                            <tr>
                                                <td className="left">9</td>
                                                <td className="left">077C887XXX</td>
                                                <td className="left">xuyenbinh</td>
                                                <td className="left">34.97</td>
                                                <td>Champion</td>
                                            </tr>
                                            <tr>
                                                <td className="left">10</td>
                                                <td className="left">077C880XXX</td>
                                                <td className="left">pokerface</td>
                                                <td className="left">30.99</td>
                                                <td>Champion</td>
                                            </tr>
                                            <tr>
                                                <td className="left">11</td>
                                                <td className="left">077C486XXX</td>
                                                <td className="left">khanh.bh</td>
                                                <td className="left">30.76</td>
                                                <td>Champion</td>
                                            </tr>
                                            <tr>
                                                <td className="left">12</td>
                                                <td className="left">077C132XXX</td>
                                                <td className="left">TDStock</td>
                                                <td className="left">28.43</td>
                                                <td>Champion</td>
                                            </tr>
                                            <tr>
                                                <td className="left">13</td>
                                                <td className="left">077C385XXX</td>
                                                <td className="left">thi cho Ý vui</td>
                                                <td className="left">27.51</td>
                                                <td>Champion</td>
                                            </tr>
                                            <tr>
                                                <td className="left">14</td>
                                                <td className="left">077C780XXX</td>
                                                <td className="left">Entercom</td>
                                                <td className="left">25.99</td>
                                                <td>Champion</td>
                                            </tr>
                                            <tr>
                                                <td className="left">15</td>
                                                <td className="left">077C383XXX</td>
                                                <td className="left">Dance dance dance</td>
                                                <td className="left">23.27</td>
                                                <td>Champion</td>
                                            </tr>
                                            <tr>
                                                <td className="left">16</td>
                                                <td className="left">077C681XXX</td>
                                                <td className="left">oet o oet</td>
                                                <td className="left">21.62</td>
                                                <td>Champion</td>
                                            </tr>
                                            <tr>
                                                <td className="left">17</td>
                                                <td className="left">077C119XXX</td>
                                                <td className="left">Quyenpie</td>
                                                <td className="left">19.3</td>
                                                <td>Champion</td>
                                            </tr>
                                            <tr>
                                                <td className="left">18</td>
                                                <td className="left">077C881XXX</td>
                                                <td className="left">zzLazyCatzz</td>
                                                <td className="left">19.18</td>
                                                <td>Champion</td>
                                            </tr>
                                            <tr>
                                                <td className="left">19</td>
                                                <td className="left">077C880XXX</td>
                                                <td className="left">Gấu</td>
                                                <td className="left">17.89</td>
                                                <td>Champion</td>
                                            </tr>
                                            <tr>
                                                <td className="left">20</td>
                                                <td className="left">077C077XXX</td>
                                                <td className="left">henry</td>
                                                <td className="left">17.38</td>
                                                <td>Champion</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>}
                                {(bxh === 'premier') && <div className="tab_content">
                                    <table className="table">
                                        <thead className="title">
                                            <tr>
                                                <th className="left">xếp hạng</th>
                                                <th className="left">tài khoản</th>
                                                <th className="left">nickname</th>
                                                <th className="left">lợi nhuận (%)</th>
                                                <th>bảng thi đấu</th>
                                            </tr>
                                        </thead>
                                        <tbody className="content">
                                            <tr>
                                                <td className="left">1</td>
                                                <td className="left">077C880XXX</td>
                                                <td className="left">Tram Vo</td>
                                                <td className="left">84.96</td>
                                                <td>Premier</td>
                                            </tr>
                                            <tr>
                                                <td className="left">2</td>
                                                <td className="left">077C982XXX</td>
                                                <td className="left">Mimiamazon</td>
                                                <td className="left">79.73</td>
                                                <td>Premier</td>
                                            </tr>
                                            <tr>
                                                <td className="left">3</td>
                                                <td className="left">077C382XXX</td>
                                                <td className="left">Justin</td>
                                                <td className="left">74.42</td>
                                                <td>Premier</td>
                                            </tr>
                                            <tr>
                                                <td className="left">4</td>
                                                <td className="left">077C380XXX</td>
                                                <td className="left">GỒNG LÃI</td>
                                                <td className="left">50.94</td>
                                                <td>Premier</td>
                                            </tr>
                                            <tr>
                                                <td className="left">5</td>
                                                <td className="left">077C382XXX</td>
                                                <td className="left">HienSon</td>
                                                <td className="left">49.47</td>
                                                <td>Premier</td>
                                            </tr>
                                            <tr>
                                                <td className="left">6</td>
                                                <td className="left">077C983XXX</td>
                                                <td className="left">khanhcuong</td>
                                                <td className="left">48.82</td>
                                                <td>Premier</td>
                                            </tr>
                                            <tr>
                                                <td className="left">7</td>
                                                <td className="left">077C127XXX</td>
                                                <td className="left">Mai Mạnh</td>
                                                <td className="left">46.22</td>
                                                <td>Premier</td>
                                            </tr>
                                            <tr>
                                                <td className="left">8</td>
                                                <td className="left">077C385XXX</td>
                                                <td className="left">Ý ôm bom </td>
                                                <td className="left">45.87</td>
                                                <td>Premier</td>
                                            </tr>
                                            <tr>
                                                <td className="left">9</td>
                                                <td className="left">077C114XXX</td>
                                                <td className="left">MrGolia</td>
                                                <td className="left">45.22</td>
                                                <td>Premier</td>
                                            </tr>
                                            <tr>
                                                <td className="left">10</td>
                                                <td className="left">077C780XXX</td>
                                                <td className="left">Toilm15173</td>
                                                <td className="left">43.12</td>
                                                <td>Premier</td>
                                            </tr>
                                            <tr>
                                                <td className="left">11</td>
                                                <td className="left">077C382XXX</td>
                                                <td className="left">BEST 01</td>
                                                <td className="left">42.83</td>
                                                <td>Premier</td>
                                            </tr>
                                            <tr>
                                                <td className="left">12</td>
                                                <td className="left">077C489XXX</td>
                                                <td className="left">No Name - VT</td>
                                                <td className="left">41.99</td>
                                                <td>Premier</td>
                                            </tr>
                                            <tr>
                                                <td className="left">13</td>
                                                <td className="left">077C388XXX</td>
                                                <td className="left">iêm Ý vẫn xinh</td>
                                                <td className="left">40.61</td>
                                                <td>Premier</td>
                                            </tr>
                                            <tr>
                                                <td className="left">14</td>
                                                <td className="left">077C087XXX</td>
                                                <td className="left">Andylee</td>
                                                <td className="left">39.96</td>
                                                <td>Premier</td>
                                            </tr>
                                            <tr>
                                                <td className="left">15</td>
                                                <td className="left">077C133XXX</td>
                                                <td className="left">swingtrader</td>
                                                <td className="left">39.95</td>
                                                <td>Premier</td>
                                            </tr>
                                            <tr>
                                                <td className="left">16</td>
                                                <td className="left">077C089XXX</td>
                                                <td className="left">Quangtuan</td>
                                                <td className="left">39.35</td>
                                                <td>Premier</td>
                                            </tr>
                                            <tr>
                                                <td className="left">17</td>
                                                <td className="left">077C681XXX</td>
                                                <td className="left">Thuha288</td>
                                                <td className="left">38.18</td>
                                                <td>Premier</td>
                                            </tr>
                                            <tr>
                                                <td className="left">18</td>
                                                <td className="left">077C121XXX</td>
                                                <td className="left">SATAN666</td>
                                                <td className="left">37.96</td>
                                                <td>Premier</td>
                                            </tr>
                                            <tr>
                                                <td className="left">19</td>
                                                <td className="left">077C488XXX</td>
                                                <td className="left">MASTER</td>
                                                <td className="left">35.74</td>
                                                <td>Premier</td>
                                            </tr>
                                            <tr>
                                                <td className="left">20</td>
                                                <td className="left">077C983XXX</td>
                                                <td className="left">Lee</td>
                                                <td className="left">35.31</td>
                                                <td>Premier</td>
                                            </tr>
                                        </tbody>
                                    </table>
                                </div>}
                            </div>
                        </div>


                    </div>
                </div>
            </section>

        </>

    );
}
export default memo(Home);