import { useState } from "react";
import "./ListVideo.scss"



function ListVideo() {

    const [isActive, setIsActive] = useState(false);

    const handleButtonClick = (buttonIndex) => {
        setIsActive(buttonIndex); // Khi nút được bấm, đảo ngược trạng thái "active"
    };

    return (
        <div className=" container content" >
            {/* <div >
                <Sidebar/>
            </div> */}
            <div className="content_video">
                <div className="content__video--top">
                    <div className="content__video--top--left">
                        <button className={`all ${isActive === 0 ? 'active' : ''}`} onClick={() => handleButtonClick(0)}>All</button>
                        <button className={`watch ${isActive === 1 ? 'active' : ''}`} onClick={() => handleButtonClick(1)}> Watch</button>
                    </div>
                    <div className="content__video--top--right">
                        <input type="text" name="search" placeholder="Search" />
                    </div>

                </div>
                <div className="content__video--middle">
                    <div className="content__video--middle--top">
                        <div className="content__video--middle--left">
                            <span>All chanels</span>
                        </div>
                        <div className="content__video--middle--right">
                            <button className="img-fix">
                                <img src="/assets/icon/prev.svg" alt="" />
                            </button>
                            <button className="img-fix" >
                                <img src="/assets/icon/next.svg" alt="" />
                            </button>
                        </div>
                    </div>
                    <div className="content__video--middle--bottom">

                        <div className="one-chanel ">

                            <a className="title" href="">
                                <h6 data-title >bussiness & finance</h6>
                                <img src="https://vt-cdn.voicetube.com/assets/img/page/home/channels/arts-and-entertainment.jpg" alt="" />
                            </a>

                        </div>
                        <div className="one-chanel ">
                            <a className="title" href="">
                                <h6 data-title >bussiness & finance</h6>
                                <img src="https://vt-cdn.voicetube.com/assets/img/page/home/channels/business-and-finance.jpg" alt="" />
                            </a>
                        </div>
                        <div className="one-chanel  ">
                            <a className="title" href="">
                                <h6 data-title >bussiness & finance</h6>
                                <img src="https://vt-cdn.voicetube.com/assets/img/page/home/channels/learning.jpg" alt="" />
                            </a>
                        </div>
                        <div className="one-chanel  ">
                            <a className="title" href="">
                                <h6 data-title >bussiness & finance</h6>
                                <img src="https://vt-cdn.voicetube.com/assets/img/page/home/channels/music.jpg" alt="" />
                            </a>
                        </div>

                        <div className="one-chanel ">
                            <a className="title" href="">
                                <h6 data-title >bussiness & finance</h6>
                                <img src="https://vt-cdn.voicetube.com/assets/img/page/home/channels/business-and-finance.jpg" alt="" />
                            </a>
                        </div>



                    </div>
                    {/* chanels 1 */}
                    <div className="content__video--middle--middle">
                        <div className="content__video--middle--left">
                            <span>Bussiness & Finace</span>
                        </div>
                        <div className="content__video--middle--right">

                            <button className="btn-all"><a href="/detailvideo">All</a></button>
                            <button className="img-fix" >
                                <img src="/assets/icon/prev.svg" alt="" />
                            </button>
                            <button className="img-fix" >
                                <img src="/assets/icon/next.svg" alt="" />
                            </button>
                        </div>
                    </div>

                    <div className="content__video--middle--content">

                        <div className="container-content ">
                            <div className="content-img">
                                <img src="/assets/image/anhtesst.jpg" alt="" />
                            </div>
                            <div className="content-title">
                                <a href="">New York vs. Tokyo’s Subway: How Japan Got So Far Ahead | WSJ U.S. vs. Japan</a>
                                <hr className="line"></hr>

                                <div className="view-count">
                                    <img src="/assets/icon/iconlisten.svg" alt="" />
                                    <span>10</span>
                                </div>

                            </div>
                        </div>
                        <div className="container-content ">
                            <div className="content-img">
                                <img src="/assets/image/test2.jpg" alt="" />
                            </div>
                            <div className="content-title">
                                <a href="">New York vs. Tokyo’s Subway: How Japan Got So Far Ahead | WSJ U.S. vs. Japan</a>
                                <hr className="line"></hr>

                                <div className="view-count">
                                    <img src="/assets/icon/iconlisten.svg" alt="" />
                                    <span>10</span>
                                </div>

                            </div>
                        </div>
                        <div className="container-content ">
                            <div className="content-img">
                                <img src="/assets/image/test3.jpg" alt="" />
                            </div>
                            <div className="content-title">
                                <a href="">New York vs. Tokyo’s Subway: How Japan Got So Far Ahead | WSJ U.S. vs. Japan</a>
                                <hr className="line"></hr>

                                <div className="view-count">
                                    <img src="/assets/icon/iconlisten.svg" alt="" />
                                    <span>10</span>
                                </div>

                            </div>
                        </div>
                        <div className="container-content ">
                            <div className="content-img">
                                <img src="/assets/image/anhtesst.jpg" alt="" />
                            </div>
                            <div className="content-title">
                                <a href="">New York vs. Tokyo’s Subway: How Japan Got So Far Ahead | WSJ U.S. vs. Japan</a>
                                <hr className="line"></hr>

                                <div className="view-count">
                                    <img src="/assets/icon/iconlisten.svg" alt="" />
                                    <span>10</span>
                                </div>

                            </div>
                        </div>
                        <div className="container-content ">
                            <div className="content-img">
                                <img src="/assets/image/anhtesst.jpg" alt="" />
                            </div>
                            <div className="content-title">
                                <a href="">New York vs. Tokyo’s Subway: How Japan Got So Far Ahead | WSJ U.S. vs. Japan</a>
                                <hr className="line"></hr>

                                <div className="view-count">
                                    <img src="/assets/icon/iconlisten.svg" alt="" />
                                    <span>10</span>
                                </div>

                            </div>
                        </div>




                    </div>
                    {/* chanels 2 */}
                    <div className="content__video--middle--middle">
                        <div className="content__video--middle--left">
                            <span>Music</span>
                        </div>
                        <div className="content__video--middle--right">

                            <button className="btn-all">All</button>
                            <button className="img-fix">
                                <img  src="/assets/icon/prev.svg" alt="" />
                            </button>
                            <button className="img-fix" >
                                <img  src="/assets/icon/next.svg" alt="" />
                            </button>
                        </div>
                    </div>

                    <div className="content__video--middle--content">

                        <div className="container-content ">
                            <div className="content-img">
                                <img src="/assets/image/anhtesst.jpg" alt="" />
                            </div>
                            <div className="content-title">
                                <a href="">New York vs. Tokyo’s Subway: How Japan Got So Far Ahead | WSJ U.S. vs. Japan</a>
                                <hr className="line"></hr>

                                <div className="view-count">
                                    <img src="/assets/icon/iconlisten.svg" alt="" />
                                    <span>10</span>
                                </div>

                            </div>
                        </div>
                        <div className="container-content ">
                            <div className="content-img">
                                <img src="/assets/image/test2.jpg" alt="" />
                            </div>
                            <div className="content-title">
                                <a href="">New York vs. Tokyo’s Subway: How Japan Got So Far Ahead | WSJ U.S. vs. Japan</a>
                                <hr className="line"></hr>

                                <div className="view-count">
                                    <img src="/assets/icon/iconlisten.svg" alt="" />
                                    <span>10</span>
                                </div>

                            </div>
                        </div>
                        <div className="container-content ">
                            <div className="content-img">
                                <img src="/assets/image/test3.jpg" alt="" />
                            </div>
                            <div className="content-title">
                                <a href="">New York vs. Tokyo’s Subway: How Japan Got So Far Ahead | WSJ U.S. vs. Japan</a>
                                <hr className="line"></hr>

                                <div className="view-count">
                                    <img src="/assets/icon/iconlisten.svg" alt="" />
                                    <span>10</span>
                                </div>

                            </div>
                        </div>
                        <div className="container-content ">
                            <div className="content-img">
                                <img src="/assets/image/anhtesst.jpg" alt="" />
                            </div>
                            <div className="content-title">
                                <a href="">New York vs. Tokyo’s Subway: How Japan Got So Far Ahead | WSJ U.S. vs. Japan</a>
                                <hr className="line"></hr>

                                <div className="view-count">
                                    <img src="/assets/icon/iconlisten.svg" alt="" />
                                    <span>10</span>
                                </div>

                            </div>
                        </div>
                        <div className="container-content ">
                            <div className="content-img">
                                <img src="/assets/image/anhtesst.jpg" alt="" />
                            </div>
                            <div className="content-title">
                                <a href="">New York vs. Tokyo’s Subway: How Japan Got So Far Ahead | WSJ U.S. vs. Japan</a>
                                <hr className="line"></hr>

                                <div className="view-count">
                                    <img src="/assets/icon/iconlisten.svg" alt="" />
                                    <span>10</span>
                                </div>

                            </div>
                        </div>
                    </div>
                    {/* chanels 3 */}
                    <div className="content__video--middle--middle">
                        <div className="content__video--middle--left">
                            <span>Sport</span>
                        </div>
                        <div className="content__video--middle--right">

                            <button className="btn-all">All</button>
                            <button className="img-fix" >
                                <img  src="/assets/icon/prev.svg" alt="" />
                            </button>
                            <button className="img-fix">
                                <img src="/assets/icon/next.svg" alt="" />
                            </button>
                        </div>
                    </div>

                    <div className="content__video--middle--content">

                        <div className="container-content ">
                            <div className="content-img">
                                <img src="/assets/image/anhtesst.jpg" alt="" />
                            </div>
                            <div className="content-title">
                                <a href="">New York vs. Tokyo’s Subway: How Japan Got So Far Ahead | WSJ U.S. vs. Japan</a>
                                <hr className="line"></hr>

                                <div className="view-count">
                                    <img src="/assets/icon/iconlisten.svg" alt="" />
                                    <span>10</span>
                                </div>

                            </div>
                        </div>
                        <div className="container-content ">
                            <div className="content-img">
                                <img src="/assets/image/test2.jpg" alt="" />
                            </div>
                            <div className="content-title">
                                <a href="">New York vs. Tokyo’s Subway: How Japan Got So Far Ahead | WSJ U.S. vs. Japan</a>
                                <hr className="line"></hr>

                                <div className="view-count">
                                    <img src="/assets/icon/iconlisten.svg" alt="" />
                                    <span>10</span>
                                </div>

                            </div>
                        </div>
                        <div className="container-content ">
                            <div className="content-img">
                                <img src="/assets/image/test3.jpg" alt="" />
                            </div>
                            <div className="content-title">
                                <a href="">New York vs. Tokyo’s Subway: How Japan Got So Far Ahead | WSJ U.S. vs. Japan</a>
                                <hr className="line"></hr>

                                <div className="view-count">
                                    <img src="/assets/icon/iconlisten.svg" alt="" />
                                    <span>10</span>
                                </div>

                            </div>
                        </div>
                        <div className="container-content ">
                            <div className="content-img">
                                <img src="/assets/image/anhtesst.jpg" alt="" />
                            </div>
                            <div className="content-title">
                                <a href="">New York vs. Tokyo’s Subway: How Japan Got So Far Ahead | WSJ U.S. vs. Japan</a>
                                <hr className="line"></hr>

                                <div className="view-count">
                                    <img src="/assets/icon/iconlisten.svg" alt="" />
                                    <span>10</span>
                                </div>

                            </div>
                        </div>
                        <div className="container-content ">
                            <div className="content-img">
                                <img src="/assets/image/anhtesst.jpg" alt="" />
                            </div>
                            <div className="content-title">
                                <a href="">New York vs. Tokyo’s Subway: How Japan Got So Far Ahead | WSJ U.S. vs. Japan</a>
                                <hr className="line"></hr>

                                <div className="view-count">
                                    <img src="/assets/icon/iconlisten.svg" alt="" />
                                    <span>10</span>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </div>

        </div>
    )

}
export default ListVideo