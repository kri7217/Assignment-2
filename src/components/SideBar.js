import React from 'react'
import Case from '../suitcase.svg'
import '../sidebar.css'

const SideBar = function () {

    var opacity={
        opacity: '0.5915411'
    }

    return (
        < div className="sidebar" >
            <div className="sidebarIcon">
                <div className="searchIcon flex_center active_icon">
                    <div>
                        <div className="sqs active"></div>
                        <div className="sqs active"></div>
                        <div className="sqs active" id="third"></div>
                        <div className="sqs active"></div>
                    </div>
                </div>
                <div className="searchIcon flex_center">
                    <div className="text-center">
                        <i class="fa fa-search" aria-hidden="true"></i>
                    </div>
                </div>
                <div className="searchIcon flex_center">
                    <img style={opacity} src={Case} width="22.22px" height="20px" alt=""></img>
                </div>
            </div>

        </div >
    )
}

export default SideBar