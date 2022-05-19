import React from "react";
import '../styles/headers.css';


const Headers = (props) => {
    const displayClass = (index) => {
        if(index === props.tabIndex){
            return 'selected';
        } else {
            return '';
        }
    }
    const selectTab = (index) => {
        props.setCurrentIndex(index);
    }

    return (
        <div className="headers">
            {props.allTabs.map((tab, index) => {    
                return (           
                    <div className={`tab ${displayClass(index)}`} onClick={(e) => selectTab(index)}>
                        {tab.tabText}
                    </div>
                )
            })}
        </div>
    )
}
export default Headers;