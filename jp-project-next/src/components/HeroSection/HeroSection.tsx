"use client";

import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import styles from './HeroSection.module.css';

const slogans = [
  { ukr: 'СТВОРЮЄМО ПЕРЕВАГУ ДЛЯ БІЗНЕСУ', eng: 'CREATING ADVANTAGE FOR BUSINESS' },
  { ukr: 'ЮРИДИЧНА ЕКСПЕРТИЗА. БІЗНЕС-МИСЛЕННЯ. РЕЗУЛЬТАТ.', eng: 'LEGAL EXPERTISE. COMMERCIAL THINKING. RESULTS.' },
  { ukr: 'ПОРУЧ З ВАМИ НА КОЖНОМУ ЕТАПІ', eng: 'WITH YOU AT EVERY STAGE' },
  { ukr: 'ДІЄМО ШВИДКО. МИСЛИМО СТРАТЕГІЧНО.', eng: 'ACTING FAST. THINKING STRATEGICALLY.' },
  { ukr: 'РОЗУМІЄМО БІЗНЕС — ЗАХИЩАЄМО ЙОГО ІНТЕРЕСИ', eng: 'UNDERSTANDING BUSINESS — PROTECTING ITS INTERESTS' },
  { ukr: 'МІЖНАРОДНА ЕКСПЕРТИЗА. ЛОКАЛЬНЕ РІШЕННЯ.', eng: 'GLOBAL EXPERTISE. LOCAL SOLUTIONS.' }
];

const backgroundVideos = [
  "https://assets.mixkit.co/videos/preview/mixkit-business-people-working-in-an-office-4631-large.mp4",
  "https://videos.pexels.com/video-files/7821621/7821621-hd_1920_1080_30fps.mp4",
  "https://videos.pexels.com/video-files/8426045/8426045-hd_1920_1080_30fps.mp4",
  "https://assets.mixkit.co/videos/preview/mixkit-man-discussing-income-in-a-meeting-42649-large.mp4",
];

export function HeroSection() {
  const { language } = useLanguage();

  // Ініціалізація showIntro тільки на клієнті
  const [showIntro, setShowIntro] = useState(() => {
    if (typeof window === 'undefined') return false;
    return !sessionStorage.getItem('hasVisitedJustyfin');
  });

  const [introPhase, setIntroPhase] = useState<'initial' | 'name' | 'complete'>('initial');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);
  const [isVideoTransitioning, setIsVideoTransitioning] = useState(false);
  const [videoError, setVideoError] = useState(false);

  // Intro-анімація (один раз після першого монтування на клієнті)
  useEffect(() => {
    // Якщо вже не на клієнті або intro не потрібен — виходимо
    if (typeof window === 'undefined' || !showIntro) return;

    // Відкладаємо setShowIntro, щоб уникнути попередження
    setTimeout(() => {
      setIntroPhase('name');

      const completeTimer = setTimeout(() => {
        setIntroPhase('complete');
        sessionStorage.setItem('hasVisitedJustyfin', 'true');
        setShowIntro(false);
      }, 4000); // 1500 + 2500 = 4000 мс

      return () => clearTimeout(completeTimer);
    }, 1500);
  }, [showIntro]);

  // Слайдер слоганів
  useEffect(() => {
    if (typeof window === 'undefined' || showIntro) return;

    const interval = setInterval(() => {
      setIsTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % slogans.length);
        setIsTransitioning(false);
      }, 400);
    }, 4000);

    return () => clearInterval(interval);
  }, [showIntro]);

  // Слайдер відео
  useEffect(() => {
    if (typeof window === 'undefined' || showIntro) return;

    const videoInterval = setInterval(() => {
      setIsVideoTransitioning(true);
      setTimeout(() => {
        setCurrentVideoIndex((prev) => (prev + 1) % backgroundVideos.length);
        setIsVideoTransitioning(false);
      }, 1500);
    }, 8000);

    return () => clearInterval(videoInterval);
  }, [showIntro]);

  // Серверний фейк (щоб уникнути hydration mismatch)
  if (typeof window === 'undefined') {
    return (
      <section className={styles.hero}>
        <div className={styles.videoBackground}>
          {/* placeholder */}
        </div>
        <div className={styles.content}>
          <h1 className={styles.heading}>
            {language === 'ukr' ? slogans[0].ukr : slogans[0].eng}
          </h1>
        </div>
      </section>
    );
  }

  if (showIntro) {
    return (
      <section className={styles.hero}>
        <div className={styles.introBackground}>
          <div
            className={`${styles.colorBlockBlue} ${
              introPhase === 'initial' ? styles.phaseInitial :
              introPhase === 'complete' ? styles.phaseComplete : ''
            }`}
          />
          <div
            className={`${styles.colorBlockBeige} ${
              introPhase === 'initial' ? styles.phaseInitial :
              introPhase === 'complete' ? styles.phaseComplete : ''
            }`}
          />
        </div>

        <div className={styles.content}>
          {introPhase !== 'initial' && (
            <div className={`${styles.introContent} ${styles.introContentVisible}`}>
              <h1 className={styles.introCompanyName}>JUSTYFIN PARTNERS</h1>
            </div>
          )}
        </div>
      </section>
    );
  }

  return (
    <section className={styles.hero}>
      <div className={styles.videoBackground}>
        <video
          key={currentVideoIndex}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className={`${styles.video} ${isVideoTransitioning ? styles.videoFadeOut : styles.videoFadeIn}`}
          onError={() => {
            setVideoError(true);
            setCurrentVideoIndex((prev) => (prev + 1) % backgroundVideos.length);
          }}
          onLoadedMetadata={() => setVideoError(false)}
        >
          <source src={backgroundVideos[currentVideoIndex]} type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className={styles.overlay} />

        {videoError && (
          <div className={styles.videoFallback}>
            <Image
              src="/fallback-business-office.jpg"
              alt="Business office background"
              width={300}
              height={300}
              className={styles.image}
            />
          </div>
        )}
      </div>

      <div className={styles.content}>
        <div className={styles.textContainer}>
          <h1
            className={`${styles.heading} ${isTransitioning ? styles.headingExit : styles.headingEnter}`}
          >
            {language === 'ukr' ? slogans[currentIndex].ukr : slogans[currentIndex].eng}
          </h1>

          <div className={styles.pagination}>
            {slogans.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsTransitioning(true);
                  setTimeout(() => {
                    setCurrentIndex(index);
                    setIsTransitioning(false);
                  }, 400);
                }}
                className={`${styles.paginationDot} ${index === currentIndex ? styles.active : ''}`}
                aria-label={`Go to slogan ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.scrollIndicatorInner}>
          <div className={styles.scrollIndicatorDot} />
        </div>
      </div>
    </section>
  );
}