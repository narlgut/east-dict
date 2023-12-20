import Draggable from "react-draggable";

const KBInfo = (props) => {
    return (
        <Draggable>
            <div className="border-2 border-black bg-white absolute mt-7 z-20">
                <button className="ml-1" onClick={() => props.setShowKBInfo(false)}>X</button>

                <div className="m-2">
                    <h3 className="text-lg font-medium">Usage Notes</h3>
                    <ul className="list-disc list-inside">
                        <li>When typing, a row of characters with numbers will appear over the caret</li>
                        <li>Append the desired character's number to the end of the word</li>
                        <li>Space words and characters (including punctuation) from each other</li>
                        <li>Type j to use the reduplication character (〻)</li>
                    </ul>
                </div>
            </div>
        </Draggable>
    )
}

export default KBInfo;