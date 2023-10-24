
import "./ListVideo.scss"
import { useEffect, useState } from "react"
import axios from "axios"
import ListChanel from "../../feature/listchanel/ListChanel";



function ListVideo() {

    const [isActive, setIsActive] = useState(false);
    const [getVideoChanel, setVideoChanel] = useState([])


    const handleButtonClick = (buttonIndex) => {
        setIsActive(buttonIndex); // Khi nút được bấm, đảo ngược trạng thái "active"
    };
    useEffect(() => {
        axios.get("http://172.16.0.2:8081/chanel/list")
            .then(res => {
                console.log(res)
                setVideoChanel(res.data)

            })
            .catch(error => console.log(error))
    }, [])


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

                    {<ListChanel />}

                    {/* chanels 1 */}
                    {getVideoChanel.map(channel => (
                        <div key={channel.id} className="content__video--middle--middle">
                            <div className="content__video--middle-fix" style={{ display: "flex", justifyContent: "space-between" }}>
                                <div className="content__video--middle--left">
                                    <span>{channel.chude}</span>
                                </div>
                                <div className="content__video--middle--right">
                                    <button className="btn-all"><a href="/detailvideo">All</a></button>
                                    <button className="img-fix">
                                        <img src="/assets/icon/prev.svg" alt="" />
                                    </button>
                                    <button className="img-fix">
                                        <img src="/assets/icon/next.svg" alt="" />
                                    </button>
                                </div>
                            </div>
                            {getVideoChanel.map((channel, index) => (
                                <div style={{display:"flex"}}>
                                    <div key={index} className="content__video--middle--content">
                                        <div className="container-content">
                                            <div className="content-img">
                                                <img src={channel.imagevideo[index]} alt="" />
                                            </div>
                                            <div className="content-title">
                                                <a href="/videodetail">{channel.namevideo[index]}</a>
                                                <hr className="line"></hr>
                                                <div className="view-count">
                                                    <img src="/assets/icon/iconlisten.svg" alt="" />
                                                    <span>{channel.numhumanwatched[index]}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    ))}

                </div>

            </div>

        </div>
    )

}
export default ListVideo