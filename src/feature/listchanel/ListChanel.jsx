import React, { useEffect, useState } from "react";
import axios from "axios";
import AxiosClient from "../../api/AxiosClient";
import LazyLoad from "react-lazyload"
// import "./pages/video/ListVideo.scss"
function ListChanel() {
    const [getChanel, setChanel] = useState([]);

    useEffect(() => {

        AxiosClient.get(`/chanel/all/`)

            .then(res => {
                console.log(res);
                setChanel(res.data);
            })
            .catch(error => console.log(error));
    }, []);

    return (
        <div className="content__video--middle--bottom">
            {getChanel.map((value, index) => (
                <div className="one-chanel" key={index}>
                    <a className="title" href={`/chanel/list/detail/${value.idchanel}`}>
                        <h6 data-title>{value.namechanel}</h6>
                        <img src={value.imagechanel} alt=""  loading="lazy" decoding="async"/>
                    </a>    
                </div>
                
            ))}
        </div>



    );
}

export default ListChanel;
