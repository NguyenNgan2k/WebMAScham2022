import { NavLink } from 'react-router-dom';
import '../css/history.css'
function History(props) {
    const queryParams = new URLSearchParams(window.location.search)
    const bnt = queryParams.get("bnt")
    console.log(bnt)
    return (
        <section className="faq">
            <div className="container">
                <h2 className="section_title">
                    <span className="ora"> Kết quả chung cuộc của tất cả các mùa </span>
                </h2>

                <div className="faq_wrap">
                    <NavLink to="?bnt=bnt_1">
                        <div className="faq_ques actBtn">
                            BẢNG XẾP HẠNG CHUNG CUỘC MASCHAM 2020 - MÙA 1
                        </div>
                    </NavLink>
                    {(bnt === 'bnt_1' && <ul className="faq_ans_history">
                        <section className="top">
                            <div className="container history_container">
                                <div className="col-6">
                                    <div className="top_item">
                                        <div className="top_title">Champion League</div>
                                        <table className="top_table">
                                            <thead className="title">
                                                <tr>
                                                    <th>stt</th>
                                                    <th className="left">nickname</th>
                                                    <th className="left">profit final (%)</th>
                                                </tr>
                                            </thead>
                                            <tbody className="content">
                                                <tr>
                                                    <td>
                                                        <div className="num">1</div>
                                                    </td>
                                                    <td className="left">NGUYEN THAI HOANG</td>
                                                    <td className="left">219.06</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="num">2</div>
                                                    </td>
                                                    <td className="left">Benny Nguyen</td>
                                                    <td className="left">155.97</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="num">3</div>
                                                    </td>
                                                    <td className="left">joky</td>
                                                    <td className="left">148.1</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="num">4</div>
                                                    </td>
                                                    <td className="left">Hai Thanh VT</td>
                                                    <td className="left">139.35</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="num">5</div>
                                                    </td>
                                                    <td className="left">Donald Trump</td>
                                                    <td className="left">137.74</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className="top_item">
                                        <div className="top_title blue">Premier League</div>
                                        <table className="top_table ">
                                            <thead className="title">
                                                <tr>
                                                    <th>stt</th>
                                                    <th className="left">nickname</th>
                                                    <th className="left">profit final (%)</th>
                                                </tr>
                                            </thead>
                                            <tbody className="content">
                                                <tr>
                                                    <td>
                                                        <div className="num_blue">1</div>
                                                    </td>
                                                    <td className="left">baodepzai1</td>
                                                    <td className="left">233.47</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="num_blue">2</div>
                                                    </td>
                                                    <td className="left">thaopt</td>
                                                    <td className="left">178.08</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="num_blue">3</div>
                                                    </td>
                                                    <td className="left">XuyenNguyen68</td>
                                                    <td className="left">167.96</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="num_blue">4</div>
                                                    </td>
                                                    <td className="left">Tuấn.APĐ</td>
                                                    <td className="left">152.19</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="num_blue">5</div>
                                                    </td>
                                                    <td className="left">phu thuy giao dich</td>
                                                    <td className="left">139.29</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </ul> )}
                     
                </div>
                <div className="faq_wrap actPanel aos-init">
                    <NavLink to="?bnt=bnt_2">
                        <div className="faq_ques actBtn">
                            BẢNG XẾP HẠNG CHUNG CUỘC MASCHAM 2020 - MÙA 2
                        </div>
                    </NavLink>

                {(bnt === 'bnt_2' && <ul className="faq_ans_history">
                        <section className="top">
                            <div className="container history_container">
                                <div className="col-6">
                                    <div className="top_item">
                                        <div className="top_title">Champion League</div>
                                        <table className="top_table">
                                            <thead className="title">
                                                <tr>
                                                    <th>stt</th>
                                                    <th className="left">nickname</th>
                                                    <th className="left">profit final (%)</th>
                                                </tr>
                                            </thead>
                                            <tbody className="content">
                                                <tr>
                                                    <td>
                                                        <div className="num">1</div>
                                                    </td>
                                                    <td className="left">Nguyen van lam</td>
                                                    <td className="left">151.23</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="num">2</div>
                                                    </td>
                                                    <td className="left">Seafood Inspector</td>
                                                    <td className="left">110.58</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="num">3</div>
                                                    </td>
                                                    <td className="left">Tuấn Anh</td>
                                                    <td className="left">92.65</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="num">4</div>
                                                    </td>
                                                    <td className="left">Y dep vay ai dep lai</td>
                                                    <td className="left">89.18</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="num">5</div>
                                                    </td>
                                                    <td className="left">bui quang thanh</td>
                                                    <td className="left">71.98</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className="top_item">
                                        <div className="top_title blue">Premier League</div>
                                        <table className="top_table">
                                            <thead className="title">
                                                <tr>
                                                    <th>stt</th>
                                                    <th className="left">nickname</th>
                                                    <th className="left">profit final (%)</th>
                                                </tr>
                                            </thead>
                                            <tbody className="content">
                                                <tr>
                                                    <td>
                                                        <div className="num_blue">1</div>
                                                    </td>
                                                    <td className="left">TheMarrginCall</td>
                                                    <td className="left">117.29</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="num_blue">2</div>
                                                    </td>
                                                    <td className="left">VietNguyet_Pro</td>
                                                    <td className="left">96.37</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="num_blue">3</div>
                                                    </td>
                                                    <td className="left">em Y xinh nhat </td>
                                                    <td className="left">71.21</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="num_blue">4</div>
                                                    </td>
                                                    <td className="left">em ho anh Quyet</td>
                                                    <td className="left">66.2</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="num_blue">5</div>
                                                    </td>
                                                    <td className="left">Dang Minh Tam</td>
                                                    <td className="left">64.05</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </ul>)}
                
                </div>
                <div className="faq_wrap">
                    <NavLink to="?bnt=bnt_3">
                        <div className="faq_ques actBtn">
                            BẢNG XẾP HẠNG CHUNG CUỘC MASCHAM 2020 - MÙA 3
                        </div>
                    </NavLink>
                    {(bnt === 'bnt_3') &&  <ul className="faq_ans_history">
                        <section className="top">
                            <div className="container history_container">
                                <div className="col-6">
                                    <div className="top_item">
                                        <div className="top_title">Champion League</div>
                                        <table className="top_table">
                                            <thead className="title">
                                                <tr>
                                                    <th>stt</th>
                                                    <th className="left">nickname</th>
                                                    <th className="left">profit final (%)</th>
                                                </tr>
                                            </thead>
                                            <tbody className="content">
                                                <tr>
                                                    <td>
                                                        <div className="num">1</div>
                                                    </td>
                                                    <td className="left">Pokerface</td>
                                                    <td className="left">166.65</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="num">2</div>
                                                    </td>
                                                    <td className="left">Phước Toàn</td>
                                                    <td className="left">162.22</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="num">3</div>
                                                    </td>
                                                    <td className="left">1HP</td>
                                                    <td className="left">158.64</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="num">4</div>
                                                    </td>
                                                    <td className="left">TIEU LONG NHAN 2</td>
                                                    <td className="left">151.6</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="num">5</div>
                                                    </td>
                                                    <td className="left">Taidt8788</td>
                                                    <td className="left">121.28</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>

                                <div className="col-6">
                                    <div className="top_item">
                                        <div className="top_title blue">Premier League</div>
                                        <table className="top_table">
                                            <thead className="title">
                                                <tr>
                                                    <th>stt</th>
                                                    <th className="left">nickname</th>
                                                    <th className="left">profit final (%)</th>
                                                </tr>
                                            </thead>
                                            <tbody className="content">
                                                <tr>
                                                    <td>
                                                        <div className="num_blue">1</div>
                                                    </td>
                                                    <td className="left">huypham</td>
                                                    <td className="left">162.47</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="num_blue">2</div>
                                                    </td>
                                                    <td className="left">nhatthanh2911</td>
                                                    <td className="left">154.71</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="num_blue">3</div>
                                                    </td>
                                                    <td className="left">Nghi Dang</td>
                                                    <td className="left">153.36</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="num_blue">4</div>
                                                    </td>
                                                    <td className="left">Hoàng Kim</td>
                                                    <td className="left">146.75</td>
                                                </tr>
                                                <tr>
                                                    <td>
                                                        <div className="num_blue">5</div>
                                                    </td>
                                                    <td className="left">conan_dn</td>
                                                    <td className="left">133.7</td>
                                                </tr>
                                            </tbody>
                                        </table>
                                    </div>
                                </div>
                            </div>
                        </section>
                    </ul>}
                    
                </div>
            </div>
        </section>
    );
}
export default History;