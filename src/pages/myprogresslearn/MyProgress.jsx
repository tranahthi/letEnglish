import AxiosClient from '../../api/AxiosClient';
import { toast } from 'react-toastify';
import '../profile/profile.scss';
import './myprogress.scss'
import React, { useEffect, useState } from 'react';
import DowloadFileVoca from './DowloadFileVoca';

function MyProgress() {
    const [activeTab, setActiveTab] = useState('#account-general');
    const [subTab, setSubTab] = useState('saved-video'); // Default sub-tab
    const [getListWord, setListWord] = useState({})
    const [isFavorite, setIsFavorite] = useState([]);
    
    console.log(getListWord)
    const handleTabChange = (tabId) => {
        setActiveTab(tabId);
        // Reset subTab when changing the main tab
        setSubTab('saved-video');
    };

   

    const handleSubTabChange = (subTabId, e) => {
        e.preventDefault()
        setSubTab(subTabId);
    };

    let userData = localStorage.getItem('userData');
    if (userData) {
        userData = JSON.parse(userData);
    }
    useEffect(() => {


        AxiosClient.post(`api/v1/listword?iduser=${userData.id}`)
        .then(res =>{
            console.log(res)
            setListWord(res.data)
            setIsFavorite(res.data.map(() => true)); // Assuming initially all words are favorited
        })
    }, [])

    // const handleIsFavorite = (index) => {
    //     const updatedIsFavorite = [...isFavorite];
    //     updatedIsFavorite[index] = !updatedIsFavorite[index];
    //     setIsFavorite(updatedIsFavorite);
    
    //     const wordId = getListWord[index].idvocabulary;
    
    //     // Remove word from memory API call
    //     AxiosClient.post(`/api/v1/deletememory?iduser=${userData.id}&idword=${wordId}`)
    //         .then((res) => {
    //             console.log(res);
    
    //             // Remove the word from the list when unfavorited
    //             if (!updatedIsFavorite[index]) {
    //                 const updatedListWord = [...getListWord];
    //                 updatedListWord.splice(index, 1);
    //                 setListWord(updatedListWord);
    //             }
    //             toast.success('you delete success!', {
    //                 position: 'top-right',
    //                 autoClose: 3000,
    //                 hideProgressBar: false,
    //                 closeOnClick: true,
    //                 pauseOnHover: true,
    //                 draggable: true,
    //                 progress: undefined,
    //             });
    //         })
    //         .catch((error) => {
    //             console.error('Error removing word from memory:', error);
    //             // Handle error as needed
    //         });
    // };
    const handleIsFavorite = (index) => {
        const wordId = getListWord[index].idvocabulary;
    
        // Remove word from memory API call
        AxiosClient.post(`/api/v1/deletememory?iduser=${userData.id}&idword=${wordId}`)
            .then((res) => {
                console.log(res);
    
                // Remove the word from the list when unfavorited
                if (!isFavorite[index]) {
                    const updatedListWord = [...getListWord];
                    updatedListWord.splice(index, 1);
                    setListWord(updatedListWord);
                }
                
                // Update the isFavorite state after the API request
                const updatedIsFavorite = [...isFavorite];
                updatedIsFavorite[index] = !isFavorite[index];
                setIsFavorite(updatedIsFavorite);
    
                toast.success('you delete success!', {
                    position: 'top-right',
                    autoClose: 3000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
            })
            .catch((error) => {
                console.error('Error removing word from memory:', error);
                // Handle error as needed
            });
    };
    

    const renderSubTabContent = () => {
        switch (subTab) {
            case 'saved-video':
                return (
                    <div className='video-saved'>
                        <div className='img-saved-video'>
                            <img src="/assets/image/anhtesst.jpg" alt="" />
                        </div>
                        <div className='div-a'>
                            <h3 className='h3-a'>
                                <a className='title-a' href=""> Why America votes on Tuesdays|November 7, 2023</a>
                            </h3>
                            <hr className='line' />
                            {/* <div className=''>

                            </div> */}

                        </div>

                    </div>
                );
            case 'history':
                return (
                    <div>
                        {/* Content for History sub-tab */}
                        {/* Display video history here */}
                        <p>List of watched videos goes here.</p>
                    </div>
                );
            default:
                return null;
        }
    };

    return (
        <div className="container-fluid light-style flex-grow-1 container-p-y" id='id-account'>
            <h4 className="font-weight-bold py-3 mb-4">
                My progress learning
            </h4>
            <div className="card overflow-hidden">
                <div className="row no-gutters row-bordered row-border-light">
                    <div className="col-md-3 pt-0">
                        <div className="list-group list-group-flush account-settings-links">
                            <a
                                className={`list-group-item list-group-item-action ${activeTab === '#account-general' ? 'active' : ''}`}
                                data-toggle="list"
                                href="#account-general"
                                onClick={() => handleTabChange('#account-general')}
                            >My videos</a>
                            <a
                                className={`list-group-item list-group-item-action ${activeTab === '#account-change-password' ? 'active' : ''}`}
                                data-toggle="list"
                                href="#account-change-password"
                                onClick={() => handleTabChange('#account-change-password')}
                            >My vocabulary</a>
                            <a
                                className={`list-group-item list-group-item-action ${activeTab === '#account-info' ? 'active' : ''}`}
                                data-toggle="list"
                                href="#account-info"
                                onClick={() => handleTabChange('#account-info')}
                            >Info</a>
                        </div>
                    </div>
                    <div className="col-md-9">
                        <div className="tab-content">
                            <div className={`tab-pane fade ${activeTab === '#account-general' ? 'show active' : ''}`} id="#account-general">
                                <div className='saved-video-history' >
                                    <div className={`saved-video ${subTab === 'saved-video' ? 'active' : ''}`} onClick={(e) => handleSubTabChange('saved-video', e)}>
                                        <a href="">Saved videos</a>
                                    </div>
                                    <div className={`history ${subTab === 'history' ? 'active' : ''}`} onClick={(e) => handleSubTabChange('history', e)}>
                                        <a href="">History</a>
                                    </div>
                                </div>
                                {renderSubTabContent()}
                            </div>

                        </div>
                        
                        <div className="tab-content" id='tab-word'>
                            <div className={`tab-pane fade tab-word ${activeTab === '#account-change-password' ? 'show active' : ''}`} id="#account-change-password" >
                                {getListWord  && getListWord.length > 0 ? ( //&& getListWord.voca
                                    getListWord.map((word, index) => (
                                
                                        <div className='fix-isFavorite'>
                                            <div className='saved-voca' key={index}>
                                                <h5 style={{fontWeight:"600"}}>{word.voca_eng}</h5> 
                                                <h6>{word.voca_vi}</h6>
                                            </div>
                                           <div className='heart-icon-container'>
                                           {isFavorite[index] ? (
                                                <img width={30} height={30} src="/assets/icon/iconheart-red.svg" alt="" onClick={()=> handleIsFavorite(index)}/>
                                            ) : (
                                                <img width={30} height={30} src="/assets/icon/iconheart.svg" alt="" />
                                            )}
                                                
                                           </div>
                                        </div>
                                
                                    ))
                                ) : (
                                    <p>No words available.</p>
                                )}
                               
                               
                               <div className="download-button-container">
                                            <DowloadFileVoca vocabularyData={getListWord} />
                                    </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyProgress;
