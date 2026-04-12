import './Footer.css';

function Footer() {
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
            <p className="footer__tagline">You actually scrolled to the footer. Wild. There&apos;s no hidden lore down here, just the harsh reality that I spent way too much time styling this exact section instead of fixing the actual bugs in our game.</p>
            <p className="footer__tagline">I built this entire custom frontend just to flex the comic aesthetic. There is literally zero backend holding this site together.</p>
            <p className="footer__tagline">If you&apos;re inspecting the page source right now to steal our CSS, please ignore the boring ass class names. And please click a link before we realize how much time we wasted.</p>
            <p className="footer__tagline">-Your sleep deprived developer, Umay &quot;cicikus&quot;</p>
          </div>

          {/* Quick Links */}
          <div className="footer__links-group">
            <h4 className="footer__links-title">Navigate</h4>
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
            <h4 className="footer__links-title">Connect</h4>
            <ul className="footer__links">
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
            &copy; {new Date().getFullYear()} Vick Games. All rights reserved. Built with ❤️ and lots of ☕
          </p>
          <div className="footer__comic-badge">
            <span>GAME</span>
            <span>OVER?</span>
            <span className="footer__comic-badge-sub">Never!</span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
