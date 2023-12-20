import axios from "axios";
import { useState, useEffect } from "react";

const CharBar = (props) => {
    const [infos, setInfos] = useState([]);

    useEffect(() => {
        axios.get(`https://east-dict-api.onrender.com/get/${props.word}`)
        .then(async (res) => {
            res.data.sort((a, b) => a.etyNum - b.etyNum);
            setInfos(res.data);
        })
        .catch((err) => {

        });
    }, [props.word]);

    return (
        <div className="flex border-2 border-black bg-white ml-2">
            {
                infos.map((info, index) => (
                    <div key={index + infos.length} className="flex mr-2">
                        <p key={index + infos.length * 2} className="mr-1">{info.etyNum}</p>
                        <img 
                            key={index}
                            className="w-4"
                            src={`https://en.glyphwiki.org/glyph/u${info.char.codePointAt(0).toString(16)}.svg`}
                        />
                    </div>
                ))
            }
        </div>
    );
}

export default CharBar;