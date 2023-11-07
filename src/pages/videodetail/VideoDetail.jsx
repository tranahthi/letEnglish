import axios from "axios"
import { useEffect, useState } from "react"

import "./videodetail.scss"
import VideoReact from "./VideoReact"




function VideoDetail() {




    return (
        <div className="container" id="videodetail">

            <div className="row">
                <div className="content__detail--left col-sm-8" >
                    <VideoReact />
                </div>

                <div className="content__detail--right col-sm-4 ">
                    <div>
                        abc
                    </div>
                </div>
            </div>

        </div>
    )

}
export default VideoDetail