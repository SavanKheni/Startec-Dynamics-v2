import AnimatedText from "./AnimatedText";
import "./Projects.css";

export default function Projects() {
  return (
    <section className="sec" id="files">
      <div className="wrap">
        <div className="sechead reveal">
          <span className="no">§05</span>
          <span className="nm">Projects — Selected Files</span>
        </div>
        <div className="files">
          <a href="/startec-intelligent" className="file reveal d1">
            <div className="id">
              PROJECT 01<span className="st">● SHIPPING / 2022–</span>
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
              PROJECT 02<span className="st">○ ACTIVE R&amp;D</span>
            </div>
            <div className="meta">
              <h3>
                <AnimatedText as="span" text="████████████" />
              </h3>
              <p>
                The next stage on the trajectory — a new application of our
                R&amp;D, in development. Details on request under NDA.
              </p>
            </div>
            <div className="act">ACCESS RESTRICTED</div>
          </div>

          <a href="#about" className="file slot reveal d3">
            <div className="id">
              PROJECT ——<span className="st">+ OPEN SLOT</span>
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
