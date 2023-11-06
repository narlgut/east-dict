import VersionHistoryEntry from "../components/VersionHistoryEntry";

const VersionHistory = () => {
    return (
        <div className="mt-4 ml-auto mr-auto w-5/6">
            <VersionHistoryEntry
                versionNum="1.1"
                versionName="Accessibility Update"
                versionUpdates={[
                    "Added a proper introduction to the Hán-Nôm writing system",
                    "Added images to the dictionary for those who don't have the right fonts"
                ]}
            />

            <br />

            <VersionHistoryEntry 
                versionNum="1.0"
                versionName="Eastern Dictionary's birth"
                versionUpdates={[
                    "Added the home page",
                    "Added the dictionary",
                    "Added the version history page",
                    "Added credits and resources"
                ]}
            />
        </div>
    )
}

export default VersionHistory;