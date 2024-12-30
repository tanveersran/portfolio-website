import Button from "./LightButton";

const LightButtonSet = ({portfolioLink}) => {
    const scrollToSection = (id) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" });
        }
    };

    return (
        <>
            <div className="flex flex-wrap gap-8 max-w-sm">
                <Button title="About" onClick={() => scrollToSection("about")} />
                <Button title="Experience" onClick={() => scrollToSection("experience")} />
                <Button title="Skills" onClick={() => scrollToSection("skills")} />
                <Button title="Projects" onClick={() => scrollToSection("projects")} />
                <Button title="Contact" onClick={() => scrollToSection("contact")} />
                <Button title="Resume" onClick={() => window.open(portfolioLink)} />
            </div>
        </>
    );
}

export default LightButtonSet;