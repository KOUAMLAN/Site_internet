import React from 'react';
import { Link } from 'react-router-dom';
import anglaisImg from '../assets/image_anglais.png';
import apercus from '../assets/apercus_de_cours_espagnol.jpg';
import bienvenueImg from '../assets/BIENVENUE.jpg';
import './Accueil.css';

export default function Accueil() {
  return (
    <main
      style={{
        minHeight: 'calc(100vh - 140px)',
        maxWidth: '1200px',
        margin: '0 auto',
        padding: '2rem 3rem',
        backgroundColor: 'var(--main-bg)',
      }}
    >
      <section className="banner">
        <h1>Apprenez les lettres, l'espagnol et l'anglais, vivez les langues</h1>
        <img src={bienvenueImg} alt="Bienvenue" className="image-banner" />
      </section>

      <section className="apropos">
        <h2>Présentation professionnelle</h2>
        <p>
          <strong>Pédagogie adaptée aux NTIC</strong>
          <br />
          <br />
          Chers parents et élèves,
          <br />
          En tant que professeur de lettres et langues, je vous présente ma pédagogie innovante, conçue
          pour tirer le meilleur des Nouvelles Technologies de l'Information et de la Communication (NTIC)
          dans l'enseignement à distance.
          <br />
          <br />
          <strong>Objectifs pédagogiques :</strong> Développer les compétences linguistiques, autonomie,
          créativité et esprit critique.
          <br />
          <strong>Méthodes :</strong> Plateformes interactives, ressources multimédias enrichies (vidéos,
          podcasts, articles), évaluations formatives (quiz et activités en temps réel).
          <br />
          <strong>Suivi personnalisé :</strong> Tutorats individuels en ligne adaptés à chaque élève.
          <br />
          <strong>Engagement des familles :</strong> Collaboration active avec les parents pour la réussite
          de l’élève.
          <br />
          <br />
          Ma pédagogie, ancrée dans les NTIC, prépare les élèves à un monde en évolution.
          <br />
          <strong>Couabo Auguste</strong>
        </p>
        <div className="images-apropos">
          <img src={anglaisImg} alt="Image Anglais" />
          <img src={apercus} alt="Aperçu Cours Espagnol" />
        </div>
      </section>

      <section className="cours-section">
        <h2>Cours</h2>
        <p>
          Du primaire à Bac+2 dans toutes les matières.
          <br />
          Accompagnement personnalisé, préparation aux examens, suivi régulier et pédagogie positive pour dépasser
          les blocages. Professeurs spécialisés et bilans réguliers.
          <br />
          <br />
          <strong>Accès aux cours et programmes sur Google Classroom</strong>
          <br />
          Pour accéder à l’ensemble des cours et programmes enrichis par les nouvelles technologies de l'information et de la communication (NTIC), une plateforme dédiée est disponible via{' '}
          <a href="https://classroom.google.com/" target="_blank" rel="noopener noreferrer" style={{color: 'var(--main-blue)', textDecoration: 'underline'}}>
            Google Classroom
          </a>.
          <br />
          <span style={{ color: '#FF8E3C', fontWeight: 600 }}>Attention :</span> l'accès à Google Classroom est réservé aux élèves inscrits.
          <br />
          Chaque participant reçoit, après son inscription et validation, un <strong>code d'accès</strong> ou un <strong>lien d'invitation personnel</strong>. Ce code ou lien permet de rejoindre le groupe de cours associé à sa formation.
          <br />
          Une fois inscrit, connectez-vous à Google Classroom avec votre compte Google puis saisissez le code de cours fourni ou cliquez sur le lien d’invitation.
          <br />
          Cet espace sécurisé permet d’accéder aux contenus, devoirs, ressources multimédias et examens, tout en interagissant avec les enseignants et les autres élèves.
          <br />
          Si vous souhaitez rejoindre la plateforme, veuillez suivre la procédure d’inscription. Un code ou lien de connexion vous sera alors communiqué par l’équipe pédagogique.
          <br />
          Pour toute question ou difficulté d’accès, contactez-nous directement :
          <a href="mailto:couaboe@gmail.com" style={{color: 'var(--main-blue)', textDecoration: 'underline'}}>couaboe@gmail.com</a>
        </p>
        <Link to="/cours" className="section-btn">
          Découvrir les cours
        </Link>
      </section>

      <section className="temoignages-section">
        <h2>Témoignages</h2>
        <p>
          Ils ont progressé grâce à nos méthodes et à l'accompagnement sur mesure.
          <br />
          Découvrez leurs avis et résultats.
        </p>
        <Link to="/temoignages" className="section-btn">
          Voir tous les témoignages
        </Link>
      </section>

      <section style={{ marginTop: '3rem', textAlign: 'center' }}>
        <h2>Réservation simple</h2>
        <p>
          Pour réserver, écrivez directement à l’adresse email suivante :
          <br />
          <strong>couaboe@gmail.com</strong>
          <br />
          en précisant vos souhaits de réservation.
        </p>
      </section>
    </main>
  );
}