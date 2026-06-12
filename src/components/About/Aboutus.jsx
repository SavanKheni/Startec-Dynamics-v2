import { useEffect } from "react";
import "./CompanySections.css";
import work1 from "../../assets/workPhoto1.jpg";
import work2 from "../../assets/workPhoto2.jpg";
import work3 from "../../assets/workPhoto3.jpg";
import AnimatedText from "../AnimatedText";
// ─── Reveal hook ──────────────────────────────────────────────────────────────
function useReveal() {
  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) =>
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        }),
      { threshold: 0.12 },
    );
    document.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);
}

// ─── Reveal wrapper ───────────────────────────────────────────────────────────
function R({ d = "", children, className = "" }) {
  return <div className={`reveal ${d} ${className}`.trim()}>{children}</div>;
}

// ─── Section header ───────────────────────────────────────────────────────────
function SecHead({ no, nm }) {
  return (
    <div className="sechead">
      <span className="sec-no">{no}</span>
      <span className="sec-nm">{nm}</span>
    </div>
  );
}

// ─── Hero §00 ─────────────────────────────────────────────────────────────────
function Hero() {
  return (
    <header className="hero" id="top">
      <div className="wrap">
        <R d="d1">
          <div className="eyebrow">
            <b className="eyebrow-b">●</b> §00 — THE COMPANY{" "}
            <b className="eyebrow-b">/</b> INDEPENDENT R&amp;D · EST. 2022
          </div>
        </R>
        <R d="d2">
          <h1 className="h1">
            <AnimatedText
              as="span"
              text="Built like a lab, not a product line."
            />
          </h1>
        </R>
        <R d="d3">
          <p className="lead">
            Startec Dynamics is an independent research &amp; development
            company, founded in 2022 in Vancouver with a research centre in
            Calgary.{" "}
            <span className="lead-soft">
              We take hard engineering problems from first principles to
              field-proven products — and keep doing it, across one domain after
              another.
            </span>
          </p>
        </R>
        <R d="d4">
          <div className="facts">
            {[
              { n: "2022", l: "Founded" },
              { n: "2", l: "Canadian sites" },
              { n: "01", l: "Shipping product" },
              { n: "HW→Cloud", l: "Full stack" },
            ].map((f) => (
              <div key={f.l}>
                <div className="fact-n">{f.n}</div>
                <div className="fact-l">{f.l}</div>
              </div>
            ))}
          </div>
        </R>
      </div>
    </header>
  );
}

// ─── Story §01 ────────────────────────────────────────────────────────────────
function Story() {
  return (
    <section className="sec" id="story">
      <div className="wrap">
        <R>
          <SecHead no="§01" nm="Origin" />
        </R>
        <R d="d1">
          <p className="big">
            <AnimatedText
              as="span"
              text="It started with a frustration: the smartest safety technology"
            />{" "}
            <em className="big-em">
              <AnimatedText
                as="span"
                text=" never reaches the people who'd benefit most."
                delayStart={1650}
              />
            </em>
          </p>
        </R>
        <div className="cols2">
          <R d="d1">
            <p className="cols2-p">
              Our founder spent two decades in the motorcycle industry watching
              advanced features stay locked inside premium vehicles in wealthy
              markets. In the places where motorcycles do the most work — and
              carry the most risk — riders had none of it.{" "}
              <b className="cols2-b">
                Startec Dynamics was built to close that gap.
              </b>
            </p>
          </R>
          <R d="d2">
            <p className="cols2-p">
              Our first product, Startec Intelligent, proved the model: take
              serious R&amp;D, engineer it to survive the real world, and price
              it for the riders who actually need it.{" "}
              <b className="cols2-b">
                That same playbook now drives everything we take on
              </b>{" "}
              — which is why the company is organised as a lab, not around any
              single product.
            </p>
          </R>
        </div>
      </div>
    </section>
  );
}

