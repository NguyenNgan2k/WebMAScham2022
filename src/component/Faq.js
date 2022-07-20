import { useState } from 'react';
import { NavLink } from 'react-router-dom';
function Faq(props) {
    const [bnt, setBnt] = useState(" ")
    const handleChangeBnt = (params) => {
        if (params === bnt) {
            setBnt("")
        } else {
            setBnt(params)
        }

    }

    return (
        <section className="faq">
            <div className="container">
                <h2 className="section_title">
                    <span className="ora"> Các câu hỏi thường gặp</span>
                </h2>
                <div className="faq_wrap">

                    <div className={"faq_ques " + (bnt === "1" ? "active_bnt" : "")} onClick={() => handleChangeBnt("1")}>
                        Tôi muốn đăng ký cuộc thi thì làm như thế nào?
                    </div>

                    {(bnt === '1') && <ul className="faq_ans">
                        <li>
                            Bạn cần mở tài khoản chứng khoán ký quỹ (tiểu khoản M1)
                            với tổng giá trị tài sản ròng tối thiểu 50 triệu VNĐ, sau đó bạn
                            có thể đăng nhập tài khoản giao dịch trực tuyến (web/app) hoặc
                            truy cập website masvn.com để đăng ký tham gia cuộc thi.
                        </li>
                    </ul>}

                </div>
                <div className="faq_wrap">

                    <div className={"faq_ques " + (bnt === "2" ? "active_bnt" : "")} onClick={() => handleChangeBnt("2")}>
                        Tôi có thể đăng ký cuộc thi sau khi thời gian thi đấu bắt đầu không?
                    </div>

                    {(bnt === '2') &&
                        <ul className="faq_ans">
                            <li>
                                Thời gian đăng ký cuộc thi từ ngày 25/04 - 13/05/2022,
                                sau thời gian này hệ thống sẽ đóng cổng đăng ký tham dự.
                                Cuộc thi sẽ bắt đầu vào ngày 16/05/2022.
                            </li>
                        </ul>}
                </div>
                <div className="faq_wrap">

                    <div className={"faq_ques " + (bnt === "3" ? "active_bnt" : "")} onClick={() => handleChangeBnt("3")}>
                        Tôi có mất chi phí gì khi tham gia cuộc thi không?
                    </div>

                    {(bnt === '3') && <ul className="faq_ans">
                        <li>
                            Thời gian đăng ký cuộc thi từ ngày 25/04 - 13/05/2022,
                            sau thời gian này hệ thống sẽ đóng cổng đăng ký tham dự.
                            Cuộc thi sẽ bắt đầu vào ngày 16/05/2022.
                        </li>
                    </ul>}

                </div>
                <div className="faq_wrap">

                    <div className={"faq_ques " + (bnt === "4" ? "active_bnt" : "")} onClick={() => handleChangeBnt("4")}>
                        Tôi có thể lưu ký chứng khoán hoặc chuyển lưu ký chứng khoán sang
                        để tham gia cuộc thi hay không?
                    </div>

                    {(bnt === '4') &&
                        <ul className="faq_ans">
                            <li>
                                Thời gian đăng ký cuộc thi từ ngày 25/04 - 13/05/2022,
                                sau thời gian này hệ thống sẽ đóng cổng đăng ký tham dự.
                                Cuộc thi sẽ bắt đầu vào ngày 16/05/2022.
                            </li>
                        </ul>}
                </div>
                <div className="faq_wrap">

                    <div className={"faq_ques " + (bnt === "5" ? "active_bnt" : "")} onClick={() => handleChangeBnt("5")}>
                        Tôi có thể nộp thêm tiền/rút tiền khi tham gia cuộc thi hay không?
                    </div>

                    {(bnt === '5') && <ul className="faq_ans">
                        <li>
                            Bạn có thể nộp thêm tiền/rút tiền trong khi tham gia cuộc thi, nhưng lưu ý,
                            nếu bạn thực hiện giao dịch rút tiền khiến tài khoản thi đấu có NAV còn lại dưới NAV
                            tối thiểu của bảng Champion/Premier (500 triệu/50 triệu),
                            tài khoản sẽ bị loại khỏi cuộc thi.
                        </li>
                    </ul>}
                </div>
                <div className="faq_wrap">

                    <div className={"faq_ques " + (bnt === "6" ? "active_bnt" : "")} onClick={() => handleChangeBnt("6")}>
                        Tôi có thể thực hiện giao dịch thỏa thuận khi tham gia cuộc thi
                        hay không?
                    </div>

                    {(bnt === '6') && <ul className="faq_ans">
                        <li>
                            Giao dịch hợp lệ để xét giải phải là giao dịch khớp lệnh trực
                            tiếp trên sàn giao dịch, giao dịch thỏa thuận sẽ không được chấp
                            nhận trong cuộc thi. Nếu có giao dịch thỏa thuận diễn ra trên
                            tài khoản thi đấu trong thời gian thi đấu, tài khoản sẽ bị loại
                            khỏi cuộc thi.
                        </li>
                        <span className="f-ita blue">
                            Lưu ý: Nếu bạn có nhu cầu giao dịch thỏa thuận chứng khoán trong
                            thời gian thi đấu, bạn có thể thực hiện giao dịch thỏa thuận
                            trên tài khoản chứng khoán thường (tiểu khoản X1) để tránh ảnh
                            hưởng đến quyền lợi trong cuộc thi.
                        </span>
                    </ul>}

                </div>
                <div className="faq_wrap">

                    <div className={"faq_ques " + (bnt === "7" ? "active_bnt" : "")} onClick={() => handleChangeBnt("7")}>
                        Tôi có thể đăng ký cuộc thi sau khi thời gian thi đấu bắt đầu không?
                    </div>

                    {(bnt === '7') &&
                        <ul className="faq_ans">
                            <li>
                                Cuộc thi sẽ chỉ xét thưởng dựa trên hiệu suất lợi nhuận của tài
                                khoản ký quỹ (tiểu khoản M1).
                            </li>
                        </ul>}
                </div>
                <div className="faq_wrap">

                    <div className={"faq_ques " + (bnt === "8" ? "active_bnt" : "")} onClick={() => handleChangeBnt("8")} >
                        Bảng xếp hạng cuộc thi được xác định như thế nào?
                    </div>

                    {(bnt === '8') && <ul className="faq_ans">
                        <li>
                            Bảng xếp hạng cuộc thi được dựa trên hiệu suất lợi nhuận của tài
                            khoản thi đấu (tiểu khoản M1 của nhà đầu tư tham gia thi đấu)
                            trong kỳ xét thưởng.
                        </li>
                        <li>
                            Ví dụ, NĐT A có NAV ban đầu là 100 triệu, NĐT B có NAV ban đầu
                            là 400 triệu. Kết thúc xét thưởng NAV cuối ngày 20/05/2022 của
                            NĐT A là 200 triệu, của NĐT B là 520 triệu.
                            <ul className="list-cir">
                                <li>
                                    Như vậy, NĐT A lãi 100 triệu, ít hơn NĐT B (lãi 120 triệu).
                                    Tuy nhiên, về hiệu suất lợi nhuận:
                                </li>
                                <li>Hiệu suất lợi nhuận NĐT A = 200/100 -1 = 100%</li>
                                <li>Hiệu suất lợi nhuận NĐT B = 520/400 -1 = 30%</li>
                            </ul>
                        </li>
                        <li>
                            Bảng xếp hạng của cuộc thi dựa trên hiệu suất lợi nhuận, nên tuy
                            NĐT A lãi tuyệt đối ít hơn NĐT B, nhưng hiệu suất lợi nhuận cao
                            hơn NĐT B, do đó NĐT A chiến thắng
                        </li>
                    </ul>}

                </div>
                <div className="faq_wrap">
                    <NavLink to="?bnt=9">
                        <div className={"faq_ques " + (bnt === "9" ? "active_bnt" : "")} onClick={() => handleChangeBnt("9")}>
                            Tôi có cổ phiếu chuyển sàn hoặc hủy niêm yết, giá trị tài sản của
                            tôi sẽ ảnh hưởng như thế nào?
                        </div>
                    </NavLink>
                    {(bnt === '9') && <ul className="faq_ans">
                        <li>
                            Đối với các cổ phiếu hủy niêm yết: Giá trị tài sản của mã chứng
                            khoán sẽ bằng 0
                        </li>
                        <li>
                            Đối với các cổ phiếu hủy niêm yết để chuyển sàn: giá để tính giá
                            trị tài sản của mã chứng khoán sẽ bằng giá đóng cửa của ngày
                            giao dịch cuối cùng nên NAV của bạn sẽ ko bị thay đổi trong thời
                            gian chờ niêm yết lên sàn mới.
                        </li>
                    </ul>}


                </div>


            </div>
        </section>
    );
}
export default Faq;