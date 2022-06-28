
import { NavLink} from  'react-router-dom'
function BXH (props) {
    const queryParams = new URLSearchParams(window.location.search)
    const gt = queryParams.get("giai-thuong")
    const bxh = queryParams.get("bxh")

    return(
        <section className="section rank" id="bangxephang">
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
    );
}
export default BXH;