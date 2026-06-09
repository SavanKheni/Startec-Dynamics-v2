import { useLocation } from "react-router-dom";
import AnimatedText from "./AnimatedText";
import "./Footer.css";
const SHEET_NUMBER = {
  "/": "01",
  "/startec-intelligent": "02",
  "/about-us": "03",
  "/press": "04",
  "/contact-us": "05",
};
export default function Footer() {
  const { pathname } = useLocation();
  const sheet = SHEET_NUMBER[pathname] ?? "01";
  return (
    <footer id="about">
      <div className="wrap">
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
            <div className="v">{sheet} of 05</div>
          </div>
          <div className="tb">
            <div className="k">Revision</div>
            <div className="v">2026.06 — A</div>
          </div>
        </div>

        <div className="foot-end">
          <span>© 2026 Startec Dynamics Inc. — All rights reserved.</span>
          <span>
            <a href="#">Instagram</a> · <a href="#">LinkedIn</a> ·{" "}
            <a href="mailto:info@startecdynamics.com">Email</a>
          </span>
        </div>
      </div>
    </footer>
  );
}
