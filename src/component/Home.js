import axios from "axios";
import React, { memo, useEffect, useRef, useState } from "react";
import { useLocation } from 'react-router-dom';
import Tab1 from './Tab1';
import Tab2 from './Tab2';
import Tab3 from './Tab3';
import ic1 from '../assets/tg-ic1.svg';
import ic2 from '../assets/tg-ic2.svg';
import ic3 from '../assets/tg-ic3.svg';
import pr from '../assets/pr-bg.png';
import top1 from '../assets/top1.jpg';
import top2 from '../assets/top2.jpg';
import top3 from '../assets/top3.jpg';
import banbg from "../assets/ban-bg.png";

function Home(props) {
    const ServicesRef = useRef(null);
    let { hash } = useLocation();

    const [tab, setTab] = useState("tab1")
    const handleChangeTab = (para) => {
        setTab(para)
    }
    const [data, setData] = useState([])
    const [key, setKey] = useState("ngay")
    const handleChangeKey = (params) => {
        setKey(params)
    }

    React.useEffect(() => {
        if (hash) {
            ServicesRef.current.scrollIntoView()
            document.getElementById("home").classList.remove("ation")
        }
        else {
            document.getElementById("home").classList.add("ation")
            document.getElementById("bxh").classList.remove("ation")
        }
    }, [hash])
    useEffect(() => {
        if(key === "ngay") {
            axios.get(`http://103.101.160.120:8888/topAccount?type=1d`)
            .then(res => {
                if (res.data?.rc > 0) {
                    const db = res.data.data
                    setData([...db])
                     
                } else {

                }
            }).catch(e => {
                // error
            })
        }
        if(key === "thang") {
            axios.get(`http://103.101.160.120:8888/topAccount?type=1m`)
            .then(res => {
                if (res.data?.rc > 0) {
                    const db = res.data.data
                    setData([...db])
                     
                } else {

                }
            }).catch(e => {
                // error
            })
        }
        if(key === "name") {
            axios.get(`http://103.101.160.120:8888/topAccount?type=1y`)
            .then(res => {
                if (res.data?.rc > 0) {
                    const db = res.data.data
                    setData([...db])
                     
                } else {

                }
            }).catch(e => {
                // error
            })
        }
        

    }, [])
    console.log("====check data====", data)
    return (
        <>
            <section className="section intro" id="information">
                <div className="container intro_container">
                    <div className="col-6 intro_col">
                        <h2 className="intro__title" data-aos="fade-up">
                            ĐẤU TRƯỜNG CHỨNG KHOÁN
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
                            Công ty Chứng khoán sẽ luôn đồng hành cùng quý khách hàng
                            trên hành trình này để hiện thực hóa con đường thành công của mình.
                        </p>
                    </div>
                    <div className="col-6 intro_col_vid">
                        <a href="#" className="intro_vid">
                            <img className="intro_img" src={banbg} alt="" />
                        </a>
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
                                            <img src={ic1} alt="" />
                                        </div>
                                        <div className="join_title f-bold">
                                            ĐĂNG KÝ
                                            <div className="ora ora20">25/04/2022 - 13/05/2022</div>
                                        </div>
                                        <div className="join_txt">
                                            Bạn cần mở tài khoản giao dịch tại Công ty Chứng Khoán
                                            trước để tham gia cuộc thi.
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="join_item">
                                        <div className="join_step blue">BƯỚC 02</div>
                                        <div className="join_ic">
                                            <img src={ic2} alt="" />
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
                                            <img src={ic3} alt="" />
                                        </div>
                                        <div className="join_title f-bold">
                                            TRANH TÀI

                                            <div className="ora ora20">16/05/2022 - 08/07/2022</div>
                                        </div>
                                        <div className="join_txt">
                                            Chính thức tranh tài cuộc đua đến ngôi vô địch
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
                        <div className={"button2 " + (tab === "tab1" ? "active_tab" : "")} onClick={() => handleChangeTab("tab1")}>CHAMPION LEAGUE</div>
                        <div className={"button2 " + (tab === "tab2" ? "active_tab" : "")} onClick={() => handleChangeTab("tab2")}>PREMIER LEAGUE</div>
                        <div className={"button2 " + (tab === "tab3" ? "active_tab" : "")} onClick={() => handleChangeTab("tab3")}>ĐĂNG KÍ SỚM</div>
                    </div>
                    {(tab === "tab1") && <Tab1 />}
                    {(tab === "tab2") && <Tab2 />}
                    {(tab === "tab3") && <Tab3 />}
                </div>
                <img src={pr} alt="" className="prize_bg" />
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
                            bảng xếp hạng 2022 - Mùa 4
                        </span>
                    </h2>
                    {/* <div className="rank_form">
                        <form action="" className="rank_search">
                            <input type="text" className="ser_inp" placeholder="Tìm kiếm " />
                            <button className="ser_btn" type="submit">
                                <img src="/assets/ser-ic.svg" alt="" />
                            </button>
                        </form>
                    </div> */}
                    <div className="tab">
                        <div className="tab_wrap">
                            <div className="tab_chung">
                                <div className="tab-container">
                                    <div className="tab-wrapper">
                                        <div className={" tab_slide " + (key === "ngay" ? "active" : "")} onClick={() => handleChangeKey("ngay")}>ngày</div>
                                        <div className={" tab_slide " + (key === "thang" ? "active" : "")} onClick={() => handleChangeKey("thang")}>tháng </div>
                                        <div className={" tab_slide " + (key === "nam" ? "active" : "")} onClick={() => handleChangeKey("nam")}>năm</div>
                                    </div>

                                </div>
                            </div>
                            <div className="tab_main">

                                {key === "ngay" && <div className="tab_content">
                                    <table className="table">
                                        <thead className="title">
                                            <tr>
                                                <th className="left">xếp hạng</th>
                                                <th>tài khoản</th>
                                                <th className="left">nickname</th>
                                                <th className="left">lợi nhuận (%)</th>
                                                <th>số mã chứng khoán</th>
                                            </tr>
                                        </thead>
                
                                        <tbody className="content">
                                            {data.map((item, index) => {
                                                if(index < 10) {
                                                    return (
                                                        <tr key={item.RN}>
                                                            <td className="center"> 
                                                            {item.RN === 1 && <img className="img_top" src={top1}/>}
                                                            {item.RN === 2 && <img className="img_top" src={top2}/>}
                                                            {item.RN === 3 && <img className="img_top" src={top3}/>}
                                                            {(item.RN !==1 && item.RN !=2 && item.RN !==3) ? item.RN : ""}
                                                            </td>
                                                            <td className="left">{item.C_ACCOUNT_CODE}</td>
                                                            <td className="left">{item.C_ACCOUNT_NAME}</td>
                                                            <td className="right">{item.C_GAIN_LOSS}</td>
                                                            <td className="right">{item.C_STOCK_NUMBER}</td>
                                                        </tr>
                                                    );
                                                }
                                               
                                            })}

                                        </tbody>
                                    </table>
                                </div>}
                                {(key === 'thang') && <div className="tab_content">
                                    <table className="table">
                                    <thead className="title">
                                            <tr>
                                                <th className="left">xếp hạng</th>
                                                <th>tài khoản</th>
                                                <th className="left">nickname</th>
                                                <th className="left">lợi nhuận (%)</th>
                                                <th>số mã chứng khoán</th>
                                            </tr>
                                        </thead>
                
                                        <tbody className="content">
                                            {data.map((item, index) => {
                                                if (index < 10) {
                                                    return (
                                                        <tr key={item.RN}>
                                                            <td className="center"> 
                                                            {item.RN === 1 && <img className="img_top" src={top1}/>}
                                                            {item.RN === 2 && <img className="img_top" src={top2}/>}
                                                            {item.RN === 3 && <img className="img_top" src={top3}/>}
                                                            {(item.RN !==1 && item.RN !=2 && item.RN !==3) ? item.RN : ""}
                                                            </td>
                                                            <td className="left">{item.C_ACCOUNT_CODE}</td>
                                                            <td className="left">{item.C_ACCOUNT_NAME}</td>
                                                            <td className="right">{item.C_GAIN_LOSS}</td>
                                                            <td className="right">{item.C_STOCK_NUMBER}</td>
                                                        </tr>
                                                    );
                                                }
                                                 
                                            })}

                                        </tbody>
                                    </table>
                                </div>}
                                {(key === 'nam') && <div className="tab_content">
                                    <table className="table">
                                    <thead className="title">
                                            <tr>
                                                <th className="left">xếp hạng</th>
                                                <th>tài khoản</th>
                                                <th className="left">nickname</th>
                                                <th className="left">lợi nhuận (%)</th>
                                                <th>số mã chứng khoán</th>
                                            </tr>
                                        </thead>
                
                                        <tbody className="content">
                                            {data.map((item, index) => {
                                                if(index < 10) {
                                                    return (
                                                        <tr key={item.RN}>
                                                            <td className="center"> 
                                                            {item.RN === 1 && <img className="img_top" src={top1}/>}
                                                            {item.RN === 2 && <img className="img_top" src={top2}/>}
                                                            {item.RN === 3 && <img className="img_top" src={top3}/>}
                                                            {(item.RN !==1 && item.RN !=2 && item.RN !==3) ? item.RN : ""}
                                                            </td>
                                                            <td className="left">{item.C_ACCOUNT_CODE}</td>
                                                            <td className="left">{item.C_ACCOUNT_NAME}</td>
                                                            <td className="right">{item.C_GAIN_LOSS}</td>
                                                            <td className="right">{item.C_STOCK_NUMBER}</td>
                                                        </tr>
                                                    );
                                                }
                                                
                                            })}

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