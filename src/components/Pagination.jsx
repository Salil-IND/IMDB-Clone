import React from "react";

function Pagination({incPage, decPage, pgNo}){
    return (
        <div className="bg-gray-500 h-10 w-screen flex justify-center items-center">
            <button type="button" className="m-2" onClick={decPage} aria-label="Previous page">
                <i className="fa-solid fa-arrow-left" />
            </button>
            <div className="m-2">{pgNo}</div>
            <button type="button" className="m-2" onClick={incPage} aria-label="Next page">
                <i className="fa-solid fa-arrow-right" />
            </button>
        </div>
    )
}

export default Pagination;