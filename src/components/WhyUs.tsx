import { Search, ShieldCheck, HeadphonesIcon } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function WhyUs() {
  const { t } = useLanguage();
  return (
    <section id="why-us">
      <div data-aos="fade-up">
        <div className="eye">{t('whyUs.badge')}</div>
        <h2 className="sec-title">
          {t('whyUs.title1')} <span className="green-line">{t('whyUs.title2')}</span>
        </h2>
        <p className="sec-sub">
          {t('whyUs.desc')}
        </p>
      </div>
      <div className="why-grid">
        <div className="why-card" data-aos="fade-up" data-aos-delay="100">
          <div className="why-bg-num">01</div>
          <div className="why-icon"><Search size={40} color="var(--green)" strokeWidth={1.5} /></div>
          <div className="why-title">{t('whyUs.cards.0.title')}</div>
          <div className="why-text">
            {t('whyUs.cards.0.desc')}
          </div>
        </div>
        <div className="why-card" data-aos="fade-up" data-aos-delay="200">
          <div className="why-bg-num">02</div>
          <div className="why-icon"><ShieldCheck size={40} color="var(--green)" strokeWidth={1.5} /></div>
          <div className="why-title">{t('whyUs.cards.1.title')}</div>
          <div className="why-text">
            {t('whyUs.cards.1.desc')}
          </div>
        </div>
        <div className="why-card" data-aos="fade-up" data-aos-delay="300">
          <div className="why-bg-num">03</div>
          <div className="why-icon"><HeadphonesIcon size={40} color="var(--green)" strokeWidth={1.5} /></div>
          <div className="why-title">{t('whyUs.cards.2.title')}</div>
          <div className="why-text">
            {t('whyUs.cards.2.desc')}
          </div>
        </div>
      </div>
    </section>
  );
}