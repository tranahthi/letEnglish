import React, { useEffect, useState } from "react";
import axios from "axios";
// import "./pages/video/ListVideo.scss"
function ListChanel() {
    const [getChanel, setChanel] = useState([]);

    useEffect(() => {
        axios.get("http://192.168.110.213:8081/chanel/all")
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
                    <a className="title" href="">
                        <h6 data-title>{value.namechanel}</h6>
                        <img src={value.imagechanel}alt="" />
                    </a>
                </div>
            ))}
        </div>



    );
}

export default ListChanel;
