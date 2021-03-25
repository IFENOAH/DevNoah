import image1 from "../images/me.jpg"
import resume from "../Resume/resume.pdf"

const About = () => {
    return (
        <section className = "about-section" id = "about">
            <div className = "about-image">
                <img src= {image1} alt="">
                </img>
            </div>

            <div className = "about-text">
                <h2>ABOUT</h2>

                <p>
                    Hello, my name is Ogunderu Noah Ife and i am a front-end developer, likewise a photographer.
                    If you have any projects, please contact me. You can as well find my resume below. 
                </p>

                <a href = "resume.pdf" download><button>Download Resume</button></a>
            </div>
        </section>
    );
}
 
export default About;
