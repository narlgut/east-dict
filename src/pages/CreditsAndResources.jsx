const CreditsAndResources = () => {
    return (
        <div className="mt-4 ml-auto mr-auto w-5/6">
            <h2 className="text-3xl">Credits: </h2>
            <h3 className="text-xl">Made with: </h3>
            <ol className="list-disc">
                <li>MERN stack</li>
                <li>Vite</li>
                <li>Tailwind CSS</li>
            </ol>

            <br />

            <h3 className="text-xl">Sources used: </h3>
            <ol className="list-disc">
                <li>
                    <a 
                        className="text-blue-600 underline visited:text-purple-600"
                        href="https://chunom.org/"
                    >
                        chunom.org
                    </a>
                </li>
                <li>
                    <a 
                        className="text-blue-600 underline visited:text-purple-600"
                        href="http://www.nomfoundation.org/"
                    >
                        nomfoundation.org
                    </a>
                </li>
                <li>
                    <a 
                        className="text-blue-600 underline visited:text-purple-600"
                        href="https://hvdic.thivien.net/"
                    >
                        hvdic.thivien.net
                    </a>
                </li>
                <li>
                    <a
                        className="text-blue-600 underline visited:text-purple-600"
                        href="https://kaikki.org/dictionary/Vietnamese/index.html"
                    >
                        kaikki.org
                    </a>
                </li>
            </ol>

            <br />

            <h3 className="text-xl">Images used: </h3>
            <ol className="list-disc">
                <li>
                    V in version history button: <a
                        className="text-blue-600 underline visited:text-purple-600"
                        href="https://upload.wikimedia.org/wikipedia/commons/7/79/Lichsuvietnammoi.png"
                    >
                        Lichsuvietnammoi.png
                    </a>
                </li>
                <li>
                    Characters in dictionary: <a
                        className="text-blue-600 underline visited:text-purple-600"
                        href="https://en.glyphwiki.org/wiki/GlyphWiki:MainPage"
                    >
                        glyphwiki.org
                    </a>
                </li>
            </ol>

            <br />
            <br />

            <h2 className="text-3xl">Resources: </h2>
            <h3 className="text-xl">
                <a 
                    className="text-blue-600 underline visited:text-purple-600"
                    href="https://www.hannom-rcv.org/font.html"
                >
                    Fonts used
                </a>
            </h3>
        </div>
    )
}

export default CreditsAndResources;