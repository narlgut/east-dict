import Draggable from "react-draggable";

const CharInfo = (props) => {
    return (
        <Draggable>
            <div className="border-2 border-black bg-white absolute m-auto mt-20 z-20">
                <button className="ml-1" onClick={() => props.setShowCharInfo(false)}>X</button>

                <div className="m-2">
                    <h3 className="text-lg font-medium">Hán Tự</h3>
                    <ul className="list-disc list-inside">
                        <li>Sino-Vietnamese Words</li>
                        <li>Most non-Sino-Vietnamese words</li>
                        <li>Nearly identical native words</li>
                    </ul>

                    <br />

                    <h3 className="text-lg font-medium">Chữ Nôm</h3>
                    <ul className="list-disc list-inside">
                        <li>Most native Words</li>
                        <li>Some non-Sino-Vietnamese words</li>
                    </ul>

                    <br />

                    <h3 className="text-lg font-medium">Chữ Nôm: Categories</h3>
                    <ul className="list-disc list-inside">
                        <li>Simplification/modification: Essential words</li>
                        <li>Phono-semantic: Most words</li>
                        <li>Compound ideograph: Rare</li>
                        <li>Rebus: Avoided as much as possible</li>
                    </ul>

                    <br />

                    <p>
                        These choices mean that some characters you see here won't match 
                        <br />
                        what other dictionaries show. However, I believe these choices 
                        <br />
                        keep Hán-Nôm consistent while making it distinctly Vietnamese.
                    </p>
                </div>
            </div>
        </Draggable>
    )
}

export default CharInfo;