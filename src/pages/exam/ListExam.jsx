import { useEffect, useState } from "react";
import AxiosClient from "../../api/AxiosClient";
import "./listexam.scss";
import { useNavigate } from "react-router-dom";

const ListExam = () => {
  const [getTopic, setTopic] = useState([]);
  const navigate = useNavigate()
  
  useEffect(() => {
    AxiosClient.get(`/topic/topicmodal`)
    .then((res) => {
      console.log(res);
      setTopic(res.data);
    });
  },[]);


  function handleClick(nameTopic){

    console.log(nameTopic)
      navigate(`/exam/${nameTopic}`)

  }



  function renderTopic() {
    if (Array.isArray(getTopic) && getTopic.length > 0) {
      return getTopic.map((topic, index) => (
        <div className="name-topic" key={index} onClick={() => handleClick(topic.name_topic)} >
          <h3 className="name">{topic.name_topic}</h3>
        </div>
      ));
    }
  }

  return (
    <div className="container list-topic-exam" >
      <div className="topic-exam">
        <div className="sub-topic-exam">{renderTopic()}</div>
      </div>
    </div>
  );
};

export default ListExam;
