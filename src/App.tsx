import { useEffect } from "react";

import { Section } from "./components/section.tsx";
import { sections } from "./data.tsx";

export default function App() {
  /** Shrinks the header once we've scrolled down a little. */
  useEffect(() => {
    function onScroll() {
      const header = document.querySelector("header");
      if (!header) return;

      // inertia so we don't flicker back and forth
      const previouslyScrolled = header.classList.contains("scrolled");
      if (previouslyScrolled) {
        header.classList.toggle("scrolled", window.scrollY > 1);
      } else {
        header.classList.toggle("scrolled", window.scrollY > 5);
      }
    }
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header>
        <div className="pfp">
          <a href="#about">
            <img src="favicon.svg" alt="About me" width={96} height={100.85} />
          </a>
        </div>
        <div className="titles">
          <h1>Adil Hanney</h1>
          <p>Software Engineer</p>
        </div>
        <div className="socials">{/*TODO: Add github and linkedin links*/}</div>
      </header>
      <main>
        <div id="space-for-title" style={{height: "5rem"}}/>
        {sections.map((section) => (
          <Section key={section.id} {...section} />
        ))}
      </main>
    </>
  );
}
