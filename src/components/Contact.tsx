import { MdArrowOutward } from "react-icons/md";
import "./styles/Contact.css";

const Contact = () => {
  return (
    <div className="contact-section section-container" id="contact">
      <div className="contact-container">
        <h3>Contact</h3>
        <div className="contact-flex">
          <div className="contact-box">
            <h4>Email</h4>
            <p>
              <a
                href="mailto:harshitbhati2004.hb@gmail.com"
                data-cursor="disable"
              >
                harshitbhati2004.hb@gmail.com
              </a>
            </p>
            <h4>Location</h4>
            <p>Rajasthan, India</p>
          </div>
          <div className="contact-box">
            <h4>Social</h4>
            <a
              href="https://github.com/harshitbhati4"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Github <MdArrowOutward />
            </a>
            <a
              href="https://www.linkedin.com/in/harshit-bhati021/"
              target="_blank"
              data-cursor="disable"
              className="contact-social"
            >
              Linkedin <MdArrowOutward />
            </a>
          </div>
          <div className="contact-box">
            <h2>
              Securing systems <br /> since the <span>beginning</span>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
