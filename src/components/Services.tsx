import { Code2, Smartphone, MonitorPlay, Server } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Services() {
  const { t } = useLanguage();
  return (
    <section id="services">
      <div data-aos="fade-up">
        <div className="eye">{t('services.badge')}</div>
        <h2 className="sec-title">
          {t('services.title1')} <span className="green-line">{t('services.title2')}</span>
        </h2>
        <p className="sec-sub">
          {t('services.desc')}
        </p>
      </div>

      <div className="srv-grid">
        {/* Web */}
        <div className="srv-card" data-aos="fade-up" data-aos-delay="100">
          <div className="srv-icon"><Code2 size={48} strokeWidth={1.5} color="var(--green)"/></div>
          <div className="srv-name">{t('services.web.title')}</div>
          <div className="srv-desc">{t('services.web.desc')}</div>
        </div>
        {/* Mobile */}
        <div className="srv-card" data-aos="fade-up" data-aos-delay="200">
          <div className="srv-icon"><Smartphone size={48} strokeWidth={1.5} color="var(--green)"/></div>
          <div className="srv-name">{t('services.mobile.title')}</div>
          <div className="srv-desc">{t('services.mobile.desc')}</div>
        </div>
        {/* UI/UX */}
        <div className="srv-card" data-aos="fade-up" data-aos-delay="300">
          <div className="srv-icon"><MonitorPlay size={48} strokeWidth={1.5} color="var(--green)"/></div>
          <div className="srv-name">{t('services.uiux.title')}</div>
          <div className="srv-desc">{t('services.uiux.desc')}</div>
        </div>
        {/* Systems */}
        <div className="srv-card" data-aos="fade-up" data-aos-delay="400">
          <div className="srv-icon"><Server size={48} strokeWidth={1.5} color="var(--green)"/></div>
          <div className="srv-name">{t('services.systems.title')}</div>
          <div className="srv-desc">{t('services.systems.desc')}</div>
        </div>
      </div>
    </section>
  );
}
