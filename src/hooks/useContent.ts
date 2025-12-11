import { useState, useEffect } from 'react';

export interface HomeContent {
  heroTitle: string;
  heroSubtitle: string;
  heroBadgeText: string;
  heroImage: string;
  aboutTitle: string;
  aboutDescription: string;
  aboutImage: string;
  stats: { value: string; label: string }[];
}

const defaultContent: HomeContent = {
  heroTitle: 'Classical Homeopathy for Mind & Body',
  heroSubtitle: "One of Karnataka's premier homeopathic clinics practicing classical homeopathy influenced by the teachings of Dr. Prafful Vijaykar. We treat the whole person — boosting immunity and inner strength while addressing both mental and physical aspects.",
  heroBadgeText: 'Established 1998 • 28 Years of Healing',
  heroImage: '',
  aboutTitle: 'Healing Through Classical Homeopathy',
  aboutDescription: 'Established in 1998, Manu Homeopathy Clinic & Research Center is one of the few homeopathic clinics in Karnataka where classical homeopathy is practiced. Influenced by the profound teachings of Dr. Prafful Vijaykar, we have been successfully treating patients with ailments ranging from common colds to complex diseases for over 28 years.',
  aboutImage: '',
  stats: [
    { value: '28+', label: 'Years Experience' },
    { value: '10K+', label: 'Patients Treated' },
    { value: '100%', label: 'Natural Remedies' },
  ],
};

export const useContent = () => {
  const [content, setContent] = useState<HomeContent>(defaultContent);

  useEffect(() => {
    const savedContent = localStorage.getItem('home_content');
    if (savedContent) {
      setContent({ ...defaultContent, ...JSON.parse(savedContent) });
    }
  }, []);

  const updateContent = (newContent: Partial<HomeContent>) => {
    const updated = { ...content, ...newContent };
    setContent(updated);
    localStorage.setItem('home_content', JSON.stringify(updated));
  };

  return { content, updateContent, defaultContent };
};
