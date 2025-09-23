import React from 'react';
import Accordion from '../components/Accordion.jsx';
import './Temoignages.css';

const temoignagesData = [
  {
    title: 'Norbi Skiba',
    content: '« Grâce à ces cours, j’ai enfin progressé rapidement en français. Le professeur est très pédagogue et à l’écoute. Je le recommande vivement ! »',
    facebook: 'https://www.facebook.com/share/1B4MUAom93/'
  },
  {
    title: 'Faveur Ochra',
    content: '« Les cours sont très bien organisés et adaptés à tous les niveaux. J’ai particulièrement apprécié la disponibilité et le sérieux de l’enseignant. »',
    facebook: 'https://www.facebook.com/share/16u64tnuY8/'
  },
  {
    title: 'Paul',
    content: '« Excellent accompagnement, bonne humeur et motivation garanties. Les résultats ne se sont pas faits attendre. Merci ! »',
    facebook: 'https://www.facebook.com/share/1BR3ZjSvbH/'
  },
  {
    title: 'William Ehl',
    content: '« Les méthodes sont claires et efficaces. J’ai beaucoup appris en peu de temps grâce à ce professeur attentif et professionnel. »',
    facebook: 'https://www.facebook.com/share/1CY3KnPb6D/'
  },
  {
    title: 'Marie Noelle Tanokan',
    content: '« Un enseignement remarquable, humain  et professionnel ! Grâce à ce professeur, j’ai pu retrouver confiance en moi et progresser avec une méthode adaptée à mon rythme. Chaque cours était une véritable source de motivation. Je n’aurais jamais cru pouvoir aimer autant apprendre le français — c’est désormais une passion. Un grand merci pour ton accompagnement exceptionnel ! »',
    facebook: 'https://www.facebook.com/share/1FAwoALxGx/'
  },
  {
    title: 'Soundous Ziri',
    content: "« J’ai eu la chance de suivre les cours avec bienveillance en CE1 et CE2 en 2023 et 2024. Cela m'a permis de gagner en confiance et de progresser. Merci à l’enseignant pour son soutien constant. »",
    facebook: 'https://www.facebook.com/share/19qiF4oUzh/'
  },
  {
    title: 'Afdar Massoundi',
    content: "« En cinquième, cette année 2024-2025, j’ai beaucoup apprécié les cours d’espagnol et de français. L’encadrement était professionnel et motivant, ce qui m’a permis d’améliorer aussi bien ma grammaire que mon expression orale dans les deux langues. »",
    facebook: 'https://www.facebook.com/share/1ER8XiyES9/'
  },
  {
    title: 'Nouvel Élève',
    content: "« Je l'ai pris en troisième avec son frère Afdar Massoundi, en français. Les cours sont excellents et l'accompagnement est très attentif. »",
    facebook: 'https://www.facebook.com/share/1B2wy7im6M/'
  }
];

export default function Temoignages() {
  return (
    <section id="temoignages" className="offre-page">
      <h2>Témoignages de certaines familles avec l'organisme Cours Ado</h2>
      <Accordion
        items={temoignagesData.map(t => ({
          title: t.title,
          content: (
            <div>
              <p>{t.content}</p>
              {t.facebook && (
                <a
                  href={t.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="temoignage-facebook"
                >
                  Voir sur Facebook
                </a>
              )}
            </div>
          )
        }))}
      />
      <h3 style={{ marginTop: '2rem', textAlign: 'center', fontWeight: 'bold' }}>
        Bilans pédagogiques téléchargeables
      </h3>
      <div
        style={{
          marginTop: '1rem',
          textAlign: 'center',
          display: 'flex',
          gap: '1rem',
          justifyContent: 'center'
        }}
      >
        <a
          href="/documents/Bilan2024_COUABO Evle Edmond Auguste.pdf"
          download="Bilan2024_COUABO_Evle_Edmond_Auguste.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="link-bilan"
          style={{
            display: 'inline-block',
            padding: '12px 24px',
            backgroundColor: '#4067F9',
            color: 'white',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold'
          }}
        >
          Télécharger le bilan pédagogique 2024
        </a>
        <a
          href="/images/Bilan2024_COUABO Evle Edmond Auguste (4).pdf"
          download="Bilan2024_COUABO_Evle_Edmond_Auguste-4.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="link-bilan"
          style={{
            display: 'inline-block',
            padding: '12px 24px',
            backgroundColor: '#4067F9',
            color: 'white',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold'
          }}
        >
          Télécharger le bilan pédagogique 2024 (version 4)
        </a>
        <a
          href="/images/Bilan de fin d'année - COUABO Evle.pdf"
          download="Bilan_de_fin_d_annee_COUABO_Evle.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="link-bilan"
          style={{
            display: 'inline-block',
            padding: '12px 24px',
            backgroundColor: '#34a853',
            color: 'white',
            borderRadius: '8px',
            textDecoration: 'none',
            fontWeight: 'bold'
          }}
        >
          Télécharger le bilan pédagogique 2024 (Image)
        </a>
      </div>
    </section>
  );
}