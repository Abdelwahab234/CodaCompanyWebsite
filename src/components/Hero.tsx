"use client";
import { useEffect, useState, MouseEvent, useRef } from "react";
import Link from "next/link";
import dynamic from "next/dynamic";
import { useLanguage } from "@/context/LanguageContext";

const Hero3D = dynamic(() => import("./Hero3D"), { ssr: false });

function AnimatedCounter({ end, active }: { end: number; active: boolean }) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!active) return;

    let isCancelled = false;
    let animId: number;

    const delay = setTimeout(() => {
      if (isCancelled) return;
      
      const duration = 1800;
      const startTime = performance.now();

      const animate = (now: number) => {
        if (isCancelled) return;
        const elapsed = now - startTime;
        const progress = Math.min(elapsed / duration, 1);
        const eased = 1 - Math.pow(1 - progress, 3);
        
        setCount(Math.round(eased * end));
        
        if (progress < 1) {
          animId = requestAnimationFrame(animate);
        }
      };
      
      animId = requestAnimationFrame(animate);
    }, 400);

    return () => {
      isCancelled = true;
      clearTimeout(delay);
      if (animId) cancelAnimationFrame(animId);
    };
  }, [active, end]);

  return <>{count}</>;
}

export default function Hero() {
  const { t } = useLanguage();
  const [typedText, setTypedText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  
  const timelineRef = useRef<HTMLDivElement>(null);
  const [fillHeight, setFillHeight] = useState(0);

  const phrases = [
    t("hero.typed1"),
    t("hero.typed2"),
    t("hero.typed3"),
    t("hero.typed4"),
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!timelineRef.current) return;
      const rect = timelineRef.current.getBoundingClientRect();
      const viewportHeight = window.innerHeight;
      
      if (rect.top < viewportHeight && rect.bottom > 0) {
        const startPoint = viewportHeight;
        const endPoint = viewportHeight * 0.25;
        const scrolled = startPoint - rect.top;
        const totalRange = rect.height + (startPoint - endPoint);
        const percentage = Math.min(Math.max((scrolled / totalRange) * 100, 0), 100);
        setFillHeight(percentage);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.currentTarget.style.setProperty("--mouse-x", `${x}px`);
    e.currentTarget.style.setProperty("--mouse-y", `${y}px`);
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const handleType = () => {
      const i = loopNum % phrases.length;
      const fullText = phrases[i];

      setTypedText(
        isDeleting
          ? fullText.substring(0, typedText.length - 1)
          : fullText.substring(0, typedText.length + 1)
      );

      if (!isDeleting && typedText === fullText) {
        timer = setTimeout(() => setIsDeleting(true), 1500);
      } else if (isDeleting && typedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
      }
    };

    timer = setTimeout(handleType, isDeleting ? 50 : 85);

    return () => clearTimeout(timer);
  }, [typedText, isDeleting, loopNum, phrases]);

  const node1Active = fillHeight >= 20;
  const node2Active = fillHeight >= 50;
  const node3Active = fillHeight >= 80;

  return (
    <>
      <section className="hero" onMouseMove={handleMouseMove} id="hero">
        <Hero3D />
        <div className="hero-content">
          <div className="hero-badge">
            <span className="dot"></span>
            {t('hero.badge')}
          </div>

          <h1 className="hero-title">
            {t('hero.title1')}<br />
            {t('hero.title2')} <span className="green-text">{t('hero.title3')}</span><br />
            <span className="green-line">
              {typedText}
              <span className="cursor-blink"></span>
            </span>
          </h1>

          <p className="hero-sub">
            {t('hero.desc')}
          </p>

          <div className="hero-btns">
            <Link className="hero-cta" href="#contact">
              {t('hero.primaryBtn')}
            </Link>
            <Link className="btn-outline" href="#projects">
              {t('hero.secondaryBtn')}
            </Link>
          </div>
        </div>
      </section>

      {/* STATS SECTION */}
      <section className="vertical-timeline" ref={timelineRef}>
        <div className="v-line">
          <div className="v-line-fill" style={{ height: `${fillHeight}%` }}></div>
        </div>

        <div className="v-node-item">
          <div className={`v-node ${node1Active ? 'active' : ''}`}></div>
          <div className={`v-content ${node1Active ? 'revealed' : ''}`}>
            <h3 className="stat-num-new">
              +<AnimatedCounter end={50} active={node1Active} />
            </h3>
            <p className="stat-lbl-new">{t('whyUs.stats.projects')}</p>
          </div>
        </div>
        
        <div className="v-node-item">
          <div className={`v-node ${node2Active ? 'active' : ''}`}></div>
          <div className={`v-content ${node2Active ? 'revealed' : ''}`}>
            <h3 className="stat-num-new">
              +<AnimatedCounter end={30} active={node2Active} />
            </h3>
            <p className="stat-lbl-new">{t('whyUs.stats.clients')}</p>
          </div>
        </div>
        
        <div className="v-node-item">
          <div className={`v-node ${node3Active ? 'active' : ''}`}></div>
          <div className={`v-content ${node3Active ? 'revealed' : ''}`}>
            <h3 className="stat-num-new">
              +<AnimatedCounter end={5} active={node3Active} />
            </h3>
            <p className="stat-lbl-new">{t('whyUs.stats.experience')}</p>
          </div>
        </div>
      </section>
    </>
  );
}
