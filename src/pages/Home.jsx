const Home = () => {
    return (
        <div className="mt-4 ml-auto mr-auto w-5/6">
            <h1 className="text-center font-bold text-4xl">Eastern Dictionary</h1>
            <br />
            <p className="text-center">
                A Vietnamese dictionary with emphasis on the Hán-Nôm writing system.
            </p>

            <br />

            <h2 className="text-center text-3xl">Background Information:</h2>
            <p className="text-center">
                Back then in Vietnam, the main system of writing was Classical Chinese. Since the people of Vietnam spoke Vietnamese and
                not Chinese, documenting Vietnamese with just Classical Chinese was impossible. However, some Classical Chinese scholars
                wanted a way to write the vernacular language. With these Chinese characters, they invented new characters meant for
                Vietnamese. This set of characters that was created in Vietnam and is meant for the Vietnamese language is called Chữ
                Nôm, while the set of characters that was taken from China (for Sino-Vietnamese) is called either Chữ Hán, Chữ Nho, or 
                Hán Tự (although not as popular, I personally like using Hán Tự the most as it lines up with Hanzi, Hanja, and Kanji and 
                it looks more distinct from Chữ Nôm than the other two, highlighting the two "sides" of the language). These two sets of 
                characters make up the Hán-Nôm writing system (note: others say Chữ Nôm is the sole writing system that also includes Han 
                characters, but I feel like that classification makes understanding the writing system harder. it's much simpler and makes
                more sense to just say we have two types of characters: Han and Nom (southern) characters).
            </p>

            <br />

            <p className="text-center">
                Just something I built to showcase my hobby in looking at the lesser-known aspects of Asian history and culture. Not meant
                to be practical. Do be aware of the fact that since I'm using a free server, it'll take time for my backend to boot up
                inactivity, so if characters don't show up in the dictionary or keyboard, wait some time.
            </p>
        </div>
    )
}

export default Home;