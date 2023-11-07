import "./style.scss"

function Header() {


    return (

        <nav className="nav-top navbar navbar-expand-lg fixed-top" id="mainnav">
            <div className="container-fluid">
                <div className="nav-content">
                    <div>
                        <a className="navbar-brand" id="logo" href="#">
                            <img src="/assets/image/logo4.png" />
                        </a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </div>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <div className="navmain" style={{ display: "flex", justifyContent: "space-between" }}>
                                <div className="enav-lft" style={{ display: "flex" }}>
                                    <li className="nav-item">
                                        <a className="nav-link " aria-current="page" href="/">Home</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link " aria-current="page" href="/topic">Vocabulary</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link " aria-current="page" href="/listvideo">Video</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link " aria-current="page" href="http://172.20.10.8/:8081/crud/example">Communicate</a>
                                    </li>
                                </div>
                                <div className="nav-rigth">
                                    <li className="nav-item dropdown">
                                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                            Language
                                        </a>
                                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                                            <li><a className="dropdown-item" href="#">vietnamese</a></li>
                                            <li><a className="dropdown-item" href="#">english</a></li>
                                        </ul>
                                    </li>

                                </div>

                            </div>

                        </ul>

                    </div>
                </div>
            </div>
        </nav>


    )


}
export default Header


// function Header() {
//     return (
//         <nav class="navbar navbar-expand-lg fixed-top bg-body-tertiary">
//             <div class="container-fluid">

//                 <a class="navbar-brand" id="logo" href="#"><img src="/assets/image/logo4.png" /></a>

//                 <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
//                     <span class="navbar-toggler-icon"></span>
//                 </button>

//                 <div class="collapse navbar-collapse" id="navbarScroll">
//                     <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll" style={{ "--bs-scroll-height": "100px" }}>
//                         <li class="nav-item">
//                             <a class="nav-link active" aria-current="page" href="#">Home</a>
//                         </li>

//                         <li class="nav-item dropdown">
//                             <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                                 Vocabulary
//                             </a>
//                             <ul class="dropdown-menu">
//                                 <li><a class="dropdown-item" href="#">Learn</a></li>
//                                 <li><a class="dropdown-item" href="#">Practice</a></li>
//                             </ul>
//                         </li>

//                         <li class="nav-item">
//                             <a class="nav-link" href="#">Exam</a>
//                         </li>

//                         <li class="nav-item">
//                             <a class="nav-link" href="/listvideo">Video</a>
//                         </li>

//                     </ul>

//                     <form class="d-flex" role="user_actions">

//                         <div class="btn-group">
//                             <button type="button" class="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
//                             <img className="user_icon" src="/assets/icon/user-regular.svg" alt="Icon" />
//                             </button>
//                             <ul class="dropdown-menu dropdown-menu-end">
//                                 <li><a class="dropdown-item" href="#">Proflie</a></li>
//                                 <li><a class="dropdown-item" href="#">Log out</a></li>
//                             </ul>
//                         </div>

//                         {/* <li class="nav-item dropdown">
//                             <a class="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
//                             <img  className="user_icon" src="/assets/icon/user-regular.svg" alt="Icon" />
//                             </a>
//                             <ul class="dropdown-menu">
//                                 <li><a class="dropdown-item" href="#">Profile</a></li>
//                                 <li><a class="dropdown-item" href="#">Log out</a></li>
//                             </ul>
//                         </li> */}

//                     </form>
//                 </div>
//             </div>
//         </nav>
//     );
// }


// export default Header;