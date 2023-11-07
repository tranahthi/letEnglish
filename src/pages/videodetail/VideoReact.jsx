
import { Player } from 'video-react';
import axios from "axios"
import { useEffect, useState } from "react"

import './videoreact.scss'
import { useParams } from 'react-router-dom';
function VideoReact() {


    const [getVideo, setVideo] = useState([])
    let { videoId } = useParams()
    console.log(videoId)

    useEffect(() => {
        axios.get(`http://172.20.10.8:8081/chanel/list/${videoId}`)
            .then(res => {
                console.log(res)
                setVideo(res.data)

            })
            .catch(error => console.log(error))
    }, [videoId])
    console.log(getVideo)
    function renderData() {
        // if (Array.isArray(getVideo) && getVideo.length > 0) {
        //     return getVideo.map((value, index) => (
        //         <div key={value.id}>
        //             {/* <video controls>
        //                 <source src={value.video[index]} />
        //             </video> */}
        //             <video controls width="740" height="460">
        //                 <source src={value.video[index]} type="video/mp4" />
        //                 Your browser does not support the video tag.
        //             </video>
        //         </div>
        //     ))
        // }

        if (getVideo != "") {
            return (
                <div>
                    <video controls width="740" height="460" >
                        <source src={getVideo } type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                </div>
            )
        }
    }
    
    
    return (
        
        <div>
           <h1>React Video Player</h1>
           {renderData()}

       </div>
       
    )

}
export default VideoReact