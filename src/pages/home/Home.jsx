import DataPicker from "./DataPicker"
import "./home.scss"



function Home(props) {
    return (
        <>

        <div className="container content-top">
            <div className=" row " id="row-top" >
                <div className=" content__home col-md-4 col-sm-4 col-lg-4" id="content1">
                    <img src="https://static.memrise.com/uploads/immerse_featured_content/v7.gif" alt="" />
                    <div className="content__home--bottom" >
                        <button className="btn btn-primary">Xem video</button>

                        <p className="text-white text-center">Su dung nhung tu ma ban biet</p>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4 col-lg-4 content__home" id="content2">
                    <div className="container">
                        <div className="row">
                            <p className="process-learn" style={{marginBottom:"5px"}}>Tiến độ học trong tháng của bạn</p>
                            <div className="content__home--middle col-3">
                                <div className="content__home--middle--top">
                                    <img src="/assets/icon/iconbook.svg" />
                                    <p >Từ đã học</p>
                                </div>
                                <div className="content__home--middle--bottom">
                                    <p>0</p>
                                </div>
                            </div>
                            <div className="content__home--middle col-3">
                                <div className="content__home--middle--top">
                                    <img src="/assets/icon/iconvideo.svg" />
                                    <p>Video đã xem</p>
                                </div>
                                <div className="content__home--middle--bottom">
                                    <p>0</p>
                                </div>
                            </div>
                            <div className="content__home--middle col-3">
                                <div className="content__home--middle--top">
                                    <img src="/assets/icon/iconchat.svg" />
                                    <p>Hội thoại đã hoàn thành</p>
                                </div>
                                <div className="content__home--middle--bottom">
                                    <p>0</p>
                                </div>
                            </div>
                            <div className="content__home--middle col-3">
                                <div className="content__home--middle--top">
                                    <img src="/assets/icon/iconbook.svg" />
                                    <p>Từ đã học</p>
                                </div>
                                <div className="content__home--middle--bottom">
                                    <p>0</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-md-4 col-sm-4 col-lg-4 content__home" id="content3">
                    <div className="container">
                        <p className="tool-following">Công cụ theo dõi hoạt động của bạn</p>
                        <DataPicker />
                        <div className="content__home--note">
                            <div className="content__home--subnote">
                            </div>
                            <p>Ngày với tiến độ học</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container content">
                <div className="row">
                    <div className=" col-md-8 content__middle" >

                    </div>
                    <div className="col-md-4 content__right">
                        <div className="container">
                            <div className="content__right--title">
                                <h5>Kỷ lục học của bạn</h5>
                                <p>Những chuỗi ngày liên tục mà bạn đã trải qau để tiến tới việc thành thạo ngôn ngữ</p>
                            </div>
                            <div className="content__right--timelearn">
                                
                                    <p>
                                        Dài nhất
                                    </p>
                                    <div className="span-time">
                                        <span>0 ngày</span>
                                        <div className="time"></div>
                                    </div>
                                
                            </div>

                        </div>
                    </div>
                </div>

            </div>

        </div>
    </>
    )
}
export default Home