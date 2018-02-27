import ShareButton from 'react-social-share-buttons'

function SocialNetworkBtns({}) {
    return (
        <div id="social-networks">
            <ShareButton
                compact
                socialMedia={'facebook'}
                url={"https://milenamalysh.github.io/star-wars-matcher/"}
                media={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1280px-Star_Wars_Logo.svg.png"}
                text="WHo are you from star wars?"
            />
            <ShareButton
                compact
                socialMedia={'twitter'}
                url={"https://milenamalysh.github.io/star-wars-matcher/"}
                media={"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6c/Star_Wars_Logo.svg/1280px-Star_Wars_Logo.svg.png"}
                text="Who are you from star wars?"
            />
        </div>
    );
}

export default SocialNetworkBtns;