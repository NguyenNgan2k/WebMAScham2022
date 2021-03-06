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
                            ?????U TR?????NG CH???NG KHO??N
                        </h2>
                        <p className="intro__txt" data-aos="fade-up" data-aos-delay="200">
                            N??i c??c nh?? ?????u t?? tr???c ti???p ??p d???ng c??c ph????ng ph??p,
                            tri???t l?? ?????u t?? c???a ri??ng m??nh,
                            th??? th??ch b???n l??nh v?? ki???n th???c v???i s??? thay ?????i c???a th??? tr?????ng.
                        </p>
                        <p className="intro__txt" data-aos="fade-up" data-aos-delay="400">
                            Ch??ng t??i tin r???ng, th??nh c??ng b???n v???ng trong ?????u t?? l?? m???t
                            h??nh tr??nh kh??ng ng???ng h???c h???i v?? r??n luy???n m???i ng??y.
                        </p>
                        <p className="intro__txt" data-aos="fade-up" data-aos-delay="600">
                            C??ng ty Ch???ng kho??n s??? lu??n ?????ng h??nh c??ng qu?? kh??ch h??ng
                            tr??n h??nh tr??nh n??y ????? hi???n th???c h??a con ???????ng th??nh c??ng c???a m??nh.
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
                            c??ch th???c tham gia
                        </h2>
                    </div>
                    <div className="swiper-chung">
                        <div className="swiper-container">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide swiper-slide-active">
                                    <div className="join_item">
                                        <div className="join_step">B?????C 01</div>
                                        <div className="join_ic">
                                            <img src={ic1} alt="" />
                                        </div>
                                        <div className="join_title f-bold">
                                            ????NG K??
                                            <div className="ora ora20">25/04/2022 - 13/05/2022</div>
                                        </div>
                                        <div className="join_txt">
                                            B???n c???n m??? t??i kho???n giao d???ch t???i C??ng ty Ch???ng Kho??n
                                            tr?????c ????? tham gia cu???c thi.
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="join_item">
                                        <div className="join_step blue">B?????C 02</div>
                                        <div className="join_ic">
                                            <img src={ic2} alt="" />
                                        </div>
                                        <div className="join_title f-bold">
                                            PH??N LO???I B???NG ?????U

                                            <div className="ora ora20">13/05/2022</div>
                                        </div>
                                        <div className="join_txt">
                                            D???a tr??n t???ng t??i s???n r??ng (c??? phi???u v?? ti???n), BTC s??? x???p
                                            b???n v??o b???ng thi ?????u Premier ho???c Champion.
                                        </div>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="join_item">
                                        <div className="join_step">B?????C 03</div>
                                        <div className="join_ic">
                                            <img src={ic3} alt="" />
                                        </div>
                                        <div className="join_title f-bold">
                                            TRANH T??I

                                            <div className="ora ora20">16/05/2022 - 08/07/2022</div>
                                        </div>
                                        <div className="join_txt">
                                            Ch??nh th???c tranh t??i cu???c ??ua ?????n ng??i v?? ?????ch
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
                        <span className="ora">GI???I TH?????NG H???P D???N</span>
                    </h2>
                    <div className="prize_txt">
                        T???ng gi?? tr??? gi???i th?????ng l??n ?????n g???n
                        <span className="blue f-bold"> 400 tri???u ?????ng</span>
                    </div>
                    <div className="prize_btn">
                        <div className={"button2 " + (tab === "tab1" ? "active_tab" : "")} onClick={() => handleChangeTab("tab1")}>CHAMPION LEAGUE</div>
                        <div className={"button2 " + (tab === "tab2" ? "active_tab" : "")} onClick={() => handleChangeTab("tab2")}>PREMIER LEAGUE</div>
                        <div className={"button2 " + (tab === "tab3" ? "active_tab" : "")} onClick={() => handleChangeTab("tab3")}>????NG K?? S???M</div>
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
                        b???n ???? s???n s??ng
                        <br />
                        ????? ti???n l??n v??? tr?? d???n ?????u ch??a?
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
                            b???ng x???p h???ng 2022 - M??a 4
                        </span>
                    </h2>
                    {/* <div className="rank_form">
                        <form action="" className="rank_search">
                            <input type="text" className="ser_inp" placeholder="T??m ki???m " />
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
                                        <div className={" tab_slide " + (key === "ngay" ? "active" : "")} onClick={() => handleChangeKey("ngay")}>ng??y</div>
                                        <div className={" tab_slide " + (key === "thang" ? "active" : "")} onClick={() => handleChangeKey("thang")}>th??ng </div>
                                        <div className={" tab_slide " + (key === "nam" ? "active" : "")} onClick={() => handleChangeKey("nam")}>n??m</div>
                                    </div>

                                </div>
                            </div>
                            <div className="tab_main">

                                {key === "ngay" && <div className="tab_content">
                                    <table className="table">
                                        <thead className="title">
                                            <tr>
                                                <th className="left">x???p h???ng</th>
                                                <th>t??i kho???n</th>
                                                <th className="left">nickname</th>
                                                <th className="left">l???i nhu???n (%)</th>
                                                <th>s??? m?? ch???ng kho??n</th>
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
                                                <th className="left">x???p h???ng</th>
                                                <th>t??i kho???n</th>
                                                <th className="left">nickname</th>
                                                <th className="left">l???i nhu???n (%)</th>
                                                <th>s??? m?? ch???ng kho??n</th>
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
                                                <th className="left">x???p h???ng</th>
                                                <th>t??i kho???n</th>
                                                <th className="left">nickname</th>
                                                <th className="left">l???i nhu???n (%)</th>
                                                <th>s??? m?? ch???ng kho??n</th>
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