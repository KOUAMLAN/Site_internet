import React from "react";

export default function VideoIntro() {
  return (
    <section className="video-intro" style={{ margin: "20px 0", textAlign: "center" }}>
      <h2>Présentation du Professeur</h2>
      <video width="320" height="240" controls preload="metadata">
        <source src="/videos/presentation-professeur.mp4" type="video/mp4" />
        Votre navigateur ne supporte pas la vidéo.
      </video>
      <p>Découvrez qui je suis et comment je peux vous aider à réussir.</p>
    </section>
  );
}