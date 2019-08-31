import React, { Component } from 'react'
import '../index.css'

class NavBar extends Component {

    render() {
        var bellSize = {
            fontSize: '28px',
            opacity:'0.6'
        }
        return (
            <div className="header">
                <div className="logo_section">YourLogo</div>
                <div className="notify_section">
                    <div className="abGrp">
                        <span className="ab">AB</span>
                    </div>
                    <div id="bell_icon">
                        <i className="fa fa-bell-o" style={bellSize}></i>
                        <div className="unread_count">
                            <span className="count">699</span>
                        </div>
                    </div>

                </div>
            </div>
        )
    }

}

export default NavBar