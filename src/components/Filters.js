import React from 'react'
import '../filter.css'

const filter = function () {
    var h = {
        height: '32px'
    }
    return (
        <div className="filters_div">
            <div class="filters">
                <div className=" filter content_filter">
                    <div className="filter_inner">
                        <span className="content_value">All Content Categories</span>
                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </div>

                </div>
                <div className=" filter industry_filter">
                    <div className="filter_inner">
                        <span className="industry_value">All Industries</span>
                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </div>
                </div>
                <div className=" filter  status_filter">
                    <div className="filter_inner">
                        <span className="status_value">Status</span>
                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
            <div className="d-inline clearSec"><span className="clearAll">Clear All</span></div>
            <div className="d-flex displaySection">
                <div className=" displayCurrJobs">
                    <span>Displaying 1-10 of 999 jobs</span>
                </div>
                <div className="timeFilter">
                    <div className="timeFilter_desc">
                        <span className="timefliter_value">Least time left first</span>
                        <i class="fa fa-angle-down" aria-hidden="true"></i>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default filter;