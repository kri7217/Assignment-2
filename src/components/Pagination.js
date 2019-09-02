import React, { Component } from 'react'
import PropTypes from 'prop-types'
import '../Pagination.css'


class Pagination extends Component {
    constructor(props) {
        super(props);
        this.state = { pager: {} };
    }

    componentWillMount() {
        if (this.props.items && this.props.items.length) {
            this.setPage(this.props.initialPage);
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if (this.props.items !== prevProps.items) {
            this.setPage(this.props.initialPage);
        }
    }

    setPage(page) {
        var items = this.props.items;
        var pager = this.state.pager;

        if (page < 1 || page > pager.totalPages) {
            return;
        }

        //  new pager object 
        pager = this.getPager(items.length, page);

        // get new page of items from items array
        var pageOfItems = items.slice(pager.startIndex, pager.endIndex + 1);
        
        this.setState({ pager: pager });

        
        this.props.onChangePage(pageOfItems);
    }

    getPager(totalItems, currentPage, pageSize) {
        // default to first page
        currentPage = currentPage || 1;

        // default page size is 10
        pageSize = pageSize || 10;

        // calculate total pages
        var totalPages = Math.ceil(totalItems / pageSize);

        var startPage, endPage;
        if (totalPages <= 10) {
            startPage = 1;
            endPage = totalPages;
        } else {
            if (currentPage <= 6) {
                startPage = 1;
                endPage = 10;
            } else if (currentPage + 4 >= totalPages) {
                startPage = totalPages - 9;
                endPage = totalPages;
            } else {
                startPage = currentPage - 5;
                endPage = currentPage + 4;
            }
        }

        
        var startIndex = (currentPage - 1) * pageSize;
        var endIndex = Math.min(startIndex + pageSize - 1, totalItems - 1);

        
        var pages = [...Array((endPage + 1) - startPage).keys()].map(i => startPage + i);

        let r={
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        }

        console.log(r)
        return {
            totalItems: totalItems,
            currentPage: currentPage,
            pageSize: pageSize,
            totalPages: totalPages,
            startPage: startPage,
            endPage: endPage,
            startIndex: startIndex,
            endIndex: endIndex,
            pages: pages
        };
    }

    render() {
        var pager = this.state.pager;

        if (!pager.pages || pager.pages.length <= 1) {
            // don't display pager if there is only 1 page
            return null;
        }

        return (
            <ul className="pagination" id="pagination">
                <li className={pager.currentPage === 1 ? 'disabled' : ''}>
                    <a className="page_first" onClick={() => this.setPage(1)}>First</a>
                </li>
                <li className={pager.currentPage === 1 ? 'disabled' : ''}>
                    <a className="pageNumbers" onClick={() => this.setPage(pager.currentPage - 1)}>
                        <i className="fa fa-caret-left" aria-hidden="true"></i>
                    </a>
                </li>
                {pager.pages.map((page, index) =>
                    <li key={index} className={pager.currentPage === page ? 'active' : ''}>
                        <a className="pageNumbers" onClick={() => this.setPage(page)}>{page}</a>
                    </li>
                )}
                <li className={pager.currentPage === pager.totalPages ? 'disabled' : ''}>
                    <a className="pageNumbers" onClick={() => this.setPage(pager.currentPage + 1)}>
                        <i className="fa fa-caret-right" aria-hidden="true"></i>
                    </a>
                </li>
                <li className={pager.currentPage === pager.totalPages ? 'disabled ' : ''}>
                    <a className=" page_last" onClick={() => this.setPage(pager.totalPages)}>Last</a>
                </li>
            </ul>
        );
    }
}

const propTypes = {
    items: PropTypes.array.isRequired,
    onChangePage: PropTypes.func.isRequired,
    initialPage: PropTypes.number
}

const defaultProps = {
    initialPage: 1
}

Pagination.propTypes = propTypes
Pagination.defaultProps = defaultProps

export default Pagination
