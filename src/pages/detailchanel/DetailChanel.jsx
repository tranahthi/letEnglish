import React, { useEffect, useState } from "react";
import { useParams, useNavigate ,Link  } from "react-router-dom";
import "../video/ListVideo.scss";
import AxiosClient from "../../api/AxiosClient";

function DetailChanel() {
  const { channelId } = useParams();
  const [getChannel, setChannel] = useState({});
  console.log(getChannel);
  console.log(channelId);

  useEffect(() => {
    AxiosClient.get(`/chanel/list/detail/${channelId}`)
      .then((res) => {
        console.log(res);
        setChannel(res.data);
      })
      .catch((error) => console.log(error));
  }, [channelId]);


  // const navigate = useNavigate();

  //   const fixLink = (id) => {
  //       navigate(`/chanel/list/${id}`)
  //       console.log(id)
  //   }

  function renderData() {
    if (getChannel !== "") {
      return (
        <div className="content__video--middle--middle">
          <div className="content__video--middle-fix">
            <div className="content__video--middle--left">
              <span>{getChannel?.namechanel}</span>
            </div>
          </div>
          <div className="display-fix">
            {getChannel?.videos?.map((video, index) => (
              <div key={index} className="content__video--middle--content" >
                <div className="container-content">
                  <div className="content-img">
                    <img src={video.imagevideo} alt="" />
                  </div>
                  {console.log(video.idvideo)}
                  <div className="content-title">
                    <h3 className="link-to-a">
                      <Link className="a" to={"/chanel/list/" + video.idvideo}>
                        {video.namevideo}
                      </Link>
                    </h3>
                    <hr className="line"></hr>
                    <div className="view-count-line-fix">
                      <div className="view-count">
                        <img src="/assets/icon/iconlisten.svg" alt="" />
                        <span>{video.numhumanwatched}</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    }
  }

  return (
    <div className="container content">
      <div className="content_video">
        <div className="content__video--middle">{renderData()}</div>
      </div>
    </div>
  );
}
export default DetailChanel;
