import { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './Navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const { language, setLanguage, t } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav id="main-navbar" className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__container">
        <a href="#hero" className="navbar__logo" onClick={(e) => handleNavClick(e, 'hero')}>
          <span className="navbar__logo-text">VICK</span>
          <span className="navbar__logo-accent">GAMES</span>
        </a>

        <button
          id="mobile-menu-toggle"
          className={`navbar__burger ${menuOpen ? 'navbar__burger--active' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle navigation menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <ul className={`navbar__links ${menuOpen ? 'navbar__links--open' : ''}`}>
          <li>
            <a href="#about" id="nav-about" className="navbar__link" onClick={(e) => handleNavClick(e, 'about')}>
              <span className="navbar__link-number">01.</span> {t('navbar', 'about')}
            </a>
          </li>
          <li>
            <a href="#games" id="nav-games" className="navbar__link" onClick={(e) => handleNavClick(e, 'games')}>
              <span className="navbar__link-number">02.</span> {t('navbar', 'games')}
            </a>
          </li>
          <li>
            <a href="#team" id="nav-team" className="navbar__link" onClick={(e) => handleNavClick(e, 'team')}>
              <span className="navbar__link-number">03.</span> {t('navbar', 'team')}
            </a>
          </li>
          <li>
            <a href="#contact" id="nav-contact" className="navbar__link navbar__link--cta" onClick={(e) => handleNavClick(e, 'contact')}>
              {t('navbar', 'contact')}
            </a>
          </li>
        </ul>

        <div className="navbar__right-controls">
          <div className="navbar__socials">
            <a href="https://store.steampowered.com/app/4537500/Beat_A_Boo/" target="_blank" rel="noopener noreferrer" className="navbar__social" aria-label="Steam">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M11.979 0C5.678 0 .511 4.86.022 11.037l6.432 2.658c.545-.371 1.203-.59 1.912-.59.063 0 .125.004.188.006l2.861-4.142V8.91c0-2.495 2.028-4.524 4.524-4.524 2.494 0 4.524 2.031 4.524 4.527s-2.03 4.525-4.524 4.525h-.105l-4.076 2.911c0 .052.004.105.004.159 0 1.875-1.515 3.396-3.39 3.396-1.635 0-3.016-1.173-3.331-2.727L.436 15.27C1.862 20.307 6.486 24 11.979 24c6.627 0 11.999-5.373 11.999-12S18.605 0 11.979 0zM7.54 18.21l-1.473-.61c.262.543.714.985 1.308 1.215a2.253 2.253 0 0 0 2.824-1.086 2.253 2.253 0 0 0-.04-2.014 2.254 2.254 0 0 0-1.06-1.092 2.259 2.259 0 0 0-1.18-.312l1.525.631c.904.375 1.334 1.404.961 2.309s-1.404 1.334-2.309.961l-.556-.002zM18.791 8.912c0-1.66-1.354-3.012-3.012-3.012-1.662 0-3.012 1.351-3.012 3.012 0 1.66 1.35 3.012 3.012 3.012 1.658 0 3.012-1.351 3.012-3.012zm-5.024 0c0-1.108.897-2.012 2.012-2.012s2.012.904 2.012 2.012a2.016 2.016 0 0 1-2.012 2.012 2.016 2.016 0 0 1-2.012-2.012z" />
              </svg>
            </a>
            <a href="https://www.instagram.com/beataboo.official" target="_blank" rel="noopener noreferrer" className="navbar__social" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
            </a>
            <a href="https://x.com/beataboo_game" target="_blank" rel="noopener noreferrer" className="navbar__social" aria-label="Twitter/X">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
            <a href="https://www.tiktok.com/@beataboo_game" target="_blank" rel="noopener noreferrer" className="navbar__social" aria-label="TikTok">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1v-3.5a6.37 6.37 0 0 0-.79-.05A6.34 6.34 0 0 0 3.15 15a6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.34-6.34V8.75a8.27 8.27 0 0 0 4.76 1.5V6.8a4.83 4.83 0 0 1-1-.11z" />
              </svg>
            </a>
            <a href="https://www.reddit.com/r/BeatABoo/" target="_blank" rel="noopener noreferrer" className="navbar__social" aria-label="Reddit">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M12 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0zm5.01 4.744c.688 0 1.25.561 1.25 1.249a1.25 1.25 0 0 1-2.498.056l-2.597-.547-.8 3.747c1.824.07 3.48.632 4.674 1.488.308-.309.73-.491 1.207-.491.968 0 1.754.786 1.754 1.754 0 .716-.435 1.333-1.01 1.614a3.111 3.111 0 0 1 .042.52c0 2.694-3.13 4.87-7.004 4.87-3.874 0-7.004-2.176-7.004-4.87 0-.183.015-.366.043-.534A1.748 1.748 0 0 1 4.028 12c0-.968.786-1.754 1.754-1.754.463 0 .898.196 1.207.49 1.207-.883 2.878-1.43 4.744-1.487l.885-4.182a.342.342 0 0 1 .14-.197.35.35 0 0 1 .238-.042l2.906.617a1.214 1.214 0 0 1 1.108-.701zM9.25 12C8.561 12 8 12.561 8 13.25c0 .689.561 1.25 1.25 1.25.689 0 1.25-.561 1.25-1.25 0-.689-.561-1.25-1.25-1.25zm5.5 0c-.689 0-1.25.561-1.25 1.25 0 .689.561 1.25 1.25 1.25.689 0 1.25-.561 1.25-1.25 0-.689-.561-1.25-1.25-1.25zm-5.466 3.99a.327.327 0 0 0-.231.094.33.33 0 0 0 0 .463c.842.842 2.484.913 2.961.913.477 0 2.105-.056 2.961-.913a.361.361 0 0 0 0-.462.342.342 0 0 0-.462 0c-.547.533-1.684.73-2.512.73-.828 0-1.979-.196-2.512-.73a.317.317 0 0 0-.205-.095z" />
              </svg>
            </a>
            <a href="https://discord.gg/TqTDGRKb" target="_blank" rel="noopener noreferrer" className="navbar__social" aria-label="Discord">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561 19.9 19.9 0 005.9934 3.0272.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286 19.8655 19.8655 0 006.0019-3.0272.077.077 0 00.0313-.0552c.5004-5.177-.8382-9.6739-3.5485-13.6604a.061.061 0 00-.0312-.0286zM8.02 15.3312c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.9555 2.4189-2.1569 2.4189zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.4189-2.1568 2.4189z" />
              </svg>
            </a>
            <a href="https://www.youtube.com/@BeatABooGame" target="_blank" rel="noopener noreferrer" className="navbar__social" aria-label="YouTube">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
              </svg>
            </a>
          </div>

          <div className="navbar__lang-switch">
            <button 
              className={`lang-btn ${language === 'en' ? 'active' : ''}`}
              onClick={() => setLanguage('en')}
              aria-label="English"
            >
              <img src="https://flagcdn.com/w20/us.png" srcSet="https://flagcdn.com/w40/us.png 2x" width="20" height="15" alt="US Flag" className="lang-flag" />
              <span>EN</span>
            </button>
            <span className="lang-divider">|</span>
            <button 
              className={`lang-btn ${language === 'tr' ? 'active' : ''}`}
              onClick={() => setLanguage('tr')}
              aria-label="Türkçe"
            >
              <img src="https://flagcdn.com/w20/tr.png" srcSet="https://flagcdn.com/w40/tr.png 2x" width="20" height="15" alt="TR Flag" className="lang-flag" />
              <span>TR</span>
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
