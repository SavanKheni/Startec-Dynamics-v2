import React from "react";
import AnimatedText from "./AnimatedText";
import "./Footer.css";

const FooterTopText = () => {
  return (
    <div className="wrap">
      <div className="sec about" style={{ paddingBottom: "0px" }}>
        <div className="sechead reveal">
          <span className="no">§06</span>
          <span className="nm">The Company</span>
        </div>
        <p className="big reveal d1">
          <AnimatedText
            as="span"
            text="Founded in 2022 and headquartered in Vancouver, Startec Dynamics is an independent R&amp;D company that works with founders, manufacturers, and investors who need"
          />{" "}
          <em style={{ color: "var(--red)", fontStyle: "italic" }}>
            <AnimatedText
              as="span"
              text="real engineering — not slideware."
              delayStart={4230}
            />
          </em>
        </p>
      </div>
    </div>
  );
};

export default FooterTopText;
