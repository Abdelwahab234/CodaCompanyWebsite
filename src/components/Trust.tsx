import { CheckCircle2, CalendarCheck, FileText, Handshake } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Trust() {
  const { t } = useLanguage();
  return (
    <section id="trust">
      <div data-aos="fade-up">
        <div className="eye">{t('trust.badge')}</div>
        <h2 className="sec-title">
          {t('trust.title1')} <span className="green-line">{t('trust.title2')}</span>
        </h2>
        <p className="sec-sub">
          {t('trust.desc')}
        </p>
      </div>
      <div className="trust-grid">
        <div className="trust-item" data-aos="zoom-in" data-aos-delay="100">
          <div className="trust-icon">
            <CheckCircle2 size={32} color="var(--black)" strokeWidth={2.5} />
          </div>
          <div className="trust-content">
            <div className="trust-title">{t('trust.guarantees.0.title')}</div>
            <div className="trust-text">
              {t('trust.guarantees.0.desc')}
            </div>
          </div>
        </div>
        
        <div className="trust-item" data-aos="zoom-in" data-aos-delay="200">
          <div className="trust-icon">
            <CalendarCheck size={32} color="var(--black)" strokeWidth={2.5} />
          </div>
          <div className="trust-content">
            <div className="trust-title">{t('trust.guarantees.1.title')}</div>
            <div className="trust-text">
              {t('trust.guarantees.1.desc')}
            </div>
          </div>
        </div>
        
        <div className="trust-item" data-aos="zoom-in" data-aos-delay="300">
          <div className="trust-icon">
            <FileText size={32} color="var(--black)" strokeWidth={2.5} />
          </div>
          <div className="trust-content">
            <div className="trust-title">{t('trust.guarantees.2.title')}</div>
            <div className="trust-text">
              {t('trust.guarantees.2.desc')}
            </div>
          </div>
        </div>

        <div className="trust-item" data-aos="zoom-in" data-aos-delay="400">
          <div className="trust-icon">
            <Handshake size={32} color="var(--black)" strokeWidth={2.5} />
          </div>
          <div className="trust-content">
            <div className="trust-title">{t('trust.guarantees.3.title')}</div>
            <div className="trust-text">
              {t('trust.guarantees.3.desc')}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}