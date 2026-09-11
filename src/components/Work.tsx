import "./styles/Work.css";
import WorkImage from "./WorkImage";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(useGSAP);

type Cert = {
  name: string;
  issuer: string;
  link: string;
  certId?: string;
  image: string;
};

const certifications: Cert[] = [
  {
    name: "Certified Ethical Hacker (CEH) v13",
    issuer: "EC-Council",
    link: "https://aspen.eccouncil.org/verify",
    certId: "ECC5698021374",
    image: "/certs/1.jpg",
  },
  {
    name: "Ethical Hacking Essentials",
    issuer: "EC-Council",
    link: "https://www.coursera.org/account/accomplishments/verify/FOOEYXR8FCXQ",
    image: "/certs/2.jpg",
  },
  {
    name: "CCST Cybersecurity",
    issuer: "CISCO",
    link: "https://www.credly.com/badges/1d9344b6-265c-43dc-a863-ef28f21b12ef/linked_in_profile",
    image: "/certs/3.jpg",
  },
  {
    name: "CyberSecurity Certificate",
    issuer: "Google Cloud",
    link: "https://www.credly.com/badges/c5f9de60-a768-4891-889d-11ddfc155835/linked_in_profile",
    image: "/certs/4.jpg",
  },
  {
    name: "OCI Networking Professional",
    issuer: "Oracle",
    link: "https://catalog-education.oracle.com/ords/certview/sharebadge?id=1B2074D633BC52C68BDC5404F8108365C2999D9BDBB2BAA84EDE66299B702145",
    image: "/certs/5.jpg",
  },
  {
    name: "Junior Penetration Tester",
    issuer: "TryHackMe",
    link: "https://tryhackme.com/certificate/THM-GWWI8Q8R5N",
    image: "/certs/6.jpg",
  },
  {
    name: "CompTIA Pentest+",
    issuer: "TryHackMe",
    link: "https://tryhackme.com/certificate/THM-VWFJFNHAZC",
    image: "/certs/7.jpg",
  },
  {
    name: "Web Fundamentals",
    issuer: "TryHackMe",
    link: "https://tryhackme.com/certificate/THM-DTHCJC3TPY",
    image: "/certs/8.jpg",
  },
  {
    name: "CyberSecurity Skill-Up",
    issuer: "GeeksForGeeks",
    link: "https://www.geeksforgeeks.org/certificate/533ae1e0124ecc3f1d9cac7a51cd3c6f",
    image: "/certs/9.jpg",
  },
  {
    name: "Linux Skill-up",
    issuer: "GeeksForGeeks",
    link: "https://www.geeksforgeeks.org/certificate/218d5feda2772f90c054940f17e29945",
    image: "/certs/10.jpg",
  },
];

const Work = () => {
  useGSAP(() => {
    let translateX: number = 0;

    function setTranslateX() {
      const box = document.getElementsByClassName("work-box");
      if (!box.length) return;
      const rectLeft = document
        .querySelector(".work-container")!
        .getBoundingClientRect().left;
      const rect = box[0].getBoundingClientRect();
      const parentWidth = box[0].parentElement!.getBoundingClientRect().width;
      let padding: number =
        parseInt(window.getComputedStyle(box[0]).padding) / 2;
      translateX = rect.width * box.length - (rectLeft + parentWidth) + padding;
    }

    setTranslateX();

    let timeline = gsap.timeline({
      scrollTrigger: {
        trigger: ".work-section",
        start: "top top",
        end: `+=${translateX}`,
        scrub: true,
        pin: true,
        id: "work",
      },
    });

    timeline.to(".work-flex", {
      x: -translateX,
      ease: "none",
    });

    return () => {
      timeline.kill();
      ScrollTrigger.getById("work")?.kill();
    };
  }, []);
  return (
    <div className="work-section" id="work">
      <div className="work-container section-container">
        <h2>
          Certifi<span>cations</span>
        </h2>
        <div className="work-flex">
          {certifications.map((cert, index) => (
            <div className="work-box" key={index}>
              <div className="work-info">
                <a
                  href={cert.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="work-verify"
                  data-cursor="disable"
                >
                  Verify Credentials &#8599;
                </a>
                {cert.certId && (
                  <p className="work-cert-id">
                    Certificate ID - {cert.certId}
                  </p>
                )}
                <div className="work-title">
                  <h3>{index + 1 < 10 ? `0${index + 1}` : index + 1}</h3>
                  <div>
                    <h4>{cert.name}</h4>
                    <p>Issued by {cert.issuer}</p>
                  </div>
                </div>
              </div>
              <WorkImage image={cert.image} alt={cert.name} link={cert.link} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Work;
