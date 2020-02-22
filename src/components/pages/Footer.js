import React from "react";
const Footer = () => {
  return (
    <div className='foot'>
      <footer className='page-footer'>
        <div className='container'>
          <div className='row'>
            <div className='col l6 s12'>
              <h5 className='white-text'>Genesys Solutions</h5>
              <p className='grey-text text-lighten-4'>
                It provides you the best customer experience
              </p>
            </div>
            <div className='col l4 offset-l2 s12'>
              <h5 className='white-text'>Contact Us</h5>
              <ul>
                <li>
                  <a
                    className='grey-text text-lighten-3'
                    href='#!'
                    style={{ display: "flex" }}
                  >
                    <i
                      className='material-icons large'
                      style={{
                        paddingTop: "12px",
                        fontSize: "xx-large",
                        paddingRight: "10px"
                      }}
                    >
                      email
                    </i>
                    <p>support@genesysverify.com</p>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className='footer-copyright'>
          <div className='container'>© 2020 Clarifies You</div>
        </div>
      </footer>
    </div>
  );
};
export default Footer;
