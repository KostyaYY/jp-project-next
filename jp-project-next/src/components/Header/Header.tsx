'use client';

import Link from 'next/link';
import { useLanguage } from '@/context/LanguageContext';
import { useState, useEffect, useEffectEvent } from 'react';

import styles from './Header.module.css';
import { services } from '@/data/mockData';
import { useSearchParams, useRouter, usePathname } from 'next/navigation';

export function Header() {
  const { language, setLanguage, t } = useLanguage();
  const [menuOpen, setMenuOpen] = useState(false);
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  // Обробка параметра ?menu=open (наприклад, з email-розсилки чи зовнішнього посилання)
 const handleMenuParam = useEffectEvent(() => {
  setMenuOpen(true);

  const newParams = new URLSearchParams(searchParams);
  newParams.delete('menu');
  const query = newParams.toString() ? `?${newParams.toString()}` : '';
  router.replace(`/${query}`, { scroll: false });
});

useEffect(() => {
  if (searchParams.get('menu') === 'open') {
    handleMenuParam();
  }
}, [searchParams]);

  // Закривати меню при переході на іншу сторінку
const closeMenu = useEffectEvent(() => setMenuOpen(false));

useEffect(() => {
  closeMenu();
}, [pathname]);

  // Блокування скролу body при відкритому мобільному меню
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [menuOpen]);

  const menuItems = [
    { path: '/about', label: { ukr: 'Про нас', eng: 'About' } },
    { path: '/people', label: { ukr: 'Команда', eng: 'People' } },
    { path: '/news', label: { ukr: 'Новини та аналітика', eng: 'News & Insights' } },
  ];

  return (
    <>
      <header className={styles.header}>
        <div className={styles.container}>
          <div className={styles.headerInner}>
            <Link href="/" className={styles.logo}>
              JUSTYFIN PARTNERS
            </Link>

            <div className={styles.headerActions}>
              <Link href="/contact" className={styles.contactLink}>
                {t('КОНТАКТИ', 'CONTACT')}
              </Link>

              <div className={styles.langSwitcher}>
                <button
                  onClick={() => setLanguage('ukr')}
                  className={`${styles.langButton} ${language === 'ukr' ? styles.active : styles.inactive}`}
                >
                  UKR
                </button>
                <span className={styles.langSeparator}>/</span>
                <button
                  onClick={() => setLanguage('eng')}
                  className={`${styles.langButton} ${language === 'eng' ? styles.active : styles.inactive}`}
                >
                  ENG
                </button>
              </div>

              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className={styles.menuButton}
                aria-label="Toggle menu"
              >
                <span className={styles.menuButtonText}>{t('МЕНЮ', 'MENU')}</span>
                <span className={styles.menuIcon}>
                  {menuOpen ? (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="18" y1="6" x2="6" y2="18"></line>
                      <line x1="6" y1="6" x2="18" y2="18"></line>
                    </svg>
                  ) : (
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <line x1="3" y1="12" x2="21" y2="12"></line>
                      <line x1="3" y1="6" x2="21" y2="6"></line>
                      <line x1="3" y1="18" x2="21" y2="18"></line>
                    </svg>
                  )}
                </span>
              </button>
            </div>
          </div>
        </div>
      </header>

      {menuOpen && (
        <div className={`${styles.menuOverlay} ${styles.menuOverlayOpen}`}>
          <div className={styles.menuContent}>
            <div className={styles.menuContainer}>
              <div className={styles.menuGrid}>
                <div>
                  <div className={styles.menuSection}>
                    <h3 className={styles.menuSectionTitle}>
                      {t('НАВІГАЦІЯ', 'NAVIGATION')}
                    </h3>
                    <ul className={styles.menuNav}>
                      {menuItems.map((item) => (
                        <li key={item.path} className={styles.menuNavItem}>
                          <Link
                            href={item.path}
                            className={styles.menuNavLink}
                            onClick={() => setMenuOpen(false)}
                          >
                            {language === 'ukr' ? item.label.ukr : item.label.eng}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div>
                  <div className={styles.menuSection}>
                    <h3 className={styles.menuSectionTitle2}>
                      {t('ПОСЛУГИ', 'SERVICES')}
                    </h3>
                    <ul className={styles.menuServicesNav}>
                      {services.map((service) => (
                        <li key={service.id} className={styles.menuServiceItem}>
                          <Link
                            href={`/services/${service.id}`}
                            className={styles.menuServiceLink}
                            onClick={() => setMenuOpen(false)}
                          >
                            {language === 'ukr' ? service.ukr : service.eng}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}