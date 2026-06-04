import AnimatedText from "./AnimatedText";
import "./Thesis.css";

export default function Thesis() {
  return (
    <section className="sec thesis" id="thesis">
      <div className="wrap">
        <div className="sechead reveal">
          <span className="no">§01</span>
          <span className="nm">Thesis</span>
        </div>
        <p className="big reveal d1">
          <AnimatedText
            as="span"
            text=" Most companies pick a product, then spend years defending it. We pick"
          />{" "}
          <AnimatedText as="em" text="problems." />
          <AnimatedText
            as="span"
            text=" then solve them — and let the products follow.."
          />
        </p>
        <div className="sub">
          <p className="reveal d1">
            <b>Built as a lab</b>
            Our tooling, discipline, and people are general-purpose by design —
            not wired to a single product line.
          </p>
          <p className="reveal d2">
            <b>Hardware-deep</b>
            We go all the way down: silicon, firmware, mechanics, and the cloud
            that ties them together.
          </p>
          <p className="reveal d3">
            <b>Domain-agnostic</b>
            One field today. A different one tomorrow. The method travels; the
            market is interchangeable.
          </p>
        </div>
      </div>
    </section>
  );
}
