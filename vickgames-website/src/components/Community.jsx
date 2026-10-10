import { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Community.css';

const DISCORD_INVITE = 'https://discord.gg/ykfWGJctDV';
const DISCORD_WIDGET = 'https://discord.com/widget?id=1483849626976129174&theme=dark';

function Community() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('community--visible');
          }
        });
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="community" className="community" ref={sectionRef}>
      <div className="community__container">
        {/* Header */}
        <div className="community__header">
          <span className="community__label">{t('community', 'label')}</span>
          <h2 className="community__title">
            {t('community', 'title1')} <span className="community__title-accent">{t('community', 'title2')}</span>
          </h2>
          <p className="community__subtitle">
            {t('community', 'subtitle')}
          </p>
        </div>

        <div className="community__grid">
          {/* Left - Why join */}
          <div className="community__panel">
            <ul className="community__perks">
              <li><span className="community__perk-icon">🎸</span>{t('community', 'perk1')}</li>
              <li><span className="community__perk-icon">🐛</span>{t('community', 'perk2')}</li>
              <li><span className="community__perk-icon">📣</span>{t('community', 'perk3')}</li>
              <li><span className="community__perk-icon">💡</span>{t('community', 'perk4')}</li>
            </ul>

            <a
              href={DISCORD_INVITE}
              target="_blank"
              rel="noopener noreferrer"
              id="community-join-btn"
              className="community__btn"
            >
              <svg width="26" height="26" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561 19.9 19.9 0 005.9934 3.0272.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286 19.8655 19.8655 0 006.0019-3.0272.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
              </svg>
              <span>{t('community', 'joinBtn')}</span>
            </a>
            <span className="community__invite">discord.gg/ykfWGJctDV</span>
          </div>

          {/* Right - Live widget */}
          <div className="community__widget">
            <iframe
              src={DISCORD_WIDGET}
              title="Beat A Boo! Discord"
              width="350"
              height="500"
              loading="lazy"
              sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            ></iframe>
          </div>
        </div>
      </div>

      <div className="community__border-bottom"></div>
    </section>
  );
}

export default Community;