// ─── Principles §02 ───────────────────────────────────────────────────────────
const principles = [
  {
    id: "P-01",
    title: "Problems before products",
    body: "We commit to a problem, not a product category. The product is the output — never the identity. It's what lets us move into a new field without reinventing the company.",
  },
  {
    id: "P-02",
    title: "All the way down",
    body: "We work from silicon and firmware up through mechanics, AI, and cloud. We don't ship black boxes we don't understand, and we don't outsource the hard part.",
  },
  {
    id: "P-03",
    title: "Proven, not promised",
    body: "Nothing ships until it survives the conditions it will actually face. Data settles arguments; the field is the final reviewer.",
  },
  {
    id: "P-04",
    title: "Engineering for everyone",
    body: "Advanced capability shouldn't be a luxury good. Accessibility is a design constraint we accept up front — not a discount we apply at the end.",
  },
];

function CapRow({ no, title, body, delay }) {
  return (
    <>
      <R d={delay} className="cap-no">
        {no}
      </R>
      <R d={delay} className="cap-cell">
        <h3 className="cap-h3">
          <AnimatedText as="span" text={title} />
        </h3>
        <p className="cap-p">{body}</p>
      </R>
    </>
  );
}

function Principles() {
  return (
    <section className="sec" id="principles">
      <div className="wrap">
        <R>
          <SecHead no="§02" nm="Principles" />
        </R>
        <div className="cap">
          {principles.map((p, i) => (
            <CapRow
              key={p.id}
              no={p.id}
              title={p.title}
              body={p.body}
              delay={i < 2 ? "d1" : "d2"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Work Band ────────────────────────────────────────────────────────────────
const workPhotos = [
  {
    src: work1,
    label: "On the line",
    tag: "R&D",
  },
  {
    src: work2,
    label: "In the workshop",
    tag: "BUILD",
  },
  {
    src: work3,
    label: "In the lab",
    tag: "TEST",
  },
];

function WorkBand() {
  return (
    <section className="sec" style={{ paddingTop: 6 }} id="work">
      <div className="wrap">
        <div className="workband">
          {workPhotos.map((p, i) => (
            <R key={p.tag} d={`d${i + 1}`}>
              <figure className="wphoto">
                <img
                  loading="lazy"
                  src={p.src}
                  alt={p.label}
                  className="wphoto-img"
                />
                <figcaption className="figcaption">
                  <span>{p.label}</span>
                  <b className="fig-b">{p.tag}</b>
                </figcaption>
              </figure>
            </R>
          ))}
        </div>
      </div>
    </section>
  );
}

// ─── Lab / Locations §03 ──────────────────────────────────────────────────────
function Lab() {
  return (
    <section className="sec" id="lab">
      <div className="wrap">
        <R>
          <SecHead no="§03" nm="The Lab" />
        </R>
        <R d="d1">
          <h2 className="big" style={{ marginBottom: 34 }}>
            <AnimatedText as="span" text="Two rooms, one workshop." />
          </h2>
        </R>
        <div className="locs">
          <R d="d1">
            <div className="loc">
              <a
                href="https://maps.app.goo.gl/EJhTEfN53VQ1n5wn9"
                target="_blank"
                rel="noreferrer"
              >
                <div className="loc-k">HQ · Commercial</div>
                <h3 className="loc-h3">
                  <AnimatedText as="span" text="Vancouver, BC" />
                </h3>
                <p className="loc-p">
                  Where partnerships, commercial strategy, and investor
                  relations run from. The front door of the company.
                </p>
                <div className="loc-addr">
                  804 PACIFIC ST
                  <br />
                  VANCOUVER, BC V6Z 1C2
                  <br />
                  CANADA
                </div>
              </a>
            </div>
          </R>

          <R d="d2">
            <div className="loc">
              <a
                href="https://maps.app.goo.gl/uyiQbVqHkJsnzJV97"
                target="_blank"
                rel="noreferrer"
              >
                <div className="loc-k">R&amp;D · Engineering</div>

                <h3 className="loc-h3">
                  <AnimatedText as="span" text="Calgary, AB" />
                </h3>
                <p className="loc-p">
                  Where the work happens — hardware, firmware, AI, and test —
                  alongside the University of Calgary's Life Sciences Innovation
                  Hub.
                </p>
                <div className="loc-addr">
                  3655 36 ST NW
                  <br />
                  CALGARY, AB T2L 1Y8
                  <br />
                  CANADA
                </div>
              </a>
            </div>
          </R>
        </div>
      </div>
    </section>
  );
}

// ─── Team §04 ─────────────────────────────────────────────────────────────────
const teamMembers = [
  {
    init: "WT",
    name: "Wai Cheung (Ivan) Ting",
    role: "CEO & FOUNDER",
    bio: "Ivan Ting is a serial entrepreneur with 25+ years of experience in technology, manufacturing, and smart mobility across Asia and Canada. He has founded and led multiple companies, focusing on product innovation, engineering, and international business growth.",
  },

  {
    init: "RG",
    name: "Rishabh Goel",
    role: "R&D Manager · Mechatronics & AI",
    bio: "Rishabh Goel is the R&D Manager at Startec Dynamics with 6+ years of experience in embedded systems, IoT, firmware, and automotive electronics. He specializes in end-to-end product development, from concept to deployment.",
  },
  {
    init: "BS",
    name: "Bastien Sbrovazzo",
    role: "Project Management & Ops",
    bio: "With over a decade of project management experience in environmental conservation, Bastien drives impactful outcomes through innovation.",
  },
  {
    init: "SH",
    name: "Shirley Hui",
    role: "Marketing Executive",
    bio: "With experience as a Development Officer, Shirley focuses on meaningful environmental protection initiatives and people-centered strategies.",
  },
];

function Team() {
  return (
    <section className="sec" id="team">
      <div className="wrap">
        <R>
          <SecHead no="§04" nm="Team" />
        </R>
        <R d="d1">
          <h2 className="big" style={{ marginBottom: 34 }}>
            <AnimatedText as="span" text="The people behind it." />
          </h2>
        </R>
        <div className="team">
          {teamMembers.map((m, i) => (
            <R key={m.name} d={`d${(i % 3) + 1}`}>
              <div className="member">
                <div className="mg">{m.init}</div>
                <h4 className="member-h4">
                  <AnimatedText as="span" text={m.name} />
                </h4>
                <div className="member-role">{m.role}</div>
                <p className="member-p">{m.bio}</p>
              </div>
            </R>
          ))}

          <R d="d3">
            <div className="member-add">
              <div className="mg-dashed">+</div>
              <h4 className="member-h4 member-h4-soft">You?</h4>
              <p className="member-p member-p-mt">
                We're always interested in engineers who want to work close to
                the metal. Get in touch.
              </p>
            </div>
          </R>
        </div>
      </div>
    </section>
  );
}
function BottomCTA() {
  return (
    <div className="wrap">
      <div class="cta reveal in">
        <h2>
          <AnimatedText
            as="span"
            text="Founders, manufacturers, investors — if you've got something hard that needs real engineering,"
          />{" "}
          <em>
            <AnimatedText
              as="span"
              text=" let's open a conversation."
              delayStart={2460}
            />
          </em>
        </h2>

        <div class="row">
          <a href="/contact-us" class="btn">
            TALK TO US <span class="a">↗</span>
          </a>
          <span class="mono">info@startecdynamics.com</span>
        </div>
      </div>
    </div>
  );
}
// ─── Root export ──────────────────────────────────────────────────────────────
export default function CompanySections() {
  useReveal();

  return (
    <div className="about-company-sections">
      <Hero />
      <Story />
      <Principles />
      <WorkBand />
      <Lab />
      <Team />
      <BottomCTA />
    </div>
  );
}
