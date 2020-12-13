function readingmaterials(){
    return(
        <div>
        <meta content="width=device-width, initial-scale=1" name="viewport" />
        <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossOrigin="anonymous" />
        {/* Browser Icon */}
        <link rel="icon" href="Logo-1vfColored-Eagle.png" type="image/gif" sizes="16x16" />
        {/* CSS Stylesheet */}
        <link rel="stylesheet" type="text/css" href="styles/Reading-Materials.css" />
        {/* Text API */}
        <link href="https://fonts.googleapis.com/css?family=Cinzel&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css?family=EB+Garamond&display=swap" rel="stylesheet" />
        <title>YESMAR</title>
        {/* START NAVBAR */}
        <nav id="navbar" className="navbar navbar-expand-lg static-top">
          <div className="container">
            <a className="navbar-brand" href="170x70-navbar-logo.jpg">
              <img src="images/170x70-navbar-logo.jpg" alt="" />
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarResponsive" aria-controls="navbarResponsive" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon" />
            </button>
            <div className="collapse navbar-collapse" id="navbarResponsive">
              <ul className="navbar-nav ml-auto">
                <li className="nav-item active">
                  <a className="nav-link" href="Index.html">Home
                    <span className="sr-only">(current)</span>
                  </a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="Reading-Materials.html">Reading Materials</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* END NAVBAR */}
        {/* Content Start */}
        <div id="post">
          <section className="py-5">
            <div className="container">
              <p>Year End Letters</p>
              <a href className="btn btn-colour-1">Social Capital's 2018 Letter</a>
              <a href className="btn btn-colour-1">LionTree's 2016 Letter</a>
              <a href className="btn btn-colour-1">LionTree's 2019 Letter</a>
            </div>
          </section></div>
        <div id="post">
          <section className="py-5">
            <div className="container">
              <p>Investor Presentations</p>
              <a href className="btn btn-colour-1">Pershing Square 2020</a>
              <a href className="btn btn-colour-1">ARK Invest 2020 Themes</a>
              <a href className="btn btn-colour-1">TBU</a>
            </div>
          </section>
        </div>
        <div id="post">
          <section className="py-5">
            <div className="container">
              <p>Noteworthy Articles</p>
              <a href className="btn btn-colour-1">Tesla Master Plan 1 (2006)</a>
              <a href className="btn btn-colour-1">Tesla Master Plan 2 (2016)</a>
              <a href className="btn btn-colour-1">TBU</a>
            </div>
          </section>
        </div>
      </div>
    );
  }

export default readingmaterials;