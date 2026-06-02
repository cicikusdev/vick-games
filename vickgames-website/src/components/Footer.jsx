import { useLanguage } from '../context/LanguageContext';
import './Footer.css';

function Footer() {
  const { t } = useLanguage();
  return (
    <footer id="footer" className="footer">
      <div className="footer__container">
        <div className="footer__top">
          {/* Logo */}
          <div className="footer__brand">
            <div className="footer__logo">
              <span className="footer__logo-text">VICK</span>
              <span className="footer__logo-accent">GAMES</span>
            </div>
            <p className="footer__tagline">{t('footer', 'tagline1')}</p>
            <p className="footer__tagline">{t('footer', 'tagline2')}</p>
            <p className="footer__tagline">{t('footer', 'tagline3')}</p>
            <p className="footer__tagline">{t('footer', 'tagline4')}</p>
          </div>

          {/* Quick Links */}
          <div className="footer__links-group">
            <h4 className="footer__links-title">{t('footer', 'navigate')}</h4>
            <ul className="footer__links">
              <li><a href="#hero">Home</a></li>
              <li><a href="#about">About</a></li>
              <li><a href="#games">Games</a></li>
              <li><a href="#team">Team</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Social */}
          <div className="footer__links-group">
            <h4 className="footer__links-title">{t('footer', 'connect')}</h4>
            <ul className="footer__links footer__links--grid">
              <li><a href="https://store.steampowered.com/app/4537500/Beat_A_Boo/" target="_blank" rel="noopener noreferrer">Steam</a></li>
              <li><a href="https://www.instagram.com/beataboo.official" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://x.com/beataboo_game" target="_blank" rel="noopener noreferrer">Twitter / X</a></li>
              <li><a href="https://www.tiktok.com/@beataboo_game" target="_blank" rel="noopener noreferrer">TikTok</a></li>
              <li><a href="https://www.reddit.com/r/BeatABoo/" target="_blank" rel="noopener noreferrer">Reddit</a></li>
              <li><a href="https://discord.gg/TqTDGRKb" target="_blank" rel="noopener noreferrer">Discord</a></li>
              <li><a href="https://www.youtube.com/@BeatABooGame" target="_blank" rel="noopener noreferrer">YouTube</a></li>
              <li><a href="https://github.com/cicikusdev" target="_blank" rel="noopener noreferrer">GitHub</a></li>
            </ul>
          </div>
        </div>

        <div className="footer__divider"></div>

        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {new Date().getFullYear()} {t('footer', 'rights')}
          </p>
          <div className="footer__comic-badge">
            <span>{t('footer', 'badge1')}</span>
            <span>{t('footer', 'badge2')}</span>
            <span className="footer__comic-badge-sub">{t('footer', 'badge3')}</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
