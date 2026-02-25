import { generateSlug } from '@/lib/slugify';

export interface NewsArticle {
  id: string;
  slug: string;
  title: { ukr: string; eng: string };
  date: string;
  excerpt: { ukr: string; eng: string };
  content: { ukr: string; eng: string };
  category: string;
}

export interface TeamMember {
  id: string;
  name: string;
  position: { ukr: string; eng: string };
  image: string;
  bio: { ukr: string; eng: string };
  expertise: { ukr: string[]; eng: string[] };
}

export const newsArticles: NewsArticle[] = [
  {
    id: '1',
    slug: generateSlug('New Trends in Financial Regulation 2026'),
    title: {
      ukr: 'Нові тенденції у фінансовому регулюванні 2026',
      eng: 'New Trends in Financial Regulation 2026'
    },
    date: '2026-02-10',
    excerpt: {
      ukr: 'Аналіз останніх змін у законодавстві щодо фінансового регулювання та їх вплив на бізнес.',
      eng: 'Analysis of recent changes in financial regulation legislation and their impact on business.'
    },
    content: {
      ukr: 'Детальний аналіз нових тенденцій у фінансовому регулюванні. У 2026 році ми спостерігаємо значні зміни в підходах до регулювання фінансових послуг, особливо в секторі цифрових активів та платіжних систем. Регулятори по всьому світу прагнуть створити баланс між інноваціями та захистом споживачів.',
      eng: 'Detailed analysis of new trends in financial regulation. In 2026, we are seeing significant changes in approaches to financial services regulation, particularly in the digital assets and payment systems sector. Regulators around the world are seeking to strike a balance between innovation and consumer protection.'
    },
    category: 'Financial Regulation'
  },
  {
    id: '2',
    slug: generateSlug('Crypto Licensing: A Practical Guide'),
    title: {
      ukr: 'Crypto-ліцензування: практичний посібник',
      eng: 'Crypto Licensing: A Practical Guide'
    },
    date: '2026-02-05',
    excerpt: {
      ukr: 'Покроковий гід з отримання криптовалютних ліцензій для вашого бізнесу.',
      eng: 'Step-by-step guide to obtaining cryptocurrency licenses for your business.'
    },
    content: {
      ukr: 'Отримання crypto-ліцензії стало важливим кроком для компаній, що працюють у сфері цифрових активів. Цей процес вимагає ретельної підготовки, включаючи підготовку документації, відповідність вимогам AML/KYC та створення надійної операційної інфраструктури.',
      eng: 'Obtaining a crypto license has become an essential step for companies operating in the digital assets space. This process requires careful preparation, including documentation, AML/KYC compliance, and establishing robust operational infrastructure.'
    },
    category: 'Cryptocurrency'
  },
  {
    id: '3',
    slug: generateSlug('Business Restructuring: Case Study'),
    title: {
      ukr: 'Реструктуризація бізнесу: кейс-стаді',
      eng: 'Business Restructuring: Case Study'
    },
    date: '2026-01-28',
    excerpt: {
      ukr: 'Успішний приклад реструктуризації компанії у складних економічних умовах.',
      eng: 'Successful example of company restructuring in challenging economic conditions.'
    },
    content: {
      ukr: 'Реструктуризація є важливим інструментом для збереження бізнесу в складних умовах. Наш досвід показує, що своєчасне втручання та комплексний підхід дозволяють не лише зберегти компанію, але й створити основу для майбутнього зростання.',
      eng: 'Restructuring is a crucial tool for preserving business in challenging conditions. Our experience shows that timely intervention and a comprehensive approach allow not only to preserve the company but also to create a foundation for future growth.'
    },
    category: 'Restructuring'
  },
  {
    id: '4',
    slug: generateSlug('International M&A Deals: Key Aspects'),
    title: {
      ukr: 'Міжнародні M&A угоди: ключові аспекти',
      eng: 'International M&A Deals: Key Aspects'
    },
    date: '2026-01-20',
    excerpt: {
      ukr: 'Огляд найважливіших моментів при здійсненні міжнародних злиттів та поглинань.',
      eng: 'Overview of the most important aspects when conducting international mergers and acquisitions.'
    },
    content: {
      ukr: 'Міжнародні M&A угоди вимагають глибокого розуміння різних правових систем, культурних особливостей та бізнес-практик.',
      eng: 'International M&A deals require deep understanding of different legal systems, cultural nuances and business practices.'
    },
    category: 'M&A'
  },
  {
    id: '5',
    slug: generateSlug('Tax Planning for Startups'),
    title: {
      ukr: 'Податкове планування для стартапів',
      eng: 'Tax Planning for Startups'
    },
    date: '2026-01-15',
    excerpt: {
      ukr: 'Ефективні стратегії податкової оптимізації для молодих компаній.',
      eng: 'Effective tax optimization strategies for young companies.'
    },
    content: {
      ukr: 'Правильне податкове планування на ранніх етапах розвитку стартапу може суттєво вплинути на його майбутній успіх.',
      eng: 'Proper tax planning in the early stages of startup development can significantly impact its future success.'
    },
    category: 'Tax Law'
  },
  {
    id: '6',
    slug: generateSlug('Intellectual Property Protection in Digital Space'),
    title: {
      ukr: 'Захист інтелектуальної власності в digital-сфері',
      eng: 'Intellectual Property Protection in Digital Space'
    },
    date: '2026-01-10',
    excerpt: {
      ukr: 'Як захистити свої права на інтелектуальну власність в онлайн середовищі.',
      eng: 'How to protect your intellectual property rights in the online environment.'
    },
    content: {
      ukr: 'В епоху цифрових технологій захист інтелектуальної власності набуває нових форм та викликів.',
      eng: 'In the digital age, intellectual property protection takes on new forms and challenges.'
    },
    category: 'IP Law'
  },
  {
    id: '7',
    slug: generateSlug('Fintech Compliance: Best Practices'),
    title: {
      ukr: 'Compliance у фінтех: best practices',
      eng: 'Fintech Compliance: Best Practices'
    },
    date: '2026-01-05',
    excerpt: {
      ukr: 'Найкращі практики дотримання вимог регуляторів у фінансово-технологічній галузі.',
      eng: 'Best practices for regulatory compliance in the fintech industry.'
    },
    content: {
      ukr: 'Фінтех компанії стикаються з унікальними викликами у сфері комплаєнсу, які вимагають спеціалізованого підходу.',
      eng: 'Fintech companies face unique compliance challenges that require a specialized approach.'
    },
    category: 'Compliance'
  },
  {
    id: '8',
    slug: generateSlug('ESG Criteria: New Business Standard'),
    title: {
      ukr: 'ESG-критерії: новий стандарт бізнесу',
      eng: 'ESG Criteria: New Business Standard'
    },
    date: '2025-12-28',
    excerpt: {
      ukr: 'Як впровадження ESG-принципів впливає на корпоративне управління.',
      eng: 'How implementation of ESG principles affects corporate governance.'
    },
    content: {
      ukr: 'ESG-критерії стають обов\'язковими для компаній, що прагнуть залучити інвестиції та підтримувати репутацію.',
      eng: 'ESG criteria are becoming mandatory for companies seeking to attract investment and maintain reputation.'
    },
    category: 'Corporate Governance'
  },
  {
    id: '9',
    slug: generateSlug('Contract Law: Modern Trends'),
    title: {
      ukr: 'Договірне право: сучасні тренди',
      eng: 'Contract Law: Modern Trends'
    },
    date: '2025-12-20',
    excerpt: {
      ukr: 'Еволюція договірних відносин в умовах цифровізації економіки.',
      eng: 'Evolution of contractual relationships in the digital economy.'
    },
    content: {
      ukr: 'Цифровізація змінює підходи до укладення та виконання договорів, створюючи нові можливості та виклики.',
      eng: 'Digitalization is changing approaches to contract formation and execution, creating new opportunities and challenges.'
    },
    category: 'Contract Law'
  }
];

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Олександр Петренко',
    position: {
      ukr: 'Керуючий партнер',
      eng: 'Managing Partner'
    },
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=500&fit=crop',
    bio: {
      ukr: 'Понад 15 років досвіду в корпоративному праві та фінансовому регулюванні.',
      eng: 'Over 15 years of experience in corporate law and financial regulation.'
    },
    expertise: {
      ukr: ['Корпоративне право', 'Фінансове регулювання'],
      eng: ['Corporate Law', 'Financial Regulation']
    }
  },
  {
    id: '2',
    name: 'Марія Коваленко',
    position: {
      ukr: 'Партнер, Фінансове регулювання',
      eng: 'Partner, Financial Regulation'
    },
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=500&fit=crop',
    bio: {
      ukr: 'Експерт з питань ліцензування та регулювання фінансових послуг.',
      eng: 'Expert in licensing and regulation of financial services.'
    },
    expertise: {
      ukr: ['Фінансове регулювання', 'Ліцензування'],
      eng: ['Financial Regulation', 'Licensing']
    }
  },
  {
    id: '3',
    name: 'Дмитро Іваненко',
    position: {
      ukr: 'Партнер, Корпоративне право',
      eng: 'Partner, Corporate Law'
    },
    image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=400&h=500&fit=crop',
    bio: {
      ukr: 'Спеціалізація на M&A та корпоративній реструктуризації.',
      eng: 'Specialization in M&A and corporate restructuring.'
    },
    expertise: {
      ukr: ['M&A', 'Корпоративна реструктуризація'],
      eng: ['M&A', 'Corporate Restructuring']
    }
  },
  {
    id: '4',
    name: 'Катерина Бондаренко',
    position: {
      ukr: 'Старший юрист, Fintech',
      eng: 'Senior Associate, Fintech'
    },
    image: 'https://images.unsplash.com/photo-1594744803329-e58b31de8bf5?w=400&h=500&fit=crop',
    bio: {
      ukr: 'Фахівець з питань цифрових активів та блокчейн-технологій.',
      eng: 'Specialist in digital assets and blockchain technologies.'
    },
    expertise: {
      ukr: ['Fintech', 'Цифрові активи', 'Блокчейн'],
      eng: ['Fintech', 'Digital Assets', 'Blockchain']
    }
  },
  {
    id: '5',
    name: 'Андрій Мельник',
    position: {
      ukr: 'Юрист, Податкове право',
      eng: 'Associate, Tax Law'
    },
    image: 'https://images.unsplash.com/photo-1761776026814-7bba0275c6c3?w=400&h=500&fit=crop',
    bio: {
      ukr: 'Консультування з питань міжнародного податкового планування.',
      eng: 'Advising on international tax planning matters.'
    },
    expertise: {
      ukr: ['Податкове право', 'Міжнародне податкове планування'],
      eng: ['Tax Law', 'International Tax Planning']
    }
  },
  {
    id: '6',
    name: 'Юлія Ткаченко',
    position: {
      ukr: 'Юрист, Комерційне право',
      eng: 'Associate, Commercial Law'
    },
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&h=500&fit=crop',
    bio: {
      ukr: 'Досвід роботи з комерційними контрактами та бізнес-угодами.',
      eng: 'Experience with commercial contracts and business transactions.'
    },
    expertise: {
      ukr: ['Комерційне право', 'Бізнес-угоди'],
      eng: ['Commercial Law', 'Business Transactions']
    }
  }
];

