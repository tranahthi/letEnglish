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
                                        <a className="nav-link " aria-current="page" href="#">Vocabulary</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link " aria-current="page" href="/listvideo">Video</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link " aria-current="page" href="#">Communicate</a>
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