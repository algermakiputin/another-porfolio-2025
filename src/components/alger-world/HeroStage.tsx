"use client";

import { useEffect, useRef, useState } from "react";
import { heroFacts } from "../../data/algerWorld";

export default function HeroStage() {
  const [avatarX, setAvatarX] = useState(0);
  const [facingLeft, setFacingLeft] = useState(false);
  const [walking, setWalking] = useState(false);
  const [jumping, setJumping] = useState(false);
  const [factIndex, setFactIndex] = useState(0);
  const [fact, setFact] = useState("");
  const walkTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    return () => {
      if (walkTimer.current) clearTimeout(walkTimer.current);
    };
  }, []);

  const jump = () => {
    if (jumping || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    setJumping(true);
  };

  const move = (direction: -1 | 1) => {
    setAvatarX((position) => Math.min(82, Math.max(-82, position + direction * 18)));
    setFacingLeft(direction < 0);
    setWalking(true);
    if (walkTimer.current) clearTimeout(walkTimer.current);
    walkTimer.current = setTimeout(() => setWalking(false), 210);
  };

  const revealFact = () => {
    setFact(heroFacts[factIndex % heroFacts.length]);
    setFactIndex((index) => index + 1);
    jump();
  };

  return (
    <div
      className="hero-stage"
      tabIndex={0}
      aria-label="Interactive platformer scene. Use left and right arrows to move and Space to jump."
      onPointerDown={(event) => {
        const target = event.target as HTMLElement;
        if (!target.closest("button, a")) event.currentTarget.focus({ preventScroll: true });
      }}
      onKeyDown={(event) => {
        if (event.target !== event.currentTarget) return;
        if (event.key === "ArrowLeft" || event.key.toLowerCase() === "a") {
          event.preventDefault();
          move(-1);
        }
        if (event.key === "ArrowRight" || event.key.toLowerCase() === "d") {
          event.preventDefault();
          move(1);
        }
        if (event.code === "Space") {
          event.preventDefault();
          jump();
        }
      }}
    >
      <div className="hero-game-frame">
        <img
          className="hero-level-art"
          src="/alger-world/kenney-pixel-platformer/sample-level.png"
          width="918"
          height="515"
          alt=""
          aria-hidden="true"
        />
        <div className="hero-game-shade" aria-hidden="true" />
        <div className="hero-game-hud" aria-hidden="true">
          <span>EST. 2018</span>
          <strong>ALGER MAKIPUTIN</strong>
          <span>8+ YEARS</span>
        </div>
        <button
          type="button"
          className="hero-powerup"
          aria-label="Show a fact about Alger"
          onClick={revealFact}
        >
          <img
            src="/alger-world/kenney-pixel-platformer/question-block.png"
            width="18"
            height="18"
            alt=""
          />
        </button>
        <div className="hero-game-floor" aria-hidden="true" />
        <div
          className={`hero-character-shell${jumping ? " jump" : ""}`}
          style={{ "--avatar-x": `${avatarX}px` } as React.CSSProperties}
          onAnimationEnd={() => setJumping(false)}
        >
          <img
            src={walking
              ? "/alger-world/kenney-pixel-platformer/character-yellow-run.png"
              : "/alger-world/kenney-pixel-platformer/character-yellow-idle.png"}
            className={`hero-character-sprite${facingLeft ? " facing-left" : ""}`}
            width="24"
            height="24"
            alt="Yellow-suited platformer character representing Alger"
          />
        </div>
        <div className="fact-bubble" role="status" aria-live="polite" hidden={!fact}>
          <button type="button" aria-label="Close fact" onClick={() => setFact("")}>×</button>
          {fact}
        </div>
        <span className="hero-scene-prompt" aria-hidden="true">TRY THE ? BLOCK</span>
      </div>
      <div className="hero-controls">
        <span>
          MOVE: <kbd>←</kbd><kbd>→</kbd> &nbsp; JUMP: <kbd>SPACE</kbd>
        </span>
        <button type="button" onClick={jump}>↥ JUMP</button>
        <small>ART: KENNEY · CC0</small>
      </div>
    </div>
  );
}

