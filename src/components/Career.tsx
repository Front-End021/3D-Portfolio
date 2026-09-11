import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cyber Security Intern</h4>
                <h5>Uttar Pradesh Police Summer Cyber Training</h5>
              </div>
              <h3>June 2025</h3>
            </div>
            <p>
              Contributed to cybersecurity awareness initiatives and assisted in
              investigating cyber crimes. Developed understanding of real-world
              security challenges faced by law enforcement.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cyber Security Intern</h4>
                <h5>Rajasthan Police (Cyber Cell)</h5>
              </div>
              <h3>July 2025</h3>
            </div>
            <p>
              Gained hands-on experience in cyber crime investigation, digital
              forensics, and security incident response. Assisted in analyzing
              cyber threats and supporting law enforcement operations.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Junior Cyber Security Consultant</h4>
                <h5>Atom Cyber Security Inc.</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Works on red teaming engagements, penetration testing, and
              vulnerability assessment. Conducts VAPT and web application
              security assessments to identify security weaknesses and support
              remediation efforts.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
