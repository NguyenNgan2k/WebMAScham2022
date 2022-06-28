import '../css/rule.css'
function Rule (props) {

    const {match: {params}} = props

    console.log(params, props)

    return(
            <section className="section rule">
            <div className="container">
                <h2 className="section_title">
                    <span className="ora">THỂ LỆ VÀ CƠ CẤU GIẢI THƯỞNG CUỘC THI CHỨNG KHOÁN
                        <br className="br-small"/>
                        MAScham 2022 - Mùa 4 <br className="br-big"/>
                        “ĐẤU TRƯỜNG CHỨNG KHOÁN 
                        <p >Thử thách bản lĩnh nhà đầu tư”</p>
                    </span>
                </h2>
                <ol className="rule_title">
                    <li>
                        Tên cuộc thi: MAScham 2022 - Mùa 4 “ĐẤU TRƯỜNG CHỨNG KHOÁN - Thử thách bản lĩnh nhà đầu tư”
                    </li>
                    <li>
                        Thời gian thực hiện:
                        <ul className="rule_list">
                            <li>Thời gian đăng ký tham gia cuộc thi: từ 25/04 - 13/05/2022.</li>
                            <li>
                                Thời gian thi đấu: từ 16/05 - 08/07/2022.
                            </li>
                        </ul>
                    </li>
                    <li>Phạm vi: <span className="normal">Trên toàn quốc</span></li>
                    <li>
                        Đối tượng tham gia:
                        <ul className="rule_list">
                            <li>
                                Khách hàng mở tài khoản tại Công ty Cổ phần Chứng khoán Mirae Asset (Việt Nam) 
                                (bao gồm tài khoản mở mới, và tài khoản hiện hữu), 
                                khách hàng thuộc nhóm khách hàng cá nhân trong nước, 
                                không bao gồm khách hàng mapbank (Khách hàng mapbank là khách hàng giao dịch chứng khoán tại MAS nhưng thanh toán tiền thông qua ngân hàng)
                            </li>
                            <li>
                                Chương trình không áp dụng cho nhân viên Công ty Cổ phần Chứng khoán Mirae Asset (Việt Nam).
                            </li>
                        </ul>
                    </li>
                    <li>
                        Hình thức tham gia:
                        <ul className="rule_list">
                            <li>
                                Khách hàng đã có tài khoản chứng khoán tại Công ty Cổ phần Chứng khoán Mirae Asset 
                                và đăng ký tham gia cuộc thi đầu tư giao dịch chứng khoán MAScham Mùa 4 trên thị trường chứng khoán cơ sở.
                            </li>
                            <li>
                                Khách hàng đăng nhập vào tài khoản chứng khoán và đăng ký tham gia cuộc thi.
                            </li>
                            <li>
                                Sau khi đăng ký thành công, khách hàng có thể bắt đầu thực hiện giao dịch đầu tư vào bất kỳ thời điểm nào, 
                                kết quả cuộc thi sẽ được bắt đầu tính từ ngày thi đấu 16/05/2022.
                            </li>
                            <li>
                                Trong trường hợp chưa có tài khoản, khách hàng có thể đăng ký mở tài khoản online qua website www.masvn.com 
                                hoặc app My Asset (IOS &amp; Android). Sau khi tài khoản được kích hoạt, khách hàng có thể đăng ký tham gia cuộc thi.
                            </li>
                        </ul>
                    </li>
                    <li>
                        Nhóm bảng:
                        <ul className="rule_list">
                            <div className="txt">
                                Mỗi tài khoản sau khi đăng ký thành công sẽ được phân bảng căn cứ vào Tổng giá trị tài sản ròng (NAV) của tài khoản 
                                (Bao gồm cả giá trị cổ phiếu và giá trị tiền mặt, sau khi trừ đi các nghĩa vụ nợ) tại thời điểm cuối ngày 13/05/2022. 
                                Tài khoản được phân loại thành 2 bảng:
                            </div>
                            <li>
                                <span className="blue f-bold">
                                    Bảng Premier League</span>: Tổng giá trị tài sản ròng (NAV) từ 50 triệu đến dưới 500 triệu đồng
                            </li>
                            <li>
                                <span className="blue f-bold">
                                    Bảng Champion League</span>: Tổng giá trị tài sản ròng (NAV) từ 500 triệu đồng trở lên.
                                Nhóm bảng thi đấu sẽ được cố định trong suốt cuộc thi và sẽ không thay đổi, ngay cả khi có sự thay đổi về NAV trong thời gian thi đấu.
                            </li>
                        </ul>
                    </li>
                    <li className="pd-0">
                        Cơ cấu giải thưởng:
                        <div className="rule-table-wrap">
                            <table className="rule-table">
                                <thead className="title">
                                    <tr>
                                        <th>Loại giải</th>
                                        <th>Thời gian</th>
                                        <th>Giải thưởng</th>
                                    </tr>
                                </thead>
                                <tbody className="content">
                                    <tr>
                                        <td>100 tài khoản mở mới có NAV từ 50 triệu đồng chốt tại cuối ngày 13/05/2022 và đăng kí tham gia MAScham sớm nhất</td>
                                        <td>Từ 25/04 - 13/05/2022</td>
                                        <td>
                                            <span className="f-bold ora">
                                                Quà tặng Voucher trị giá 200.000 VNĐ
                                            </span>
                                        </td>
                                    </tr>
                                    <tr>
                                        <td>Giải chung cuộc</td>
                                        <td>Từ 16/05 - 08/07/2022</td>
                                        <td>
                                            <div className="f-bold ora">Bảng Champion League:</div>
                                            <ul className="list-dash">
                                                <li>Giải nhất: 100.000.000 VNĐ</li>
                                                <li>Giải nhì: 80.000.000 VNĐ</li>
                                                <li>Giải ba: 60.000.000 VNĐ</li>
                                            </ul>
                                            <div className="f-bold ora">Bảng Premier League:</div>
                                            <ul className="list-dash">
                                                <li>Giải nhất: 50.000.000 VNĐ</li>
                                                <li>Giải nhì: 40.000.000 VNĐ</li>
                                                <li>Giải ba: 30.000.000 VNĐ</li>
                                            </ul>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </li>
                    <li>
                        Quy định về tài khoản tham gia thi đấu:
                        <ul className="rule_list">
                            <li>
                                <span className="f-bold"> Tài khoản tham gia thi đấu: </span>
                                <ul className="list-dash">
                                    <li>
                                        <span className="f-bold">Tài khoản tham gia thi đấu: Tài khoản ký quỹ, cụ thể là tiểu khoản M1 </span>
                                        tại Chứng khoán Mirae Asset (Lưu ý: tùy thuộc vào mục tiêu đầu tư của Khách hàng, Khách hàng có thể sử dụng ký quỹ trong quá trình thi đấu hoặc không)
                                    </li>
                                    <li>
                                        <span className="f-bold">Đối với khách hàng chưa có tài khoản ký quỹ: </span>
                                        Khách hàng có thể liên hệ với nhân viên công ty Chứng khoán Mirae Asset để được hỗ trợ mở tài khoản ký quỹ. Sau khi mở tài khoản ký quỹ thành công, khách hàng có thể đăng ký tham gia cuộc thi.
                                    </li>
                                    <li>
                                        <span className="f-bold">Đối với khách hàng hiện hữu và đang có tài sản trên tài khoản ký quỹ: </span>
                                        Khách hàng có thể giữ nguyên danh mục hiện tại và đăng ký tham gia thi đấu
                                    </li>
                                    <li>
                                        <span className="f-bold">Đối với khách hàng hiện hữu và đang có tài sản trên tài khoản giao dịch chứng khoán thường (X1): </span>
                                        Khách hàng có thể chuyển chứng khoán sang tài khoản ký quỹ trước khi đăng ký tham gia cuộc thi
                                    </li>
                                    <li>
                                        <span className="f-bold">Nộp và rút tiền trên tài khoản thi đấu:</span>
                                        <ul className="list-cir">
                                            <li>
                                                Trong thời gian thi đấu: Nộp và rút tiền được chấp nhận, tuy nhiên, trường hợp rút tiền khiến tài khoản có NAV còn lại dưới NAV tối thiểu của Bảng 
                                                <span className="blue f-bold">
                                                    Champion League / Premier League
                                                </span>
                                                (500 triệu / 50 triệu), tài khoản sẽ bị loại khỏi cuộc thi.
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span className="f-bold">Chuyển chứng khoán trên tài khoản thi đấu: </span>Nếu quý khách đã đăng ký tham gia cuộc thi, trong thời gian thi đấu (từ 16/05 – 08/07/2022), quý khách không được:
                                        <ul className="list-cir">
                                            <li>
                                                Chuyển thêm chứng khoán vào tài khoản ký quỹ (bao gồm lưu ký chứng khoán, chuyển chứng khoán nội bộ từ các tiểu khoản khác sang tài khoản ký quỹ),
                                            </li>
                                            <li>
                                                Rút chứng khoán trên tài khoản ký quỹ (bao gồm chuyển lưu ký chứng khoán, chuyển chứng khoán nội bộ từ tài khoản ký quỹ sang các tiểu khoản khác).
                                                <div className="f-ita blue">
                                                    Lưu ý: <br/>
                                                    _ Nếu Quý khách có nhu cầu lưu ký chứng khoán từ nơi khác về trong thời gian thi đấu, Quý khách có thể lưu ký trên tài khoản chứng khoán thường (X1) để tránh ảnh hưởng đến quyền lợi trong cuộc thi.<br/> 
                                                    _ Hành động rút/chuyển/lưu ký chứng khoán thực hiện trước ngày 16/05/2022 nhưng ngày hiệu lực chứng khoán ghi nhận vào tài khoản thuộc khoảng thời gian từ ngày 16/05/2022 cũng sẽ được hiểu là tài khoản vi phạm và sẽ bị loại khỏi cuộc thi. 
                                                </div>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <span className="f-bold">Giao dịch trên tài khoản thi đấu </span>Giao dịch phải là giao dịch khớp lệnh trên hệ thống, giao dịch thỏa thuận sẽ không được chấp nhận trong cuộc thi. Nếu người tham gia có bất kỳ giao dịch thỏa thuận nào, tài khoản sẽ không được tham gia xét giải. 
                                        <ul className="list-cir">
                                            <div className="f-ita blue">
                                                Lưu ý: Nếu Quý khách có nhu cầu thỏa thuận chứng khoán từ nơi khác về trong thời gian thi đấu, Quý khách có thể thỏa thuận trên tài khoản chứng khoán thường (X1) để tránh ảnh hưởng đến quyền lợi trong cuộc thi.
                                            </div>
                                        </ul>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <div className="f-bold">Chứng khoán giao dịch:</div>
                                Tất cả các mã chứng khoán trên HOSE / HNX / UPCOM 
                                trừ hợp đồng tương lai và cổ phiếu thuộc danh sách 
                                không được tham gia giao dịch theo quy định của công ty (nếu có).
                            </li>
                        </ul>
                    </li>

                    <li>
                        Cách thức xác định kết quả bảng xếp hạng:

                        <ul className="rule_list">
                            <li>
                                Cách thức xác định: dựa trên hiệu suất đầu tư hay còn gọi là % tăng trưởng tổng 
                                lợi nhuận trên tài khoản thi đấu của khách hàng đã đạt được trong kỳ xét giải thưởng
                            </li>
                            <li>
                                Bảng xếp hạng chung cuộc: Khách hàng cần có ít nhất 6 
                                giao dịch khớp lệnh hợp lệ (3 giao dịch mua &amp; 3 giao 
                                dịch bán khớp lệnh thành công).
                            </li>
                            <li>
                                Giải thưởng sẽ được trao cho các nhà đầu tư có hiệu quả 
                                giao dịch cao nhất theo thứ tự từ trên xuống và có % tổng tăng trưởng lợi nhuận lớn hơn 0.
                            </li>
                            <li>
                                Trường hợp nhà đầu tư có hiệu quả % Tổng lợi nhuận bằng nhau sẽ đồng chia giải thưởng. 
                                Cách xác định giá trị giải thưởng mỗi Người chơi nhận được như sau:
                                <br/>
                                Giải thưởng = (Tổng giá trị giải thưởng của các vị trí đồng kết quả)/số người đồng kết quả
                            </li>
                            <li>
                                <div className="f-bold">Lưu ý:</div>
                                <ul className="list-dash">
                                    <li>
                                        Đối với các cổ phiếu hủy niêm yết: Giá trị tài sản của mã 
                                        chứng khoán sẽ bằng 0
                                    </li>
                                    <li>
                                        Đối với các cổ phiếu hủy niêm yết để chuyển sàn: 
                                        giá trị tài sản của mã chứng khoán sẽ bằng giá 
                                        đóng cửa của ngày giao dịch cuối cùng.
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>

                    <li>
                        Nguyên tắc và cách thức trao giải:
                        <ul className="rule_list rule-mg">
                            <li>
                                <span className="f-bold">Thời gian công bố người thắng cuộc:
                                </span>
                                <ul className="list-dash">
                                    <li>
                                        <span className="f-bold">Giải chung cuộc</span>
                                        : sẽ được công bố trong 10 ngày làm việc kể từ khi chương trình kết thúc ngày 08/07/2022.
                                    </li>
                                </ul>
                            </li>
                            <li>
                                <span className="f-bold">Hình thức trao giải:</span>

                                <ul className="list-dash">
                                    <li>
                                        Quà tặng Voucher sẽ được gửi qua địa chỉ email đăng ký tại Mirae Asset.
                                    </li>
                                    <li>
                                        Các giải thưởng chung cuộc sẽ được trao thông qua hình thức chuyển khoản 
                                        vào tài khoản chứng khoán thông thường (tiểu khoản X1) của người thắng 
                                        cuộc tại công ty Chứng khoán Mirae Asset. Giá trị thực nhận phải tuân 
                                        theo quy định của Thuế theo yêu cầu của Phòng Kế toán.
                                    </li>
                                </ul>
                            </li>
                        </ul>
                    </li>

                    <li>
                        Quy định chung:
                        <ul className="rule_list rule-mg">
                            <li>
                                Khách hàng chỉ được tham gia chương trình với một tài khoản 
                                duy nhất.
                            </li>
                            <li>
                                Khách hàng phải chịu trách nhiệm về tính chính xác mọi thông 
                                tin cá nhân đã cung cấp, đây sẽ là căn cứ để xác thực thông 
                                tin khi trao giải thưởng. Ban tổ chức sẽ không chịu trách 
                                nhiệm trong trường hợp không thể liên lạc được với khách 
                                hàng do có sự thay đổi cũng như tính chính xác của các 
                                thông tin do khách hàng cung cấp.
                            </li>
                            <li>
                                Công ty Chứng khoán Mirae Asset sẽ không chịu trách nhiệm 
                                về bất kỳ sự chậm trễ nào trong việc nhận thông tin hoặc 
                                truyền lệnh vì bất kỳ nguyên nhân nào nằm ngoài tầm kiểm 
                                soát, bao gồm cả lỗi đường truyền máy tính hoặc lỗi kết 
                                nối thông báo.
                            </li>
                            <li>
                                <span className="blue">Công ty Chứng khoán Mirae Asset có quyền dừng quyền 
                                    tham gia chương trình, hủy toàn bộ kết quả giao dịch 
                                    của khách hàng nếu đánh giá khách hàng vi phạm các 
                                    quy định về thể lệ cuộc thi hoặc các quy định về sử 
                                    dụng hệ thống, hoặc có dấu hiệu đầu tư không minh 
                                    bạch, gian lận, làm giá sang tay cổ phiếu, hoặc tên 
                                    bí danh (nickname) không phù hợp với thuần 
                                    phong mỹ tục.</span>
                            </li>
                            <li>
                                Công ty Chứng khoán Mirae Asset có quyền sử dụng tên, 
                                hình ảnh của người chơi trúng giải cho hoạt động truyền 
                                thông, quảng cáo khi có sự đồng ý của khách hàng.
                            </li>
                            <li>
                                Trong trường hợp có thay đổi về chứng khoán giao dịch, 
                                công ty Chứng khoán Mirae Asset sẽ công bố trước tối 
                                thiểu 05 ngày làm việc kể từ ngày áp dụng chính thức 
                                những thay đổi. Việc thay đổi chứng khoán giao dịch 
                                của cuộc thi sẽ được Công ty đăng tải trên các trang 
                                công bố thông tin của Cuộc thi.
                            </li>
                            <li>
                                Công ty Chứng khoán Mirae Asset sẽ giải quyết những 
                                khiếu nại từ phía khách hàng trên cơ sở là những quy 
                                định của chương trình này và thương lượng hòa giải, 
                                trong trường hợp thương lượng hòa giải không thành 
                                thì quyết định của công ty Chứng khoán Mirae Asset 
                                sẽ là quyết định cuối cùng.
                            </li>
                            <li>
                                Công ty Chứng khoán Mirae Asset có quyền thay đổi, 
                                tạm ngừng, hủy bỏ chương trình, thay đổi, bổ sung 
                                hoặc chỉnh sửa một phần hoặc toàn bộ nội dung của 
                                chương trình.
                            </li>
                        </ul>
                    </li>

                    <li>
                        Thông tin liên hệ, hỗ trợ:
                        <ul className="rule_list rule-mg">
                            <li>
                                Trang công bố thông tin chính thức:
                                <a href="/home.html">https://mascham.masvn.com/</a>
                            </li>
                            <li>Hotline chăm sóc Khách hàng: <a href="tel:18006277">18006277</a></li>
                            <li>Môi giới phụ trách tài khoản</li>
                            <li>
                                Tham khảo hướng dẫn đăng ký tham dự tại kênh youtube 
                                chứng khoán Mirae Asset:  
                                <a className="word-br" href="https://www.youtube.com/c/chungkhoanMiraeAsset">https://www.youtube.com/c/chungkhoanMiraeAsset
                                </a>
                            </li>
                        </ul>
                    </li>
                </ol>
            </div>
        </section>
    );
}
export default Rule;