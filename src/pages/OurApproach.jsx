import { motion } from "motion/react";
import {
  ArrowLeft, ArrowRight, ArrowUpRight, BookOpen,
  Brain, Compass, HeartHandshake, Lightbulb,
  ShieldCheck, Sparkles, Target, Users, Trophy,
  GraduationCap, CheckCircle2
} from "lucide-react";
import "./OurApproach.css";

const principles = [
  {
    number: "01",
    icon: Brain,
    title: "Think beyond memorisation",
    text: "Encourage learners to ask questions, understand concepts and explore ideas instead of relying only on memorisation.",
  },
  {
    number: "02",
    icon: HeartHandshake,
    title: "Grow with confidence",
    text: "Create opportunities for learners to express their thoughts, learn from mistakes and approach challenges positively.",
  },
  {
    number: "03",
    icon: Compass,
    title: "Discover individual strengths",
    text: "Recognise that every learner has different interests, abilities and ways of understanding the world.",
  },
  {
    number: "04",
    icon: Users,
    title: "Learn through collaboration",
    text: "Value respectful discussion, teamwork and shared learning experiences that build communication skills.",
  },
  {
    number: "05",
    icon: ShieldCheck,
    title: "Build character and responsibility",
    text: "Promote respect, honesty, discipline and responsible choices as important parts of personal development.",
  },
  {
    number: "06",
    icon: Lightbulb,
    title: "Stay curious",
    text: "Inspire learners to explore new ideas, think creatively and remain open to continuous learning.",
  },
];

const journey = [
  {
    stage: "01",
    title: "Discover",
    subtitle: "Start with curiosity",
    text: "Invite questions, explore ideas and help learners connect new concepts with what they already know.",
    icon: Sparkles,
  },
  {
    stage: "02",
    title: "Understand",
    subtitle: "Build strong foundations",
    text: "Focus on clear explanations, thoughtful practice and developing a meaningful understanding of subjects.",
    icon: BookOpen,
  },
  {
    stage: "03",
    title: "Apply",
    subtitle: "Put learning into action",
    text: "Encourage learners to use their knowledge, solve problems and participate in practical activities.",
    icon: Target,
  },
  {
    stage: "04",
    title: "Grow",
    subtitle: "Reflect and improve",
    text: "Support learners in recognising progress, learning from challenges and setting new goals.",
    icon: Trophy,
  },
];

