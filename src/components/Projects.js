import image1 from "../images/me.jpg"
import image2 from "../images/weather.jpg"
import image3 from "../images/food.jpg"
import image4 from "../images/space.jpg"
import image5 from "../images/fartra.jpg"
import image6 from "../images/weatherr.jpg"




const Projects = () => {
    return (
        <div className = "project-section" id = "project">
            <h2>PROJECTS</h2>

            <div className = "row-1">
                <div className = "projects-card" style = {{ backgroundImage: `url(${image6})`, objectFit: "cover",backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                    <div className = "project-text">
                        <h3>Weather App</h3>
                        <h5>HTML/CSS, JAVASCRIPT</h5>
                        <a href = "https://ifenoah.github.io/My-weather-app/"><button className = "project-link-button">Learn More</button></a>
                    </div>
                </div>

                <div className = "projects-card"  style = {{ backgroundImage: `url(${image3})`, objectFit: "cover",backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                    <div className = "project-text">
                        <h3>Dele's Kitchen</h3>
                        <h5>HTML/CSS, JAVASCRIPT</h5>
                        <a href = "https://ifenoah.github.io/Dels-s-Kitchen/"><button className = "project-link-button">Learn More</button></a>
                    </div>
                </div>

            </div>

            <div className = "row-2">
                <div className = "projects-card"  style = {{ backgroundImage: `url(${image5})`, objectFit: "cover",backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                    <div className = "project-text">
                        <h3>Fartra</h3>
                        <h5>HTML/SASS, JAVASCRIPT</h5>
                        <a href = "https://fartra.netlify.app/"><button className = "project-link-button">Learn More</button></a>
                    </div>
                </div>

                <div className = "projects-card"  style = {{ backgroundImage: `url(${image4})`, objectFit: "cover",backgroundRepeat: "no-repeat", backgroundSize: "cover" }}>
                    <div className = "project-text">
                        <h3>Astrophilia</h3>
                        <h5>React</h5>
                        <a href = "#"><button className = "project-link-button">Learn More</button></a>
                    </div>
                </div>
            </div>


            <button className = "more-button">View more projects<i class="fas fa-arrow-right"></i></button>
        </div>
    );
}


export default Projects;