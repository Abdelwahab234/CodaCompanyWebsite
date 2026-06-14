"use client";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { ArrowRight, ArrowLeft } from "lucide-react";
import ProjectModal, { ProjectType } from "./ProjectModal";
import { useLanguage } from "@/context/LanguageContext";

const DUMMY_PROJECTS: ProjectType[] = [
  {
    "id": 1,
    "tag": {
      "ar": "مشروع جديد",
      "en": "New Project"
    },
    "name": {
      "ar": "masarat project",
      "en": "masarat project"
    },
    "desc": {
      "ar": "تصميم وتطوير موقع إلكتروني احترافي ثنائي اللغة (العربية / الإنجليزية) لشركة Mode...",
      "en": "Design and development of a professional bilingual (Arabic/English) website for ..."
    },
    "longDesc": {
      "ar": "تصميم وتطوير موقع إلكتروني احترافي ثنائي اللغة (العربية / الإنجليزية) لشركة Modern Development Contracting، إحدى الشركات الرائدة في المملكة العربية السعودية والمتخصصة في الحلول الهندسية المتكاملة، وشبكات الغاز المركزي LPG، وأنظمة كشف التسرب والحماية.\n\nأبرز المميزات:\n\n• تصميم احترافي يعكس هوية الشركة ويعزز حضورها الرقمي.\n• دعم كامل للغتين العربية والإنجليزية.\n• تصميم متجاوب يعمل بكفاءة على جميع الأجهزة والشاشات.\n• صفحات خدمات متخصصة لعرض الحلول الهندسية وأنظمة الغاز.\n• نماذج تواصل واستفسارات لزيادة فرص الحصول على العملاء المحتملين.\n\nmasaratgas.com < link",
      "en": "Design and development of a professional bilingual (Arabic/English) website for Modern Development Contracting, a leading company in Saudi Arabia specializing in integrated engineering solutions, LPG central gas networks, and leak detection and protection systems.\n\nKey Features:\n\n• Professional design reflecting the company's identity and enhancing its digital presence.\n• Full support for Arabic and English languages.\n• Responsive design performing efficiently across all devices and screens.\n• Specialized service pages showcasing engineering solutions and gas systems.\n• Contact and inquiry forms to increase lead generation opportunities.\n\nmasaratgas.com < link"
    },
    "pills": [
      "Next.js",
      "React",
      "Node.js"
    ],
    "images": [
      "/projects/masarat%20project/Screenshot%202026-06-09%20101556.png",
      "/projects/masarat%20project/Screenshot%202026-06-09%20101613.png",
      "/projects/masarat%20project/Screenshot%202026-06-09%20101646.png",
      "/projects/masarat%20project/Screenshot%202026-06-09%20101656.png",
      "/projects/masarat%20project/Screenshot%202026-06-09%20101711.png",
      "/projects/masarat%20project/Screenshot%202026-06-09%20101719.png",
      "/projects/masarat%20project/Screenshot%202026-06-09%20101731.png",
      "/projects/masarat%20project/Screenshot%202026-06-09%20101737.png",
      "/projects/masarat%20project/Screenshot%202026-06-09%20101749.png",
      "/projects/masarat%20project/Screenshot%202026-06-09%20101757.png",
      "/projects/masarat%20project/Screenshot%202026-06-09%20101811.png",
      "/projects/masarat%20project/Screenshot%202026-06-09%20101822.png",
      "/projects/masarat%20project/Screenshot%202026-06-09%20101828.png",
      "/projects/masarat%20project/Screenshot%202026-06-09%20101837.png",
      "/projects/masarat%20project/Screenshot%202026-06-09%20101844.png",
      "/projects/masarat%20project/Screenshot%202026-06-09%20101852.png",
      "/projects/masarat%20project/Screenshot%202026-06-09%20101900.png",
      "/projects/masarat%20project/Screenshot%202026-06-09%20101906.png",
      "/projects/masarat%20project/Screenshot%202026-06-09%20101913.png",
      "/projects/masarat%20project/Screenshot%202026-06-09%20101920.png",
      "/projects/masarat%20project/Screenshot%202026-06-09%20101930.png",
      "/projects/masarat%20project/Screenshot%202026-06-09%20101935.png",
      "/projects/masarat%20project/Screenshot%202026-06-09%20101942.png",
      "/projects/masarat%20project/Screenshot%202026-06-09%20101947.png",
      "/projects/masarat%20project/Screenshot%202026-06-09%20101953.png",
      "/projects/masarat%20project/Screenshot%202026-06-09%20102001.png",
      "/projects/masarat%20project/Screenshot%202026-06-09%20102012.png",
      "/projects/masarat%20project/Screenshot%202026-06-09%20102018.png",
      "/projects/masarat%20project/Screenshot%202026-06-09%20102025.png",
      "/projects/masarat%20project/Screenshot%202026-06-09%20102040.png"
    ],
    "link": null
  },
  {
    "id": 2,
    "tag": {
      "ar": "مشروع جديد",
      "en": "New Project"
    },
    "name": {
      "ar": "golden HOTELS GIZA",
      "en": "golden HOTELS GIZA"
    },
    "desc": {
      "ar": "منصة متكاملة لإدارة الفنادق والحجوزات الإلكترونية تتيح للعملاء استعراض الغرف، إج...",
      "en": "A comprehensive platform for hotel management and online booking, allowing custo..."
    },
    "longDesc": {
      "ar": "منصة متكاملة لإدارة الفنادق والحجوزات الإلكترونية تتيح للعملاء استعراض الغرف، إجراء الحجوزات، رفع المستندات المطلوبة، وإتمام الدفع الإلكتروني بشكل آمن.\n\nالمميزات الرئيسية:\n\n• دعم اللغتين العربية والإنجليزية.\n• عرض الغرف مع الصور والأسعار والمميزات.\n• نظام حجز متكامل مع التحقق من التوفر وإدارة المواعيد.\n• احتساب رسوم إضافية تلقائياً حسب عدد النزلاء.\n• رفع جواز السفر أثناء الحجز.\n• الموافقة على الشروط والأحكام قبل تأكيد الحجز.\n• الدفع الإلكتروني عبر Visa وMastercard.\n• لوحة خاصة للعميل لإدارة الحجوزات ومتابعة حالتها.\n\nالتقنيات المستخدمة:\nNestJS - Node.js - TypeScript - GraphQL - PostgreSQL - WebSockets - Tailwind CSS",
      "en": "A comprehensive platform for hotel management and online booking, allowing customers to browse rooms, make reservations, upload required documents, and securely complete online payments.\n\nKey Features:\n\n• Bilingual support (Arabic & English).\n• Room listings with images, prices, and amenities.\n• Integrated booking system with availability checks and scheduling.\n• Automatic calculation of extra fees based on guest count.\n• Passport upload during the booking process.\n• Acceptance of terms and conditions prior to reservation.\n• Secure online payments via Visa and Mastercard.\n• Dedicated customer dashboard to manage and track bookings.\n\nTechnologies Used:\nNestJS - Node.js - TypeScript - GraphQL - PostgreSQL - WebSockets - Tailwind CSS"
    },
    "pills": [
      "Next.js",
      "React",
      "Node.js"
    ],
    "images": [
      "/projects/golden%20HOTELS%20GIZA/WhatsApp%20Image%202026-05-07%20at%207.31.15%20PM%20(1).jpeg",
      "/projects/golden%20HOTELS%20GIZA/WhatsApp%20Image%202026-05-07%20at%207.31.15%20PM%20(2).jpeg",
      "/projects/golden%20HOTELS%20GIZA/WhatsApp%20Image%202026-05-07%20at%207.31.15%20PM%20(3).jpeg",
      "/projects/golden%20HOTELS%20GIZA/WhatsApp%20Image%202026-05-07%20at%207.31.15%20PM%20(4).jpeg",
      "/projects/golden%20HOTELS%20GIZA/WhatsApp%20Image%202026-05-07%20at%207.31.16%20PM%20(1).jpeg",
      "/projects/golden%20HOTELS%20GIZA/WhatsApp%20Image%202026-05-07%20at%207.31.16%20PM%20(2).jpeg",
      "/projects/golden%20HOTELS%20GIZA/WhatsApp%20Image%202026-05-07%20at%207.31.16%20PM.jpeg",
      "/projects/golden%20HOTELS%20GIZA/WhatsApp%20Image%202026-05-07%20at%207.31.17%20PM%20(2).jpeg",
      "/projects/golden%20HOTELS%20GIZA/WhatsApp%20Image%202026-05-07%20at%207.31.17%20PM%20(3).jpeg",
      "/projects/golden%20HOTELS%20GIZA/WhatsApp%20Image%202026-05-07%20at%207.31.17%20PM%20(4).jpeg",
      "/projects/golden%20HOTELS%20GIZA/WhatsApp%20Image%202026-05-07%20at%207.31.17%20PM%20(5).jpeg",
      "/projects/golden%20HOTELS%20GIZA/WhatsApp%20Image%202026-05-07%20at%207.32.34%20PM.jpeg",
      "/projects/golden%20HOTELS%20GIZA/WhatsApp%20Image%202026-05-07%20at%207.32.55%20PM.jpeg",
      "/projects/golden%20HOTELS%20GIZA/WhatsApp%20Image%202026-05-07%20at%207.33.12%20PM.jpeg"
    ],
    "link": null
  },
  {
    "id": 3,
    "tag": {
      "ar": "مشروع جديد",
      "en": "New Project"
    },
    "name": {
      "ar": "CAPTIN MOHAMMED",
      "en": "CAPTIN MOHAMMED"
    },
    "desc": {
      "ar": "موقع إلكتروني رياضي احترافي للمدرب كابتن محمد، مصمم لمساعدة العملاء في الوصول لأ...",
      "en": "A professional sports website for Coach Captin Mohammed, designed to help client..."
    },
    "longDesc": {
      "ar": "موقع إلكتروني رياضي احترافي للمدرب كابتن محمد، مصمم لمساعدة العملاء في الوصول لأهدافهم الصحية والبدنية من خلال خطط غذائية مخصصة وبرامج تدريبية فعالة.\n\nالمميزات الرئيسية:\n\n• حجز الاستشارات الرياضية والغذائية.\n• عرض باقات التدريب والخطط المختلفة.\n• نظام حجز مرن مع التقويم وتحديد المواعيد.\n• لوحة تحكم لإدارة المواعيد وتتبع تقدم المشتركين.\n• ربط مباشر مع الواتساب لتسهيل التواصل.\n• الدفع الإلكتروني عبر Visa وMastercard.\n• لوحة تحكم خاصة للعملاء لإدارة اشتراكاتهم ومتابعة تطورهم.\n\nlink > https://captin-mohammed.vercel.app/",
      "en": "A professional sports website for Coach Captin Mohammed, designed to help clients reach their fitness and health goals through personalized meal plans and effective workout programs.\n\nKey Features:\n\n• Booking for sports and nutritional consultations.\n• Display of various training packages and plans.\n• Flexible booking system with calendar and scheduling.\n• Dashboard to manage appointments and track trainee progress.\n• Direct WhatsApp integration for easy communication.\n• Secure online payment via Visa and Mastercard.\n• Dedicated client dashboard to manage subscriptions and monitor progress.\n\nlink > https://captin-mohammed.vercel.app/"
    },
    "pills": [
      "Next.js",
      "React",
      "Node.js"
    ],
    "images": [
      "/projects/CAPTIN%20MOHAMMED/Screenshot%202026-06-13%20140236.png",
      "/projects/CAPTIN%20MOHAMMED/Screenshot%202026-06-13%20140256.png",
      "/projects/CAPTIN%20MOHAMMED/Screenshot%202026-06-13%20140303.png",
      "/projects/CAPTIN%20MOHAMMED/Screenshot%202026-06-13%20140309.png",
      "/projects/CAPTIN%20MOHAMMED/Screenshot%202026-06-13%20140323.png",
      "/projects/CAPTIN%20MOHAMMED/Screenshot%202026-06-13%20140334.png",
      "/projects/CAPTIN%20MOHAMMED/Screenshot%202026-06-13%20140835.png",
      "/projects/CAPTIN%20MOHAMMED/Screenshot%202026-06-13%20140932.png",
      "/projects/CAPTIN%20MOHAMMED/Screenshot%202026-06-13%20140939.png"
    ],
    "link": "https://captin-mohammed.vercel.app/"
  },
  {
    "id": 4,
    "tag": {
      "ar": "مشروع جديد",
      "en": "New Project"
    },
    "name": {
      "ar": "Store Main",
      "en": "Store Main"
    },
    "desc": {
      "ar": "نظام إدارة المنتجات للمتاجر الصغيرة والبائعين الأفراد، يتيح للمديرين إنشاء حسابا...",
      "en": "A product management system for small stores and individual sellers, allowing ma..."
    },
    "longDesc": {
      "ar": "نظام إدارة المنتجات للمتاجر الصغيرة والبائعين الأفراد، يتيح للمديرين إنشاء حسابات، تسجيل الدخول، وإدارة المنتجات بكل سهولة.\n\nالمميزات الرئيسية:\n\n• واجهة سهلة الاستخدام للمديرين.\n• إنشاء الحسابات وإدارة الصلاحيات.\n• إضافة وتعديل وحذف المنتجات بسهولة.\n• البحث والتصفية الذكية للمنتجات.\n• تحسين تجربة المستخدم وسهولة التنقل.\n• تصميم متجاوب يعمل بكفاءة على جميع الأجهزة.",
      "en": "A product management system for small stores and individual sellers, allowing managers to easily create accounts, log in, and manage products.\n\nKey Features:\n\n• User-friendly interface for managers.\n• Account creation and permissions management.\n• Easy addition, modification, and deletion of products.\n• Smart search and filtering for products.\n• Enhanced user experience and easy navigation.\n• Responsive design performing efficiently on all devices."
    },
    "pills": [
      "Next.js",
      "React",
      "Node.js"
    ],
    "images": [
      "/projects/Store%20Main/Screenshot%202025-11-12%20182144.png",
      "/projects/Store%20Main/Screenshot%202025-11-12%20182149.png",
      "/projects/Store%20Main/Screenshot%202025-11-12%20182157.png",
      "/projects/Store%20Main/Screenshot%202025-11-12%20182203.png",
      "/projects/Store%20Main/Screenshot%202025-11-12%20182214.png",
      "/projects/Store%20Main/Screenshot%202025-11-12%20182219.png",
      "/projects/Store%20Main/Screenshot%202025-11-12%20182232.png",
      "/projects/Store%20Main/Screenshot%202025-11-12%20182247.png"
    ],
    "link": null
  },
  {
    "id": 5,
    "tag": {
      "ar": "مشروع جديد",
      "en": "New Project"
    },
    "name": {
      "ar": "caffe Landing",
      "en": "caffe Landing"
    },
    "desc": {
      "ar": "تصميم صفحة هبوط أنيق وعصري لمقهى يقدم القهوة الباردة ومشروبات أخرى\n\nlink > https...",
      "en": "An elegant and modern landing page design for a coffee shop offering cold brew a..."
    },
    "longDesc": {
      "ar": "تصميم صفحة هبوط أنيق وعصري لمقهى يقدم القهوة الباردة ومشروبات أخرى\n\nlink > https://coffee-landing-iota-mocha.vercel.app/",
      "en": "An elegant and modern landing page design for a coffee shop offering cold brew and other beverages.\n\nlink > https://coffee-landing-iota-mocha.vercel.app/"
    },
    "pills": [
      "Next.js",
      "React",
      "Node.js"
    ],
    "images": [
      "/projects/caffe%20Landing/Screenshot%202026-06-09%20131056.png",
      "/projects/caffe%20Landing/Screenshot%202026-06-09%20131103.png",
      "/projects/caffe%20Landing/Screenshot%202026-06-09%20131112.png",
      "/projects/caffe%20Landing/Screenshot%202026-06-09%20131122.png",
      "/projects/caffe%20Landing/Screenshot%202026-06-09%20131131.png",
      "/projects/caffe%20Landing/Screenshot%202026-06-09%20131137.png"
    ],
    "link": "https://coffee-landing-iota-mocha.vercel.app/"
  },
  {
    "id": 6,
    "tag": {
      "ar": "مشروع جديد",
      "en": "New Project"
    },
    "name": {
      "ar": "liprary managment",
      "en": "liprary managment"
    },
    "desc": {
      "ar": "نظام متكامل لإدارة المكتبات الرقمية تم تطويره باستخدام Java Swing و SQL Server، ...",
      "en": "A comprehensive digital library management system developed using Java Swing and..."
    },
    "longDesc": {
      "ar": "نظام متكامل لإدارة المكتبات الرقمية تم تطويره باستخدام Java Swing و SQL Server، ويوفر إدارة كاملة للكتب والمؤلفين ودور النشر من خلال واجهة سهلة الاستخدام وأداء موثوق.\n\nأبرز المميزات:\n\n• لوحة تحكم حديثة وسهلة الاستخدام.\n• نظام تسجيل دخول وصلاحيات آمن.\n• إدارة كاملة للكتب والمؤلفين والناشرين.\n• محرك بحث متقدم متعدد المعايير.\n• تقارير وإحصائيات تفصيلية.\n• نظام نسخ احتياطي وحماية للبيانات.",
      "en": "A comprehensive digital library management system developed using Java Swing and SQL Server, providing full management of books, authors, and publishers through a user-friendly interface and reliable performance.\n\nKey Features:\n\n• Modern and easy-to-use dashboard.\n• Secure login and permissions system.\n• Full management of books, authors, and publishers.\n• Advanced multi-criteria search engine.\n• Detailed reports and statistics.\n• Data backup and protection system."
    },
    "pills": [
      "Next.js",
      "React",
      "Node.js"
    ],
    "images": [
      "/projects/liprary%20managment/Screenshot%202026-02-16%20022158.png",
      "/projects/liprary%20managment/Screenshot%202026-03-12%20111126.png",
      "/projects/liprary%20managment/Screenshot%202026-03-12%20111227.png"
    ],
    "link": null
  }
];

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState<ProjectType | null>(null);
  const { t, language } = useLanguage();

  return (
    <>
      <section id="projects">
        <div className="proj-hdr">
          <div data-aos="fade-up">
            <div className="eye">{t('projects.badge')}</div>
            <h2 className="sec-title">
              {t('projects.title1')} <span className="green-line">{t('projects.title2')}</span>
            </h2>
          </div>
          <div className="proj-hdr-actions" data-aos="fade-right">
            <p className="sec-sub" style={{ maxWidth: "400px", margin: 0 }}>
              {t('projects.desc')}
            </p>
            <div className="swiper-custom-nav">
              <button className="swiper-prev"><ArrowRight size={20} /></button>
              <button className="swiper-next"><ArrowLeft size={20} /></button>
            </div>
          </div>
        </div>

        <div className="proj-carousel" data-aos="fade-up" data-aos-delay="200">
          <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            spaceBetween={30}
            slidesPerView={1.2}
            navigation={{
              nextEl: '.swiper-next',
              prevEl: '.swiper-prev',
            }}
            breakpoints={{
              640: { slidesPerView: 1.5 },
              1024: { slidesPerView: 2.5 },
              1400: { slidesPerView: 3.2 },
            }}
          >
            {DUMMY_PROJECTS.map((proj) => (
              <SwiperSlide key={proj.id}>
                <div 
                  className="proj-card" 
                  onClick={() => setSelectedProject(proj)}
                >
                  {proj.images.length > 0 && (
                     <div className="proj-card-img-placeholder" style={{ background: `url('${proj.images[0]}') center/cover` }}></div>
                  )}
                  <div className="proj-card-content">
                    <span className="proj-tag">{proj.tag[language]}</span>
                    <div className="proj-name">{proj.name[language]}</div>
                    <div className="proj-desc">{proj.desc[language]}</div>
                  </div>
                  <div className="proj-hover-indicator">
                    {t('projects.explore')}
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>

      {/* MODAL */}
      <ProjectModal 
        project={selectedProject} 
        onClose={() => setSelectedProject(null)} 
      />
    </>
  );
}