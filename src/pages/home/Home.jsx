import { useEffect, useState } from "react"
import DataPicker from "./DataPicker"
import "./home.scss"
import AxiosClient from "../../api/AxiosClient"
import StudyGoals from "./StudyGoals"



function Home(props) {

    const [learnedWord , setLearnedWord] = useState("")
    const [savedWord , setSavedWord] = useState([])
    const [getTotalDay,setTotalDay] = useState("")
        console.log(savedWord)
        console.log(learnedWord)
    let userData = localStorage.getItem('userData');
    if (userData) {
        userData = JSON.parse(userData);
    }


  
// dang fixx khuc nay chieu 25/12
    useEffect(() =>{
        AxiosClient.get(`api/v1/wordslearned?iduser=${userData.id}`)
        .then(res =>{
            console.log(res)
            setLearnedWord(res.data)
        })
        .catch(error => console.log(error))
        getSaved()
        getTotal()
      
    },[userData.id])


    const getSaved = () =>{
        AxiosClient.post(`/api/v1/listword?iduser=${userData.id}`)
        .then(res =>{
            console.log(res)
            setSavedWord(res.data)
        })
        .catch(error => console.log(error))
    }

    // http://192.168.1.13:8081/api/v1/sumtimelog?iduser=1
   const getTotal = () =>{

    AxiosClient.post(`/api/v1/sumtimelog?iduser=${userData.id}`)
    .then(res =>{
        console.log(res)
        setTotalDay(res.data)
    })
    .catch(error => console.log(error))

   }
   
    return (
        <>

            <div className="container content-top">
                <div className=" row " id="row-top" >
                    <div className=" content__home col-md-4 col-sm-4 col-lg-4" id="content1">
                        <img className="img-fix" src="https://static.memrise.com/uploads/immerse_featured_content/v7.gif" alt="" />
                        <div className="content__home--bottom" >
                            <button className="btn btn-primary">Watch video</button>

                            <p className="text-white text-center">Use words you know</p>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 col-lg-4 content__home" id="content2">
                        <div className="container">
                            <div className="row">
                                <p className="process-learn" style={{ marginBottom: "5px" }}>Your progress in month</p>
                                <div className="content__home--middle col-3">
                                    <div className="content__home--middle--top">
                                        <img src="/assets/icon/iconbook.svg" />
                                        <p >Learned words</p>
                                    </div>
                                    <div className="content__home--middle--bottom">
                                        <p>{learnedWord}</p>
                                    </div>
                                </div>
                                <div className="content__home--middle col-3">
                                    <div className="content__home--middle--top">
                                        <img src="/assets/icon/iconvideo.svg" />
                                        <p>Saved words</p>
                                    </div>
                                    <div className="content__home--middle--bottom">
                                        <p>{savedWord.length}</p>
                                    </div>
                                </div>
                                <div className="content__home--middle col-3">
                                    <div className="content__home--middle--top">
                                        <img src="/assets/icon/iconchat.svg" />
                                        <p>The conversation has been completed</p>
                                    </div>
                                    <div className="content__home--middle--bottom">
                                        <p>0</p>
                                    </div>
                                </div>
                                <div className="content__home--middle col-3">
                                    <div className="content__home--middle--top">
                                        <img src="/assets/icon/iconbook.svg" />
                                        <p>Viewed video</p>
                                    </div>
                                    <div className="content__home--middle--bottom">
                                        <p>0</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-4 col-sm-4 col-lg-4 content__home" id="content3">
                        <div className="container">
                            <p className="tool-following">Tools to track your activity</p>
                            <DataPicker />
                            <div className="content__home--note">
                                <div className="content__home--subnote">
                                </div>
                                <p>Date with study progress</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container content">
                    <div className="row">
                        <div className=" col-md-4 content__left" >
                            <div className="container">
                                <p className="title-practice">Ready to practice</p>
                                <div className="word-diff-practice">
                                    <div className="word-diff">
                                        <div className="sub-word">
                                            <h5>0</h5>
                                            <span style={{padding:"10px"}}> Từ khó</span>
                                        </div>

                                    </div>

                                </div>

                            </div>

                        </div>
                        <StudyGoals/>
                        <div className="col-md-4 content__right">
                            <div className="container">
                                <div className="content__right--title">
                                    <h5>Your school record</h5>
                                    <p>The continuous days that you have gone through towards mastering a foreign language</p>
                                </div>
                                <div className="content__right--timelearn">

                                    <p>
                                        Longest
                                    </p>
                                    <div className="span-time">
                                        <span>{getTotalDay}</span>
                                        <div className="time"></div>
                                    </div>

                                </div>

                            </div>
                        </div>
                    </div>

                </div>

            </div>
        </>
    )
}
export default Home