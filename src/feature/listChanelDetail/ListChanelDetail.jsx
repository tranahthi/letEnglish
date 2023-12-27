import axios from "axios"
import { useEffect, useState } from "react"
import AxiosClient from "../../api/AxiosClient"

function ListChanelDetail() {


        const [getVideoChanel,setVideoChanel] = useState([])




        useEffect(() =>{

            AxiosClient.get("/chanel/list/")

            .then(res =>{
                console.log(res)
                setVideoChanel(res.data)

            })
            .catch(error => console.log(error))
        },[])


        function renderData(){}


    return (
        <>
            <div className="content__video--middle--middle">
                <div className="content__video--middle--left">
                    {getVideoChanel.map(channel => (
                        <span key={channel.id}>{channel.chude}</span>
                    ))}
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
            
        </>
    )

}
export default ListChanelDetail