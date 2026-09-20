"use client";

import React, { useState } from "react";
import { 
  Check, 
  ChevronDown, 
  ChevronUp, 
  ArrowUpRight, 
  Sparkles, 
  Layers, 
  ShieldCheck, 
  TrendingUp, 
  Target,
  Zap,
  CheckCircle2
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Contracts() {
  const { t, language } = useLanguage();
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

  const toggleExpand = (idx: number) => {
    setExpandedIndex((prev) => (prev === idx ? null : idx));
  };

  const packages = [
    {
      index: 0,
      icon: (
        <svg className="contract-svg" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Futuristic blueprint / build isometric cube & gear */}
          <rect x="12" y="18" width="56" height="44" rx="4" stroke="currentColor" strokeWidth="2" strokeDasharray="3 3" opacity="0.4" />
          <path d="M40 8L68 24V56L40 72L12 56V24L40 8Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
          <path d="M40 8V72" stroke="currentColor" strokeWidth="2" opacity="0.6" />
          <path d="M40 40L68 24" stroke="currentColor" strokeWidth="2" opacity="0.6" />
          <path d="M40 40L12 24" stroke="currentColor" strokeWidth="2" opacity="0.6" />
          <circle cx="40" cy="40" r="6" fill="currentColor" />
          <circle cx="68" cy="24" r="3.5" fill="currentColor" />
          <circle cx="12" cy="24" r="3.5" fill="currentColor" />
          <circle cx="40" cy="8" r="3.5" fill="currentColor" />
          <circle cx="40" cy="72" r="3.5" fill="currentColor" />
          {/* Subtle tech brackets */}
          <path d="M26 34L20 40L26 46" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
          <path d="M54 34L60 40L54 46" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      pkg: t("contracts.packages.0"),
      badgeIcon: <Layers size={14} />,
      btnText: "Build",
      waText: encodeURIComponent("مرحباً كودا كومباني، أود الاستفسار والبدء في عقد بناء المشروع (Build Plan)")
    },
    {
      index: 1,
      icon: (
        <svg className="contract-svg" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Shield & continuous server pulse radar */}
          <path d="M40 8L66 18V38C66 56 40 70 40 70C40 70 14 56 14 38V18L40 8Z" stroke="currentColor" strokeWidth="2.5" strokeLinejoin="round" />
          {/* Inner concentric protection radar */}
          <circle cx="40" cy="38" r="16" stroke="currentColor" strokeWidth="1.5" strokeDasharray="4 4" opacity="0.5" />
          <circle cx="40" cy="38" r="8" fill="currentColor" opacity="0.2" />
          {/* Pulse heartbeat line */}
          <path d="M26 38H33L36 30L41 46L45 34L48 38H54" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
          <circle cx="40" cy="8" r="3" fill="currentColor" />
        </svg>
      ),
      pkg: t("contracts.packages.1"),
      badgeIcon: <ShieldCheck size={14} />,
      btnText: "Care",
      waText: encodeURIComponent("مرحباً كودا كومباني، أود الاستفسار عن عقد الصيانة والدعم الفني (Care Plan)")
    },
    {
      index: 2,
      isFeatured: true,
      icon: (
        <svg className="contract-svg" viewBox="0 0 80 80" fill="none" xmlns="http://www.w3.org/2000/svg">
          {/* Exponential scale curve & multi-node galaxy */}
          <circle cx="16" cy="62" r="4.5" fill="currentColor" />
          <circle cx="34" cy="46" r="4.5" fill="currentColor" />
          <circle cx="50" cy="28" r="4.5" fill="currentColor" />
          <circle cx="68" cy="14" r="6" fill="currentColor" />
          <path d="M16 62C30 62 36 46 50 28C57 19 62 14 68 14" stroke="currentColor" strokeWidth="3" strokeLinecap="round" />
          {/* Expansion nodes */}
          <line x1="50" y1="28" x2="68" y2="40" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
          <circle cx="68" cy="40" r="3.5" fill="currentColor" opacity="0.7" />
          <line x1="34" y1="46" x2="48" y2="60" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" opacity="0.6" />
          <circle cx="48" cy="60" r="3.5" fill="currentColor" opacity="0.7" />
          {/* Futuristic corner mark */}
          <path d="M60 8H72V20" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      ),
      pkg: t("contracts.packages.2"),
      badgeIcon: <Sparkles size={14} />,
      btnText: "Grow",
      waText: encodeURIComponent("مرحباً كودا كومباني، أود التعاقد على باقة النمو والتطوير المستمر (Grow Plan)")
    }
  ];

  return (
    <section id="contracts" className="contracts-section">
      <div className="container">
        {/* Section Header */}
        <div className="section-head text-center" data-aos="fade-up">
          <div className="hero-badge" style={{ margin: "0 auto 20px" }}>
            <span className="dot"></span>
            {t("contracts.badge")}
          </div>
          <h2 className="sec-title">
            {t("contracts.title1")} <span className="green-line">{t("contracts.title2")}</span>
          </h2>
          <p className="sec-sub" style={{ margin: "0 auto" }}>
            {t("contracts.desc")}
          </p>
        </div>

        {/* 3 Contracts Grid */}
        <div className="contracts-grid">
          {packages.map(({ index, icon, pkg, isFeatured, badgeIcon, waText }) => {
            const isExpanded = expandedIndex === index;
            return (
              <div 
                key={index} 
                className={`contract-card ${isFeatured ? "featured" : ""}`}
                data-aos="fade-up"
                data-aos-delay={(index + 1) * 150}
              >
                {isFeatured && (
                  <div className="featured-ribbon">
                    <Sparkles size={13} />
                    <span>{pkg.popularBadge || (language === "ar" ? "الأكثر شمولاً" : "Recommended")}</span>
                  </div>
                )}

                {/* Card Top: Header & Visual */}
                <div className="contract-card-header">
                  <div className="contract-icon-box">
                    {icon}
                  </div>
                  <div className="contract-meta">
                    <span className="contract-num">{pkg.num}</span>
                    <span className="contract-tier-name">{pkg.name}</span>
                  </div>
                  <div className="contract-tagline">{pkg.tagline}</div>
                  <h3 className="contract-ar-name">{pkg.arName}</h3>
                </div>

                {/* Target Audience Pill */}
                <div className="target-audience-box">
                  <div className="target-label">
                    <Target size={14} className="target-icon" />
                    <span>{t("contracts.bestFor")}</span>
                  </div>
                  <p className="target-text">{pkg.targetAudience}</p>
                </div>

                {/* Primary Advantage Callout */}
                <div className="main-benefit-callout">
                  <div className="benefit-badge">
                    <Zap size={13} />
                    <span>{t("contracts.primaryAdvantage")}</span>
                  </div>
                  <p className="benefit-text">{pkg.mainBenefit}</p>
                </div>

                {/* Highlights List */}
                <div className="contract-highlights">
                  <div className="highlights-title">{language === "ar" ? "أبرز ما يشمله العقد:" : "Core Highlights:"}</div>
                  <ul className="highlights-list">
                    {pkg.highlights.map((item: string, i: number) => (
                      <li key={i} className="highlight-item">
                        <CheckCircle2 size={16} className="item-check-icon" />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Expandable Full Scope of Work */}
                <div className="expandable-wrapper">
                  <button 
                    type="button"
                    className="toggle-features-btn"
                    onClick={() => toggleExpand(index)}
                    aria-expanded={isExpanded}
                  >
                    <span>
                      {isExpanded ? t("contracts.hideDetails") : `${t("contracts.showAll")} (${pkg.allFeatures.length})`}
                    </span>
                    {isExpanded ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
                  </button>

                  <div className={`all-features-drawer ${isExpanded ? "open" : ""}`}>
                    <div className="drawer-inner">
                      <div className="drawer-heading">
                        {language === "ar" ? "نطاق الخدمات الكامل المشمول:" : "Complete Scope of Deliverables:"}
                      </div>
                      <ul className="full-features-list">
                        {pkg.allFeatures.map((feat: string, i: number) => (
                          <li key={i} className="feature-bullet">
                            <span className="bullet-indicator">■</span>
                            <span>{feat}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Card Footer CTA */}
                <div className="contract-card-footer">
                  <a 
                    href={`https://wa.me/201146675031?text=${waText}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`contract-cta-btn ${isFeatured ? "primary" : "outline"}`}
                  >
                    <span>{t("contracts.choosePlan")} ({pkg.name})</span>
                    <ArrowUpRight size={17} />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        {/* Quick Comparison Summary Table */}
        <div className="contracts-comparison-wrap" data-aos="fade-up" data-aos-delay="200">
          <div className="comparison-card">
            <h4 className="comparison-title">
              <span className="comparison-dot">■</span>
              {t("contracts.comparisonTitle")}
            </h4>
            
            <div className="comparison-table-grid">
              <div className="comparison-row header-row">
                <div className="cell cell-contract">{t("contracts.tableHeaders.contract")}</div>
                <div className="cell cell-goal">{t("contracts.tableHeaders.goal")}</div>
                <div className="cell cell-target">{t("contracts.tableHeaders.target")}</div>
              </div>

              <div className="comparison-row">
                <div className="cell cell-contract">
                  <span className="comp-tag build">01 — Build</span>
                </div>
                <div className="cell cell-goal">
                  {language === "ar" ? "بناء المشروع بالكامل من الصفر حتى الإنتاج" : "Complete product build from scratch to production"}
                </div>
                <div className="cell cell-target">
                  {language === "ar" ? "صاحب فكرة أو مشروع جديد" : "Founders with a new product idea"}
                </div>
              </div>

              <div className="comparison-row">
                <div className="cell cell-contract">
                  <span className="comp-tag care">02 — Care</span>
                </div>
                <div className="cell cell-goal">
                  {language === "ar" ? "الحفاظ على المشروع وتحسين استقراره وأمانه 24/7" : "Proactive 24/7 stability, monitoring, and security"}
                </div>
                <div className="cell cell-target">
                  {language === "ar" ? "من لديه مشروع شغال بالفعل" : "Businesses with an active running system"}
                </div>
              </div>

              <div className="comparison-row featured-comp-row">
                <div className="cell cell-contract">
                  <span className="comp-tag grow">03 — Grow</span>
                </div>
                <div className="cell cell-goal">
                  {language === "ar" ? "تشغيل + صيانة + تطوير ميزات ونمو مستمر" : "Full operations + maintenance + continuous feature scaling"}
                </div>
                <div className="cell cell-target">
                  {language === "ar" ? "شركة تبحث عن فريق Tech هندسي متكامل" : "Companies requiring an ongoing dedicated tech team"}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
