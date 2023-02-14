function TopMenu() {
  return (
    <div className="top-bar bg-dark text-gray">
      <div className="container">
        <div className="row top-bar-holder">
          <div className="col-xs-9 col">
            <ul className="font-lato list-unstyled bar-links">
              <li>
                <a href="tel:+611234567890">
                  <strong className="dt element-block text-capitalize hd-phone">
                    Call :
                  </strong>
                  <strong className="dd element-block hd-phone">
                    +(61) 123 456 7890
                  </strong>
                  <i className="fas fa-phone-square hd-up-phone hidden-sm hidden-md hidden-lg">
                    <span className="sr-only">phone</span>
                  </i>
                </a>
              </li>
              <li>
                <a href="mailto:Example@domain.com">
                  <strong className="dt element-block text-capitalize hd-phone">
                    Email :
                  </strong>
                  <strong className="dd element-block hd-phone">
                    Example@domain.com
                  </strong>
                  <i className="fas fa-envelope-square hd-up-phone hidden-sm hidden-md hidden-lg">
                    <span className="sr-only">email</span>
                  </i>
                </a>
              </li>
            </ul>
          </div>
          <div className="col-xs-3 col justify-end">
            <ul className="list-unstyled user-links fw-bold font-lato">
              <li>
                <a href="#popup1" className="lightbox">
                  Login
                </a>{" "}
                <span className="sep">|</span>{" "}
                <a href="#popup2" className="lightbox">
                  Register
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
export default TopMenu;
