// ListComment.js
import { useEffect, useState } from "react";
import "./listcomment.scss";

let ListComment = (props) => {
  const [listComment, setListComment] = useState([]);
  const { comments } = props;

  useEffect(() => {
    setListComment(comments);
  }, [comments]);


const formatTimestamp = (timestamp) => {
  const commentDate = new Date(timestamp);
  
  // Format the date and time without time zone information
  const options = { year: 'numeric', month: 'long', day: 'numeric', hour: '2-digit', minute: '2-digit', second: '2-digit', timeZone: 'UTC' };
  const formattedDate = commentDate.toLocaleString('en-US', options);
  return formattedDate;
};



  function renderListComment() {
    if (Array.isArray(listComment) && listComment.length > 0) {
      return listComment.map((value, index) => (
        <div className="list-comment" key={index}>
          <div className="infor-user-comment">
            <div className="img-user-comment">
              <img className="img-user" width={50} height={50} src="/assets/image/anh-comment.jpg" alt="" />
            </div>
            <div className="body-user-comment">
              <span>{value.namecomment}</span>
              <span>{formatTimestamp(value.logcomment)}</span>
              
            </div>
          </div>
          <div className="value-comment">
            <p>{value.contextcomment}</p>
            <a href="" className="reply"> <i className="fa fa-reply"></i>Reply</a>
          </div>
        </div>
      ));
    }
  }

  return (
    <>
      {renderListComment()}
    </>
  );
};

export default ListComment;
