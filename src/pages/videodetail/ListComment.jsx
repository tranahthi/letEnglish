

import { useEffect, useState } from "react"
import "./listcomment.scss"

let ListComment = (props) =>{



        const [listComment , setListComment] = useState([])
        const {comments} = props  //idUser , idVideo ,userName
        console.log(comments)
        useEffect(() =>{
            setListComment(comments)
        },[comments])

        // Function to get the current date and time
        const formatTimestamp = (timestamp) => {
            const commentDate = new Date(timestamp);
            const formattedDate = commentDate.toLocaleDateString(); // You can customize the date format as needed
            const formattedTime = commentDate.toLocaleTimeString(); // You can customize the time format as needed
        
            return `${formattedDate} ${formattedTime}`;
          };

        function renderListComment (){
            if(Array.isArray(listComment) &&listComment.length >0){
                return listComment.map((value ,index)=>{
                    return (
                        <div className="list-comment" key={index}>
                            <div className="infor-user-comment">
                                <div className="img-user-comment">
                                    <img className="img-user" width={50} height={50} src="/assets/image/anh-comment.jpg" alt="" />
                                </div>
                                <div className="body-user-comment">
                                    <span>{value.namecomment}</span> 
                                    <span>{formatTimestamp(value.timestamp)}</span>   
                                </div>
                            </div>
                            <div className="value-comment">
                                <p>{value.contextcomment}</p>
                                <a href="" className="reply"> <i className="fa fa-reply"></i>Reply</a>
                
                            </div>
                        </div>

                    )
                })
            }
        }

    return (

        
     <>
       {renderListComment()}
     </>

        
      

    )

}
export default ListComment
