"use client";
import { X, ChevronLeft, ChevronRight, Globe } from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";
import { useState, useEffect } from "react";

export type Translatable = { ar: string; en: string };

export type ProjectType = {
  id: string | number;
  tag: Translatable;
  name: Translatable;
  desc: Translatable;
  longDesc?: Translatable;
  pills: string[];
  images: string[];
  link?: string;
};

interface ProjectModalProps {
  project: ProjectType | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const { t, language } = useLanguage();

  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
      setCurrentImgIndex(0);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  if (!project) return null;

  const nextImg = () => {
    if (project.images.length === 0) return;
    setCurrentImgIndex((prev) => (prev + 1) % project.images.length);
  };
  
  const prevImg = () => {
    if (project.images.length === 0) return;
    setCurrentImgIndex((prev) => (prev - 1 + project.images.length) % project.images.length);
  };

  return (
    <div className="modal-overlay" onClick={onClose} data-aos="fade-in">
      <div className="modal-content" onClick={(e) => e.stopPropagation()} data-aos="zoom-in" data-aos-duration="300">
        <button className="modal-close" onClick={onClose}>
          <X size={24} />
        </button>
        
        <div className="modal-body">
          <div className="modal-gallery">
            {project.images && project.images.length > 0 ? (
              <>
                <div className="modal-img-wrapper" style={{ padding: 0 }}>
                  <img 
                    src={project.images[currentImgIndex]} 
                    alt={`${project.name} - صورة ${currentImgIndex + 1}`}
                    style={{ width: '100%', height: '100%', objectFit: 'contain', background: '#111' }}
                  />
                </div>
                {project.images.length > 1 && (
                  <div className="modal-nav">
                    <button className="nav-btn" onClick={prevImg}><ChevronRight size={24}/></button>
                    <div className="nav-dots">
                      {project.images.map((_, i) => (
                        <div key={i} className={`nav-dot ${i === currentImgIndex ? 'active' : ''}`} />
                      ))}
                    </div>
                    <button className="nav-btn" onClick={nextImg}><ChevronLeft size={24}/></button>
                  </div>
                )}
              </>
            ) : (
              <div className="modal-img-wrapper">
                 <div className="placeholder-image-box">لا توجد صور</div>
              </div>
            )}
          </div>
          
          <div className="modal-info">
            <span className="proj-tag">{project.tag[language]}</span>
            <h3 className="modal-title">{project.name[language]}</h3>
            <p className="modal-desc" style={{ whiteSpace: 'pre-wrap' }}>{project.longDesc ? project.longDesc[language] : project.desc[language]}</p>
            
            {project.link && (
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="cta-button primary full-width" 
                style={{ marginTop: 'auto', textAlign: 'center', textDecoration: 'none' }}
              >
                {t('projects.visit')}
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
