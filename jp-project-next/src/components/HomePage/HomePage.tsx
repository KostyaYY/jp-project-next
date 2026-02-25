"use client";

import Link from 'next/link';
import { HeroSection } from '@/components/HeroSection/HeroSection';
import { useLanguage } from '@/context/LanguageContext';
import { newsArticles } from '@/data/mockData';
import styles from './HomePage.module.css';

export function HomePage() {
  const { t, language } = useLanguage();

  return (
    <>
      <div className={styles.home}>
        <HeroSection />

        {/* About Section */}
        <section className={`${styles.section} ${styles.aboutSection}`}>
          <div className={styles.container}>
            <div className={styles.aboutContent}>
              <h2 className={styles.sectionLabel}>
                {t('Про нас', 'About us')}
              </h2>
              <p className={styles.aboutHeading}>
                {t(
                  'Ми змінюємо уявлення про юридичні послуги та бізнес-рішення',
                  "We're a different kind of legal and business advisory firm"
                )}
              </p>
              <Link href="/about" className={styles.aboutLink}>
                {t('Дізнатися більше', 'Learn more')}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
          </div>
        </section>

        {/* Featured News & Insights */}
        <section className={`${styles.section} ${styles.newsSection}`}>
          <div className={styles.container}>
            <div className={styles.newsHeader}>
              <h2 className={styles.newsHeading}>
                {t('Новини та аналітика', 'News & Insights')}
              </h2>
              <Link href="/news" className={styles.newsViewAll}>
                {t('Всі новини', 'View all')}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>

            <div className={styles.newsGrid}>
              {newsArticles.slice(0, 3).map((article) => (
                <Link
                  key={article.id}
                  href={`/news/${article.slug}`}
                  className={styles.newsCard}
                >
                  <div className={styles.newsContent}>
                    <p className={styles.newsDate}>
                      {new Date(article.date).toLocaleDateString(
                        language === 'ukr' ? 'uk-UA' : 'en-GB',
                        {
                          year: 'numeric',
                          month: 'long',
                          day: 'numeric'
                        }
                      )}
                    </p>
                    <h3 className={styles.newsTitle}>
                      {language === 'ukr' ? article.title.ukr : article.title.eng}
                    </h3>
                    <p className={styles.newsExcerpt}>
                      {language === 'ukr' ? article.excerpt.ukr : article.excerpt.eng}
                    </p>
                    <span className={styles.newsReadMore}>
                      {t('Читати далі', 'Read more')}
                      <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <line x1="5" y1="12" x2="19" y2="12"></line>
                        <polyline points="12 5 19 12 12 19"></polyline>
                      </svg>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* Quick Contact Section */}
        <section className={styles.quickContactSection}>
          <div className={styles.container}>
            <Link href="/contact" className={styles.quickContactContent}>
              <div className={styles.quickContactText}>
                <h2 className={styles.quickContactHeading}>
                  {t('Зв\'яжіться з нами', 'Get in touch')}
                </h2>
                <p className={styles.quickContactDescription}>
                  {t(
                    'Ми завжди раді відповісти на ваші запитання та обговорити можливості співпраці.',
                    'We are always happy to answer your questions and discuss cooperation opportunities.'
                  )}
                </p>
              </div>
              <div className={styles.quickContactArrow}>
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </div>
            </Link>
          </div>
        </section>
      </div>
    </>
  );
}