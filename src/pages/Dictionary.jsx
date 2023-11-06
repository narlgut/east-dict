import React, { useState } from "react";
import axios from "axios";

import WordInfo from "../components/WordInfo";

const SearchWords = () => {
    const [dataFromReq, setDataFromReq] = useState([]);
    const [useImgs, setUseImgs] = useState(false);
    const [inp, setInp] = useState("");

    const handleSearchWords = (val) => {
        if (!/\S/.test(val)) return;

        axios.get(`https://east-dict-api.onrender.com/get/${val}`)
        .then((res) => {
            setDataFromReq(res.data);
        })
        .catch((err) => {
            console.log(err);
        });
    }

    return (
        <div className="flex-grow flex flex-col justify-start items-center">
            <h4>Enter character or name of word</h4>
            <div>
                <input
                    className="border-b-2 text-center border-black mb-4 mr-1"
                    type="text"
                    value={inp}
                    onChange={(e) => {
                        setInp(e.target.value);
                        handleSearchWords(e.target.value);
                    }}
                />
                <label>
                    <input
                        className="mr-1"
                        type="checkbox"
                        checked={useImgs}
                        onChange={() => setUseImgs(!useImgs)}
                    />
                    Use images (slower load, no font issues)
                </label>
            </div>

            {
                dataFromReq.map((word, index) => (
                    <WordInfo 
                        key={index}
                        char={word.char}
                        useImgs={useImgs}
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