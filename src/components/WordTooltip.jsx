import { useState } from "react";

const WordTooltip = (props) => {
    const [visible, setVisible] = useState(false);
    const [tooltipPos, setTooltipPos] = useState({top: 0, left: 0})

    return (
        <div 
            className="ml-1 relative inline-block"
            onMouseEnter={() => setVisible(true)}
            onMouseLeave={() => setVisible(false)}
            onMouseMove={(e) => setTooltipPos({top: e.clientY, left: e.clientX + 20})}
        >
            (+)
            {
                visible && (
                <div className="p-1 fixed bg-white border-2 border-black max-w-xl" style={tooltipPos}>
                    {props.exInfo}
                </div>)
            }
        </div>
    )
}

export default WordTooltip;