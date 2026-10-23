
import { motion } from "motion/react";
import {
  ArrowLeft,
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  Brain,
  CheckCircle2,
  Compass,
  GraduationCap,
  Heart,
  Lightbulb,
  MessageCircle,
  Sparkles,
  Target,
  Trophy,
  Users,
} from "lucide-react";
import "./AcademicDetail.css";

const pageContent = {
  "foundational-learning": {
    number: "01",
    eyebrow: "BUILDING STRONG FOUNDATIONS",
    title: "Every great journey begins with a strong foundation.",
    description:
      "Meaningful learning starts with curiosity, clear understanding and the confidence to ask questions. Strong foundations help learners approach new concepts with greater independence.",
    icon: BookOpen,
    image:
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=1800&q=85",
    introTitle: "Understand first. Grow with confidence.",
    intro:
      "Foundational learning is about helping students build a meaningful understanding of essential concepts. Instead of simply memorising information, learners should have opportunities to ask questions, practise skills and connect new ideas with what they already know.",
    pillars: [
      {
        icon: BookOpen,
        title: "Conceptual understanding",
        text: "Focus on understanding ideas clearly before moving towards more complex topics.",
      },
      {
        icon: Lightbulb,
        title: "Curiosity and questions",
        text: "Encourage learners to explore, ask questions and become active participants in learning.",
      },
      {
        icon: Target,
        title: "Practice and progress",
        text: "Build confidence through regular practice, feedback and steady improvement.",
      },
    ],
    outcomes: [
      "Develop a clearer understanding of important concepts.",
      "Strengthen reading, reasoning and problem-solving habits.",
      "Build confidence in asking questions and expressing ideas.",
      "Develop consistent learning and practice routines.",
    ],
    closing:
      "Strong foundations create more opportunities for meaningful progress at every stage of learning.",
  },

  "academic-excellence": {
    number: "02",
    eyebrow: "LEARNING WITH PURPOSE",
    title: "Turn knowledge into understanding. Understanding into possibility.",
    description:
      "Academic growth is a continuous journey of curiosity, disciplined practice, thoughtful guidance and the determination to improve.",
    icon: GraduationCap,
    image:
      "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=1800&q=85",
    introTitle: "Aim higher. Keep learning.",
    intro:
      "Academic excellence is more than a result or a mark. It grows through consistent effort, conceptual clarity, independent thinking and the willingness to learn from mistakes. A supportive learning environment can help students develop the habits needed to work towards their goals.",
    pillars: [
      {
        icon: Brain,
        title: "Critical thinking",
        text: "Develop the ability to examine ideas, reason carefully and approach problems thoughtfully.",
      },
      {
        icon: Target,
        title: "Consistent effort",
        text: "Encourage preparation, practice, time management and clear learning goals.",
      },
      {
        icon: Lightbulb,
        title: "Independent learning",
        text: "Help learners take greater responsibility for understanding concepts and improving their work.",
      },
    ],
    outcomes: [
      "Strengthen subject understanding and analytical thinking.",
      "Develop effective study and revision habits.",
      "Improve confidence in solving unfamiliar problems.",
      "Learn to set goals, reflect and work towards improvement.",
    ],
    closing:
      "Progress comes from curiosity, commitment and the willingness to keep improving.",
  },

  "beyond-academics": {
    number: "03",
    eyebrow: "GROWING BEYOND THE CLASSROOM",
    title: "Discover talents. Build character. Find your potential.",
    description:
      "A meaningful educational journey also makes room for creativity, teamwork, communication, responsibility and the discovery of personal interests.",
    icon: Trophy,
    image:
      "https://images.unsplash.com/photo-1529390079861-591de354faf5?auto=format&fit=crop&w=1800&q=85",
    introTitle: "Learning includes life beyond lessons.",
    intro:
      "Students develop in different ways and through different experiences. Creative activities, collaborative projects, sports and opportunities to communicate can help learners discover interests, practise important life skills and learn to work with others.",
    pillars: [
      {
        icon: Trophy,
        title: "Creativity and exploration",
        text: "Make room for new ideas, personal interests and opportunities to discover individual strengths.",
      },
      {
        icon: Users,
        title: "Teamwork and communication",
        text: "Learn to listen, share ideas, collaborate and respect different perspectives.",
      },
      {
        icon: Heart,
        title: "Character and responsibility",
        text: "Recognise the value of respect, perseverance, empathy and responsible choices.",
      },
    ],
    outcomes: [
      "Develop communication and collaboration skills.",
      "Explore interests and discover individual strengths.",
      "Practise responsibility, respect and perseverance.",
      "Build confidence through participation and new experiences.",
    ],
    closing:
      "Every learner has different strengths. Exploring them can open the door to new interests and possibilities.",
  },
};

function Reveal({ children, delay = 0, className = "" }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
}

