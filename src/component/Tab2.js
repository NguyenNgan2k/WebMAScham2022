import pr2 from '../assets/pr2.png'
import pr1 from '../assets/pr1.png'
import pr3 from '../assets/pr3.png'
function Tab2() {
    return (
        <div className="prize_wrap">
        <div className="prize_main">
            <div className="prize-chung">
                <div className="prize-container">
                    <div className="prize-wrapper">

                        <div className="prize_item">
                            <img src={pr2} alt="" />
                            <div className="prize_name f-bold">HẠNG 2</div>
                            <div className="prize_value">
                                <span className="ora">40.000.000 vnđ</span>
                            </div>
                        </div>
                        <div className="prize_item mg_top">
                            <img src={pr1} alt="" />
                            <div className="prize_name f-bold">HẠNG 1</div>
                            <div className="prize_value section_title">
                                <span className="ora">50.000.000 vnđ</span>
                            </div>
                        </div>
                        <div className="prize_item">
                            <img src={pr3} alt="" />
                            <div className="prize_name f-bold">HẠNG 3</div>
                            <div className="prize_value section_title">
                                <span className="ora">30.000.000 vnđ</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}
export default Tab2;