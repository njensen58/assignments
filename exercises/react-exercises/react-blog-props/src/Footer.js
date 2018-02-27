import React from 'react';


function Footer(){
  return (
    <div className="footerContainer">
      <div className="buttonDiv">
        <div className="footerButton">
          <span className="btnText">Older Posts<i className="ion-arrow-right-c"></i></span>
        </div>
      </div>
      <div className="iconDiv">
        <ul>
          <li><i className="ion-social-twitter"></i></li>
          <li><i className="ion-social-facebook"></i></li>
          <li><i className="ion-social-instagram"></i></li>
        </ul>
      </div>
      <div className="copyright">
        <p>Copyright çøπ¥ - My Website 2018</p>
      </div>
    </div>
  )
}

export default Footer;
