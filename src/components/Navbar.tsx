"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight, Globe, Sun, Moon } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useTheme } from "@/context/ThemeContext";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { t, language, toggleLanguage } = useLanguage();
  const { theme, toggleTheme } = useTheme();

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
        <a href="#contracts" className="nav-link">{t('nav.contracts')}</a>
        <a href="#services" className="nav-link">{t('nav.services')}</a>
        <a href="#projects" className="nav-link">{t('nav.projects')}</a>
        <a href="#why-us" className="nav-link">{t('nav.whyUs')}</a>
        <a href="#trust" className="nav-link">{t('nav.trust')}</a>

        <div className="nav-controls">
          <button 
            className="nav-theme-btn" 
            onClick={toggleTheme}
            title={theme === 'dark' ? t('nav.themeLight') : t('nav.themeDark')}
            aria-label={theme === 'dark' ? t('nav.themeLight') : t('nav.themeDark')}
          >
            {theme === 'dark' ? (
              <Sun size={19} className="theme-icon sun" />
            ) : (
              <Moon size={19} className="theme-icon moon" />
            )}
          </button>

          <button className="nav-lang-btn" onClick={toggleLanguage}>
            <Globe size={18} />
            <span>{language === 'ar' ? 'EN' : 'عربي'}</span>
          </button>
        </div>

        <a href="#contact" className="cta-button primary">
          {t('nav.contact')}
        </a>
      </div>

      <div className="mobile-header-actions">
        <button 
          className="mobile-theme-btn" 
          onClick={toggleTheme}
          aria-label={theme === 'dark' ? t('nav.themeLight') : t('nav.themeDark')}
        >
          {theme === 'dark' ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        <button className="mobile-menu-btn" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
          {mobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`mobile-menu ${mobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-nav">
          <a href="#contracts" onClick={() => setMobileMenuOpen(false)}>{t('nav.contracts')}</a>
          <a href="#services" onClick={() => setMobileMenuOpen(false)}>{t('nav.services')}</a>
          <a href="#projects" onClick={() => setMobileMenuOpen(false)}>{t('nav.projects')}</a>
          <a href="#why-us" onClick={() => setMobileMenuOpen(false)}>{t('nav.whyUs')}</a>
          <a href="#trust" onClick={() => setMobileMenuOpen(false)}>{t('nav.trust')}</a>
          
          <div className="mobile-nav-actions" style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '15px', width: '100%' }}>
            <div style={{ display: 'flex', gap: '10px', width: '100%' }}>
              <button 
                className="mobile-theme" 
                onClick={toggleTheme}
                style={{ flex: 1, padding: '12px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '10px', color: 'var(--white)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', cursor: 'pointer', fontWeight: 600 }}
              >
                {theme === 'dark' ? <Sun size={18} /> : <Moon size={18} />}
                <span>{theme === 'dark' ? t('nav.themeLight') : t('nav.themeDark')}</span>
              </button>

              <button 
                className="mobile-lang" 
                onClick={() => { toggleLanguage(); setMobileMenuOpen(false); }}
                style={{ flex: 1, padding: '12px', background: 'var(--card)', border: '1px solid var(--border)', borderRadius: '10px', color: 'var(--white)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', cursor: 'pointer', fontWeight: 600 }}
              >
                <Globe size={18} />
                <span>{language === 'ar' ? 'English' : 'العربية'}</span>
              </button>
            </div>
            
            <a href="#contact" className="cta-button primary full-width" onClick={() => setMobileMenuOpen(false)}>
              {t('nav.contact')} <ArrowUpRight size={18}/>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
