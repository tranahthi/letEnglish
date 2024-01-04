import { useNavigate } from "react-router-dom";
import LazyLoad from 'react-lazyload';
import "./ListVideo.scss";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import ListChanel from "../../feature/listchanel/ListChanel";
import AxiosClient from "../../api/AxiosClient";
import WatchedVideo from "./WatchedVideo";
import DisplayListVideo from "./DisplayListVideo";

function ListVideo() {
  const [activeTab, setActiveTab] = useState("All");
  const [getVideoChanel, setVideoChanel] = useState([]);
  const [isHovered, setIsHovered] = useState(null);
  const navigate = useNavigate();

  const handleMouseEnter = (idvideo) => {
    setIsHovered(idvideo);
  };

  const handleMouseLeave = () => {
    setIsHovered(null);
  };

  const handleSaveClick = () => {
    // Handle save click video
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  useEffect(() => {
    AxiosClient.get(`/chanel/list/`)
      .then((res) => {
        setVideoChanel(res.data);
      })
      .catch((error) => console.log(error));
  }, []);

  const fixLink = (id) => {
    navigate(`/chanel/list/${id}`);
  };

  const filteredChannels =
    activeTab === "Watched"
      ? getVideoChanel.filter((channel) =>
          channel.imagevideo.some((video) => video.watched)
        )
      : getVideoChanel;

  return (
    <div className="container content">
      <div className="content_video">
        <div className="content__video--top">
          <div className="content__video--top--left">
            <button
              className={`all ${activeTab === "All" ? "active" : ""}`}
              onClick={() => handleTabClick("All")}
            >
              All
            </button>
            <button
              className={`watch ${activeTab === "Watched" ? "active" : ""}`}
              onClick={() => handleTabClick("Watched")}
            >
              Watched
            </button>
          </div>
          <div className="content__video--top--right">
            <input type="text" name="search" placeholder="Search" />
          </div>
        </div>
        <div className="content__video--middle">
          {activeTab === "All" && (
            <div className="content__video--middle--top">
              <div className="content__video--middle--left">
                <span>All channels</span>
              </div>
              <div className="content__video--middle--right">
                <button className="img-fix">
                  <img src="/assets/icon/prev.svg" alt="" />
                </button>
                <button className="img-fix">
                  <img src="/assets/icon/next.svg" alt="" />
                </button>
              </div>
            </div>
          )}
          {activeTab === "All" ? <ListChanel/> : <WatchedVideo/>} {/* Include ListChanel component here */}
          {filteredChannels.map((channel, index) => (
            <LazyLoad key={channel.id} height={100} offset={50}>
              <div key={channel.id} className="content__video--middle--middle">
              <div
                  className="content__video--middle-fix"
                  style={{ display: "flex", justifyContent: "space-between" }}
                >
                  <div className="content__video--middle--left">
                    <span>{channel.chude}</span>
                  </div>
                  <div className="content__video--middle--right">
                    <button className="btn-all">
                      <Link
                        className="btn-link"
                        to={`/chanel/list/detail/${channel.id}`}
                      >
                        All
                      </Link>
                    </button>

                    <button className="img-fix">
                      <img src="/assets/icon/prev.svg" alt="" />
                    </button>
                    <button className="img-fix">
                      <img src="/assets/icon/next.svg" alt="" />
                    </button>
                  </div>
                </div>

              <DisplayListVideo
                  channel={channel}
                  isHovered={isHovered}
                  handleMouseEnter={handleMouseEnter}
                  handleMouseLeave={handleMouseLeave}
                  fixLink={fixLink}
                  handleSaveClick={handleSaveClick}
              />
              </div>
            </LazyLoad>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ListVideo;
