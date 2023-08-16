import React, {useState} from "react";

const Rc3 = ()=>{

    let [topHover,setTopHover] = useState(false);
    let [bottomHover,setBottomHover] = useState(false);
    
    
    return(
        <div>
            <div className="top">
                {
                    topHover && <h4>This is a tooltip</h4>
                }
                <h2 onMouseOver={()=>setTopHover(true)} onMouseLeave={()=>setTopHover(false)} className="tootip">Hover over me</h2>
            </div>
            <div className="bottom">
                {
                    bottomHover && <h4>This is another tooltip</h4>
                }
                <p onMouseOver={()=>setBottomHover(true)} onMouseLeave={()=>setBottomHover(false)} className="tooltiptext">Hover over me to see another tooltip</p>
            </div>
        </div>
    )
}

export default Rc3;