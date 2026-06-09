import { useEffect, useRef } from "react";
import "./StartecHomeSections.css";
import workPhoto3 from "../../assets/workPhoto3.jpg";
import workPhoto1 from "../../assets/workPhoto1.jpg";
import AnimatedText from "../AnimatedText";

function useReveal(containerRef) {
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
    const root = containerRef?.current ?? document;
    root.querySelectorAll(".reveal").forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [containerRef]);
}

/* ─────────────────────────────────────────────
   Crosshair hook (fine-pointer only)
───────────────────────────────────────────── */
function useCrosshair() {
  useEffect(() => {
    if (!window.matchMedia("(pointer:fine)").matches) return;
    const xEl = document.getElementById("chx");
    const yEl = document.getElementById("chy");
    const cEl = document.getElementById("coord");
    if (!xEl || !yEl || !cEl) return;

    let tx = 0,
      ty = 0,
      raf = null;
    const onMove = (e) => {
      tx = e.clientX;
      ty = e.clientY;
      if (!raf)
        raf = requestAnimationFrame(() => {
          xEl.style.top = ty + "px";
          yEl.style.left = tx + "px";
          xEl.style.opacity = yEl.style.opacity = cEl.style.opacity = 1;
          cEl.textContent =
            "X:" +
            String(tx).padStart(4, "0") +
            " Y:" +
            String(ty).padStart(4, "0");
          raf = null;
        });
    };
    const onLeave = () => {
      xEl.style.opacity = yEl.style.opacity = cEl.style.opacity = 0;
    };
    window.addEventListener("mousemove", onMove);
    window.addEventListener("mouseleave", onLeave);
    return () => {
      window.removeEventListener("mousemove", onMove);
      window.removeEventListener("mouseleave", onLeave);
    };
  }, []);
}

/* ═══════════════════════════════════════════
   SUB-COMPONENTS
═══════════════════════════════════════════ */

/* ── Section Header ── */
function SectionHead({ no, label, extraClass = "" }) {
  return (
    <div className={`sechead reveal ${extraClass}`}>
      <span className="no">{no}</span>
      <span className="nm">{label}</span>
    </div>
  );
}

