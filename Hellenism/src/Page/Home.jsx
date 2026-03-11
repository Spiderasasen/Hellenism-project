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
                    For some people this might sound unusual or even taboo, and if that’s how you feel, I understand.
                    But if you’re curious and open to learning about our religion, then we welcome you with open arms.
                    This website reflects how I practice and understand Hellenism, written with the utmost respect a mortal can offer the gods.
                    If you’re skeptical, that’s okay — I hope what you read here helps you see our traditions with clarity and respect.
                </p>
            </div>

            {/*talking about the religion*/}
            <div className="section">
                <h3>About the religion</h3>
                <p>
                    Hellenism is the modern practice of the ancient Greek religion.
                    Even though its roots go back thousands of years, the way we practice today is shaped by both tradition and the reality of living in the modern world. Much of the original religion was lost, scattered, or filtered through outside perspectives, so modern practitioners often rebuild our understanding through surviving texts, archaeology, philosophy, and community experience.
                    At its core, Hellenism is about honoring the gods with respect, living with virtue, and recognizing the presence of the divine in the world around us. There isn’t one single “correct” way to practice — different people emphasize mythology, philosophy, household worship, festivals, or personal devotion. What you’ll find here reflects how I understand and live this religion, based on study, experience, and sincere respect for the Theoi.
                </p>
            </div>
        </div>
    );
}
export default Home;