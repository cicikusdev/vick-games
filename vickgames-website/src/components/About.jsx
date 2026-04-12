import { useEffect, useRef } from 'react';
import './About.css';

function About() {
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
          <span className="about__label">// 01. WHO WE ARE</span>
          <h2 className="about__title">
            About <span className="about__title-accent">Us</span>
          </h2>
        </div>

        {/* Content Grid */}
        <div className="about__grid">
          {/* Left - Comic Panel Story */}
          <div className="about__story">
            <div className="about__panel about__panel--1">
              <div className="about__panel-header">
                <span className="about__panel-number">01</span>
                <span className="about__panel-tag">Our Origin</span>
              </div>
              <p>
                We originally set out to build a D&D web client because the existing ones were
                vaguely insulting to our intelligence. Halfway through, we realized web dev
                is soul-crushing, so we decided to build entirely functional 3D worlds instead.
                Because clearly if you lack the attention span for a simple web tool,
                pivoting to a complex game engine is the logical next step.
                It was a terrible business decision. We&apos;re very proud of it.
              </p>
            </div>

            <div className="about__panel about__panel--2">
              <div className="about__panel-header">
                <span className="about__panel-number">02</span>
                <span className="about__panel-tag">Our Mission</span>
              </div>
              <p>
                There is no profound artistic vision here. We just play a lot of games, get annoyed
                by their flaws, and arrogantly assume we can do it better. We are essentially just
                weaponizing our collective insomnia to build mechanics that make us feel smart.
                We engineer highly specific systems to manipulate your brain chemistry, and in return,
                we gracefully allow you to give us money.
              </p>
            </div>

            <div className="about__panel about__panel--3">
              <div className="about__panel-header">
                <span className="about__panel-number">03</span>
                <span className="about__panel-tag">Our Future</span>
              </div>
              <p>
                The immediate roadmap consists of trying not to fail our university finals while somehow
                shipping a game without our PCs spontaneously combusting. After that, we plan to open the
                cursed folder of prototypes we&apos;ve been hoarding and inflict them upon the public.
                We have absolutely zero intention of getting real corporate jobs, so you&apos;re stuck with us.
              </p>
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
              <h3>Location</h3>
              <p>Extremely BASED in Turkey/Eskisehir. It&apos;s a city populated almost entirely by students,
                which is fantastic for our superiority complex but absolutely terrible
                for our physical health. Shoutout to our ancestors in Central Asia.</p>
            </div>
            <div className="about__feature">
              <div className="about__feature-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--color-secondary)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
                </svg>
              </div>
              <h3>Hedonism</h3>
              <p>We are fundamentally selfish developers. If a gameplay loop doesn't immediately validate our
                existence and give our monkey brains a hit of dopamine, we delete the repository. Have I mentioned
                that we live for the kicks and giggles?</p>
            </div>
            <div className="about__feature">
              <div className="about__feature-icon">
                <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="var(--color-accent-blue)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
                  <path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16" />
                </svg>
              </div>
              <h3>Very Professional</h3>
              <p>We don't do synergy, HR, or corporate roadmaps -at least for now-. We are six students operating out of bedrooms.
                However, we occasionally use version control and our code only breaks most of the time.
                We are basically industry veterans at this point.</p>
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
              <h3>Community First</h3>
              <p>We deeply value your feedback, mostly because we desperately need people to test our broken mechanics
                for free. If you pitch a genuinely brilliant idea on our Discord, we will absolutely steal it,
                put it in the game, and take all the credit for it. It&apos;s a symbiotic relationship.
                -We&apos;ll give you credit in the thank you part-</p>
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
