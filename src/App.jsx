import { useEffect, useMemo, useRef, useState } from "react";
import Chapter1Section from "./pages/chapter/Chapter1";
import Chapter2Section from "./pages/chapter/Chapter2";
import Chapter3Section from "./pages/chapter/Chapter3";
import Chapter4Section from "./pages/chapter/Chapter4";
import Chapter5Section from "./pages/chapter/Chapter5.jsx";
import Chapter6Section from "./pages/chapter/Chapter6.jsx";
import Chapter7Section from "./pages/chapter/Chapter7.jsx";
import Chapter8Section from "./pages/chapter/Chapter8.jsx";
import Chapter9Section from "./pages/chapter/Chapter9.jsx";
import Chapter10Section from "./pages/chapter/Chapter10.jsx";
import Chapter11Section from "./pages/chapter/Chapter11.jsx";

export default function AssessmentPortfolio() {
  const chapters = useMemo(
    () => [
      { id: "ch1", title: "Introduction", body: sampleIntro },
      { id: "ch2", title: "CV & Cover Letter", body: "Clear communication and collaboration improve outcomes." },
      { id: "ch3", title: "Interview Skills", body: "7Cs improve clarity and confidence." },
      { id: "ch4", title: "Portfolio Management", body: "Good leaders inspire trust and ethical behaviour." },
      { id: "ch5", title: "Speaking Skills", body: "Use 5-Whys, Fishbone and Pareto." },
      { id: "ch6", title: "Project Proposal Writing", body: "Prioritize tasks and avoid distractions." },
      { id: "ch7", title: "Food Festival", body: "Self-awareness and empathy matter." },
      { id: "ch8", title: "EI", body: "STAR answers and confidence." },
      { id: "ch9", title: "Dining Etiquette", body: "Tailor and highlight achievements." },
      { id: "ch10", title: "Telephone Etiquette", body: "Professional behaviour in formal settings." },
      { id: "ch11", title: "Email Etiquette", body: "Academic integrity and citations." },
    ],
    []
  );

  const [active, setActive] = useState("ch1");
  const sectionRefs = useRef({});

  const scrollTo = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setActive(id);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-100 via-purple-50 to-pink-100 text-gray-900">

      {/* HERO SECTION */}
      <section className="py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-gray-800 drop-shadow-sm">
          Professional Skills Portfolio
        </h1>
        <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
          A modern learning journey reflection showcasing key lessons, skills and personal development.
        </p>
      </section>

      {/* MODERN NAVIGATION TABS */}
      <div className="sticky top-0 z-30 bg-white/60 backdrop-blur shadow">
        <div className="flex overflow-x-auto gap-3 px-4 py-3 no-scrollbar justify-center">
          {chapters.map((c) => (
            <button
              key={c.id}
              onClick={() => scrollTo(c.id)}
              className={
                "px-5 py-2 rounded-full text-sm font-bold transition-all duration-300 " +
                (active === c.id
                  ? "bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-md scale-105"
                  : "bg-white text-gray-700 border border-gray-300 hover:bg-gray-100")
              }
            >
              {c.title}
            </button>
          ))}
        </div>
      </div>

      {/* CONTENT AREA WITH MODERN CARDS */}
      {/*mewa wens nokranuuuu  */}
      <main className="max-w-5xl mx-auto px-4 md:px-6 py-12 space-y-12">
        {chapters.map((c) => {
          const setRef = (el) => (sectionRefs.current[c.id] = el);

          const renderChapterComponent = () => {
            switch (c.id) {
              case "ch1":
                return <Chapter1Section />;
              case "ch2":
                return <Chapter2Section />;
              case "ch3":
                return <Chapter3Section />;
              case "ch4":
                return <Chapter4Section />;
              case "ch5":
                return <Chapter5Section />;
              case "ch6":
                return <Chapter6Section />;
              case "ch7":
                return <Chapter7Section />;
              case "ch8":
                return <Chapter8Section />;
              case "ch9":
                return <Chapter9Section />;
              case "ch10":
                return <Chapter10Section />;
              case "ch11":
                return <Chapter11Section />;

              default:
                return (
                  <p className="text-gray-700 leading-relaxed">{c.body}</p>
                );
            }
          };
          {/*mewa wens nokranuuuu  */}
          return (
            <section
              key={c.id}
              id={c.id}
              ref={setRef}
              className="scroll-mt-32"
            >
              <div className="p-8 bg-white/70 border border-gray-200 shadow-xl rounded-3xl backdrop-blur-lg hover:shadow-2xl transition-all duration-300">
                <h2 className="text-3xl font-extrabold mb-3 bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  {c.title}
                </h2>
                <div className="mt-4">{renderChapterComponent()}</div>
              </div>
            </section>
          );
        })}
      </main>
    </div>
  );
}

const sampleIntro = `Professional skills are essential for any workplace. 
These include communication, teamwork, leadership, problem solving 
and values that shape our behaviours. Our first session taught us 
how attitudes, beliefs and character guide professional conduct.`;
