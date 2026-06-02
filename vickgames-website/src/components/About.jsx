import { useEffect, useRef } from 'react';
import { useLanguage } from '../context/LanguageContext';
import './About.css';

function About() {
  const { t } = useLanguage();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('about--visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="about__container">
        {/* Section Header */}
        <div className="about__header">
          <span className="about__label">{t('about', 'label')}</span>
          <h2 className="about__title">
            {t('about', 'title1')} <span className="about__title-accent">{t('about', 'title2')}</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="about__grid">
          {/* Left - Comic Panel Story */}
          <div className="about__story">
            <div className="about__panel about__panel--1">
              <div className="about__panel-header">
                <span className="about__panel-number">01</span>
                <span className="about__panel-tag">{t('about', 'panel1Tag')}</span>
              </div>
              <p>{t('about', 'panel1Text')}</p>
            </div>

            <div className="about__panel about__panel--2">
              <div className="about__panel-header">
                <span className="about__panel-number">02</span>
                <span className="about__panel-tag">{t('about', 'panel2Tag')}</span>
              </div>
              <p>{t('about', 'panel2Text')}</p>
            </div>

            <div className="about__panel about__panel--3">
              <div className="about__panel-header">
                <span className="about__panel-number">03</span>
                <span className="about__panel-tag">{t('about', 'panel3Tag')}</span>
              </div>
              <p>{t('about', 'panel3Text')}</p>
            </div>
          </div>

          {/* Right - Feature Cards */}
          <div className="about__features">
            <div className="about__feature">
              <div className="about__feature-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--color-primary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </div>
              <h3>{t('about', 'feature1Title')}</h3>
              <p>{t('about', 'feature1Text')}</p>
            </div>
            <div className="about__feature">
              <div className="about__feature-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--color-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <h3>{t('about', 'feature2Title')}</h3>
              <p>{t('about', 'feature2Text')}</p>
            </div>
            <div className="about__feature">
              <div className="about__feature-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>
              <h3>{t('about', 'feature3Title')}</h3>
              <p>{t('about', 'feature3Text')}</p>
            </div>
            <div className="about__feature">
              <div className="about__feature-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-purple)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
                  <circle cx="9" cy="7" r="4" />
                  <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
                  <path d="M16 3.13a4 4 0 0 1 0 7.75" />
                </svg>
              </div>
              <h3>{t('about', 'feature4Title')}</h3>
              <p>{t('about', 'feature4Text')}</p>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom panel border */}
      <div className="about__border-bottom"></div>
    </section>
  );
}

export default About;
