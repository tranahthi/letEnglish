import "./introduce.scss"



function Introduction() {
    return (
        <div className="hero">

            <video autoplay loop muted plays-inline class="back-video">
                <source src="/assets/video/video.mp4"></source>
            </video>

            <nav>
                <img src= "/assets/image/logo4.png" class="logo"alt="" />
                
            </nav>
            <div className="content-fix">
                <h1>Let's Learn English</h1>
                <a href="/login">Start</a>
            </div>

        </div>
    )
}

export default Introduction;