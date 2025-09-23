import React, { useEffect } from "react";

const WildevLogo = () => (
  <svg
    width="120"
    height="40"
    viewBox="0 0 120 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    style={{ cursor: "pointer" }}
    role="img"
    aria-label="Wildev logo"
  >
    <text
      x="0"
      y="30"
      fontFamily="Montserrat, sans-serif"
      fontWeight="700"
      fontSize="28"
      fill="#4B8BF5"
      letterSpacing="2"
    >
      Wildev
    </text>
  </svg>
);

export default function Footer() {
  useEffect(() => {
    const mailLinks = document.querySelectorAll('a[href^="mailto:"]');
    const handleClick = (e) => {
      window.gtag("event", "mail_click", {
        event_category: "Contact",
        event_label: e.currentTarget.href,
      });
    };
    mailLinks.forEach((link) => link.addEventListener("click", handleClick));
    return () => {
      mailLinks.forEach((link) => link.removeEventListener("click", handleClick));
    };
  }, []);

  return (
    <footer
      className="site-footer"
      style={{ padding: "20px", display: "flex", flexDirection: "column", alignItems: "center" }}
    >
      <a href="#/" className="footer-logo-link" style={{ marginBottom: "10px" }} aria-label="Accueil">
        <WildevLogo />
      </a>

      <div className="footer-links" style={{ marginBottom: "10px", textAlign: "center" }}>
        <a href="#/mentions-legales" style={{ margin: "0 5px" }}>
          Politique de confidentialité / RGPD
        </a>{" "}
        |{" "}
        <a href="https://classroom.google.com/" target="_blank" rel="noopener noreferrer" style={{ margin: "0 5px" }}>
          Google Classroom
        </a>{" "}
        |{" "}
        <a href="https://www.tiktok.com/@couabo" target="_blank" rel="noopener noreferrer" style={{ margin: "0 5px" }}>
          TikTok
        </a>{" "}
        |{" "}
        <a href="https://www.instagram.com/couaboa" target="_blank" rel="noopener noreferrer" style={{ margin: "0 5px" }}>
          Instagram
        </a>{" "}
        |{" "}
        <a href="https://www.youtube.com/channel/votrechannel" target="_blank" rel="noopener noreferrer" style={{ margin: "0 5px" }}>
          YouTube
        </a>
      </div>

      <div className="footer-info" style={{ marginBottom: "10px", textAlign: "center" }}>
        <p>Pour recevoir régulièrement des conseils pédagogiques, retrouvez-nous sur Google Classroom et nos réseaux sociaux.</p>
        <p>
          Envoyez vos documents PDF à l’adresse email : <a href="mailto:couaboe@gmail.com">couaboe@gmail.com</a>
        </p>
      </div>

      <div className="footer-copy" style={{ textAlign: "center" }}>
        <span>© 2025 Site web réalisé par EVLE Kouamlan Williams.</span>
      </div>
    </footer>
  );
}