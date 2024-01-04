
import React, { memo } from 'react';
import { Link } from "react-router-dom";

const DisplayListVideo = memo(({ channel, isHovered, handleMouseEnter, handleMouseLeave, fixLink, handleSaveClick }) => {
    return (
      <div className="display-fix">
        {channel.imagevideo.map((image, imageId) => (
          <div
            key={imageId}
            className="content__video--middle--content"
            onClick={() => fixLink(channel.idvideo[imageId])}
            onMouseEnter={() => handleMouseEnter(channel.idvideo[imageId])}
            onMouseLeave={handleMouseLeave}
          >
            {isHovered === channel.idvideo[imageId] && (
              <div className="favorite-icon" onClick={handleSaveClick}>
                <img
                  width={30}
                  height={30}
                  src="/assets/icon/iconheart.svg"
                  alt="Save"
                />
              </div>
            )}
            <div className="container-content">
              <div className="content-img">
                <img
                  src={image}
                  alt=""
                  loading="lazy"
                  decoding="async"
                />
              </div>
              <div className="content-title">
                <h3 className="link-to-a">
                  <Link
                    className="a"
                    to={`/chanel/list/${channel.idvideo[imageId]}`}
                  >
                    {channel.namevideo[imageId]}
                  </Link>
                </h3>
                <hr className="line"></hr>
                <div className="view-count-line-fix">
                  <div className="view-count">
                    <img
                      src="/assets/icon/iconlisten.svg"
                      alt=""
                    />
                    <span>{channel.numhumanwatched[imageId]}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    );
  });


  export default DisplayListVideo