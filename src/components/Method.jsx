import AnimatedText from "./AnimatedText";
import "./Method.css";

const steps = [
  {
    n: "/ 01 — ASK",
    title: "Frame",
    desc: "Strip the problem to first principles and define what \u201cworking\u201d actually means.",
  },
  {
    n: "/ 02 — BUILD",
    title: "Prototype",
    desc: "Fast, real hardware and code — built to be broken, measured, and learned from.",
  },
  {
    n: "/ 03 — PROVE",
    title: "Validate",
    desc: "Push it past spec in the conditions it'll actually face. Data over opinion.",
  },
  {
    n: "/ 04 — SHIP",
    title: "Deploy",
    desc: "Bring it to market through manufacturing partners — reliable, accessible, supported.",
  },
];

export default function Method() {
  return (
    <section className="sec method" id="method">
      <div className="wrap">
        <div className="sechead reveal">
          <span className="no">§03</span>
          <span className="nm">Method</span>
        </div>
        <h2
          className="serif reveal d1"
          style={{
            fontWeight: 600,
            fontSize: "clamp(26px,3.6vw,40px)",
            letterSpacing: "-.01em",
            marginBottom: "6px",
          }}
        >
          <AnimatedText as="span" text=" Lab to field, on the record." />
        </h2>
        <div className="track reveal d2">
          <div className="baseline" />
          <div className="steps">
            {steps.map((s) => (
              <div className="mstep" key={s.n}>
                <span className="pt" />
                <div className="n">{s.n}</div>
                <h4>
                  <AnimatedText as="span" text={s.title} />
                </h4>
                <p>{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
