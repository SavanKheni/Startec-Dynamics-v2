import AnimatedText from "./AnimatedText";
import "./Hero.css";

export default function Hero() {
  return (
    <header className="hero" id="top">
      <div className="wrap">
        <div className="eyebrow reveal d1">
          <span className="tick">●</span> EST. 2022 · VANCOUVER, CANADA
        </div>
        <h1 className="reveal d2">
          <AnimatedText as="span" text="We turn hard" />
          <br /> <AnimatedText as="span" text="questions into" />
          <br /> <AnimatedText as="span" text="working" />{" "}
{" "}<span className="mk">
            <AnimatedText as="span" text="hardware." />
          </span>
        </h1>

        <div className="hero-grid">
          <div className="reveal d3">
            <p className="hero-lead">
              Startec Dynamics is a research &amp; development company. We take
              problems from first principles to field-proven products — across{" "}
              <span className="soft">
                electronics, software, and the systems that connect them.
              </span>
            </p>
            <div className="hero-actions">
              <a href="#files" className="btn btn-fill">
                VIEW THE WORK <span className="a">↗</span>
              </a>
              <a href="#about" className="btn btn-line">
                START A PROJECT <span className="a">↗</span>
              </a>
            </div>
          </div>

          <div className="spec reveal d4">
            <div className="hd">
              <span>OPERATING SPEC</span>
              <span>SD-01</span>
            </div>
            <div className="row">
              <span className="k">Discipline</span>
              <span className="v">Applied R&amp;D</span>
            </div>
            <div className="row">
              <span className="k">Depth</span>
              <span className="v">Hardware → Cloud</span>
            </div>
            <div className="row">
              <span className="k">Status</span>
              <span className="v">
                <b>● Active</b>
              </span>
            </div>
            <div className="row">
              <span className="k">Domains</span>
              <span className="v">General-purpose</span>
            </div>
            <div className="row">
              <span className="k">Output</span>
              <span className="v">Field-ready</span>
            </div>
          </div>
        </div>

        <div className="dimline reveal">
          <div className="seg" />
          <span className="lbl">Research</span>
          <div className="seg" />
          <span className="lbl">Prototype</span>
          <div className="seg" />
          <span className="lbl">Prove</span>
          <div className="seg" />
          <span className="lbl">Deploy</span>
          <div className="seg" />
        </div>
      </div>
    </header>
  );
}
