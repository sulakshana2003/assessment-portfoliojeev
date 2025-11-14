import { useEffect, useMemo, useRef, useState } from "react";
import Chapter1Section from "./pages/chapter/Chapter1.jsx";
import Chapter2Section from "./pages/chapter/Chapter2.jsx";
import Chapter3Section from "./pages/chapter/Chapter3.jsx";
import Chapter4Section from "./pages/chapter/Chapter4.jsx";

// 🌈 Gradient background + Top Navigation Layout
export default function AssessmentPortfolio() {
  const chapters = useMemo(
    () => [
      { id: "ch1", title: "Introduction to Professional Skills", body: sampleIntro },
      { id: "ch2", title: "Teamwork & Collaboration", body: "Clear goals, roles, and communication make teamwork effective." },
      { id: "ch3", title: "Communication Skills", body: "7Cs: clear, concise, concrete, correct, coherent, complete, courteous." },
      { id: "ch4", title: "Leadership & Ethics", body: "Leadership blends vision with responsibility." },
      { id: "ch5", title: "Problem Solving", body: "Fishbone, 5-Whys, Pareto analysis help in solving problems." },
      { id: "ch6", title: "Time Management", body: "Prioritize tasks, use Pomodoro and time-boxing." },
      { id: "ch7", title: "Emotional Intelligence", body: "Self-awareness, empathy, self-regulation, motivation." },
      { id: "ch8", title: "Interview Prep", body: "STAR answers, mock interviews, portfolio evidence." },
      { id: "ch9", title: "CV & Cover Letter", body: "Tailored summary, achievement-focused bullet points." },
      { id: "ch10", title: "Dining & Etiquette", body: "Professional behaviour in formal settings." },
      { id: "ch11", title: "Research Writing", body: "Plagiarism-free writing, citations, sources." },
    ],
    []
  );

  const [active, setActive] = useState("ch1");
  const sectionRefs = useRef({});

  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => e.isIntersecting && setActive(e.target.id));
      },
      { rootMargin: "-40% 0px -55% 0px" }
    );

    chapters.forEach(
      (c) => sectionRefs.current[c.id] && obs.observe(sectionRefs.current[c.id])
    );

    return () => obs.disconnect();
  }, [chapters]);

  const scrollTo = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <div className="min-h-screen text-gray-900 bg-gradient-to-br from-green-200 via-teal-100 to-blue-200">
      {/* 🌟 TOP NAVIGATION BAR */}
      <header className="sticky top-0 z-40 bg-white/80 backdrop-blur shadow-md">
        <div className="max-w-7xl mx-auto px-4 py-3 flex flex-wrap items-center gap-3 justify-between">
          <h1 className="text-lg font-bold tracking-tight">Assessment Portfolio</h1>

          <nav className="flex overflow-x-auto gap-2 pb-2 no-scrollbar">
            {chapters.map((c, idx) => (
              <button
                key={c.id}
                onClick={() => scrollTo(c.id)}
                className={
                  "px-4 py-2 rounded-full text-sm font-semibold border transition whitespace-nowrap " +
                  (active === c.id
                    ? "bg-green-600 text-white border-green-600"
                    : "bg-white text-gray-700 border-green-300 hover:bg-green-100")
                }
              >
                {`Chapter ${idx + 1}`}
              </button>
            ))}
          </nav>
        </div>
      </header>

      {/* 🌟 CONTENT AREA */}
      <main className="max-w-6xl mx-auto px-4 md:px-6 pt-8 pb-20">
        {chapters.map((c) => {
          const setRef = (el) => (sectionRefs.current[c.id] = el);

          if (c.id === "ch1") {
            return (
              <article
                key="ch1"
                id="ch1"
                ref={setRef}
                className="scroll-mt-24 bg-white shadow-lg border border-gray-200 rounded-2xl p-6 md:p-8 mb-8"
              >
                <Chapter1Section />
              </article>
            );
          }

          if (c.id === "ch2") {
            return (
              <article
                key="ch2"
                id="ch2"
                ref={setRef}
                className="scroll-mt-24 bg-white shadow-lg border border-gray-200 rounded-2xl p-6 md:p-8 mb-8"
              >
                <Chapter2Section />
              </article>
            );
          }

          if (c.id === "ch3") {
            return (
              <article
                key="ch3"
                id="ch3"
                ref={setRef}
                className="scroll-mt-24 bg-white shadow-lg border border-gray-200 rounded-2xl p-6 md:p-8 mb-8"
              >
                <Chapter3Section />
              </article>
            );
          }

          if (c.id === "ch4") {
            return (
              <article
                key="ch4"
                id="ch4"
                ref={setRef}
                className="scroll-mt-24 bg-white shadow-lg border border-gray-200 rounded-2xl p-6 md:p-8 mb-8"
              >
                <Chapter4Section />
              </article>
            );
          }

          return (
            <article
              key={c.id}
              id={c.id}
              ref={setRef}
              className="scroll-mt-24 bg-white border border-gray-200 rounded-2xl shadow p-6 md:p-8 mb-8"
            >
              <h2 className="text-2xl md:text-3xl font-bold mb-2">{c.title}</h2>
              <p className="text-gray-600 mb-4">Chapter overview</p>
              <p className="text-gray-700">{c.body}</p>
            </article>
          );
        })}
      </main>

      <ReadingProgress />
    </div>
  );
}

function ReadingProgress() {
  const [pct, setPct] = useState(0);
  useEffect(() => {
    const onScroll = () => {
      const st = window.scrollY;
      const h =
        document.documentElement.scrollHeight -
        document.documentElement.clientHeight;
      setPct((st / h) * 100);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="fixed bottom-6 right-6 hidden md:flex items-center bg-white/90 border border-gray-200 shadow-lg rounded-full px-3 py-2">
      <div className="h-2 w-40 rounded-full bg-gray-200 overflow-hidden mr-2">
        <div className="h-2 bg-green-500" style={{ width: pct + "%" }} />
      </div>
      <span className="text-xs font-semibold text-gray-700">
        {Math.round(pct)}%
      </span>
    </div>
  );
}

const sampleIntro = `Professional skills include teamwork, leadership, problem solving, and communication. These skills help us grow in any workplace because they are transferable. Our first lecture covered how values, beliefs, and attitudes shape our character and behaviour.`;
