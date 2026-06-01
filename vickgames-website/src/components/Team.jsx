import { useEffect, useRef } from 'react';
import team1 from '../assets/caripp.jpeg';
import team2 from '../assets/benpp.jpeg';
import team3 from '../assets/umutpp.jpeg';
import team4 from '../assets/osmanpp.jpeg';
import team5 from '../assets/ecempp.png';
import team6 from '../assets/mervepp.jpeg';
import './Team.css';

const teamData = [
  {
    id: 1,
    name: 'Eren Çağrı (KoL) Özfidan',
    role: 'Co-Founder & Lead 3D Artist',
    description: 'Reality is too high-poly, my eyes need a break.',
    image: team1,
    color: '#ff3e3e',
    social: {
      linkedin: 'https://www.linkedin.com/in/eren-%C3%A7a%C4%9Fr%C4%B1-%C3%B6zfidan-023367390/',
      steam: 'https://steamcommunity.com/profiles/76561199075517187/'
    },
  },
  {
    id: 2,
    name: 'Umay Ece (cicikus) Mantar',
    role: 'Co-Founder & Lead Unity Developer',
    description: '"God is dead, so dare to know."',
    image: team2,
    color: '#b44dff',
    social: {
      linkedin: 'https://www.linkedin.com/in/umayecemantar/',
      steam: 'https://steamcommunity.com/profiles/76561199028573406/', github: 'https://github.com/cicikusdev'
    },
  },
  {
    id: 3,
    name: 'Umut Berkay (Icarus) Yılmaz',
    role: 'Co-Founder & 3D Animator',
    description: '"Praise the Fool"',
    image: team3,
    color: '#00d4ff',
    social: {
      linkedin: '#',
      steam: 'https://steamcommunity.com/profiles/76561199555414602'
    },
  },
  {
    id: 4,
    name: 'Osman Eren (Vader) Erginer',
    role: 'Co-Founder & Sound Designer/Composer',
    description: 'placeholder',
    image: team4,
    color: '#39ff14',
    social: {
      linkedin: '#',
      steam: 'https://steamcommunity.com/profiles/76561198229950916'
    },
  },
  {
    id: 5,
    name: 'Ecem Çağla Özfidan',
    role: 'Unity Developer',
    description: 'placeholder',
    image: team5,
    color: '#ff8c00',
    social: {
      linkedin: 'https://www.linkedin.com/in/ecem-%C3%A7a%C4%9Fla-%C3%B6zfidan-b2997637a/',
      steam: 'https://steamcommunity.com/profiles/76561199358359674'
    },
  },
];

function Team() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('team--visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="team" className="team" ref={sectionRef}>
      <div className="team__container">
        {/* Header */}
        <div className="team__header">
          <span className="team__label">// 03. THE SQUAD</span>
          <h2 className="team__title">
            Our <span className="team__title-accent">Team</span>
          </h2>
          <p className="team__subtitle">
            The heroes behind the scenes. A small team with massive ambitions.
          </p>
        </div>

        {/* Team Grid */}
        <div className="team__grid">
          {teamData.map((member, index) => (
            <div
              key={member.id}
              className="team__card"
              style={{ '--member-color': member.color, '--delay': `${index * 0.15}s` }}
            >
              <div className="team__card-image-wrapper">
                <img
                  src={member.image}
                  alt={member.name}
                  className="team__card-image"
                />
                <div className="team__card-image-border"></div>
                {/* Comic corner decoration */}
                <div className="team__card-corner team__card-corner--tl"></div>
                <div className="team__card-corner team__card-corner--tr"></div>
                <div className="team__card-corner team__card-corner--bl"></div>
                <div className="team__card-corner team__card-corner--br"></div>
              </div>

              <div className="team__card-info">
                <h3 className="team__card-name">{member.name}</h3>
                <span className="team__card-role" style={{ color: member.color }}>
                  {member.role}
                </span>
                <p className="team__card-desc">{member.description}</p>

                {/* Social Links */}
                <div className="team__card-socials">
                  {member.social.linkedin && (
                    <a href={member.social.linkedin} target="_blank" rel="noopener noreferrer" className="team__card-social" aria-label="LinkedIn">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                      </svg>
                    </a>
                  )}
                  {member.social.steam && (
                    <a href={member.social.steam} target="_blank" rel="noopener noreferrer" className="team__card-social" aria-label="Steam">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.985 1.308 1.215a2.253 2.253 0 0 0 2.824-1.086 2.253 2.253 0 0 0-.04-2.014 2.254 2.254 0 0 0-1.06-1.092 2.259 2.259 0 0 0-1.18-.312l1.525.631c.904.375 1.334 1.404.961 2.309s-1.404 1.334-2.309.961l-.556-.002zM18.791 8.912c0-1.66-1.354-3.012-3.012-3.012-1.662 0-3.012 1.351-3.012 3.012 0 1.66 1.35 3.012 3.012 3.012 1.658 0 3.012-1.351 3.012-3.012zm-5.024 0c0-1.108.897-2.012 2.012-2.012s2.012.904 2.012 2.012a2.016 2.016 0 0 1-2.012 2.012 2.016 2.016 0 0 1-2.012-2.012z" />
                      </svg>
                    </a>
                  )}
                  {member.social.github && (
                    <a href={member.social.github} target="_blank" rel="noopener noreferrer" className="team__card-social" aria-label="GitHub">
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                      </svg>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="team__border-bottom"></div>
    </section>
  );
}

export default Team;
