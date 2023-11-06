import Navbutton from "./Navbutton";
import HomeButton from "./HomeButton";

import dictIcon from "../assets/dict-icon.png";
import versionIcon from "../assets/version-icon.png";
import creditsIcon from "../assets/credits-icon.png";

const Navbar = () => {
    return (
        <div className="h-screen w-16">
            <div className="fixed h-screen w-16 p-0 flex flex-col bg-gray-950 text-white">
                <HomeButton />
                <Navbutton path="./dict" img={dictIcon} altText="Dictionary" />
                <Navbutton path="./version-hist" img={versionIcon} altText="Version History" />
                <Navbutton path="./credits-resources" img={creditsIcon} altText="Credits" />
            </div>
        </div>
        
    )
}

export default Navbar;