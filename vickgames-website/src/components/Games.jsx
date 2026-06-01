import { useState, useEffect, useRef } from 'react';
import game1 from '../assets/beataboo.png';
import game2 from '../assets/abscinema.png';
import game3 from '../assets/abscinema.png';
import './Games.css';

const gamesData = [
  {
    id: 1,
    title: 'Beat A Boo!',
    genre: 'Co-op Action',
    description: "An online co-op game blending horror with music. Run from vile creatures, destroy objects, and do the Devil's bidding.",    
    image: game1,
    color: '#9954e2ff',
    status: 'Coming Soon',
    tags: ['Action', 'Rhythm', 'Multiplayer'],
    steamUrl: 'https://store.steampowered.com/app/4537500/Beat_A_Boo/',
  },
  {
    id: 2,
    title: 'Idea In Development',
    genre: 'Idea',
    description: 'Who knows what this one will bring.',
    image: game2,
    color: '#00d4ff',
    status: 'In Development',
    tags: ['Idea', 'In Development'],
    steamUrl: null,
  },
  {
    id: 3,
    title: 'Idea In Development',
    genre: 'Idea',
    description: 'Who knows what this one will bring.',
    image: game3,
    color: '#39ff14',
    status: 'In Development',
    tags: ['Idea', 'In Development'],
    steamUrl: null,
  },
];

function Games() {
  const [activeGame, setActiveGame] = useState(0);
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('games--visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="games" className="games" ref={sectionRef}>
      <div className="games__container">
        {/* Header */}
        <div className="games__header">
          <span className="games__label">// 02. WHAT WE BUILD</span>
          <h2 className="games__title">
            Our <span className="games__title-accent">Games</span>
          </h2>
          <p className="games__subtitle">
            Each game is a new universe waiting to be explored and a new night to be passed sleeplessly. Here&apos;s what we&apos;re cooking.
          </p>
        </div>

        {/* Game Showcase */}
        <div className="games__showcase">
          {/* Game Cards Selector */}
          <div className="games__selector">
            {gamesData.map((game, index) => (
              <button
                key={game.id}
                id={`game-select-${game.id}`}
                className={`games__selector-item ${activeGame === index ? 'games__selector-item--active' : ''}`}
                onClick={() => setActiveGame(index)}
                style={{ '--game-color': game.color }}
              >
                <span className="games__selector-number">{String(index + 1).padStart(2, '0')}</span>
                <div className="games__selector-info">
                  <span className="games__selector-title">{game.title}</span>
                  <span className="games__selector-genre">{game.genre}</span>
                </div>
                <span className="games__selector-arrow">→</span>
              </button>
            ))}
          </div>

          {/* Active Game Display */}
          <div className="games__display" key={activeGame}>
            <div className="games__display-image-wrapper">
              <img
                src={gamesData[activeGame].image}
                alt={gamesData[activeGame].title}
                className="games__display-image"
              />
              <div className="games__display-overlay"></div>
              <span
                className="games__display-status"
                style={{ background: gamesData[activeGame].color }}
              >
                {gamesData[activeGame].status}
              </span>
            </div>

            <div className="games__display-info">
              <div className="games__display-genre-badge" style={{ borderColor: gamesData[activeGame].color, color: gamesData[activeGame].color }}>
                {gamesData[activeGame].genre}
              </div>
              <h3 className="games__display-title">{gamesData[activeGame].title}</h3>
              <p className="games__display-desc">{gamesData[activeGame].description}</p>

              <div className="games__display-tags">
                {gamesData[activeGame].tags.map((tag) => (
                  <span key={tag} className="games__display-tag" style={{ borderColor: gamesData[activeGame].color }}>
                    {tag}
                  </span>
                ))}
              </div>

              {gamesData[activeGame].steamUrl ? (
                <a
                  href={gamesData[activeGame].steamUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="games__display-btn"
                  style={{ background: gamesData[activeGame].color }}
                >
                  Learn More →
                </a>
              ) : (
                <button
                  className="games__display-btn games__display-btn--disabled"
                  style={{ background: gamesData[activeGame].color, opacity: 0.5, cursor: 'not-allowed' }}
                  disabled
                >
                  Coming Soon
                </button>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Decorative */}
      <div className="games__comic-strip">
        <div className="games__strip-panel"></div>
        <div className="games__strip-panel"></div>
        <div className="games__strip-panel"></div>
        <div className="games__strip-panel"></div>
        <div className="games__strip-panel"></div>
      </div>

      <div className="games__border-bottom"></div>
    </section>
  );
}

export default Games;
