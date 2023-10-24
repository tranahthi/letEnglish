import axios from "axios"
import { useEffect, useState } from "react"





function VideoDetail() {


    const [getVideo, setVideo] = useState([])


    useEffect(() => {
        axios.get("http://192.168.110.213:8081/chanel/list")
            .then(res => {
                console.log(res)
                setVideo(res.data)

            })
            .catch(error => console.log(error))
    }, [])

    function renderData() {
        if (Array.isArray(getVideo) && getVideo.length > 0) {
            return getVideo.map((value, index) => (
                <div key={value.id}>
                    <video controls>
                        <source src={value.video[index]} />
                    </video>
                </div>
            ))
        }
    }

    return (
        <div style={{ marginTop: "100px" }}>
            {renderData()}
        </div>
    )

}
export default VideoDetail