function Reveal({ children, className = "", delay = 0 }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

function ApproachHeader() {
  return (
    <header className="approach-nav">
      <div className="container approach-nav-inner">
        <a className="approach-brand" href="/">
          <img
            src="/images/royal-heights-logo.jpeg"
            alt="Royal Heights school logo"
          />
          <span>
            <strong>ROYAL HEIGHTS</strong>
            <small>HIGHER SECONDARY SCHOOL</small>
          </span>
        </a>
        <a className="approach-back" href="/">
          <ArrowLeft size={16} /> Back to home
        </a>
      </div>
    </header>
  );
}

export default function OurApproach() {
  return (
    <div className="approach-page">
      <ApproachHeader />

      <main>
        <section className="approach-hero">
          <div className="approach-hero-image" />
          <div className="approach-hero-shade" />
          <div className="approach-hero-grid" />

          <div className="container approach-hero-content">
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <a href="/" className="approach-breadcrumb">
                Home <span>/</span> Our Approach
              </a>

              <span className="approach-eyebrow">
                <Sparkles size={15} /> THE WAY WE THINK ABOUT LEARNING
              </span>

              <h1>
                Education that
                <br />
                <span>goes beyond</span>
                <br />
                the classroom.
              </h1>

              <p>
                Learning is a journey of discovery, understanding and growth.
                Our approach places curiosity, strong foundations and the
                development of the whole learner at the heart of education.
              </p>

              <div className="approach-hero-actions">
                <a className="approach-gold-btn" href="#philosophy">
                  Discover our philosophy <ArrowRight size={17} />
                </a>
                <a className="approach-outline-btn" href="#journey">
                  Explore the journey <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>

            <motion.div
              className="approach-hero-note"
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.25 }}
            >
              <span className="approach-note-icon">
                <GraduationCap size={25} />
              </span>
              <span>
                <small>OUR GUIDING BELIEF</small>
                <strong>Every learner deserves the opportunity to grow.</strong>
              </span>
            </motion.div>
          </div>

          <a href="#philosophy" className="approach-scroll">
            SCROLL TO EXPLORE <span />
          </a>
        </section>

        <section id="philosophy" className="section approach-philosophy">
          <div className="container approach-philosophy-grid">
            <Reveal>
              <span className="section-label">OUR PHILOSOPHY</span>
              <h2 className="section-heading">
                Strong foundations.
                <br />
                Open minds.
                <br />
                <span className="approach-gold-text">Endless possibilities.</span>
              </h2>
            </Reveal>

            <Reveal delay={0.12} className="approach-philosophy-copy">
              <p className="approach-lead">
                Meaningful education is not just about reaching the next
                milestone. It is about helping learners understand, question,
                discover and develop.
              </p>
              <p>
                We believe that students benefit from an educational
                environment that encourages participation, supports their
                progress and recognises the importance of both knowledge and
                character.
              </p>
              <p>
                Our approach is guided by a simple idea: learning should
                prepare students not only for examinations, but also for the
                opportunities and challenges they will encounter beyond school.
              </p>
            </Reveal>
          </div>

          <div className="container approach-belief-strip">
            <div>
              <BookOpen />
              <span>Meaningful learning</span>
            </div>
            <div>
              <HeartHandshake />
              <span>Personal growth</span>
            </div>
            <div>
              <Lightbulb />
              <span>Curious thinking</span>
            </div>
            <div>
              <Users />
              <span>Shared progress</span>
            </div>
          </div>
        </section>

        <section className="section approach-principles">
          <div className="container">
            <Reveal className="approach-section-heading">
              <span className="section-label">WHAT GUIDES US</span>
              <h2 className="section-heading">
                Principles that shape
                <br />the learning experience.
              </h2>
              <p className="section-description">
                A thoughtful approach to education brings together knowledge,
                confidence, curiosity and the values learners carry forward.
              </p>
            </Reveal>

            <div className="approach-principle-grid">
              {principles.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Reveal key={item.number} delay={(index % 3) * 0.08}>
                    <motion.article
                      className="approach-principle-card"
                      whileHover={{ y: -7 }}
                      transition={{ duration: 0.22 }}
                    >
                      <div className="approach-principle-top">
                        <span>{item.number}</span>
                        <Icon size={25} strokeWidth={1.6} />
                      </div>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                      <div className="approach-card-line" />
                    </motion.article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section id="journey" className="section approach-journey">
          <div className="container">
            <Reveal className="approach-section-heading">
              <span className="section-label">THE LEARNING JOURNEY</span>
              <h2 className="section-heading">
                From first questions
                <br />to new possibilities.
              </h2>
              <p className="section-description">
                Learning is an ongoing process. Each stage creates an
                opportunity to explore, understand, practise and improve.
              </p>
            </Reveal>

            <div className="approach-journey-grid">
              {journey.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Reveal key={item.stage} delay={index * 0.1}>
                    <article className="approach-journey-card">
                      <div className="approach-journey-number">
                        <span>{item.stage}</span>
                        <Icon size={25} />
                      </div>
                      <h3>{item.title}</h3>
                      <h4>{item.subtitle}</h4>
                      <p>{item.text}</p>
                      {index !== journey.length - 1 && (
                        <ArrowRight className="approach-journey-arrow" />
                      )}
                    </article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="approach-values">
          <div className="container approach-values-grid">
            <Reveal>
              <span className="section-label">GROWING TOGETHER</span>
              <h2>
                Knowledge matters.
                <br />
                <span>Character matters, too.</span>
              </h2>
              <p>
                Respect, responsibility, perseverance and kindness help
                learners build healthy relationships and approach new
                experiences with maturity.
              </p>
              <a className="approach-gold-btn" href="/#contact">
                Talk to our school <ArrowUpRight size={17} />
              </a>
            </Reveal>

            <Reveal delay={0.15} className="approach-values-visual">
              <div className="approach-values-image">
                <img
                  src="https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1000&q=85"
                  alt="Students collaborating and learning together"
                  loading="lazy"
                />
              </div>
              <div className="approach-values-card">
                <HeartHandshake size={24} />
                <span>LEARN WITH PURPOSE</span>
                <strong>Grow with knowledge. Move forward with values.</strong>
              </div>
            </Reveal>
          </div>
        </section>

        <section className="approach-final-cta">
          <div className="container">
            <Reveal>
              <span className="approach-eyebrow">
                <Sparkles size={15} /> YOUR NEXT CHAPTER STARTS HERE
              </span>
              <h2>
                Every question is
                <br />
                the beginning of discovery.
              </h2>
              <p>
                Connect with Royal Heights Higher Secondary School for
                information about the school and admission enquiries.
              </p>
              <a className="approach-gold-btn" href="/#contact">
                Get in touch <ArrowRight size={17} />
              </a>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="approach-footer">
        <div className="container approach-footer-inner">
          <a href="/" className="approach-footer-home">
            <ArrowLeft size={15} /> Return to homepage
          </a>
          <span>Royal Heights Higher Secondary School · Jeerapur</span>
        </div>
      </footer>
    </div>
  );
}