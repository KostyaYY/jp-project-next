"use client";
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { useLanguage } from '@/context/LanguageContext';
import styles from './HeroSection.module.css';

const slogans = [
  { 
    ukr: 'СТВОРЮЄМО ПЕРЕВАГУ ДЛЯ БІЗНЕСУ', 
    eng: 'CREATING ADVANTAGE FOR BUSINESS',
    imageUrl: 'https://images.unsplash.com/photo-1769739576456-0aefcff3f4b9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb3Jwb3JhdGUlMjBzdHJhdGVneSUyMGJvYXJkcm9vbSUyMG1lZXRpbmd8ZW58MXx8fHwxNzcyMDUzMjYyfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  { 
    ukr: 'ЮРИДИЧНА ЕКСПЕРТИЗА. БІЗНЕС-МИСЛЕННЯ. РЕЗУЛЬТАТ.', 
    eng: 'LEGAL EXPERTISE. COMMERCIAL THINKING. RESULTS.',
    imageUrl: 'https://images.unsplash.com/photo-1528747008803-f9f5cc8f1a64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsZWdhbCUyMGV4cGVydGlzZSUyMHByb2Zlc3Npb25hbCUyMG9mZmljZXxlbnwxfHx8fDE3NzIwNTMyNTh8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  { 
    ukr: 'ПОРУЧ З ВАМИ НА КОЖНОМУ ЕТАПІ', 
    eng: 'WITH YOU AT EVERY STAGE',
    imageUrl: 'https://images.unsplash.com/photo-1758518725921-1eb74ed293be?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHBhcnRuZXJzaGlwJTIwdGVhbXdvcmslMjBvZmZpY2V8ZW58MXx8fHwxNzcyMDUzMjU4fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  { 
    ukr: 'ДІЄМО ШВИДКО. МИСЛИМО СТРАТЕГІЧНО.', 
    eng: 'ACTING FAST. THINKING STRATEGICALLY.',
    imageUrl: 'https://images.unsplash.com/photo-1714974528737-3e6c7e4d11af?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmYXN0JTIwYnVzaW5lc3MlMjBzdHJhdGVneSUyMGRpc2N1c3Npb258ZW58MXx8fHwxNzcyMDUzMjU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  { 
    ukr: 'РОЗУМІЄМО БІЗНЕС — ЗАХИЩАЄМО ЙОГО ІНТЕРЕСИ', 
    eng: 'UNDERSTANDING BUSINESS — PROTECTING ITS INTERESTS',
    imageUrl: 'https://images.unsplash.com/photo-1565688527174-775059ac429c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxidXNpbmVzcyUyMHByb3RlY3Rpb24lMjBjb25zdWx0aW5nJTIwbWVldGluZ3xlbnwxfHx8fDE3NzIwNTMyNTl8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  },
  { 
    ukr: 'МІЖНАРОДНА ЕКСПЕРТИЗА. ЛОКАЛЬНЕ РІШЕННЯ.', 
    eng: 'GLOBAL EXPERTISE. LOCAL SOLUTIONS.',
    imageUrl: 'https://images.unsplash.com/photo-1767122227285-a75dced30c8a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcm5hdGlvbmFsJTIwYnVzaW5lc3MlMjBnbG9iYWwlMjBvZmZpY2V8ZW58MXx8fHwxNzcyMDUzMjU5fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral'
  }
];

export function HeroSection() {
  const { language } = useLanguage();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [imageTransitioning, setImageTransitioning] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsTransitioning(true);
      setImageTransitioning(true);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % slogans.length);
        setIsTransitioning(false);
      }, 400);
      setTimeout(() => {
        setImageTransitioning(false);
      }, 800);
    }, 4000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className={styles.hero}>
      {/* Image Background */}
      <div className={styles.videoBackground}>
        <Image
          src={slogans[currentIndex].imageUrl}
          alt={`Background for ${language === 'ukr' ? slogans[currentIndex].ukr : slogans[currentIndex].eng}`}
          fill
          sizes="100vw"
          quality={85}
          priority={currentIndex === 0} // перша картинка завантажується з пріоритетом
          className={`${styles.backgroundImage} ${imageTransitioning ? styles.imageTransition : ''}`}
        />
        <div className={styles.overlay} />
      </div>

      {/* Content */}
      <div className={styles.content}>
        <div className={styles.textContainer}>
          <h1 
            className={`${styles.heading} ${isTransitioning ? styles.headingExit : styles.headingEnter}`}
          >
            {language === 'ukr' ? slogans[currentIndex].ukr : slogans[currentIndex].eng}
          </h1>

          {/* Pagination Dots */}
          <div className={styles.pagination}>
            {slogans.map((_, index) => (
              <button
                key={index}
                onClick={() => {
                  setIsTransitioning(true);
                  setImageTransitioning(true);
                  setTimeout(() => {
                    setCurrentIndex(index);
                    setIsTransitioning(false);
                  }, 400);
                  setTimeout(() => {
                    setImageTransitioning(false);
                  }, 800);
                }}
                className={`${styles.paginationDot} ${index === currentIndex ? styles.active : ''}`}
                aria-label={`Go to slogan ${index + 1}`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className={styles.scrollIndicator}>
        <div className={styles.scrollIndicatorInner}>
          <div className={styles.scrollIndicatorDot} />
        </div>
      </div>
    </section>
  );
}