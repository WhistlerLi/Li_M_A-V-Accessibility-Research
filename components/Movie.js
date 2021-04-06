export default {
    template: `
        <body>
<nav class="navbar">
  <div class="logo"> <a href="javascript:;"> <img src="static/images/logo.png"> </a> </div>
  <div class="site-menu">
    <ul>
      <li><a href="javascript:;">HOME</a></li>
      <li><a href="javascript:;">MOVIES</a></li>
      <li><a href="javascript:;">AUDIO</a></li>
      <li><a href="javascript:;">TIPS</a></li>
    </ul>
  </div>
  <div class="user-menu">
    <div class="navbar-account">
      <i class="lni lni-user" style="background-color:#fff;"><img src="./static/images/night.png"></i>
      <i class="lni lni-user" style="background-color:#fff;"><img src="./static/images/zoom.png"></i>
      <i class="lni lni-user" style="background-color:#fff;"><img src="./static/images/subtitle-icon.jpeg"></i>
    </div>
  </div>
</nav>
<header class="page-header" style="margin:0 0 0;">
<div class="container">
<h1>Movies . Audio</h1>
</div>
</header>
<main>
  <section class="content-section">
    <div class="container">
    <div class="row">
        <div class="col-12">
          <div class="section-title">
            <h6>FIND ANYWHERE ELSE</h6>
            <h2>Movies And Audio For You</h2>
          </div>
        </div>
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6" style="width:33%;">
          <div class="video-thumb">
            <figure style="background:#000;">
              <video controls style="height:400px;width:100%;">
                    <source src="./static/video/voice.m4a" type="video/mp4" height="100%" width="100R%">
              </video>
              
            </figure>
            <div class="video-content"> <small class="range">3.6 min,</small>
              <ul class="tags">
                <li>Hypnosis</li>
              </ul>
              <div class="age">PG13</div>
              <h3 class="name"><a href="javascript:;">This is an audio</a></h3>
            </div>
          </div>
        </div>
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6" style="width:33%;">
          <div class="video-thumb">
            <figure class="video-image1" style="background:#000;"> 
              <video controls style="height:400px;width:100%;">
                    <source src="./static/video/video1.mp4" type="video/mp4" height="100%" width="100%">
              </video>
            </figure>
            <div class="video-content"> <small class="range">1.44 min,</small>
              <ul class="tags">
                <li>Romance</li>
              </ul>
              <div class="age">PG13</div>
              <h3 class="name"><a href="movie-single.html">This is a movie</a></h3>
            </div>
          </div>
        </div>
        <div class="col-xl-2 col-lg-3 col-md-4 col-sm-6 col-6" style="width:33%;">
          <div class="video-thumb">
            <figure style="background:#000;">
              <video controls style="height:400px;width:100%;">
                    <source src="./static/video/video2.mp4" type="video/mp4" height="100%" width="100%">
              </video>
            </figure>
            <div class="video-content"> <small class="range">0.39 min,</small>
              <ul class="tags">
                <li>Animation</li>
              </ul>
              <div class="age">PG13</div>
              <h3 class="name"><a href="javascript:;">This is an animation</a></h3>
            </div>
          </div>
        </div> 
      </div>
    </div>
  </section>
  <footer class="footer">
    <div class="bottom-bar">
      <div class="container"> <span>© Copyright @Roku 2021, Inc</span> <span>Site create by <a href="#">RouKu</a></span> </div>
    </div>
  </footer>
</main>


</body>

    `,
}
