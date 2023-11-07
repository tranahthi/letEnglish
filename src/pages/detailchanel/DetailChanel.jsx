import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Link } from "react-router-dom";

import "../video/ListVideo.scss"

function DetailChanel() {

    const { channelId } = useParams(); // Get the channel ID from the URL parameters
    const [channelData, setChannelData] = useState(null); // Initialize as null
console.log(channelData)
console.log(channelId)
    useEffect(() => {
        axios.get(`http://172.20.10.8:8081/chanel/list/detail/${channelId}`)
            .then((res) => {
                
                console.log(res.data)
                const videoData = res.data
                // // Filter the channel data to find the one with the matching ID
                // const channel =  videoData.find((channel) => channel.id === channelId);
                setChannelData(res.data);
            })
            .catch((error) => console.log(error));
    }, [channelId]);

    if (!channelData) {
        // If the channel data is not yet available, you can display a loading message or return null
        return <div>Loading...</div>;
    }



    return (
        <div className=" container content" >
            <div className="content_video">
                <div className="content__video--middle">
                    {/* {channelData.map(channel => (
                        <div key={channel.id} className="content__video--middle--middle">
                            <div className="content__video--middle-fix" style={{ display: "flex", justifyContent: "space-between" }}>
                                <div className="content__video--middle--left">
                                    <span>{channel.chude}</span>
                                </div>
        
                            </div>
                            <div className="display-fix" >
                                {channel.imagevideo.map((image, imageId) => (
                                    <div key={imageId} className="content__video--middle--content">
                                        <div className="container-content">
                                            <div className="content-img">
                                                <img src={image} alt="" />
                                            </div>
                                            <div className="content-title"> */}
                                                {/* <a href="/videodetail/">{channel.namevideo[imageId]}</a> */}
                                                {/* <Link to={"/chanel/list/" + channel.id}>{channel.namevideo[imageId]}</Link>
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
                    ))} */}

                </div>

            </div>

        </div>
    )

}
export default DetailChanel