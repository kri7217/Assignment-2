import React, { Component } from 'react'
import '../JobItem.css'
import stopwatch from '../stopwatch.svg'

class JobItem extends Component {


    render() {
        var rating = null
        var statusColorStyle = {}
        var buttonAction = 'View'
        var buttonStyle = {}
        var buttonActionStyle = {}
        var cardStyle = {}
        if (this.props.item.status === 'Completed') {
            statusColorStyle.backgroundColor = 'lightseagreen'
            cardStyle.borderLeftColor = 'lightseagreen'
            rating = (
                <div>
                    <span class="fa fa-star checked"></span> 4.5
                </div>
            )
        }
        else if (this.props.item.status === 'Editorial Review') {
            statusColorStyle.backgroundColor = 'orange'
            cardStyle.borderLeftColor = 'orange'
            rating = (
                <div>
                    <img src={stopwatch} width="13px" height="15px" alt=""></img> Waiting
                </div>
            )
        }
        else if (this.props.item.status === 'Revision Requested') {
            statusColorStyle.backgroundColor = 'lightskyblue'
            cardStyle.borderLeftColor = 'lightskyblue'
            buttonAction = 'Revise'
            buttonStyle.backgroundColor = '#3ebcb3'
            buttonActionStyle.backgroundColor = '#3ebcb3'
            buttonActionStyle.color ='white'

            rating = (
                <div>
                    <img src={stopwatch} width="13px" height="15px" alt=""></img> 2h 13m left
                </div>
            )
        }
        else {
            statusColorStyle.backgroundColor = 'red'
            cardStyle.borderLeftColor = 'red'
            buttonAction = 'View Details'
            rating = (
                <div>
                    <span class="fa fa-star checked"></span> NA
                </div>
            )
        }

        return (

            <div className="mt-2 mb-2 d-flex cardBase" style={cardStyle}>
                <div className="d-flex flex-column justify-content-center align-items-center">
                    <div className="job_title">{this.props.item.jobTitle}</div>
                    <div className="jobSubTag">
                        {`e-book | ${this.props.item.category} | ${this.props.item.words} words`}</div>
                </div>
                <div className="jobPrice_Status d-flex justify-content-around align-items-center">
                    <span className="jobPrice_mobDisp"><i className="fa fa-inr" aria-hidden="true"></i> {this.props.item.price}</span>
                    <div className="job_status" style={statusColorStyle}>
                        {this.props.item.status}
                    </div>
                </div>
                <div className="rating_action_grp">
                    <div className="ratingGrp">
                    {rating}
                    </div>
                    <button className="action_button" style={buttonStyle}><span style={buttonActionStyle}>{buttonAction}</span></button>
                </div>
            </div>
        )
    }
}

export default JobItem