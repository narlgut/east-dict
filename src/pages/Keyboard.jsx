import { useState, useRef } from "react";
import axios from "axios";

import KBInfo from "../components/KBInfo";
import CharBar from "../components/CharBar";
import Tooltip from "../components/Tooltip";

const Keyboard = () => {
    const [chars, setChars] = useState([]);
    const [currWord, setCurrWord] = useState("");
    const [showKBInfo, setShowKBInfo] = useState(false);
    const textArea = useRef(null);

    const ReadCurrChar = (e) => {
        const index = textArea.current.selectionEnd;
        const input = e.target.value;

        if (input[index] == ' ') {
            return;
        }

        let start = index;
        let end = index;

        while (start > 0 && input[start - 1] != ' ') {
            --start;
        }
        while (end < input.length - 1 && input[end + 1] != ' ') {
            ++end;
        }

        setCurrWord(input.substring(start, end + 1));
    }

    const ConvertToChars = async () => {
        const words = textArea.current.value.split(" ");
        const currChars = Array();

        for (let i = 0; i < words.length; ++i) {
            await axios.get(`https://east-dict-api.onrender.com/get/${words[i].substring(0, words[i].length - 1)}`)
            .then((res) => {
                currChars.push(res.data.find((element) => element.etyNum == words[i][words[i].length - 1]).char);
            })
            .catch((err) => {
                if (words[i][0] == 'j') {
                    currChars.push("〻");
                } else if (words[i][0] == '.') {
                    currChars.push("。");
                } else if (words[i][0] == ',') {
                    currChars.push("、");
                }
            })
        }

        setChars(currChars);
        console.log(currChars);
    }

    return (
        <div className="flex flex-col justify-start items-start w-5/6 m-auto mt-4">
            <div className="flex">
                <h3 className="text-lg">Quốc Ngữ</h3>
                <button onClick={() => setShowKBInfo(true)}>
                    <Tooltip
                        tipChar="?"
                        tooltip="Usage Notes"
                    />
                </button>
                {currWord.length > 0 && <CharBar word={currWord} />}
            </div>
            <textarea 
                className="border-2 border-black h-40 w-full resize-none"
                ref={textArea}
                id="text"
                onChange={(e) => ReadCurrChar(e)}
            />
            {showKBInfo && <KBInfo setShowKBInfo={setShowKBInfo} />}

            <br />

            <div className="border-2 border-black p-0.5">
                <button onClick={(e) => ConvertToChars(e)}>Convert</button>
            </div>

            <br />

            <h3 className="text-lg">Hán-Nôm</h3>
            <div>
                {
                    chars.map((char, index) => (
                        <img 
                            key={index}
                            className="w-5 inline-block"
                            src={`https://en.glyphwiki.org/glyph/u${char.codePointAt(0).toString(16)}.svg`}
                        />
                    ))
                }
            </div>
        </div>
    )
}

export default Keyboard;