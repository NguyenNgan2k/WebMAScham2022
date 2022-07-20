import { FaFacebookF } from 'react-icons/fa'
import { BsTwitter, BsYoutube } from 'react-icons/bs'
import {AiFillLinkedin} from 'react-icons/ai'
function FooterPA2() {
    return (
        <footer className="footerPA2">
            <div className="container ">
                <div className="gridd_container">
                    <div className="gridd_item">
                        <div className="item_title">Trụ sở chính</div>
                        <p>Tháp tài chính Bitexco, tầng 15, 2 Hải Triều , Quận 1, TP. HCM</p>
                        <ul>
                            <li><a href="#"> Tel: (+84) 28 3914 3588</a></li>
                            <li><a href="#">Fax: (+84) 28 3914 3209</a></li>
                        </ul>
                    </div>
                    <div className="gridd_item">
                        <div className="item_title">Chi nhánh Hà Nội</div>
                        <p>109 Trần Hưng Đạo, Quận Hoàn Kiếm, HN</p>
                        <ul>
                            <li><a href="#">Tel: (+84) 24 6262 6999</a></li>
                            <li><a href="#">Fax: (+84) 24 6278 2688</a></li>
                        </ul>
                    </div>
                    <div className="gridd_item">
                        <div className="item_title">Phòng giao dịch Đống Đa</div>
                        <p>9 Nguyễn Ngọc Doãn, Phường Quang Trung, Quận Đống Đa, HN</p>
                        <ul>
                            <li><a href="#">Tel: (+84) 2 8888 2 6868</a></li>
                            <li><a href="#">Fax: (+84) 24 6278 2688</a></li>
                        </ul>
                    </div>
                    <div className="gridd_item">
                        <div className="item_title">Trụ sở chính</div>
                        <p>Tòa nhà Vinatex, tầng 3, 10 Nguyễn Huệ, Quận 1, TP. HCM</p>
                        <ul>
                            <li><a href="#">Tel: (+84) 2 8888 2 6868</a></li>
                            <li><a href="#">Fax: (+84) 28 3914 3209</a></li>
                        </ul>
                    </div>
                    <div className="gridd_item">
                        <div className="item_title">Phòng giao dịch Hàm Nghi</div>
                        <p>Tòa nhà Doji, tầng 16, số 81-83-83B-85 Hàm Nghi, Q1, TP.HCM</p>
                        <ul>
                            <li><a href="#">Tel: (+84) 2 8888 2 6868</a></li>

                        </ul>
                    </div>
                    <div className="gridd_item">
                        <div className="item_title">Trụ sở chính</div>
                        <p>Tháp tài chính Bitexco, tầng 15, 2 Hải Triều , Quận 1, TP. HCM</p>
                        <ul>
                            <li><a href="#">Tel: (+84) 2 8888 2 6868</a></li>

                        </ul>
                    </div>

                </div>
                <hr />
                <div className="grid_end">
                    <div className="grid_end_item">
                        <div className="grid_end_title">Về VCSC</div>
                        <ul>
                            <li><a href="#">Tổng quan</a></li>
                            <li><a href="#">Con người & Văn hóa</a></li>
                            <li><a href="#">VCSC & Cộng đồng</a></li>
                            <li><a href="#">Cơ hội nghề nghiệp</a></li>
                        </ul>
                    </div>
                    <div className="grid_end_item">
                        <div className="grid_end_title">Dịch vụ</div>
                        <ul>
                            <li><a href="#">Môi giới Khách hàng Cá nhân</a></li>
                            <li><a href="#">Môi giới Khách hàng Tổ chức</a></li>
                            <li><a href="#">Ngân hàng đầu tư</a></li>
                            <li><a href="#">Nghiên cứu phân tích</a></li>
                        </ul>
                    </div>
                    <div className="grid_end_item">
                        <div className="grid_end_title">Tin tức</div>
                        <ul>
                            <li><a href="#">Tin VCSC</a></li>
                            <li><a href="#">Thông tin chung</a></li>
                            <li><a href="#">Tin chứng chỉ quỹ</a></li>
                            <li><a href="#">Tin đấu giá</a></li>
                            <li><a href="#">Tin chứng quyền</a></li>
                        </ul>
                    </div>
                    <div className="grid_end_item">
                        <div className="grid_end_title">Hỗ trợ</div>
                        <ul>
                        <li><a href="#">Hướng dẫn nhà đầu tư mới</a></li>
                        <li><a href="#">Hướng dẫn nộp rút tiền</a></li>
                        <li><a href="#">Câu hỏi thường gặp</a></li>
                        <li><a href="#">Liên hệ</a></li>
                        </ul>
                    </div>
                    <div className="grid_end_item">
                        <div className="grid_end_title">Liên hệ</div>
                        <ul>
                        <li><a href="#">Hotline: (+84) 2 8888 2 6868</a></li>
                        <li><a href="#">Con người & Văn hóa</a></li>
                        <li><a href="#">Email: info@vcsc.com.vn</a></li>
                        <li className="react_icon">
                            <div className="icon"> <a href="#"><FaFacebookF /></a> </div>
                            <div className="icon"> <a href="#"><BsTwitter /></a> </div>
                            <div className="icon"> <a href="#"><AiFillLinkedin /></a> </div>
                            <div className="icon"> <a href="#"><BsYoutube /></a> </div>
                        </li>
                        </ul>
                    </div>

                </div>
                <div className="footer_end">
                    <p>©2021 Công Ty Cổ Phần Chứng Khoán Bản Việt</p>
                    <p>Giấy phép số 15/GP-TTDT Bộ thông tin và truyền thông cấp ngày 29/07/2008</p>
                </div>
            </div>
        </footer>
    );
}
export default FooterPA2;