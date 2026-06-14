import { Send } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export default function Contact() {
  const { t } = useLanguage();
  return (
    <section id="contact">
      <div className="contact-glow"></div>
      <div className="contact-inner" data-aos="zoom-in" data-aos-duration="1000">
        <div className="eye" style={{ justifyContent: "center" }}>
          {t('contact.badge')}
        </div>
        <h2 className="contact-title">
          {t('contact.title1')}
          <br />
          <span className="green-line">{t('contact.title2')}</span>
        </h2>
        <p className="contact-sub">
          {t('contact.desc')}
        </p>
        <a
          className="wa-btn"
          href="https://wa.me/201146675031"
          target="_blank"
          rel="noopener noreferrer"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          <div className="wa-icon">
            <Send size={16} color="#fff" strokeWidth={2.5} style={{ marginLeft: '-2px' }} />
          </div>
          {t('contact.form.submit')}
        </a>
        <div className="phone-num" data-aos="fade-up" data-aos-delay="300">
          +20 11 4667 5031
        </div>
      </div>
    </section>
  );
}