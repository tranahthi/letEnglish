import "./introduce.scss"



function Introduction() {
    return (
        <div className="hero">

            <video autoplay loop muted plays-inline class="back-video">
                <source src="/assets/video/video.mp4"></source>
            </video>

            <nav>
                <img src= "/assets/image/logo4.png" class="logo"alt="" />
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact us</a></li>
                </ul>
            </nav>
            <div className="content">
                <h1>Let's Learn English</h1>
                <a href="/login">Start</a>
            </div>

        </div>
    )
}

export default Introduction;