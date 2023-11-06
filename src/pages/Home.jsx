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
                Nôm, while the set of characters that was taken from China (as the Vietnamese includes words from China, making it
                unnecessary to make more characters) is called either Chữ Hán, Chữ Nho, or Hán Tự (although not as popular, I
                personally like using Hán Tự the most as it lines up with Hanzi, Hanja, and Kanji and it looks more distinct from Chữ
                Nôm than the other two). These two sets of charactesr make up the Hán-Nôm writing system. Nowadays, Vietnamese people use 
                Latin characters to write and while I definitely have no problems with that (it's just waaaay easier), it sorta sucks to 
                see some Vietnamese people be blind to their history of writing. That's where my dictionary comes in. It's practical like 
                a normal dictionary but includes this niche topic, so for those that are interested in old writing systems, they can see 
                the Vietnamese word represented logographically and alphabetically. However, just know that these character choices are
                mine, so you may not see these characters on another Hán-Nôm website. I try to reduce rebus as much as possible and use
                as many unique Vietnamese characters as possible. If it makes sense, I'll borrow a character from Chinese (for 
                Sino-Vietnamese, most non Sino-Vietnamese, and really similar-looking words).
            </p>

            <br />

            <h2 className="text-center text-3xl">Usage Notes:</h2>
            <p className="text-center">
            Type the name or character of the Vietnamese word whose definitions you want to look up. You type the word, and the
                    associated character will be displayed with its senses and vice versa. Since I'm poor, I'm using a free backend
                    hosting service so it will take the dictionary some time to boot up, so if your queries show nothing, just wait a bit.
            </p>

            <br />

            <p className="text-center">
                Just something I built to showcase my hobby in looking at the lesser-known aspects of Asian history and culture.
            </p>
        </div>
    )
}

export default Home;