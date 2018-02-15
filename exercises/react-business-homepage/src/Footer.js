import React from 'react';

function Footer(){
    return (
        <div className="footerDiv">
            <div className="footerLeftFill"></div>
            <div className="formDiv">
                <form name="subscribeForm">
                    <formfield>
                        <input type="text" placeholder="What do we call you?"/>
                        <input type="email" placeholder="Email Adress"/>
                        <label htmlFor="subscribeForm"><button type="Submit" className="submitBtn">Submit</button></label>
                    </formfield>
                </form>
            </div>
            <div className="footerRightFill"></div>
            <div className="iconsDiv">
                <ul>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div>
        </div>
    )
}

export default Footer;
