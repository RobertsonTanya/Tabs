import React from "react";
import '../styles/tab.css';

const Tab = (props) => {
    return (
        <div className="tab-content">
            { props.allTabs[props.tabIndex].bodyText}
        </div>
    )
}
export default Tab;