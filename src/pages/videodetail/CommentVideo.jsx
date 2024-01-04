// CommentVideo.js
import AxiosClient from "../../api/AxiosClient";
import "./comment.scss";
import { useState } from "react";

const CommentVideo = (props) => {
  const [newComment, setNewComment] = useState("");
  const { idUser, idVideo, userName, onAddComment, comments } = props;

  const handleCommentChange = (event) => {
    setNewComment(event.target.value);
  };

  const handleAddComment = () => {

    if (newComment.trim() !== "") {
      AxiosClient.post(`/api/v1/comment?mess=${newComment}&iduser=${idUser}&idvideo=${idVideo}&namecomment=${userName}&logcomment=${new Date()}`)
        .then(res => {
          console.log(res);
          setNewComment("");

          const newComment = {
            contextcomment: res.data.mess,
            namecomment: userName,
            timestamp: res.data.logcomment
          };
          onAddComment(newComment);
        })
        .catch(error => console.log(error));
    }
  };

  return (
    <div className="comment-box mt-4">
      <div className="tag-conversation">
        <h3>Conversation <span>{comments.length} comments</span></h3>
      </div>
      <div className=" box mb-3">
        <img width={50} height={50} src="/assets/image/anh-comment.jpg" alt="" />
        <textarea
          className="form-control"
          rows="3"
          placeholder="Add a comment..."
          value={newComment}
          onChange={handleCommentChange}
        ></textarea>
      </div>
      <button className="btn btn-primary" onClick={handleAddComment}>
        Add Comment
      </button>
    </div>
  );
};

export default CommentVideo;
