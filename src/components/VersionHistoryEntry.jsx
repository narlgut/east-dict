const VersionHistoryEntry = (props) => {
    return (
        <div>
            <h2 className="font-semibold text-3xl">{props.versionNum}: {props.versionName}</h2>
            
            <p>Changes:</p>
            <ol className="list-disc">
                {
                    props.versionUpdates.map((update) => (
                    <li key={update}>{update}</li>
                    ))
                }
            </ol>
        </div>
    );
}

export default VersionHistoryEntry;