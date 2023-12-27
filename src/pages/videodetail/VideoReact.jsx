
// import { Player } from 'video-react';
// import axios from "axios"
// import { useEffect, useState } from "react"

// import './videoreact.scss'
// import { useParams } from 'react-router-dom';
// import AxiosClient from '../../api/AxiosClient';
// function VideoReact() {


//     const [getVideo, setVideo] = useState([])
//     let { videoId } = useParams()
//     console.log(videoId)
//     console.log(getVideo)

//     useEffect(() => {
//         AxiosClient.get(`/chanel/list/${videoId}`)
//             .then(res => {
//                 console.log(res)
//                 setVideo(res.data.videodetail)

//             })
//             .catch(error => console.log(error))
//     }, [videoId])
//     console.log(getVideo.linkvideo)
//     function renderData() {
//         if (getVideo) {
//             return (
//                 <div>
//                     <h1>{getVideo.namevideo}</h1>
//                     <video controls width="740" height="460"  >
//                         <source src={getVideo.linkvideo } type="video/mp4" />
//                         Your browser does not support the video tag.
//                     </video>
//                 </div>
//             )
//         }
//     }
    
    
//     return (
        
//         <div>
//            {/* <h1>{getVideo.namevideo}</h1> */}
//            {renderData()}

//        </div>
       
//     )

// }
// export default VideoReact