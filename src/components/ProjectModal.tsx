"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import { 
  X, 
  ChevronLeft, 
  ChevronRight, 
  ExternalLink, 
  Maximize2, 
  Minimize2, 
  Image as ImageIcon,
  CheckCircle2
} from "lucide-react";
import { useLanguage } from "@/context/LanguageContext";

export type Translatable = { ar: string; en: string };

export type ProjectType = {
  id: string | number;
  tag: Translatable;
  name: Translatable;
  desc: Translatable;
  longDesc?: Translatable;
  pills: string[];
  images: string[];
  link?: string | null;
};

interface ProjectModalProps {
  project: ProjectType | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  const [currentImgIndex, setCurrentImgIndex] = useState(0);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const { t, language } = useLanguage();
  const thumbnailStripRef = useRef<HTMLDivElement>(null);
  const touchStartXRef = useRef<number | null>(null);

  // Reset image index when project opens/changes
  useEffect(() => {
    if (project) {
      document.body.style.overflow = "hidden";
      setCurrentImgIndex(0);
      setIsFullscreen(false);
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [project]);

  const totalImages = project?.images?.length || 0;

  const nextImg = useCallback(() => {
    if (totalImages === 0) return;
    setCurrentImgIndex((prev) => (prev + 1) % totalImages);
  }, [totalImages]);

  const prevImg = useCallback(() => {
    if (totalImages === 0) return;
    setCurrentImgIndex((prev) => (prev - 1 + totalImages) % totalImages);
  }, [totalImages]);

  // Keyboard navigation (Escape to close, Arrows to navigate)
  useEffect(() => {
    if (!project) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        if (isFullscreen) {
          setIsFullscreen(false);
        } else {
          onClose();
        }
      } else if (e.key === "ArrowRight") {
        language === "ar" ? prevImg() : nextImg();
      } else if (e.key === "ArrowLeft") {
        language === "ar" ? nextImg() : prevImg();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [project, isFullscreen, language, nextImg, prevImg, onClose]);

  // Auto-scroll the active thumbnail into view
  useEffect(() => {
    if (thumbnailStripRef.current) {
      const activeThumb = thumbnailStripRef.current.children[currentImgIndex] as HTMLElement;
      if (activeThumb) {
        activeThumb.scrollIntoView({
          behavior: "smooth",
          block: "nearest",
          inline: "center",
        });
      }
    }
  }, [currentImgIndex]);

  // Touch Swipe Handlers for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    touchStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (touchStartXRef.current === null) return;
    const touchEndX = e.changedTouches[0].clientX;
    const diff = touchStartXRef.current - touchEndX;

    // Minimum swipe threshold 40px
    if (Math.abs(diff) > 40) {
      if (diff > 0) {
        // Swiped Left
        language === "ar" ? prevImg() : nextImg();
      } else {
        // Swiped Right
        language === "ar" ? nextImg() : prevImg();
      }
    }
    touchStartXRef.current = null;
  };

  if (!project) return null;

  // Format description into paragraphs and bullet points if any
  const fullDescription = project.longDesc ? project.longDesc[language] : project.desc[language];
  const descLines = fullDescription.split("\n").filter((line) => line.trim().length > 0);

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div 
        className={`modal-content ${isFullscreen ? "fullscreen-mode" : ""}`}
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar with Close and Title */}
        <div className="modal-top-bar">
          <div className="modal-header-meta">
            <span className="proj-tag">{project.tag[language]}</span>
            <h3 className="modal-heading-text">{project.name[language]}</h3>
          </div>
          <div className="modal-top-actions">
            {totalImages > 0 && (
              <button 
                type="button"
                className="modal-icon-btn" 
                onClick={() => setIsFullscreen(!isFullscreen)}
                title={isFullscreen ? "تصغير المعاينة" : "ملء الشاشة"}
                aria-label="Toggle Fullscreen"
              >
                {isFullscreen ? <Minimize2 size={18} /> : <Maximize2 size={18} />}
              </button>
            )}
            <button 
              type="button"
              className="modal-close-btn" 
              onClick={onClose}
              title="إغلاق"
              aria-label="Close modal"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Modal Body: Gallery + Info */}
        <div className="modal-body-layout">
          {/* Gallery Section */}
          <div className="modal-gallery-pane">
            {totalImages > 0 ? (
              <div 
                className="main-preview-container"
                onTouchStart={handleTouchStart}
                onTouchEnd={handleTouchEnd}
              >
                {/* Main Large Image */}
                <div className="main-image-viewport">
                  <img
                    src={project.images[currentImgIndex]}
                    alt={`${project.name[language]} - ${currentImgIndex + 1}`}
                    className="main-display-img"
                  />

                  {/* Image Counter Badge */}
                  <div className="gallery-counter-pill">
                    <ImageIcon size={13} />
                    <span>{currentImgIndex + 1} / {totalImages}</span>
                  </div>

                  {/* Navigation Arrows on Top of Image */}
                  {totalImages > 1 && (
                    <>
                      <button 
                        type="button" 
                        className="floating-nav-arrow arrow-prev"
                        onClick={prevImg}
                        aria-label="Previous Image"
                      >
                        <ChevronRight size={24} />
                      </button>
                      <button 
                        type="button" 
                        className="floating-nav-arrow arrow-next"
                        onClick={nextImg}
                        aria-label="Next Image"
                      >
                        <ChevronLeft size={24} />
                      </button>
                    </>
                  )}
                </div>

                {/* Horizontal Scrollable Thumbnails Strip */}
                {totalImages > 1 && (
                  <div className="thumbnail-gallery-wrapper">
                    <div className="thumbnail-strip" ref={thumbnailStripRef}>
                      {project.images.map((imgUrl, i) => (
                        <button
                          key={i}
                          type="button"
                          className={`thumb-btn ${i === currentImgIndex ? "active" : ""}`}
                          onClick={() => setCurrentImgIndex(i)}
                          aria-label={`Go to slide ${i + 1}`}
                        >
                          <img 
                            src={imgUrl} 
                            alt={`Thumbnail ${i + 1}`} 
                            className="thumb-img" 
                            loading="lazy" 
                          />
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <div className="placeholder-image-box">
                <ImageIcon size={32} />
                <span>{t("projects.noImages")}</span>
              </div>
            )}
          </div>

          {/* Details Section */}
          <div className="modal-details-pane">
            {/* Description / Feature Highlights */}
            <div className="modal-description-content">
              {descLines.map((line, idx) => {
                const trimmed = line.trim();

                // If it mentions technologies or tech stack, filter it out
                if (
                  trimmed.includes("التقنيات") || 
                  trimmed.toLowerCase().includes("technologies") ||
                  trimmed.includes("NestJS")
                ) {
                  return null;
                }

                // Check if it's a bullet point
                if (trimmed.startsWith("•") || trimmed.startsWith("-") || trimmed.startsWith("*")) {
                  return (
                    <div key={idx} className="desc-bullet-row">
                      <CheckCircle2 size={16} className="bullet-check" />
                      <span>{trimmed.replace(/^[•\-*]\s*/, "")}</span>
                    </div>
                  );
                }
                // Check if it's a section title
                if (trimmed.includes("المميزات") || trimmed.includes("Features")) {
                  return (
                    <h4 key={idx} className="desc-section-heading">
                      {trimmed}
                    </h4>
                  );
                }
                // If it contains a raw link
                if (trimmed.toLowerCase().includes("http") || trimmed.includes(".com") || trimmed.includes("link")) {
                  return null; // Rendered via the CTA button below
                }
                return (
                  <p key={idx} className="desc-paragraph">
                    {trimmed}
                  </p>
                );
              })}
            </div>

            {/* Direct Project Link Button */}
            {project.link && (
              <div className="modal-cta-wrap">
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-live-btn"
                >
                  <span>{t("projects.visit")}</span>
                  <ExternalLink size={18} />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