export default function AcademicDetail({ slug }) {
  const page = pageContent[slug];

  if (!page) {
    return (
      <main className="academic-not-found">
        <h1>Page not found</h1>
        <a href="/">Return to homepage</a>
      </main>
    );
  }

  const MainIcon = page.icon;

  return (
    <div className="academic-detail">
      <header className="academic-detail-nav">
        <div className="container academic-detail-nav-inner">
          <a className="academic-detail-brand" href="/">
            <img
              src="/images/royal-heights-logo.jpeg"
              alt="Royal Heights school logo"
            />
            <span>
              <strong>ROYAL HEIGHTS</strong>
              <small>HIGHER SECONDARY SCHOOL</small>
            </span>
          </a>

          <a className="academic-back-link" href="/#academics">
            <ArrowLeft size={16} />
            <span>All learning programmes</span>
          </a>
        </div>
      </header>

      <main>
        <section className="academic-detail-hero">
          <div
            className="academic-detail-hero-image"
            style={{ backgroundImage: `url("${page.image}")` }}
          />
          <div className="academic-detail-hero-overlay" />

          <div className="container academic-detail-hero-content">
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
            >
              <div className="academic-detail-breadcrumb">
                <a href="/">Home</a>
                <span>/</span>
                <a href="/#academics">Academics</a>
                <span>/</span>
                <span>{page.title.split(".")[0]}</span>
              </div>

              <div className="academic-detail-eyebrow">
                <span>{page.number}</span>
                {page.eyebrow}
              </div>

              <h1>{page.title}</h1>
              <p>{page.description}</p>

              <div className="academic-detail-actions">
                <a className="academic-gold-button" href="/#contact">
                  Ask us a question <ArrowRight size={17} />
                </a>
                <a className="academic-text-button" href="#overview">
                  Explore this approach <ArrowRight size={16} />
                </a>
              </div>
            </motion.div>

            <motion.div
              className="academic-hero-icon"
              initial={{ opacity: 0, scale: 0.75, rotate: -12 }}
              animate={{ opacity: 1, scale: 1, rotate: 0 }}
              transition={{ duration: 0.7, delay: 0.2 }}
            >
              <MainIcon size={65} strokeWidth={1.1} />
              <span>LEARN · EXPLORE · GROW</span>
            </motion.div>
          </div>

          <div className="academic-hero-bottom">
            <div className="container">
              ROYAL HEIGHTS HIGHER SECONDARY SCHOOL
              <span>JEERAPUR, MADHYA PRADESH</span>
            </div>
          </div>
        </section>

        <section id="overview" className="section academic-overview">
          <div className="container academic-overview-grid">
            <Reveal>
              <span className="section-label">THE BIGGER PICTURE</span>
              <h2 className="section-heading">
                {page.introTitle}
              </h2>
            </Reveal>

            <Reveal delay={0.12}>
              <p className="academic-overview-copy">{page.intro}</p>
              <a className="academic-inline-link" href="/our-approach">
                Discover our overall approach <ArrowUpRight size={17} />
              </a>
            </Reveal>
          </div>
        </section>

        <section className="section academic-pillars">
          <div className="container">
            <Reveal className="academic-section-intro">
              <span className="section-label">WHAT MATTERS</span>
              <h2 className="section-heading">
                The building blocks
                <br />of progress.
              </h2>
              <p className="section-description">
                These principles describe the learning experiences this
                programme is designed to encourage.
              </p>
            </Reveal>

            <div className="academic-pillar-grid">
              {page.pillars.map((item, index) => {
                const Icon = item.icon;

                return (
                  <Reveal key={item.title} delay={index * 0.1}>
                    <motion.article
                      className="academic-pillar-card"
                      whileHover={{ y: -7 }}
                      transition={{ duration: 0.22 }}
                    >
                      <div className="academic-pillar-icon">
                        <Icon size={26} strokeWidth={1.6} />
                      </div>
                      <span className="academic-pillar-number">
                        0{index + 1}
                      </span>
                      <h3>{item.title}</h3>
                      <p>{item.text}</p>
                      <div className="academic-pillar-line" />
                    </motion.article>
                  </Reveal>
                );
              })}
            </div>
          </div>
        </section>

        <section className="section academic-outcomes">
          <div className="container academic-outcomes-grid">
            <Reveal className="academic-outcomes-copy">
              <span className="section-label">LOOKING AHEAD</span>
              <h2 className="section-heading">
                Small steps.
                <br />
                Meaningful progress.
              </h2>
              <p className="section-description">
                Learning is personal and progress takes time. A supportive
                environment can help students build habits that serve them
                well throughout their educational journey.
              </p>
            </Reveal>

            <Reveal delay={0.12}>
              <div className="academic-outcome-list">
                {page.outcomes.map((outcome) => (
                  <div key={outcome}>
                    <CheckCircle2 size={20} />
                    <span>{outcome}</span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </section>

        <section className="academic-quote-section">
          <div className="container academic-quote-inner">
            <Reveal>
              <span className="academic-quote-mark">“</span>
              <h2>{page.closing}</h2>
              <span className="academic-quote-rule" />
              <p>LEARNING WITH PURPOSE · GROWING WITH CONFIDENCE</p>
            </Reveal>
          </div>
        </section>

        <section className="academic-final-cta">
          <div className="container academic-final-inner">
            <Reveal>
              <span className="section-label">LET'S CONNECT</span>
              <h2>
                Have questions about
                <br />your child's learning journey?
              </h2>
              <p>
                Contact Royal Heights Higher Secondary School for
                information about the school and admission enquiries.
              </p>

              <div className="academic-final-actions">
                <a className="academic-gold-button" href="/#contact">
                  Contact the school <ArrowRight size={17} />
                </a>
                <a className="academic-text-button" href="/#academics">
                  Explore other programmes <ArrowRight size={16} />
                </a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="academic-detail-footer">
        <div className="container">
          <a href="/#academics">
            <ArrowLeft size={15} /> Back to learning programmes
          </a>
          <span>Royal Heights Higher Secondary School · Jeerapur</span>
        </div>
      </footer>
    </div>
  );
}
