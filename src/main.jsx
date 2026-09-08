import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import names from "./data/name.json";
import "./style.css";

function App() {
  const [name, setName] = useState("");
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const searchName = (e) => {
    e?.preventDefault();

    const clean = name.trim();
    const key = clean.toLowerCase();

    if (!clean) {
      setError("Please enter a name.");
      setResult(null);
      return;
    }

    setLoading(true);
    setError("");
    setResult(null);

    setTimeout(() => {
      const foundName = names[key];

      if (foundName) {
        setResult({
          name: clean,
          ...foundName,
        });
      } else {
        setError(
          `We couldn't find reliable information for "${clean}" yet.`
        );
      }

      setLoading(false);
    }, 300);
  };

  const tryName = (value) => {
    setName(value);
    setResult(null);
    setError("");
  };

  return (
    <main className="app">
      <nav className="nav">
        <div className="brand">
          <span className="brand-mark">न</span>
          Naam Gyan
        </div>

        <span className="tagline">
          Know your name. Discover its story.
        </span>
      </nav>

      <section className="hero">
        <div className="eyebrow">DISCOVER YOUR NAME</div>

        <h1>
          What does your <em>name</em> say?
        </h1>

        <p className="subtitle">
          Enter a name and discover its meaning, origin, language,
          cultural background, similar names and variants.
        </p>

        <form className="search" onSubmit={searchName}>
          <span className="search-icon">⌕</span>

          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Enter a name — try Raj"
            aria-label="Enter a name"
            autoComplete="off"
          />

          <button type="submit" disabled={loading}>
            {loading ? "Searching..." : "Discover"}
          </button>
        </form>

        {error && <div className="error">{error}</div>}

        <div className="hint">
          Try{" "}
          <button type="button" onClick={() => tryName("Raj")}>
            Raj
          </button>{" "}
          or{" "}
          <button type="button" onClick={() => tryName("Aarav")}>
            Aarav
          </button>
        </div>
      </section>

      {result && (
        <section className="result">
          <div className="name-card">
            <div className="name-label">YOUR NAME</div>

            <h2>{result.name}</h2>

            <div className="meaning">
              {result.meaning}
            </div>
          </div>

          <div className="details">
            <Info
              number="01"
              title="Origin"
              value={result.origin}
            />

            <Info
              number="02"
              title="Language"
              value={result.language}
            />

            <Info
              number="03"
              title="Gender association"
              value={result.gender}
            />

            <Info
              number="04"
              title="Cultural context"
              value={result.cultural}
            />

            <Info
              number="05"
              title="Similar names"
              value={result.similar}
            />

            <Info
              number="06"
              title="Name variants"
              value={result.variants}
            />
          </div>
        </section>
      )}

      <footer>
        <span>NAAM GYAN</span>
        <span>Discover • Understand • Remember</span>
      </footer>
    </main>
  );
}

function Info({ number, title, value }) {
  return (
    <article className="info">
      <div className="number">{number}</div>

      <div>
        <h3>{title}</h3>
        <p>{value}</p>
      </div>
    </article>
  );
}

createRoot(document.getElementById("root")).render(<App />);