import Navbutton from "./Navbutton";
import HomeButton from "./HomeButton";

import dictIcon from "../assets/dict-icon.png";
import kbIcon from "../assets/kb-icon.png";
import verIcon from "../assets/version-icon.png";
import credResIcon from "../assets/credits-icon.png";

const Navbar = () => {
    return (
        <div className="h-screen w-16">
            <div className="fixed h-screen w-16 p-0 flex flex-col bg-gray-950 text-white">
                <HomeButton />
                <Navbutton path="./dict" img={dictIcon} altText="Dictionary" />
                <Navbutton path="./kb" img={kbIcon} altText="Keyboard" />
                <Navbutton path="./ver-hist" img={verIcon} altText="Version History" />
                <Navbutton path="./creds-ress" img={credResIcon} altText="Credits" />
            </div>
        </div>
        
    )
}

export default Navbar;