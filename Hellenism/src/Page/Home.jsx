import "../style/main.css";

function Home(){
    return (
        <div className="home-container">

            {/*main title*/}
            <h1 className="home-title">Hellenism</h1>

            {/*button layer*/}
            <div className="button-row">
                <button>Myth</button>
                <button>Gods</button>
                <button>Rituals</button>
                <button>Holiday</button>
                <button>Prayers</button>
            </div>

            {/*mini welcome message*/}
            <div className="section">
                <h3>Welcome to Hellenism</h3>
                <p>
                    Here you will learn that yes, we still worship the Greek gods.
                    This might sound like a taboo, which if that's the case, im sorry you think that.
                    But if you are curios to learn more of our religion, then we will welcome you with open arms.
                    This website will tell you how i see this religion, so if you still skeptical, dont be for as ill write with the upmost respect to the gods as a mere mortal can.
                </p>
            </div>

            {/*talking about the religion*/}
            <div className="section">
                <h3>About the religion</h3>
                <p>
                    Even though its an old religion, it still very hidden on what we can and cant do.
                </p>
            </div>
        </div>
    );
}
export default Home;