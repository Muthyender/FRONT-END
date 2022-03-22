import React from "react";
import Tab from './Tab'

function Tabs({tabNames}) 
{
    console.log(tabNames) 
    return(
        <div className="tabs">
            {
                tabNames.map((tabName, index) =>
                    (
                        <Tab tabName={tabName} key={index}/>
                    )    
                )
            }
            {/* <div className="tab">
                <a href='#'>Home</a>
            </div>

            <div className="tab">
                <a href='#'>About</a>
            </div>

            <div className="tab">
                <a href='#'>Features</a>
            </div> */}
        </div>
    )
}

export default Tabs