/* ── Hero §00 ── */
function HeroSection() {
  return (
    <header className="hero" id="top">
      <div className="wrap">
        <div className="eyebrow reveal d1">
          <span className="tick">●</span> EST. 2022 · VANCOUVER, CANADA{" "}
          <span className="tick">/</span> INDEPENDENT RESEARCH &amp; DEVELOPMENT
        </div>

        <h1 className="reveal d2">
          <AnimatedText
            as="span"
            text="Startec turns isolated machines into connected, intelligent systems that support people"
          />
          <span className="mk">
            {" "}
            <AnimatedText as="span" text="in real time." delayStart={2490} />
          </span>
        </h1>

        <div className="hero-grid">
          <div className="reveal d3">
            <p className="hero-lead">
              We pick what needs to change — and let the products follow.{" "}
              <span className="soft">
                From first principles to field validation, we build what works
                outside the lab.
              </span>
            </p>
            <div className="hero-actions">
              <a href="#files" className="btn btn-fill">
                VIEW THE WORK <span className="a">↗</span>
              </a>
              <a href="/contact-us" className="btn btn-line">
                START A PROJECT <span className="a">↗</span>
              </a>
            </div>
          </div>

          <div className="spec reveal d4">
            <div className="hd">
              <span>OPERATING SPEC</span>
              <span>SD-01</span>
            </div>
            {[
              ["Discipline", "Applied R&D"],
              ["Depth", "Hardware → Cloud"],
              ["Status", <b>● Active</b>],
              ["Focus", "Connected systems"],
              ["Output", "Field-ready"],
            ].map(([k, v]) => (
              <div className="row" key={k}>
                <span className="k">{k}</span>
                <span className="v">{v}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="dimline reveal">
          {["Research", "Prototype", "Prove", "Deploy"].map((lbl) => (
            <>
              <div className="seg" key={lbl + "-seg"} />
              <span className="lbl" key={lbl}>
                {lbl}
              </span>
            </>
          ))}
          <div className="seg" />
        </div>
      </div>
    </header>
  );
}

/* ── Thesis §01 ── */
function ThesisSection() {
  return (
    <section className="sec thesis" id="thesis">
      <div className="wrap">
        <SectionHead no="§01" label="Thesis" />
        <p className="big reveal d1">
          <AnimatedText as="span" text="We pick what needs to change — " />
          <em>
            {" "}
            <AnimatedText
              as="span"
              text="and let the products follow."
              delayStart={31 * 30}
            />
          </em>{" "}
          <AnimatedText
            as="span"
            text="For too long, the machines people rely on have existed on their own:  useful, but disconnected; powerful, but unable to respond when it matters."
            delayStart={(31 + 28) * 30}
          />
        </p>
        <div className="sub">
          <p className="reveal d1">
            <b>Connect</b>We link isolated machines into one intelligent system
            — hardware, firmware, software, and cloud, built to work as one.
          </p>
          <p className="reveal d2">
            <b>Respond</b>Systems that sense what is happening and act the
            moment it matters — not after the fact.
          </p>
          <p className="reveal d3">
            <b>Support</b>Technology in service of the people who depend on
            these machines every day.
          </p>
        </div>
      </div>
    </section>
  );
}

/* ── Capabilities §02 ── */
const CAPS = [
  {
    no: "C-01",
    h: "Embedded Hardware & Firmware",
    p: "Custom electronics and the low-level code that drives them, designed and validated in-house to survive the field.",
    delay: "d1",
  },
  {
    no: "C-02",
    h: "Mechatronics & Systems",
    p: "Mechanical, electrical, and control engineering integrated into one coherent, working system.",
    delay: "d1",
  },
  {
    no: "C-03",
    h: "AI, Connectivity & Cloud",
    p: "Machine learning, real-time telemetry, and over-the-air infrastructure that keeps devices improving long after they ship.",
    delay: "d2",
  },
  {
    no: "C-04",
    h: "Field Validation",
    p: "Lab research tested against punishing, real-world conditions until it holds — before anything reaches a customer.",
    delay: "d2",
  },
  {
    no: "C-05",
    h: "Electrification & Powertrain",
    p: "Battery systems, range extension, and efficient drivetrains that rethink how a machine is powered — and how far it can go.",
    delay: "d3",
  },
  {
    no: "C-06",
    h: "Autonomy & Controls",
    p: "Sensing, perception, and control systems for machines that operate with less and less human input.",
    delay: "d3",
  },
];

function CapabilitiesSection() {
  return (
    <section className="sec" id="cap">
      <div className="wrap">
        <SectionHead no="§02" label="Capabilities" />
        <div className="cap">
          {CAPS.map(({ no, h, p, delay }) => (
            <div className={`cap-row reveal ${delay}`} key={no}>
              <div className="cap-no">{no}</div>
              <div className="cap-cell cap-body">
                <h3>
                  <AnimatedText as="span" text={h} />{" "}
                  <span className="arrow">
                    <AnimatedText as="span" text="→" />
                  </span>
                </h3>
                <p>{p}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── Method §03 ── */
const STEPS = [
  {
    n: "/ 01 — ASK",
    h: "Frame",
    p: 'Strip the problem to first principles and define what "working" actually means.',
  },
  {
    n: "/ 02 — BUILD",
    h: "Prototype",
    p: "Fast, real hardware and code — built to be broken, measured, and learned from.",
  },
  {
    n: "/ 03 — PROVE",
    h: "Validate",
    p: "Push it past spec in the conditions it'll actually face. Data over opinion.",
  },
  {
    n: "/ 04 — SHIP",
    h: "Deploy",
    p: "Bring it to market through manufacturing partners — reliable, accessible, supported.",
  },
];

function MethodSection() {
  return (
    <section className="sec method" id="method">
      <div className="wrap">
        <SectionHead no="§03" label="Method" />
        <h2
          className="serif reveal d1"
          style={{
            fontWeight: 600,
            fontSize: "clamp(26px,3.6vw,40px)",
            letterSpacing: "-.01em",
            marginBottom: 6,
          }}
        >
          <AnimatedText as="span" text="Lab to field, on the record." />
        </h2>
        <p
          className="reveal d1"
          style={{
            color: "var(--soft)",
            fontSize: 16,
            maxWidth: 700,
            marginTop: 14,
          }}
        >
          We turn hard questions into working hardware — and working systems.
          From first principles to field validation, across hardware, firmware,
          software, and cloud.
        </p>

        {/* Method figures — images stripped (base64 too large for JSX); replace src with actual URLs */}
        <div className="methfigs reveal d2">
          <figure className="mfig">
            <img
              loading="lazy"
              src={workPhoto3}
              alt="The Startec Dynamics R&D lab"
            />
            <figcaption>
              <span>The lab</span>
              <b>RESEARCH</b>
            </figcaption>
          </figure>
          <figure className="mfig">
            <img
              loading="lazy"
              src={workPhoto1}
              alt="Engineers building the hardware"
            />
            <figcaption>
              <span>Hands on the hardware</span>
              <b>BUILD</b>
            </figcaption>
          </figure>
        </div>

        <div className="track reveal d2">
          <div className="baseline" />
          <div className="steps">
            {STEPS.map(({ n, h, p }) => (
              <div className="mstep" key={n}>
                <span className="pt" />
                <div className="n">{n}</div>
                <h4>
                  <AnimatedText as="span" text={h} />
                </h4>
                <p>{p}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── Trajectory §04 ── */
function TrajectorySection() {
  return (
    <section className="sec arc" id="arc">
      <div className="wrap">
        <SectionHead no="§04" label="Trajectory" />
        <p className="big reveal d1">
          <AnimatedText
            as="span"
            text="Every project moves a machine one step closer to standing on its own — first we make it"
          />{" "}
          <em>
            <AnimatedText as="span" text="aware" delayStart={2400} />
          </em>
          <AnimatedText as="span" text=", then" delayStart={2550} />{" "}
          <em>
            <AnimatedText as="span" text="self-powered" delayStart={2700} />
          </em>
          <AnimatedText as="span" text=", then" delayStart={3060} />{" "}
          <em>
            <AnimatedText as="span" text="self-operating." delayStart={3210} />
          </em>
        </p>

        <div className="plot reveal d2">
          <svg
            viewBox="0 0 1000 340"
            xmlns="http://www.w3.org/2000/svg"
            role="img"
            aria-label="Capability trajectory plot"
          >
            <line
              x1="70"
              y1="40"
              x2="70"
              y2="280"
              stroke="#1B1A16"
              strokeWidth="1"
            />
            <line
              x1="70"
              y1="280"
              x2="945"
              y2="280"
              stroke="#1B1A16"
              strokeWidth="1"
            />
            <polygon points="70,33 65,46 75,46" fill="#1B1A16" />
            <polygon points="952,280 939,275 939,285" fill="#1B1A16" />
            <text
              x="56"
              y="160"
              fill="#908D82"
              fontFamily="'Space Mono',monospace"
              fontSize="11"
              letterSpacing="2"
              transform="rotate(-90 56 160)"
              textAnchor="middle"
            >
              CAPABILITY
            </text>
            <text
              x="872"
              y="272"
              fill="#908D82"
              fontFamily="'Space Mono',monospace"
              fontSize="11"
              letterSpacing="2"
            >
              TIME →
            </text>

            <line
              x1="210"
              y1="235"
              x2="210"
              y2="280"
              stroke="#908D82"
              strokeWidth="1"
              strokeDasharray="2 5"
            />
            <line
              x1="520"
              y1="150"
              x2="520"
              y2="280"
              stroke="#908D82"
              strokeWidth="1"
              strokeDasharray="2 5"
            />
            <line
              x1="790"
              y1="80"
              x2="790"
              y2="280"
              stroke="#908D82"
              strokeWidth="1"
              strokeDasharray="2 5"
            />
            <text
              x="210"
              y="300"
              fill="#908D82"
              fontFamily="'Space Mono',monospace"
              fontSize="10"
              letterSpacing="1.5"
              textAnchor="middle"
            >
              NOW
            </text>
            <text
              x="520"
              y="300"
              fill="#908D82"
              fontFamily="'Space Mono',monospace"
              fontSize="10"
              letterSpacing="1.5"
              textAnchor="middle"
            >
              NEXT
            </text>
            <text
              x="790"
              y="300"
              fill="#908D82"
              fontFamily="'Space Mono',monospace"
              fontSize="10"
              letterSpacing="1.5"
              textAnchor="middle"
            >
              HORIZON
            </text>

            <path
              className="arc-solid"
              d="M90 272 L210 235 L520 150"
              fill="none"
              stroke="#D6341C"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M520 150 L790 80 L940 36"
              fill="none"
              stroke="#D6341C"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeDasharray="2 8"
            />
            <polygon points="942,33 929,31 935,45" fill="#D6341C" />

            <circle cx="210" cy="235" r="7" fill="#D6341C" />
            <circle
              cx="520"
              cy="150"
              r="7"
              fill="#EDEAE1"
              stroke="#D6341C"
              strokeWidth="2.5"
            />
            <circle
              cx="790"
              cy="80"
              r="7"
              fill="none"
              stroke="#1B1A16"
              strokeWidth="1.5"
              strokeDasharray="2 3"
            />

            <text
              x="224"
              y="227"
              fill="#1B1A16"
              fontFamily="'Space Mono',monospace"
              fontSize="12"
              fontWeight="700"
            >
              01 · AWARE
            </text>
            <text
              x="534"
              y="142"
              fill="#1B1A16"
              fontFamily="'Space Mono',monospace"
              fontSize="12"
              fontWeight="700"
            >
              02 · SELF-POWERED
            </text>
            <text
              x="688"
              y="64"
              fill="#1B1A16"
              fontFamily="'Space Mono',monospace"
              fontSize="12"
              fontWeight="700"
            >
              03 · SELF-OPERATING
            </text>
            <text
              x="958"
              y="42"
              fill="#908D82"
              fontFamily="'Fraunces',serif"
              fontSize="24"
              fontStyle="italic"
            >
              ?
            </text>
          </svg>
        </div>

        <div className="arc-cap">
          <div className="ac reveal d1">
            <div className="st">01 · AWARE</div>
            <h4>
              <AnimatedText as="span" text="Make it intelligent" />
            </h4>
            <p>
              Add sensing, connectivity, and software to machines that already
              exist. <span style={{ color: "var(--ink)" }}>Live today.</span>
            </p>
            <div className="dot">● Shipping</div>
          </div>
          <div className="ac reveal d2">
            <div className="st">02 · SELF-POWERED</div>
            <h4>
              <AnimatedText as="span" text="Rethink how it moves" />
            </h4>
            <p>
              Re-engineer energy and drivetrain so a machine goes further on its
              own terms.
            </p>
            <div className="dot">○ In R&amp;D</div>
          </div>
          <div className="ac reveal d3">
            <div className="st">03 · SELF-OPERATING</div>
            <h4>
              <AnimatedText as="span" text="Take us out of the loop" />
            </h4>
            <p>
              Build toward machines that sense, decide, and act with less human
              input.
            </p>
            <div className="dot">◌ On the horizon</div>
          </div>
        </div>

        <p className="arc-note reveal">
          // The horizon stays open on purpose — the method is fixed, the
          destination is not.
        </p>
      </div>
    </section>
  );
}

/* ── Projects §05 ── */
function ProjectsSection() {
  return (
    <section className="sec" id="files">
      <div className="wrap">
        <SectionHead no="§05" label="Projects — Selected Files" />
        <div className="files">
          <a href="/startec-intelligent" className="file reveal d1">
            <div className="id">
              PROJECT 01
              <span className="st">● SHIPPING / 2022–</span>
            </div>
            <div className="meta">
              <h3>
                <AnimatedText as="span" text="Startec Intelligent" />
              </h3>
              <p>
                Connected-vehicle intelligence — security, safety, and
                over-the-air smarts for the machines people ride every day.
              </p>
            </div>
            <div className="act">
              OPEN FILE <span className="a">↗</span>
            </div>
          </a>

          <div className="file redacted reveal d2">
            <div className="id">
              PROJECT 02
              <span className="st">○ ACTIVE R&amp;D</span>
            </div>
            <div className="meta">
              <h3>████████████</h3>
              <p>
                The next stage on the trajectory — a new application of our
                R&amp;D, in development. Details on request under NDA.
              </p>
            </div>
            <div className="act">ACCESS RESTRICTED</div>
          </div>

          <a href="#about" className="file slot reveal d3">
            <div className="id">
              PROJECT ——
              <span className="st">+ OPEN SLOT</span>
            </div>
            <div className="meta">
              <h3>
                <AnimatedText as="span" text="[ your problem here ]" />
              </h3>
              <p>
                Have something hard that needs real engineering? Let's open a
                file.
              </p>
            </div>
            <div className="act">
              START A PROJECT <span className="a">↗</span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── About / Footer §06 ── */
function AboutFooter() {
  return (
    <footer id="about">
      <div className="wrap">
        <div className="sec about">
          <SectionHead no="§06" label="The Company" />
          <p className="big reveal d1">
            Founded in 2022 and headquartered in Vancouver, Startec Dynamics is
            an independent R&amp;D company that works with founders,
            manufacturers, and investors who need{" "}
            <em style={{ color: "var(--red)", fontStyle: "italic" }}>
              real engineering — not slideware.
            </em>
          </p>
        </div>

        <div className="titleblock reveal">
          <div className="tb dark">
            <div className="k">Company</div>
            <div className="v">Startec Dynamics Inc.</div>
          </div>
          <div className="tb">
            <div className="k">Headquarters</div>
            <div className="v">
              804 Pacific St
              <br />
              Vancouver, BC V6Z 1C2
            </div>
          </div>
          <div className="tb">
            <div className="k">R&amp;D Centre</div>
            <div className="v">
              3655 36 St NW
              <br />
              Calgary, AB T2L 1Y8
            </div>
          </div>
          <div className="tb">
            <div className="k">Contact</div>
            <div className="v">
              <a href="mailto:info@startecdynamics.com">
                info@startecdynamics.com
              </a>
            </div>
          </div>
          <div className="tb wide">
            <div className="k">Scope</div>
            <div className="v">
              Research · Hardware · Firmware · Mechatronics · AI · Cloud · Field
              Validation
            </div>
          </div>
          <div className="tb">
            <div className="k">Sheet</div>
            <div className="v">01 of 01</div>
          </div>
          <div className="tb">
            <div className="k">Revision</div>
            <div className="v">2026.06 — A</div>
          </div>
        </div>

        <div className="foot-end">
          <span>© 2026 Startec Dynamics Inc. — All rights reserved.</span>
          <span>
            <a href="/about-us">About</a> · <a href="/press">Press</a> ·{" "}
            <a href="/contact-us">Contact</a> · <a href="#">LinkedIn</a>
          </span>
        </div>
      </div>
    </footer>
  );
}

/* ═══════════════════════════════════════════
   DECORATIVE OVERLAYS (frame + crosshair)
   Place once above everything else in the DOM.
═══════════════════════════════════════════ */
function SheetFrame() {
  return (
    <>
      {/* Corner frame */}
      <div className="frame">
        <i className="tl" />
        <i className="tr" />
        <i className="bl" />
        <i className="br" />
      </div>

      {/* Corner labels */}
      <div className="corner t-l">STARTEC DYNAMICS / INDEPENDENT R&amp;D</div>
      <div className="corner t-r">
        SHEET 01 — INDEX
        <br />
        REV 2026.06
      </div>
      <div className="corner b-l">DWG. NO. SD-HOME-01</div>

      {/* Crosshair elements */}
      <div id="chx" />
      <div id="chy" />
      <div id="coord">X:0000 Y:0000</div>
    </>
  );
}

/* ═══════════════════════════════════════════
   ROOT EXPORT — StartecHomeSections
   Compose with your existing Header/Footer
   wrappers, or render standalone.
═══════════════════════════════════════════ */
import { useState } from "react";

export default function StartecHomeSections() {
  const rootRef = useRef(null);

  useReveal(rootRef);
  useCrosshair();

  return (
    <div ref={rootRef} className="startec-home-sections">
      <HeroSection />
      <ThesisSection />
      <CapabilitiesSection />
      <MethodSection />
      <TrajectorySection />
      <ProjectsSection />
      {/* <AboutFooter /> */}
    </div>
  );
}
