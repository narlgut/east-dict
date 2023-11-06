import { useNavigate } from "react-router-dom";

import Logo from "../assets/seal-logo.png";

const HomeButton = () => {
    const navigate = useNavigate();

    return (
        <button 
            className="w-32 h-32 pr-4 pb-4 bg-white border-pure-red border-r-8 border-b-8 rounded-br-3xl" 
            onClick={() => navigate("")}
        >
            <img className="rounded-br-2xl" src={Logo}></img>
        </button>
    )
}

export default HomeButton;