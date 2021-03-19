import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const Pagination = ({ infos, previousPage, nextPage, PageId, fetch }) => {

    const handlePrevious = () => {
        if (PageId > 1 && PageId <= infos.pages) {
            previousPage();
            fetch();
        }
    };

    const handleNext = () => {
        if (PageId >= 1 && PageId < infos.pages) {
            nextPage();
            fetch();
        }
    };

    return (
        <div className="pagination">
            <div className="pagination__buttons">
            <button className={(PageId === 1 ? "pagination__button--zero" : "pagination__button")} onClick={handlePrevious}>{PageId -1}</button>
                <button className="pagination__button--central">Page {PageId} of {infos.pages}</button>
                <button className={(PageId === infos.pages ? "pagination__button--zero" : "pagination__button")} onClick={handleNext}>{PageId + 1}</button>
            </div>
        </div>
    );
};

Pagination.propTypes = {
    infos: PropTypes.objectOf(
        PropTypes.shape({
            count: PropTypes.number.isRequired,
            pages: PropTypes.number.isRequired,
        })
    ).isRequired,
    previousPage: PropTypes.func.isRequired,
    nextPage: PropTypes.func.isRequired,
    PageId: PropTypes.number.isRequired,
    fetch: PropTypes.func.isRequired,
};

export default Pagination;
