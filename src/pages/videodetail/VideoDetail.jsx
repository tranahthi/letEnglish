// VideoDetail.js
import { useEffect, useState } from "react";
import AxiosClient from "../../api/AxiosClient";
import "./videodetail.scss";
import { useParams, useNavigate, Link } from "react-router-dom";
import CommentVideo from "./CommentVideo";
import ListComment from "./ListComment";

function VideoDetail() {
  const navigate = useNavigate();
  const [getVideo, setVideo] = useState({});
  const [videoRemain, setVideoRemain] = useState([]);
  const [comments, setComments] = useState([]);
  let { videoId } = useParams();
  let userData = localStorage.getItem("userData");
console.log(comments)
  if (userData) {
    userData = JSON.parse(userData);
  }

  const handleCommentAdded = (newComment) => {
    setComments([...comments, newComment]);
    console.log(newComment);
  };

  useEffect(() => {
    AxiosClient.get(`/chanel/list/${videoId}`)
      .then((res) => {
        const videos = res.data.listvideoofTopic.videos;
        setVideoRemain(
          videos.filter((video) => video.idvideo !== parseInt(videoId))
        );
        setVideo(res.data.videodetail);
        setComments(res.data.listcommentofvideo);
      })
      .catch((error) => console.log(error));
  }, [videoId]);

  const handleVideoClick = (video) => {
    setVideo(video);
    navigate(`/chanel/list/${video.idvideo}`);
  };

  function renderData() {
    if (getVideo && Object.keys(getVideo).length > 0) {
      return (
        <div>
          <video controls width="740" height="460">
            <source src={getVideo.linkvideo} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <h1>{getVideo.namevideo}</h1>
        </div>
      );
    }
  }

  function renderVideoRemain() {
    if (Array.isArray(videoRemain) && videoRemain.length > 0) {
      return videoRemain.map((video, index) => (
        <div
          className="video-remain"
          key={index}
          onClick={() => handleVideoClick(video)}
        >
          <div className="video-fixx">
            <img
              src={video.imagevideo}
              alt={video.namevideo}
              width="230"
              height="150"
            />
          </div>
          <div className="tag-fix">
            <h4>{video.namevideo}</h4>
          </div>
        </div>
      ));
    }
  }

  return (
    <div className="container" id="videodetail">
      <div className="row">
        <Link to="/listvideo" className="back">
          <button className="back-button" >
            <img width={30} height={30} src="/assets/icon/iconback.svg" alt="" />
            Back to list 
          </button>
        </Link>
        <div className="content__detail--left col-sm-8">{renderData()}</div>
        <div className="content__detail--right col-sm-4">
          <h3>Watch next</h3>
          {renderVideoRemain()}
        </div>
      </div>
      <CommentVideo
        idVideo={getVideo.idvideo}
        idUser={userData.id}
        userName={userData.userName}
        comments={comments}
        onAddComment={handleCommentAdded}
      />
      <ListComment
        idVideo={getVideo.idvideo}
        userName={userData.userName}
        idUser={userData.id}
        comments={comments}
        onAddComment={handleCommentAdded}
      />
    </div>
  );
}

export default VideoDetail;
