import { useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

const Navbutton = (props) => {
    const [invertColor, setInvertColor] = useState(false);
    const [showTooltip, setShowTooltip] = useState(false);
    const navigate = useNavigate();

    useEffect(() => {
        setInvertColor(props.path.slice(1) == window.location.pathname);
    });

    return (
        <div className="group relative">
            <button 
                className={
                    "bg-black w-14 h-12 m-2 mr-0 p-1 rounded-l-lg filter hover:invert transition duration-300 " + 
                    (invertColor ? "invert" : "")
                }
                onMouseEnter={() => setShowTooltip(true)} 
                onMouseLeave={() => setShowTooltip(false)} 
                onClick={() => navigate(props.path)}
            >
                <img className="w-10" src={props.img} alt={props.altText} />
            </button>
            {
                showTooltip && 
                <span
                    className="absolute whitespace-nowrap translate-x-4 translate-y-3.5 p-1 bg-black border-black border-2"
                >
                    {props.altText}
                </span>
            }
        </div>
    )
}

export default Navbutton;