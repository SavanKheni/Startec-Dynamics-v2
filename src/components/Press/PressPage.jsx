import React, { useEffect, useRef } from "react";
import "./PressPage.css";
import press1 from "../../assets/press1.jpg";
import press2 from "../../assets/press2.jpg";
import press3 from "../../assets/press3.jpg";
import press4 from "../../assets/press4.jpg";
import press5 from "../../assets/press5.jpg";

const coverageItems = [
  {
    href: "https://www.canadianmanufacturing.com/features/canadian-startup-enhances-motorcycle-safety-with-smart-technology/",
    alt: "Canadian Manufacturing",
    outlet: "Canadian Manufacturing",
    date: "Mar 2025",
    title: "Canadian Startup Enhancing Motorcycle Safety With Smart Technology",
    desc: "Profiles the technology and the company's funding — $600K raised, with $4–5M sought for the next versions.",
    delay: "d1",
    img: press2,
  },
  {
    href: "https://www.vicnews.com/local-news/greater-victorias-growing-tech-sector-continues-to-thrive-7745125",
    alt: "Oak Bay News",
    outlet: "Oak Bay News",
    date: "Jan 2025",
    title: "Greater Victoria's growing tech sector continues to thrive",
    desc: "A founder profile of Ivan Ting and the origin of the idea behind Startec Dynamics.",
    delay: "d1",
    img: press3,
  },
  {
    href: "https://www.startecdynamics.com/blogs/press/new-manufacturer-looks-to-shake-up-moto-market-with-new-tech-retro-style",
    alt: "The Phnom Penh Post",
    outlet: "The Phnom Penh Post",
    date: "Nov 2024",
    title: "New manufacturer looks to shake up the moto market with new tech",
    desc: "Coverage of the first production motorcycle to ship with the system installed.",
    delay: "d2",
    img: press4,
  },
  {
    href: "https://www.startecdynamics.com/blogs/press/legalese-decoder-transforming-legal-processes-how-ai-legalese-decoder-can-accelerate-greater-victorias-tech-sector-growth",
    alt: "Legalese Decoder",
    outlet: "Legalese Decoder",
    date: "Jan 2025",
    title: "Spotlight on Greater Victoria's tech sector",
    desc: "A regional tech feature highlighting the company's founder and mission.",
    delay: "d2",
    img: press5,
  },
];

const PressPage = () => {
  const revealRefs = useRef([]);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add("in");
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 },
    );

    revealRefs.current.forEach((el) => {
      if (el) io.observe(el);
    });

    return () => io.disconnect();
  }, []);

  let refIdx = 0;
  const r = (extraClass = "") => ({
    className: `reveal${extraClass ? " " + extraClass : ""}`,
    ref: (el) => (revealRefs.current[refIdx++] = el),
  });

  return (
    <div className="press-page-sections">
      {/* ── HERO §00 ── */}
      <header className="hero" id="top">
        <div className="wrap">
          <div {...r("d1")} className="eyebrow reveal d1">
            <b>●</b> §00 — IN THE NEWS <b>/</b> SELECTED COVERAGE
          </div>
          <h1 {...r("d2")} className="reveal d2">
            Press &amp; coverage.
          </h1>
          <p {...r("d3")} className="lead reveal d3">
            What journalists have written about <b>Startec Dynamics</b> — the
            company, its founder, and the work. Every item below links to the
            original source.
          </p>
        </div>
      </header>

      {/* ── FEATURED §01 ── */}
      <section className="sec" id="featured">
        <div className="wrap">
          <div {...r()} className="sechead reveal">
            <span className="no">§01</span>
            <span className="nm">Featured</span>
          </div>
          <div {...r("d1")} className="feat reveal d1">
            <div className="l">
              <img
                className="featimg"
                src={press1}
                alt="Startec Intelligent Smart Safety and Security System"
              />
              <div className="tagrow">
                <span className="ft">★ FEATURED</span>
                <span>BC BUSINESS · OCT 2025</span>
              </div>
              <h3>
                Meet the startup making motorcycles smarter (and safer) from
                British Columbia
              </h3>
              <p className="note">
                A deep look at how a Vancouver-based R&amp;D company is building
                crash-detection and security technology for everyday motorcycles
                — and why it chose B.C. as its base.
              </p>
              <a
                className="read"
                href="https://bcbusiness.ca/business/tech-science/bc-startup-startec-motorcycle-safety/"
                target="_blank"
                rel="noopener noreferrer"
              >
                READ AT BC BUSINESS <span className="a">↗</span>
              </a>
            </div>
            <div className="q">
              <div className="qt">
                "Now they know within the first minutes. That changes
                everything."
              </div>
              <div className="by">— Ivan Ting, Founder · via BC Business</div>
            </div>
          </div>
        </div>
      </section>

      {/* ── COVERAGE §02 ── */}
      <section className="sec" id="coverage">
        <div className="wrap">
          <div {...r()} className="sechead reveal">
            <span className="no">§02</span>
            <span className="nm">More Coverage</span>
          </div>
          <div className="press-cards">
            {coverageItems.map((item, i) => (
              <a
                key={i}
                className={`pcard reveal ${item.delay}`}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                ref={(el) => (revealRefs.current[refIdx++] = el)}
              >
                <div className="pthumb">
                  <img loading="lazy" src={item.img} alt={item.alt} />
                </div>
                <div className="pmeta">
                  <div className="src">
                    <span className="out">{item.outlet}</span>
                    <span className="dt">{item.date}</span>
                  </div>
                  <h4>{item.title}</h4>
                  <p>{item.desc}</p>
                  <span className="go">
                    READ <span className="a">↗</span>
                  </span>
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRESS KIT §03 ── */}
      <section className="sec" id="kit">
        <div className="wrap">
          <div {...r()} className="sechead reveal">
            <span className="no">§03</span>
            <span className="nm">Press Kit &amp; Media</span>
          </div>
          <div className="kit">
            <div {...r("d1")} className="kitcell wide reveal d1">
              <div className="k">Boilerplate</div>
              <p className="boiler">
                <b>
                  Startec Dynamics is an independent Canadian research &amp;
                  development company
                </b>
                , headquartered in Vancouver with a research centre in Calgary.
                Its first product, Startec Intelligent, is a connected safety
                and security system for light vehicles — engineered to be fitted
                at the factory or retrofitted in the field.
              </p>
            </div>
            <div {...r("d1")} className="kitcell reveal d1">
              <div className="k">Media Enquiries</div>
              <h4>Talk to us</h4>
              <p>
                For interviews, comment, or background, reach the team at{" "}
                <a className="lk" href="mailto:info@startecdynamics.com">
                  info@startecdynamics.com
                </a>
                .
              </p>
            </div>
            <div {...r("d2")} className="kitcell reveal d2">
              <div className="k">Spokesperson</div>
              <h4>Ivan Ting · Founder</h4>
              <p>
                Available for interviews on motorcycle safety, R&amp;D, and the
                company's roadmap.
              </p>
            </div>
            <div {...r("d1")} className="kitcell reveal d1">
              <div className="k">Brand Assets</div>
              <h4>Logos &amp; imagery</h4>
              <p>
                Logos, product photography, and approved imagery are available
                on request —{" "}
                <a className="lk" href="mailto:info@startecdynamics.com">
                  ask the team
                </a>
                .
              </p>
            </div>
            <div {...r("d2")} className="kitcell reveal d2">
              <div className="k">Fast Facts</div>
              <h4>The essentials</h4>
              <p>
                Independent R&amp;D · HQ Vancouver, R&amp;D Calgary · first
                product shipping · raised $600K, raising $4–5M.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PressPage;
