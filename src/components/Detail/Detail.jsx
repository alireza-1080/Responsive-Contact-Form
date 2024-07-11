import "./Detail.css";
import React from 'react'

function Detail({ title, detail1, detail2, children }) {

    return (
        <div className="detail-container">
            <div className="detail-children-container">
                {children}
            </div>
            <h3>{title}</h3>
            <h4>{detail1}</h4>
            <h4>{detail2}</h4>
        </div>
    )
}

export default Detail