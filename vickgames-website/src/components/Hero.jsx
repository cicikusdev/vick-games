import { useEffect, useRef, useCallback } from 'react';
import heroBanner from '../assets/hero_banner_new2.png';
import './Hero.css';

function Hero() {
  const heroRef = useRef(null);
  const canvasRef = useRef(null);
  const mouseRef = useRef({ x: -1000, y: -1000 });
  const animFrameRef = useRef(null);

  // Interactive dot canvas — ball pit physics
  useEffect(() => {
    const canvas = canvasRef.current;
    const hero = heroRef.current;
    if (!canvas || !hero) return;

    const ctx = canvas.getContext('2d');
    const DOT_SPACING = 28;
    const DOT_BASE_RADIUS = 1.2;
    const DOT_MAX_RADIUS = 3.5;
    const PUSH_RADIUS = 300;
    const PUSH_FORCE = 10;
    const LERP_SPEED = 0.09;
    const DOT_BASE_ALPHA = 0.1;
    const DOT_MAX_ALPHA = 0.6;

    const dotColors = [
      { r: 255, g: 62, b: 62 },
      { r: 255, g: 210, b: 63 },
      { r: 0, g: 212, b: 255 },
      { r: 180, g: 77, b: 255 },
    ];

    let dots = [];

    const buildDots = () => {
      const rect = hero.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;

      const cols = Math.ceil(rect.width / DOT_SPACING) + 1;
      const rows = Math.ceil(rect.height / DOT_SPACING) + 1;
      dots = [];

      for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
          dots.push({
            originX: col * DOT_SPACING,
            originY: row * DOT_SPACING,
            x: col * DOT_SPACING,
            y: row * DOT_SPACING,
            vx: 0,
            vy: 0,
            radius: DOT_BASE_RADIUS,
            alpha: DOT_BASE_ALPHA,
            r: 255, g: 255, b: 255,
          });
        }
      }
    };

    buildDots();
    window.addEventListener('resize', buildDots);

    const handleMouseMove = (e) => {
      const rect = hero.getBoundingClientRect();
      mouseRef.current.x = e.clientX - rect.left;
      mouseRef.current.y = e.clientY - rect.top;
    };

    const handleMouseLeave = () => {
      mouseRef.current.x = -1000;
      mouseRef.current.y = -1000;
    };

    hero.addEventListener('mousemove', handleMouseMove);
    hero.addEventListener('mouseleave', handleMouseLeave);

    const draw = () => {
      const { width, height } = canvas;
      ctx.clearRect(0, 0, width, height);

      const mx = mouseRef.current.x;
      const my = mouseRef.current.y;

      for (let i = 0; i < dots.length; i++) {
        const dot = dots[i];

        // Distance from cursor to dot's ORIGIN (not current pos)
        const dxOrigin = dot.originX - mx;
        const dyOrigin = dot.originY - my;
        const distOrigin = Math.sqrt(dxOrigin * dxOrigin + dyOrigin * dyOrigin);

        // Target position (where dot wants to be)
        let targetX = dot.originX;
        let targetY = dot.originY;
        let targetRadius = DOT_BASE_RADIUS;
        let targetAlpha = DOT_BASE_ALPHA;
        let tr = 255, tg = 255, tb = 255;

        if (distOrigin < PUSH_RADIUS && distOrigin > 0.1) {
          const t = 1 - distOrigin / PUSH_RADIUS;
          const ease = t * t * (3 - 2 * t);

          // Push dot away from cursor
          const pushAmount = ease * PUSH_FORCE;
          const nx = dxOrigin / distOrigin;
          const ny = dyOrigin / distOrigin;
          targetX = dot.originX + nx * pushAmount;
          targetY = dot.originY + ny * pushAmount;

          targetRadius = DOT_BASE_RADIUS + (DOT_MAX_RADIUS - DOT_BASE_RADIUS) * ease;
          targetAlpha = DOT_BASE_ALPHA + (DOT_MAX_ALPHA - DOT_BASE_ALPHA) * ease;

          // Color based on angle
          const angle = Math.atan2(dyOrigin, dxOrigin);
          const na = ((angle + Math.PI) / (2 * Math.PI)) * dotColors.length;
          const ci = Math.floor(na) % dotColors.length;
          const ni = (ci + 1) % dotColors.length;
          const blend = na - Math.floor(na);
          const c1 = dotColors[ci];
          const c2 = dotColors[ni];
          tr = Math.round(c1.r + (c2.r - c1.r) * blend);
          tg = Math.round(c1.g + (c2.g - c1.g) * blend);
          tb = Math.round(c1.b + (c2.b - c1.b) * blend);
        }

        // Lerp position with velocity for overshoot
        const springStrength = LERP_SPEED;
        const damping = 0.82;

        dot.vx += (targetX - dot.x) * springStrength;
        dot.vy += (targetY - dot.y) * springStrength;
        dot.vx *= damping;
        dot.vy *= damping;
        dot.x += dot.vx;
        dot.y += dot.vy;

        // Lerp visual properties
        dot.radius += (targetRadius - dot.radius) * 0.1;
        dot.alpha += (targetAlpha - dot.alpha) * 0.08;
        dot.r += (tr - dot.r) * 0.08;
        dot.g += (tg - dot.g) * 0.08;
        dot.b += (tb - dot.b) * 0.08;

        // Draw
        ctx.beginPath();
        ctx.arc(dot.x, dot.y, dot.radius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${Math.round(dot.r)}, ${Math.round(dot.g)}, ${Math.round(dot.b)}, ${dot.alpha})`;
        ctx.fill();
      }

      animFrameRef.current = requestAnimationFrame(draw);
    };

    draw();

    return () => {
      window.removeEventListener('resize', buildDots);
      hero.removeEventListener('mousemove', handleMouseMove);
      hero.removeEventListener('mouseleave', handleMouseLeave);
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, []);

  // Parallax scroll
  useEffect(() => {
    const handleScroll = () => {
      if (heroRef.current) {
        const scrollY = window.scrollY;
        const parallaxBg = heroRef.current.querySelector('.hero__bg-image');
        if (parallaxBg) {
          parallaxBg.style.transform = `translateY(${scrollY * 0.4}px) scale(1.1)`;
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToGames = () => {
    document.getElementById('games')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero" ref={heroRef}>
      {/* Background */}
      <div className="hero__bg">
        <img src={heroBanner} alt="" className="hero__bg-image" />
        <div className="hero__bg-overlay"></div>
      </div>

      {/* Interactive dot canvas (replaces CSS halftone) */}
      <canvas ref={canvasRef} className="hero__dot-canvas" />

      {/* Floating comic elements */}
      <div className="hero__comic-elements">
        <div className="hero__burst hero__burst--1">POW!</div>
        <div className="hero__burst hero__burst--2">BOOM!</div>
        <div className="hero__burst hero__burst--3">ZAP!</div>
        <div className="hero__star hero__star--1">★</div>
        <div className="hero__star hero__star--2">★</div>
        <div className="hero__star hero__star--3">✦</div>
        <div className="hero__star hero__star--4">★</div>
      </div>

      {/* Content */}
      <div className="hero__content">
        <div className="hero__speech-bubble">
          <span>We are your friendly neighborhood indie devs.</span>
        </div>

        <h1 className="hero__title">
          <span className="hero__title-line hero__title-line--1">We Create</span>
          <span className="hero__title-line hero__title-line--2">

            <span className="hero__title-highlight"> Things</span>
          </span>
        </h1>

        <p className="hero__subtitle">
          An indie game studio trying to not to give your computer a burnout.
          Our imagination meets with our blood, sweat, and tears.
          It is mostly the tears.
        </p>

        <div className="hero__actions">
          <button id="hero-explore-btn" className="hero__btn hero__btn--primary" onClick={scrollToGames}>
            <span>Explore Our Games</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3">
              <path d="M7 17L17 7M17 7H7M17 7V17" />
            </svg>
          </button>
          <a href="#about" className="hero__btn hero__btn--outline">
            <span>Our Story</span>
          </a>
        </div>

        {/* Stats */}
        <div className="hero__stats">
          <div className="hero__stat">
            <span className="hero__stat-number">1</span>
            <span className="hero__stat-label">Game</span>
          </div>
          <div className="hero__stat-divider"></div>
          <div className="hero__stat">
            <span className="hero__stat-number">6</span>
            <span className="hero__stat-label">Team Members</span>
          </div>
          <div className="hero__stat-divider"></div>
          <div className="hero__stat">
            <span className="hero__stat-number">4+</span>
            <span className="hero__stat-label">Months of asocialmaxxing</span>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll-indicator">
        <span>Scroll Down</span>
        <div className="hero__scroll-arrow">
          <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 5v14M5 12l7 7 7-7" />
          </svg>
        </div>
      </div>

      {/* Bottom comic panel border */}
      <div className="hero__panel-border"></div>
    </section>
  );
}

export default Hero;
