import React from 'react'
import '../footer.css'


const footer = function () {

    return (
        <div id="footer">
            <div className="footer_content">
                <div className="socialGrp d-flex justify-content-between mb-2">
                    <span className="fa fa-twitter"></span>
                    <span className="fa fa-linkedin"></span>
                    <span className="fa fa-instagram"></span>
                    <span className="fb fa fa-facebook"></span>
                </div>
                <div className="copyright mb-2">
                    <div>Copyright @ 2019 White Panda Media Pvt. Ltd</div>
                      <div>All rights reserved.</div>
                </div>
                <div className="privacypol">
                    <span>Privacy Policy</span> &nbsp; | &nbsp; <span>Terms of Service</span> &nbsp; | &nbsp; <span>Service Agreement</span> &nbsp; | &nbsp; <span>Contact Us</span>
                </div>
            </div>
        </div>
    )
}

export default footer