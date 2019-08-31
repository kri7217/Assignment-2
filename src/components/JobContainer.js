import React, { Component } from 'react'
import Pagination from './Pagination'
import { FetchJobList } from '../data/JobList'
import JobItem from './JobItem'
import SideBar from './SideBar'
import Filters from './Filters'
import '../container.css'


class JobContainer extends Component {
    constructor() {
        super();
        var jobs = FetchJobList()
        this.state = {
            jobItems: jobs,
            pageOfItems: []
        };
        this.onChangePage = this.onChangePage.bind(this);
    }

    onChangePage(pageOfItems) {
        // update state with new page of items
        this.setState({ pageOfItems: pageOfItems });
    }

    render() {
        return (
            <div className="containerStyle">
                <div>
                    <SideBar></SideBar>
                </div>
                <div className="jobContainerStyle" >
                    <div className="mobile_display">
                        <div className="appJobs">
                            Your Jobs
                        </div>

                        <div>
                            <Filters></Filters>
                        </div>

                    </div>
                    <div >
                        <div className="jobSection">
                            {this.state.pageOfItems.map((job, i) =>
                                <JobItem key={i} item={job} index={i}></JobItem>
                            )}
                            <Pagination items={this.state.jobItems} onChangePage={this.onChangePage} />
                        </div>
                    </div>
                </div>

            </div>
        );
    }
}

export default JobContainer
