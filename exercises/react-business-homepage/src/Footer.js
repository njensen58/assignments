import React from 'react';

function Footer(){
    return (
        <div className="footerDiv">
            <form name="subscribeForm">
                <formfield>
                    <input type="text" placeholder="What do we call you?"/>
                    <input type="text" placeholder="Email Adress"/>
                    <label htmlFor="subscribeForm"><button type="Submit">Submit</button></label>
                </formfield>
            </form>
            <p>
                Copyright - 2018
            </p>
        </div>
    )
}

export default Footer;
