"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, language, toggleLanguage } = useLanguage();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="logo">
        <Link href="/">
          {language === 'ar' ? (
            <>كودا <span>كومباني</span></>
          ) : (
            <>Coda <span>Company</span></>
          )}
        </Link>
      </div>

      <div className="nav-desktop">
        <a href="#services" className="nav-link">{t('nav.services')}</a>
        <a href="#projects" className="nav-link">{t('nav.projects')}</a>
        <a href="#why-us" className="nav-link">{t('nav.whyUs')}</a>
        <a href="#trust" className="nav-link">{t('nav.trust')}</a>
        <button className="nav-lang-btn" onClick={toggleLanguage}>
          <Globe size={18} />
          <span>{language === 'ar' ? 'EN' : 'عربي'}</span>
        </button>
        <a href="#contact" className="cta-button primary">
          {t('nav.contact')}
        </a>
      </div>

      <div className="mobile-header-actions">
        <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-nav">
          <a href="#services" onClick={() => setMobileMenuOpen(false)}>{t('nav.services')}</a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)}>{t('nav.projects')}</a>
          <a href="#why-us" onClick={() => setMobileMenuOpen(false)}>{t('nav.whyUs')}</a>
          
          <div className="mobile-nav-actions" style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <button 
              className="mobile-lang" 
              onClick={() => { toggleLanguage(); setMobileMenuOpen(false); }}
              style={{ padding: '10px', background: 'rgba(255,255,255,0.05)', border: '1px solid #333', borderRadius: '8px', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px' }}
            >
              <Globe size={18} />
              {language === 'ar' ? 'English' : 'العربية'}
            </button>
            
            <a href="#contact" className="cta-button primary full-width" onClick={() => setMobileMenuOpen(false)}>
              {t('nav.contact')} <ArrowUpRight size={18}/>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
