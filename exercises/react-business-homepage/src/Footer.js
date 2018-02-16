import React from 'react';

function Footer(){
    return (
        <div className="footerDiv">
            <div className="footerLeftFill"></div>
            <div className="formDiv">
                <form name="subscribeForm">
                    <formfield>
                        <h3>Send me a Request!</h3>
                        <input type="text" placeholder="What is your name?"/>
                        <input type="email" placeholder="Email Address"/>
                        <label htmlFor="subscribeForm"><button type="Submit" className="submitBtn">Submit</button></label>
                    </formfield>
                </form>
            </div>
            <div className="footerRightFill"></div>
            <div className="iconsDiv">
                <ul>
                    <li><i className="ion-social-googleplus icon1"></i></li>
                    <li><i className="ion-social-github icon2"></i></li>
                    <li><i className="ion-social-twitter icon3"></i></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;
