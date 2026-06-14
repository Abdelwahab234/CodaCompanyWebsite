import { useLanguage } from "@/context/LanguageContext";

export default function Footer() {
  const { t, language } = useLanguage();
  return (
    <footer>
      <div className="foot-logo">
        {language === 'ar' ? <>كودا <span>كوباني</span></> : <>Coda <span>Kobani</span></>}
      </div>
      <div className="foot-sub">
        {t('hero.desc').substring(0, 50)}...
      </div>
      <div className="foot-copy">
        {t('footer.rights')}
      </div>
    </footer>
  );
}