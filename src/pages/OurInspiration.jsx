
import { motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  Heart,
  Lightbulb,
  ShieldCheck,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { Link } from "react-router-dom";
import "./OurInspiration.css";

const values = [
  {
    number: "01",
    title: "A Love for Learning",
    description:
      "We believe learning should inspire curiosity, encourage questions and help students discover new possibilities.",
    icon: BookOpen,
  },
  {
    number: "02",
    title: "Character & Integrity",
    description:
      "Respect, honesty, responsibility and kindness are important foundations for personal growth.",
    icon: ShieldCheck,
  },
  {
    number: "03",
    title: "Every Student Matters",
    description:
      "Every learner has individual strengths, interests and potential that deserve encouragement.",
    icon: Heart,
  },
  {
    number: "04",
    title: "Growing Together",
    description:
      "A supportive school community helps students, educators and families work towards meaningful goals.",
    icon: Users,
  },
];

export default function OurInspiration() {
  return (
    <main className="inspiration-page">
      <header className="inspiration-nav">
        <a href="/" className="inspiration-brand">
          <img
            src="/images/royal-heights-logo.jpeg"
            alt="Royal Heights School"
          />
          <span>
            <strong>ROYAL HEIGHTS</strong>
            <small>HIGHER SECONDARY SCHOOL</small>
          </span>
        </a>

        <a className="inspiration-back" href="/">
          <ArrowLeft size={16} /> Back to Home
        </a>
      </header>

      <section className="inspiration-hero">
        <div className="inspiration-orb inspiration-orb-one" />
        <div className="inspiration-orb inspiration-orb-two" />

        <motion.div
          className="inspiration-hero-content"
          initial={{ opacity: 0, y: 28 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75 }}
        >
          <span className="inspiration-eyebrow">
            <Sparkles size={15} /> WHAT INSPIRES US
          </span>

          <h1>
            Education with purpose.
            <br />
            <span>Learning with heart.</span>
          </h1>

          <p>
            We believe education can help young minds become curious
            learners, thoughtful individuals and confident contributors
            to the world around them.
          </p>

          <a href="#our-values" className="inspiration-hero-button">
            Discover our values <ArrowRight size={17} />
          </a>
        </motion.div>

        <div className="inspiration-hero-bottom">
          <span>Curiosity</span>
          <span className="inspiration-dot" />
          <span>Character</span>
          <span className="inspiration-dot" />
          <span>Confidence</span>
        </div>
      </section>

      <section className="inspiration-intro">
        <div className="inspiration-container inspiration-intro-grid">
          <motion.div
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <span className="inspiration-label">OUR INSPIRATION</span>
            <h2>
              Every great journey
              <br />
              begins with a belief.
            </h2>
          </motion.div>

          <motion.div
            className="inspiration-intro-copy"
            initial={{ opacity: 0, x: 24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <p>
              A meaningful education is not limited to textbooks or
              examinations. It also encourages learners to think
              independently, understand others and approach challenges
              with confidence.
            </p>
            <p>
              This vision inspires the way we think about the school
              experience: creating opportunities to learn, explore,
              develop character and prepare for the future.
            </p>
          </motion.div>
        </div>
      </section>

      <section className="inspiration-values" id="our-values">
        <div className="inspiration-container">
          <motion.div
            className="inspiration-section-heading"
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.55 }}
          >
            <span className="inspiration-label">THE VALUES THAT GUIDE US</span>
            <h2>What inspires our journey</h2>
            <p>
              The principles that shape our vision for a positive
              learning environment.
            </p>
          </motion.div>

          <div className="inspiration-values-grid">
            {values.map((value, index) => {
              const Icon = value.icon;

              return (
                <motion.article
                  className="inspiration-value-card"
                  key={value.number}
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.15 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  whileHover={{ y: -6 }}
                >
                  <div className="inspiration-value-top">
                    <span>{value.number}</span>
                    <Icon size={25} strokeWidth={1.6} />
                  </div>

                  <h3>{value.title}</h3>
                  <p>{value.description}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section className="inspiration-vision">
        <div className="inspiration-container inspiration-vision-inner">
          <div className="inspiration-vision-icon">
            <Target size={29} />
          </div>

          <span className="inspiration-label">LOOKING AHEAD</span>

          <h2>
            Inspiring learners to
            <br />
            discover their possibilities.
          </h2>

          <p>
            Our aspiration is to encourage students to keep learning,
            act with integrity, respect others and approach the future
            with an open mind.
          </p>

          <div className="inspiration-vision-links">
            <a href="/our-approach">
              Explore Our Approach <ArrowRight size={16} />
            </a>
            <a href="/#contact">
              Contact the School <ArrowRight size={16} />
            </a>
          </div>
        </div>
      </section>

      <footer className="inspiration-footer">
        <div className="inspiration-container inspiration-footer-inner">
          <span>ROYAL HEIGHTS HIGHER SECONDARY SCHOOL</span>
          <span>Jeerapur, Madhya Pradesh</span>
          <a href="/">Return to Home ↑</a>
        </div>
      </footer>
    </main>
  );
}
