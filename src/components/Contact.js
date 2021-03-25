const Contact = () => {
    return (
        <div className = "contact-text" id = "contact">
            <h2>OK, LET'S CREATE SOMETHING COOL</h2>

            <p>
                Do you like my work so far and would love to work on a project with me?
                Message or contact me through the social sites listed below.
            </p>

            <a href = "https://mail.google.com/mail/u/0/#inbox"><button><i class="fas fa-paper-plane"></i>Get in touch</button></a>
            <div className = "contact-links">
                <a href = "https://twitter.com/Noah_ife">TWITTER</a>
                <a href = "https://www.instagram.com/noah.ife/">INSTAGRAM</a>
                <a href = "https://www.linkedin.com/in/ifeoluwadayo-ogunderu-5144561a6/">LINKEDIN</a>
                <a href = "https://unsplash.com/@noah_ife">UNSPLASH</a>
            </div>

            <a href = "#"><i class="fas fa-angle-double-up"></i></a>
        </div>
    );
}
 
export default Contact;