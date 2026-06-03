"use client";

import { useEffect, useRef } from "react";

/**
 * Hearth payment calculator.
 *
 * Renders the target iframe Hearth's script looks for (by id) and injects the
 * widget loader. Hearth hosts the calculator and owns the payment/APR estimate
 * plus its disclosure, so the Truth-in-Lending disclosure burden stays with
 * Hearth (the licensed broker, NMLS #1628533) — not with North East Heating
 * And Cooling.
 *
 * Embed snippet provided by Hearth:
 *   <script src="https://widget.gethearth.com/script.js" id="hearth-script"
 *           data-orgid="62904" data-partner="north-east-heating-and-cooling"></script>
 *   <iframe id="hearth-widget_calculator_v1"></iframe>
 */
export default function HearthCalculator() {
  const injected = useRef(false);

  useEffect(() => {
    if (injected.current) return;
    injected.current = true;
    if (document.getElementById("hearth-script")) return;

    const script = document.createElement("script");
    script.src = "https://widget.gethearth.com/script.js";
    script.id = "hearth-script";
    script.async = true;
    script.setAttribute("data-orgid", "62904");
    script.setAttribute("data-partner", "north-east-heating-and-cooling");
    document.body.appendChild(script);
  }, []);

  return (
    <iframe
      id="hearth-widget_calculator_v1"
      title="Estimate your monthly HVAC payment with Hearth"
      loading="lazy"
      className="w-full block"
      style={{ border: 0, width: "100%", minHeight: 840 }}
    />
  );
}
