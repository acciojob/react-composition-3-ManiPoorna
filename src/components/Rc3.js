import React, {useState} from "react";

const Rc3 = ()=>{

    let [topHover,setTopHover] = useState(false);
    let [bottomHover,setBottomHover] = useState(false);
    
    
    return(
        <div>
            <div className="top">
                {
                    topHover && <h2>This is a tooltip</h2>
                }
                <p onMouseOver={()=>setTopHover(true)} onMouseLeave={()=>setTopHover(false)} className="tootip">Hover over me</p>
            </div>
            <div className="bottom">
                {
                    bottomHover && <h2>This is another tooltip</h2>
                }
                <p onMouseOver={()=>setBottomHover(true)} onMouseLeave={()=>setBottomHover(false)} className="tooltiptext">Hover over me to see another tooltip</p>
            </div>
        </div>
    )
}

export default Rc3;