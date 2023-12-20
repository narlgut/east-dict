import React, { useState, useEffect } from "react";
import axios from "axios";

import WordInfo from "../components/WordInfo";
import WordSearch from "../components/WordSearch";
import CharInfo from "../components/CharInfo";
import Tooltip from "../components/Tooltip";

const SearchWords = () => {
    const [data, setData] = useState([]);
    const [inp, setInp] = useState("");
    const [showCharInfo, setShowCharInfo] = useState(false)

    useEffect(() => {
        if (!/\S/.test(inp)) return;

        axios.get(`https://east-dict-api.onrender.com/get/${inp}`)
        .then((res) => {
            res.data.sort((a, b) => a.etyNum - b.etyNum);
            setData(res.data);
        })
    }, [inp])

    return (
        <div className="flex-grow flex flex-col justify-start items-center">
            <h4>Enter character or name of word</h4>
            <span>
                <WordSearch
                    input={inp}
                    setInput={setInp}
                />
                <button onClick={() => setShowCharInfo(true)}>
                    <Tooltip
                        tipChar="?"
                        tooltip="Why were these specific characters chosen?"
                    />
                </button>
            </span>

            {showCharInfo && (<CharInfo setShowCharInfo={setShowCharInfo} />)}

            {
                data.map((word, index) => (
                    <WordInfo 
                        key={index}
                        char={word.char}
                        name={word.name}
                        type={word.type}
                        senses={word.senses}
                        exInfo={word.exInfo}
                    />
                ))
            }
        </div>
    );
}

export default SearchWords;