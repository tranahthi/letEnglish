
import "./ListVideo.scss"
import { useEffect, useState } from "react"

import { Link } from "react-router-dom";

import axios from "axios"
import ListChanel from "../../feature/listchanel/ListChanel";



function ListVideo() {

    const [isActive, setIsActive] = useState(false);
    const [getVideoChanel, setVideoChanel] = useState([])

    console.log(getVideoChanel)



    const handleButtonClick = (buttonIndex) => {
        setIsActive(buttonIndex); // Khi nút được bấm, đảo ngược trạng thái "active"
    };
    useEffect(() => {

        axios.get(`http://172.20.10.8:8081/chanel/list/`)

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

                    {getVideoChanel.map((channel,index) => (

                        <div key={channel.id} className="content__video--middle--middle">
                            <div className="content__video--middle-fix" style={{ display: "flex", justifyContent: "space-between" }}>
                                <div className="content__video--middle--left">
                                    <span>{channel.chude}</span>
                                </div>
                                <div className="content__video--middle--right">


                                    <button className="btn-all"><Link to={`/chanel/list/detail/${channel.id}`}>All</Link></button>

                                    <button className="img-fix">
                                        <img src="/assets/icon/prev.svg" alt="" />
                                    </button>
                                    <button className="img-fix">
                                        <img src="/assets/icon/next.svg" alt="" />
                                    </button>
                                </div>
                            </div>

                            <div className="display-fix" >
                                {channel.imagevideo.map((image, imageId) => (
                                    <div key={imageId} className="content__video--middle--content">
                                        <div className="container-content">
                                            <div className="content-img">
                                                <img src={image} alt="" />
                                            </div>
                                            <div className="content-title">
                                                {console.log(channel.idvideo)}
                                                {/* <a href="/videodetail/">{channel.namevideo[imageId]}</a> */}
                                                <Link to={"/chanel/list/" + channel.idvideo[index]}>{channel.namevideo[imageId]}</Link>
                                                <hr className="line"></hr>
                                                <div className="view-count">
                                                    <img src="/assets/icon/iconlisten.svg" alt="" />
                                                    <span>{channel.numhumanwatched[imageId]}</span>

                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                ))}
                            </div>

                        </div>
                    ))}

                </div>

            </div>

        </div>
    )

}
export default ListVideo