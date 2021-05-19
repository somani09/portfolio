import React from 'react'

function Summary({summary}) {
    return (
        <div className="resumeSection">
            <div className="subHeading">Summary</div>
            <div className="dataArea">
                <div className="subSubHeading">
                    {summary.name}
                </div>
                <em className="summaryPart">
                    {summary.summary}
                </em>
                <ul className="summaryList">
                    <li className="m-10">
                        {summary.address}
                    </li>
                    <li className="m-10">
                        {summary.phone}
                    </li>
                    <li className="m-10">
                        {summary.email}
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Summary
