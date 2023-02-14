import logo from "../asset/images/logo.png";
function BottomMenu() {
  return (
    <div className="header-holder">
      <div className="container">
        <div className="row">
          <div className="col-xs-6 col-sm-3">
            {/* <!-- logo --> */}
            <div className="logo">
              <a href="home.html">
                <img className="hidden-xs" src={logo} alt="studylms" />
                <img
                  className="hidden-sm hidden-md hidden-lg"
                  src="images/logo-dark.png"
                  alt="studylms"
                />
              </a>
            </div>
          </div>
          <div className="col-xs-6 col-sm-9 static-block">
            {/* <!-- nav --> */}
            <nav id="nav" className="navbar navbar-default">
              <div className="navbar-header">
                <button
                  type="button"
                  className="navbar-toggle collapsed"
                  data-toggle="collapse"
                  data-target="#bs-example-navbar-collapse-1"
                  aria-expanded="false"
                >
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
              </div>
              {/* <!-- navbar collapse --> */}
              <div
                className="collapse navbar-collapse"
                id="bs-example-navbar-collapse-1"
              >
                {/* <!-- main navigation --> */}
                <ul className="nav navbar-nav navbar-right main-navigation text-uppercase font-lato">
                  <li className="dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      home
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="home.html">Home 1</a>
                      </li>
                      <li>
                        <a href="home2.html">Home 2</a>
                      </li>
                      <li>
                        <a href="home3.html">Home 3</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Courses
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="courses-list.html">Course List</a>
                      </li>
                      <li>
                        <a href="course-single.html">Course Single</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Events
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="events-list.html">Event List</a>
                      </li>
                      <li>
                        <a href="event-sigle.html">Event Single</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Pages
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="404.html">404 Page</a>
                      </li>
                      <li>
                        <a href="about-us.html">About us</a>
                      </li>
                      <li>
                        <a href="forum.html">Forum Page</a>
                      </li>
                      <li>
                        <a href="forum-single.html">Forum Single</a>
                      </li>
                      <li>
                        <a href="instructors-list.html">Instructors List</a>
                      </li>
                      <li>
                        <a href="instructor-single.html">Instructors Single</a>
                      </li>
                      <li>
                        <a href="login-register.html">Login &amp; Register</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Blog
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="blog.html">Blog List</a>
                      </li>
                      <li>
                        <a href="blog-single.html">Blog Single</a>
                      </li>
                    </ul>
                  </li>
                  <li className="dropdown">
                    <a
                      href="#"
                      className="dropdown-toggle"
                      data-toggle="dropdown"
                      role="button"
                      aria-haspopup="true"
                      aria-expanded="false"
                    >
                      Shop
                    </a>
                    <ul className="dropdown-menu">
                      <li>
                        <a href="shop.html">Shop List</a>
                      </li>
                      <li>
                        <a href="single-product.html">Shop Single</a>
                      </li>
                      <li>
                        <a href="cartage.html">Cart Page</a>
                      </li>
                      <li>
                        <a href="checkout.html">Checkout</a>
                      </li>
                    </ul>
                  </li>
                  <li>
                    <a href="contact.html">coNTACT</a>
                  </li>
                </ul>
              </div>
              {/* <!-- navbar form --> */}
              <form
                action="#"
                className="navbar-form navbar-search-form navbar-right"
              >
                <a
                  className="fas fa-search search-opener"
                  role="button"
                  data-toggle="collapse"
                  href="#searchCollapse"
                  aria-expanded="false"
                  aria-controls="searchCollapse"
                >
                  <span className="sr-only">search opener</span>
                </a>
                {/* <!-- search collapse --> */}
                <div className="collapse search-collapse" id="searchCollapse">
                  <div className="form-group">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search …"
                    />
                    <button type="button" className="fas fa-search btn">
                      <span className="sr-only">search</span>
                    </button>
                  </div>
                </div>
              </form>
            </nav>
          </div>
        </div>
      </div>
    </div>
  );
}
export default BottomMenu;
