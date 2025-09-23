import React from 'react';
import './Temoignages.css';

const temoignagesData = [
  {
    id: 1,
    title: 'Norbi Skiba',
    content: '« Grâce à ces cours, j’ai enfin progressé rapidement en français. Le professeur est très pédagogue et à l’écoute. Je le recommande vivement ! »',
    facebook: 'https://www.facebook.com/share/1B4MUAom93/',
  },
  {
    id: 2,
    title: 'Faveur Ochra',
    content: '« Les cours sont très bien organisés et adaptés à tous les niveaux. J’ai particulièrement apprécié la disponibilité et le sérieux de l’enseignant. »',
    facebook: 'https://www.facebook.com/share/16u64tnuY8/',
  },
  {
    id: 3,
    title: 'Paul',
    content: '« Excellent accompagnement, bonne humeur et motivation garanties. Les résultats ne se sont pas faits attendre. Merci ! »',
    facebook: 'https://www.facebook.com/share/1BR3ZjSvbH/',
  },
  {
    id: 4,
    title: 'William Ehl',
    content: '« Les méthodes sont claires et efficaces. J’ai beaucoup appris en peu de temps grâce à ce professeur attentif et professionnel. »',
    facebook: 'https://www.facebook.com/share/1CY3KnPb6D/',
  },
  {
    id: 5,
    title: 'Marie Noelle Tanokan',
    content: '« Un enseignement remarquable, humain et professionnel ! Grâce à ce professeur, j’ai pu retrouver confiance en moi et progresser avec une méthode adaptée à mon rythme. Chaque cours était une véritable source de motivation. Je n’aurais jamais cru pouvoir aimer autant apprendre le français — c’est désormais une passion. Un grand merci pour ton accompagnement exceptionnel ! »',
    facebook: 'https://www.facebook.com/share/1FAwoALxGx/',
  },
  {
    id: 6,
    title: 'Soundous Ziri',
    content: "« J’ai eu la chance de suivre les cours avec bienveillance en CE1 et CE2 en 2023 et 2024. Cela m'a permis de gagner en confiance et de progresser. Merci à l’enseignant pour son soutien constant. »",
    facebook: 'https://www.facebook.com/share/19qiF4oUzh/',
  },
  {
    id: 7,
    title: 'Afdar Massoundi',
    content: "« En troisième, cette année 2024-2025, j’ai beaucoup apprécié les cours d’espagnol et de français. L’encadrement était professionnel et motivant, ce qui m’a permis d’améliorer aussi bien ma grammaire que mon expression orale dans les deux langues. »",
    facebook: 'https://www.facebook.com/share/1ER8XiyES9/',
  },
  {
    id: 8,
    title: 'Frère Afdar Massoundi',
    content: "« Les cours sont excellents et l'accompagnement est très attentif. »",
    facebook: 'https://www.facebook.com/share/1B2wy7im6M/',
  }
];

export default function Temoignages() {
  return (
    <section className="section-container temoignages-section">
      <h2 className="section-title">Témoignages de certains élèves de monsieur Couabo</h2>
      {temoignagesData.map(({ id, title, content, facebook }) => (
        <article key={id} className="temoignage-item">
          <h3>{title}</h3>
          <p className="temoignage-content">{content}</p>
          {facebook && (
            <a href={facebook} target="_blank" rel="noopener noreferrer" className="facebook-link">
              Voir sur Facebook
            </a>
          )}
        </article>
      ))}
      <h3 className="bilans-title">Témoignages de certaines familles avec l'organisme Cours Ado</h3>
      <p className="bilans-info">
        Les bilans pédagogiques complets sont disponibles sur l’Instagram du professeur dans la partie Contact.
      </p>
    </section>
  );
}