import githubLogo from "../../Assets/github-logo.svg"

function BadgeSection() {
    return(
        <section className="bg-gradient-primary-to-secondary">
            <div className="container px-5">
                <h2 className="text-center text-white font-alt mb-4">Source code available on</h2>
                <div className="d-flex flex-column flex-lg-row align-items-center justify-content-center">
                    <a href="https://github.com/alexismoulin/AI-Stock-Forecasts">
                        <img src={githubLogo} style={styles.githubIcon} alt="github" />
                    </a>
                </div>
            </div>
        </section>
    );
}

export default BadgeSection;

const styles = {
    githubIcon: {
        height: "7rem",
        color: "white"
    }
}