export const sectors = [
  { id: 'advanced-manufacturing', ukr: 'Високотехнологічне виробництво', eng: 'Advanced Manufacturing' },
  { id: 'energy', ukr: 'Енергетика', eng: 'Energy' },
  { id: 'financial-services', ukr: 'Фінансові послуги', eng: 'Financial Services' },
  { id: 'healthcare', ukr: 'Охорона здоров\'я', eng: 'Healthcare' },
  { id: 'real-estate', ukr: 'Нерухомість', eng: 'Real Estate' },
  { id: 'retail-consumer', ukr: 'Роздрібна торгівля та споживчий сектор', eng: 'Retail & Consumer' },
  { id: 'technology', ukr: 'Технології', eng: 'Technology' },
  { id: 'transport', ukr: 'Транспорт', eng: 'Transport' }
];

export const services = [
  { id: 'commercial-services', ukr: 'Комерційне право та бізнес-послуги', eng: 'Commercial Services' },
  { id: 'corporate', ukr: 'Корпоративне право', eng: 'Corporate' },
  { id: 'finance', ukr: 'Фінанси', eng: 'Finance' },
  { id: 'financial-regulation', ukr: 'Фінансове регулювання', eng: 'Financial Regulation' },
  { id: 'forex-license', ukr: 'Отримання Forex-ліцензії', eng: 'Forex License' },
  { id: 'crypto-license', ukr: 'Отримання Crypto-ліцензії', eng: 'Crypto License' },
  { id: 'gaming-licenses', ukr: 'Ліцензії для грального бізнесу', eng: 'Gaming licenses' },
  { id: 'spi-license', ukr: 'Ліцензія платіжної установи (SPI)', eng: 'Small Payment Institution (SPI) License' },
  { id: 'emi-licenses', ukr: 'Ліцензія EMI', eng: 'EMI licenses' },
  { id: 'fintech-lawyer', ukr: 'Fintech-юрист', eng: 'Fintech lawyer' },
  { id: 'global-infrastructure', ukr: 'Глобальна інфраструктура', eng: 'Global Infrastructure' },
  { id: 'private-equity', ukr: 'Приватний капітал', eng: 'Private Equity' },
  { id: 'private-wealth', ukr: 'Управління приватним капіталом', eng: 'Private Wealth' },
  { id: 'professional-services', ukr: 'Професійні послуги', eng: 'Professional Services' },
  { id: 'real-estate-service', ukr: 'Нерухомість', eng: 'Real Estate' },
  { id: 'restructuring', ukr: 'Реструктуризація', eng: 'Restructuring' },
  { id: 'tax-structuring', ukr: 'Податкове структурування', eng: 'Tax & Structuring' }
];